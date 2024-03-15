import { createContext, useContext, useState } from "react";
import { wordList } from "@/words.ts";
import { shuffle } from "@/utils.ts";

type Word = {
  right: string,
  wrong: string[]
}
type WordsProviderProps = {
  children: React.ReactNode,
  retryGap: number,
}

type WordsProviderState = {
  queue: Array<Word>
  current: string
  right: string
  wrongs: Set<Word>
  streak: number
  next: () => void
  retry: () => void
}

export const formatWord = (word: Word) => {
  const words = [...word.wrong];
  words.push(word.right);
  return words.at(
    Math.floor(Math.random() * words.length)
  ) as string;
};

const initialState: WordsProviderState = {
  queue: wordList,
  current: "",
  right: "",
  wrongs: new Set(),
  streak: 0,
  next: () => null,
  retry: () => null
};

const WordsProviderContext = createContext<WordsProviderState>(initialState);

export const WordsProvider = ({
                                children,
                                retryGap = 5,
                                ...props
                              }: WordsProviderProps) => {
  const [queue, setQueue] = useState<Array<Word>>(shuffle(wordList));
  const [wrongWords, setWrongWords] = useState<Set<Word>>(new Set<Word>());
  const [streak, setStreak] = useState<number>(0);

  const value = {
    queue,
    current: formatWord(queue[0]),
    right: queue[0].right,
    wrongs: wrongWords,
    streak: streak,
    retry: () => {
      setStreak(0);
      setQueue(queue.slice(1, retryGap).concat(queue.slice(0, 1)).concat(queue.slice(retryGap)));
      const newWrongWords = new Set(wrongWords);
      newWrongWords.add(queue[0]);
      setWrongWords(newWrongWords);
    },
    next: () => {
      setStreak(streak + 1);
      setQueue(queue.slice(1).concat(queue.slice(0, 1)));
    }
  };

  return (
    <WordsProviderContext.Provider {...props} value={value}>
      {children}
    </WordsProviderContext.Provider>
  );
};

export const useWords = () => {
  const context: WordsProviderState = useContext(WordsProviderContext);
  if (context === undefined)
    throw new Error("useWords must be used within a WordsProvider");
  return context;
};

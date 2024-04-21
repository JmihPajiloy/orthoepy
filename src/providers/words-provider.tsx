import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { wordList } from "@/task-4-words.ts";


const shuffle = <T,>(arr: Array<T>): Array<T> => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr as T[];
};

export type Word = {
  right: string,
  wrong: string[],
  enabled: boolean,
  type: "noun" | "adjective" | "verb" | "adjective-participle" | "verb-participle" | "adverb"
}
type WordsProviderProps = {
  children: ReactNode,
  retryGap: number,
}

type WordsProviderState = {
  queue: Array<Word>
  current: string
  right: string
  wrongs: Set<Word>
  streak: number
  setQueue: Dispatch<SetStateAction<Word[]>>
  next: () => void
  retry: () => void
}

const formatWord = (word: Word) => {
  const words = [...word.wrong];
  words.push(word.right);
  return words.at(
    Math.floor(Math.random() * words.length)
  ) as string;
};

const initialState: WordsProviderState = {
  queue: wordList.map((x) => ({...x, enabled: true})),
  current: "",
  right: "",
  wrongs: new Set(),
  streak: 0,
  setQueue: (): void => {},
  next: () => null,
  retry: () => null
};

const WordsProviderContext = createContext<WordsProviderState>(initialState);

export const WordsProvider = ({
                                children,
                                retryGap = 5,
                                ...props
                              }: WordsProviderProps) => {
  const [queue, setQueue] = useState<Array<Word>>(shuffle(wordList.map((x) => ({...x, enabled: true}))));
  const [wrongWords, setWrongWords] = useState<Set<Word>>(new Set<Word>());
  const [streak, setStreak] = useState<number>(0);

  const value = {
    queue,
    current: formatWord(queue[0]),
    right: queue[0].right,
    wrongs: wrongWords,
    streak: streak,
    setQueue: setQueue,
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

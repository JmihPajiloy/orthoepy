import { createContext, useContext, useState } from "react";
import { wordList } from "@/words.ts";

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
  next: () => void
  retry: () => void
}

const initialState: WordsProviderState = {
  queue: wordList,
  next: () => null,
  retry: () => null
};

const WordsProviderContext = createContext<WordsProviderState>(initialState);

export const WordsProvider = ({
                                children,
                                retryGap = 5,
                                ...props
                              }: WordsProviderProps) => {
  const [queue, setQueue] = useState<Array<Word>>(wordList);
  const [wrongWords, setWrongWords] = useState<Set<Word>>(new Set<Word>());
  // useEffect(() => {
  //   const root = window.document.documentElement
  //
  //   root.classList.remove("light", "dark")
  //
  //   if (theme === "system") {
  //     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  //       .matches
  //       ? "dark"
  //       : "light"
  //
  //     root.classList.add(systemTheme)
  //     return
  //   }
  //
  //   root.classList.add(theme)
  // }, [theme])

  const value = {
    queue,
    retry: () => {
      setQueue(queue.slice(1, retryGap).concat(queue.slice(0, 1)).concat(queue.slice(retryGap)));
      const newWrongWords = new Set(wrongWords);
      newWrongWords.add(queue[0]);
      setWrongWords(newWrongWords);
    },
    next: () => {
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
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

import "@/global.css";
import { ThemeProvider } from "@/providers";
import { Button } from "@/components/ui/button.tsx";
import { shuffle } from "@/utils.ts";
import { useState } from "react";
import { CheckIcon } from "@/components/icons/check-icon.tsx";
import { wordList } from "@/words.ts";
import { XIcon } from "@/components/icons/x-icon.tsx";

type Word = {
  right: string,
  wrong: string[]
}

const formatWord = (word: Word) => {
  const words = [...word.wrong];
  words.push(word.right);
  return words.at(
    Math.floor(Math.random() * words.length)
  ) as string;
};

export const App = () => {
  window.document.title = "Ударения ЕГЭ";
  const [words, setWords] = useState<Word[]>(shuffle(wordList));
  const [word, setWord] = useState<string>(formatWord(words[0]));
  const [text, setText] = useState<string>("");

  const onClick = (isRight: boolean) => {
    console.log(word, words.slice(0, 5));
    if (isRight) {
      setText("Правильно!");
      // delay(3000).then(()=> setText(""))
      // console.log(typeof words);
      // console.log(words.slice(1) + words.slice(0, 1));
      setWords(words.slice(1).concat(words.slice(0, 1)));
    } else {
      setText(`Нет, правильно "${words[0].right}"`);
      // delay(3000).then(()=> setText(""))
      // console.log(typeof words);
      setWords(words.slice(1, 5).concat(words.slice(0, 1)).concat(words.slice(5)));

    }
    setWord(formatWord(words.at(1) as Word));
  };

  // setWord(queue.at(0))
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-between h-screen">
        <div className="flex items-center justify-center h-[70svh] w-screen">
          <h1 className="scroll-m-20 w-screen text-5xl font-semibold tracking-tight text-center">
            {word}
          </h1>
        </div>
        <div className="h-[30svh] flex flex-col items-center">
          <div className="h-8 p-5 flex items-center justify-center w-[100vw]">
            <p className="text-lg font-semibold text-muted-foreground text-center">
              {text}
            </p>
          </div>
          <div className="flex flex-row items-end justify-center w-screen h-full gap-2">
            <Button variant="outline" className="w-full h-[10svh] ml-2 mb-2"
                    onClick={() => onClick(word === words[0].right)}>
              <CheckIcon className="h-[5svh] w-[5svh]" />
            </Button>
            <Button variant="outline" className="w-full h-[10svh] mr-2 mb-2"
                    onClick={() => onClick(word !== words[0].right)}>
              <XIcon className="h-[5svh] w-[5svh]" />
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};


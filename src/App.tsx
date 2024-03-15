import "@/global.css";
import "@/styles/styles.css";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { CheckIcon } from "@/components/icons/check-icon.tsx";
import { Header } from "@/components/header/header.tsx";
import { CrossIcon } from "@/components/icons/cross-icon.tsx";
import { useWords } from "@/providers";
import { ExplanationText } from "@/components/text/explanation-text.tsx";

export const App = () => {
  const [text, setText] = useState<string>("");
  const { streak, right, wrongs, current, retry, next } = useWords();
  const onClick = (isRight: boolean) => {
    if (isRight) {
      setText(`Правильно! ${streak === 0 ? "" : `(x${streak + 1})`}`);
      next();
    } else {
      setText(`Нет, правильно "${right}"`);
      retry();
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-between h-[100svh] w-screen ">
        <Header />
        <div className="flex items-center justify-center h-96 screen-wide">
          <h1 className="scroll-m-20 screen-wide text-4xl font-semibold tracking-tight text-center">
            {current}
          </h1>
        </div>
        <div className="h-30 flex flex-col items-center">
          <ExplanationText text={text} />
          <div className="flex flex-row items-end justify-center screen-wide h-full gap-2">
            <Button variant="outline" className="w-full h-10 ml-2 mb-2 mt-2"
                    onClick={() => onClick(current === right)}>
              <CheckIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full h-10 mr-2 mb-2 mt-2"
                    onClick={() => onClick(current !== right)}>
              <CrossIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        {
          Array
            .from(wrongs.values())
            .map(v => v.right)
            .map(v => <div>{v}</div>)
        }
      </div>
    </>
  );
};


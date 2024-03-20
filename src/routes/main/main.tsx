import { useState } from "react";
import { useWords } from "@/providers";
import { MainCorrectButton, MainCurrentWord, MainExplanationText, MainMistakes, MainWrongButton } from "@/routes/main";
import { Header, Heading, ThemeButton, ToWordList } from "@/components/header";
import { Footer } from "@/components/footer";

export const Main = () => {
  const [text, setText] = useState<string>("");
  const { streak, right, current, retry, next } = useWords();
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
        <Header>
          <ThemeButton />
          <Heading>
            Ударения ЕГЭ
          </Heading>
          <ToWordList />
        </Header>
        <MainCurrentWord />
        <div className="h-30 flex flex-col items-center">
          <MainExplanationText text={text} />
          <div className="flex flex-row items-end justify-center screen-wide h-full gap-2">
            <MainCorrectButton onClick={() => onClick(current === right)} />
            <MainWrongButton onClick={() => onClick(current !== right)} />
          </div>
        </div>
      </div>
      <MainMistakes />
      <Footer />
    </>
  );
};


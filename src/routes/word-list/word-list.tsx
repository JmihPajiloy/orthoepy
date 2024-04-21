import { WordListAccordion, WordListAlert } from "@/routes/word-list";
import { Back, Header, Heading, ThemeButton } from "@/components/header";
import { Footer } from "@/components/footer";

export const WordList = () => {

  return (
    <div className="h-[100svh] flex flex-col justify-between">
      <div className="flex flex-row justify-center ">
        <div className="screen-wide flex flex-col justify-center">
          <Header>
            <Back to="/" />
            <Heading>Список ударений</Heading>
            <ThemeButton />
          </Header>
          <div className="flex flex-col px-2">
            <WordListAlert />
            <WordListAccordion />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
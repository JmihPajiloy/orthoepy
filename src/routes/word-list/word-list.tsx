import { WordListAlert } from "@/routes/word-list/word-list-alert.tsx";
import { WordListHeader } from "@/routes/word-list/word-list-header.tsx";
import { WordListAccordion } from "@/routes/word-list/word-list-accordion.tsx";

export const WordList = () => {

  return (
    <div className="flex flex-row justify-center ">
      <div className="screen-wide flex flex-col justify-center">
        <WordListHeader/>
        <div className="flex flex-col px-2">
          <WordListAlert/>
          <WordListAccordion/>
        </div>
      </div>
    </div>
  );
};
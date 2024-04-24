import { Separator } from "@shadcn/ui";
import { useWords, Word } from "@/providers";
import { groupBy } from "@/utils";
import { Fragment } from "react";
import { List } from "@/components/list";

export const WordListList = () => {
  const { queue } = useWords();
  const words: Record<string, Word[]> = groupBy(queue, (item) => item.right[0].toUpperCase());
  const letters: string[] = Object.keys(words);
  return (
    <>
      {
        letters
          .sort()
          .map((value, index) => <Fragment key={index}>
            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-5">
              {value}
            </h3>
            <Separator orientation="horizontal" className="my-1" />
            <List words={words[value]}/>
          </Fragment>)
      }
    </>
  );
};
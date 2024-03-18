import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Checkbox, Label } from "@shadcn/ui";
import { useWords, Word } from "@/providers";

const byRight = (a: Word, b: Word) => {
  if (a.right.toLowerCase() > b.right.toLowerCase()) return 1;
  else if (a.right.toLowerCase() === b.right.toLowerCase()) return 0;
  return -1;
};


export const WordListAccordion = () => {
  const { queue, setQueue } = useWords();
  const partsOfSpeech = new Map(
    [
      ["noun", "Имена существительные"],
      ["adjective", "Имена прилагательные"],
      ["verb", "Глаголы"],
      ["adjective-participle", "Причастия"],
      ["verb-participle", "Деепричастия"],
      ["adverb", "Наречия"]
    ]
  );
  return (
    <Accordion type="single" collapsible className="mx-1">
      {
        ["noun", "adjective", "verb", "adjective-participle", "verb-participle", "adverb"].map(
          pos => <AccordionItem value={pos}>
            <AccordionTrigger>{partsOfSpeech.get(pos) as string}</AccordionTrigger>
            <AccordionContent>
              <ul>
                {
                  queue
                    .filter(word => word.type === pos)
                    .sort(byRight)
                    .map(
                      (word: Word, index: number, array: Array<Word>) => <li
                        className="flex items-center space-x-2 mt-2">
                        <Checkbox
                          id={index.toString()}
                          defaultChecked={word.enabled}
                          onCheckedChange={
                            checked => {
                              array[index].enabled = (typeof checked == "boolean") ? checked : false;
                              setQueue(
                                queue
                                  .filter(x => x.type !== pos)
                                  .concat(array)
                              );
                            }
                          } />
                        <Label htmlFor={index.toString()}>
                          {word.right}
                        </Label>
                      </li>
                    )
                }
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      }
    </Accordion>
  );
};
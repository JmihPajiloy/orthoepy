import { useWords } from "@/providers";
import { Badge } from "@shadcn/ui";

export const MainMistakes = () => {
  const { wrongs } = useWords();
  const partsOfSpeech = new Map(
    [
      ["noun", "сущ."],
      ["adjective", "прил."],
      ["verb", "глаг."],
      ["adjective-participle", "прич."],
      ["verb-participle", "дееприч."],
      ["adverb", "нар."]
    ]
  );
  return (
    <div className="flex flex-row justify-center ">
      <div className="flex flex-col screen-wide p-4">
        <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
          Твои ошибки
        </h2>
        {
          wrongs.size > 0 ?
            <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
              {
                Array
                  .from(wrongs.values())
                  .map(v => (<li className="font-medium">
                    {v.right}<Badge variant="outline" className="ml-2 px-1.5 pb-1">{partsOfSpeech.get(v.type)}</Badge>
                  </li>))
              }
            </ul> :
            <p className="text-sm text-muted-foreground mt-2 mb-2">У тебя пока нет ошибок</p>
        }
      </div>
    </div>
  );
};
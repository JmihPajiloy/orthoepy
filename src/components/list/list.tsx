import { Word } from "@/providers";
import { Badge } from "@shadcn/ui";

type Props = {
  words: Array<Word>
}
type En = "noun" | "adjective" | "verb" | "adjective-participle" | "verb-participle" | "adverb"
type Ru = "сущ." | "прил." | "глаг." | "прич." | "дееприч." | "нар."
export const List = ({ words }: Props) => {
  const pos: Map<En, Ru> = new Map()
    .set("noun", "сущ.")
    .set("adjective", "прил.")
    .set("verb", "глаг.")
    .set("adjective-participle", "прич.")
    .set("verb-participle", "дееприч.")
    .set("adverb", "нар.");
  return (
    <ul className="mb-3 [&>li]:mt-2">
      {words.map(word => <li className="font-medium">
        {word.right}
        <Badge variant="outline" className="ml-2 px-1.5 pb-1">
          {pos.get(word.type)}
        </Badge>
      </li>)}
    </ul>
  );
};
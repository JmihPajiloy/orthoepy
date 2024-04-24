import { useWords } from "@/providers";
import { List } from "@/components/list";

export const MainMistakes = () => {
  const { wrongs } = useWords();
  return (
    <div className="flex flex-row justify-center ">
      <div className="flex flex-col screen-wide p-4">
        <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
          Твои ошибки
        </h2>
        {
          wrongs.size > 0 ?
            <List words={[...wrongs]} /> :
            <p className="text-sm text-muted-foreground mt-2 mb-2">У тебя пока нет ошибок</p>
        }
      </div>
    </div>
  );
};
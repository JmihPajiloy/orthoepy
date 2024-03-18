import { Button } from "@shadcn/ui";
import { Link } from "react-router-dom";
import { GithubButton } from "@/components/github-button.tsx";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const WordListHeader = () => {
  return (
    <header className="screen-wide flex flex-row justify-between p-2">
          <Button size="icon" variant="ghost">
            <Link to="/">
              <ArrowLeftIcon className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex place-items-center">
            <h3 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
              Список ударений ЕГЭ
            </h3>
          </div>
          <GithubButton/>
        </header>
  );
};
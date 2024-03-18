import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { GithubButton } from "@/components/github-button.tsx";
import { ReaderIcon } from "@radix-ui/react-icons";
export const MainHeader = () => {
  return (
    <header className="screen-wide flex flex-row justify-between p-2">
      <GithubButton/>
      <div className="flex place-items-center">
        <h3 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
          Ударения ЕГЭ
        </h3>
      </div>
      <Button size="icon" variant="ghost">
        <Link to="/word-list">
          <ReaderIcon className="h-5 w-5" />
        </Link>
      </Button>
    </header>
  );
};
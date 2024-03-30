import { Link } from "react-router-dom";
import { LetterCaseCapitalizeIcon } from "@radix-ui/react-icons";
import { Button } from "@shadcn/ui";

export const ToWordList = () => {
  return (
    <Button size="icon" variant="ghost" className="mobile">
      <Link to="/word-list">
        <LetterCaseCapitalizeIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};
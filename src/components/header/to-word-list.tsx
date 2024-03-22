import { Link } from "react-router-dom";
import { ReaderIcon } from "@radix-ui/react-icons";
import { Button } from "@shadcn/ui";

export const ToWordList = () => {
  return (
    <Button size="icon" variant="ghost" className="mobile">
      <Link to="/word-list">
        <ReaderIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};
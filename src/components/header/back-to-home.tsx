import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@shadcn/ui";

export const BackToHome = () => {
  return (
    <Button size="icon" variant="ghost" className="mobile">
      <Link to="/" >
        <ArrowLeftIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};


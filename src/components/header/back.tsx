import { Link, To } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@shadcn/ui";

export const Back = ({to}: {to: To}) => {
  return (
    <Button size="icon" variant="ghost" className="mobile" asChild>
      <Link to={to} >
        <ArrowLeftIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};


import type { MouseEventHandler } from "react";
import { Button } from "@shadcn/ui";
import { CheckIcon } from "@radix-ui/react-icons";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const MainCorrectButton = ({ onClick }: Props) => {
  return (
    <Button variant="outline"
            className="w-full h-10 mobile"
            onClick={onClick}>
      <CheckIcon className="h-6 w-6 mr-1" />Верно
    </Button>
  );
};
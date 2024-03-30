import type { MouseEventHandler } from "react";
import { Button } from "@shadcn/ui";
import { Cross2Icon } from "@radix-ui/react-icons";


type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const MainWrongButton = ({ onClick }: Props) => {
  return (
    <Button variant="outline"
            className="w-full h-10 mobile"
            onClick={onClick}>
      <Cross2Icon className="h-5 w-5 mr-2" /> Неверно
    </Button>
  );
};
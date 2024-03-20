import React from "react";
import { CheckIcon } from "@/components/icons";
import { Button } from "@shadcn/ui";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MainCorrectButton = ({ onClick }: Props) => {
  return (
    <Button variant="outline"
            className="w-full h-10 ml-2 mb-2 mt-2 mobile"
            onClick={onClick}>
      <CheckIcon className="h-5 w-5" />
    </Button>
  );
};
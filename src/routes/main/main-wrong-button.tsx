import React from "react";
import { Button } from "@shadcn/ui";
import { CrossIcon } from "@/components/icons";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MainWrongButton = ({ onClick }: Props) => {
  return (
    <Button variant="outline"
            className="w-full h-10 ml-2 mb-2 mt-2 mobile"
            onClick={onClick}>
      <CrossIcon className="h-5 w-5" />
    </Button>
  );
};
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}
export const Heading = ({children}: Props) => {
  return (
    <div className="flex place-items-center">
      <h3 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
        {children}
      </h3>
    </div>
  );
};
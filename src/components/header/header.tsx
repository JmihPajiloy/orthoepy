import { ReactNode } from "react";

type Props = {
  children: ReactNode
}
export const Header = ({ children }: Props) => {
  return (
    <div className="screen-wide flex flex-row justify-between p-2">
      {children}
    </div>
  );
};
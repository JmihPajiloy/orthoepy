import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { interval, Subscription } from "rxjs";

type Props = {
  children: ReactNode;
}
const EXAM: number = 1716872400000;
const getEstimatingTime = () => {
  const diff: number = Math.floor((EXAM - new Date().valueOf()) / 1000);
  const seconds: number = diff % 60;
  const minutes: number = Math.floor(diff / 60) % 60;
  const hours: number = Math.floor(diff / (60 * 60)) % 24;
  const days: number = Math.floor(diff / (60 * 60 * 24));
  return [days, hours, minutes, seconds]
    .map(val => val.toString().padStart(2, "0"))
    .join(":");
};

export const Heading = ({ children }: Props) => {
  const [countdown, setCountdown]: [string, Dispatch<SetStateAction<string>>] = useState<string>(getEstimatingTime());
  useEffect(() => {
    const sub: Subscription = interval(1000).subscribe(() => {
      setCountdown(getEstimatingTime());
    });
    return () => sub.unsubscribe();
  });
  return (
    <div className="flex place-items-center">
      <h3 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
        {
          EXAM > new Date().getTime() ? <>До ЕГЭ {countdown}</> : children
        }
      </h3>
    </div>
  );
};
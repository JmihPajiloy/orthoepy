import { useWords } from "@/providers";

export const MainCurrentWord = () => {
  const { current } = useWords();
  return (
    <div className="flex items-center justify-center h-96 screen-wide">
      <h1 className="scroll-m-20 screen-wide text-4xl font-semibold tracking-tight text-center">
        {current}
      </h1>
    </div>
  );
};


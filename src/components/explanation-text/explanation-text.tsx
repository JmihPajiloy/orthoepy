type Props = {
  text: string,
}

export const ExplanationText = ({ text }: Props) => {
  return (
    <>
      <div className="h-8 p-5 flex items-center justify-center screen-wide">
        <p className="text-lg font-semibold text-muted-foreground text-center ">
          {text}
        </p>
      </div>
    </>
  );
};
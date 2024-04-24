import { Alert, AlertDescription, AlertTitle } from "@shadcn/ui";
import { Link } from "react-router-dom";

export const WordListAlert = () => {
  return (
    <Alert>
      <AlertTitle>
        Что это?
      </AlertTitle>
      <AlertDescription>
        Все ударения взяты из <Link
        to="https://fipi.ru/ege/demoversii-specifikacii-kodifikatory"
        className="text-muted-foreground underline-offset-4 underline">сборника фипи</Link>. Ничего не убрано, и ничего не добавлено
      </AlertDescription>
    </Alert>
  );
};


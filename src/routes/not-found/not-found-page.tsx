import { Button, Separator } from "@shadcn/ui";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";


export const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center h-10 screen-wide">
        <div className="font-semibold text-xl">
          404
        </div>
        <Separator
          orientation="vertical"
          className="mx-5"
        />
        <div className="text-s text-muted-foreground">
          Страница не найдена
        </div>
      </div>
      <Button
        className="mt-4 w-60 mobile"
        variant="outline"
        asChild
      >
        <Link to="/">
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> На главную
        </Link>
      </Button>
    </div>
  );
};
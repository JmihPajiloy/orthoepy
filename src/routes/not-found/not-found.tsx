import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";


export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center screen-wide h-screen">
      <div className="flex justify-center items-center h-10">
        <div className="font-semibold text-xl">
          404
        </div>
        <Separator orientation="vertical" className="mx-5" />
        <div className="text-xl">
          Страница не найдена
        </div>
      </div>
      <Button
        className="mt-2 w-72 mobile"
        variant="outline"
        onClick={
        () => setTimeout(() => navigate("/"), 100)
      }>
        <ArrowLeftIcon className="h-5 w-5 mr-2" /> На главную
      </Button>
    </div>
  );
};
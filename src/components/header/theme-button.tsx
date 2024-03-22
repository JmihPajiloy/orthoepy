import { useTheme } from "@/providers";
import { Button } from "@shadcn/ui";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";


export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button size="icon" variant="ghost" onClick={() => toggleTheme()} className="mobile">
      {
        theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />
      }
    </Button>
  );
};
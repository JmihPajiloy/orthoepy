import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { Theme, useTheme } from "@/providers";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="screen-wide flex flex-row justify-between p-2">
      <Button size="icon" variant="ghost">
        <Link to="https://github.com/JmihPajiloy/orthoepy">
          <GitHubLogoIcon className="h-5 w-5" />
        </Link>
      </Button>
      <div className="flex place-items-center">
        <h3 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
          Ударения ЕГЭ
        </h3>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>

          <DropdownMenuRadioGroup value={theme} onValueChange={t => setTheme(t as Theme)}>
          <DropdownMenuRadioItem value="light">Светлая</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Темная</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
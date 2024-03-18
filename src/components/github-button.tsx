import { Link } from "react-router-dom";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button.tsx";

export const GithubButton = () => {
  return (
    <Button size="icon" variant="ghost">
      <Link to="https://github.com/JmihPajiloy/orthoepy">
        <GitHubLogoIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};


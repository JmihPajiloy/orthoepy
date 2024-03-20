import { Button, Separator } from "@shadcn/ui";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (

    <div>
      <Separator orientation="horizontal" />
      <div className="flex justify-center pb-5 px-2">
        <div className="screen-wide flex justify-between">
          <Button variant="link" className="text-muted-foreground">
            <Link to="https://github.com/JmihPajiloy/orthoepy">
              <GitHubLogoIcon className="h-5 w-5 mr-2 " />
            </Link>Github
          </Button>
          <p className="text-sm font-medium text-muted-foreground h-full content-center">made by Jmih Pajiloy</p>
        </div>
      </div>
    </div>
  );
};
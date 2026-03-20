import { BriefcaseIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Header() {

  return (
    <header className="flex w-full h-fit items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="size-5 rounded-sm">
              <AvatarImage
                className="rounded-sm"
                src="https://github.com/yz13-dev.png"
              />
              <AvatarFallback>YZ</AvatarFallback>
            </Avatar>
            <div className="flex flex-row items-center gap-2">
              <span className="font-medium">YZ13</span>
              <span className="font-medium text-muted-foreground">@yz13-dev</span>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            Фуллстек разработчик
          </span>
        </div>
      </div>
      <nav className="flex items-center gap-2">
        <Button variant="outline" nativeButton={false} render={<Link href="/" />}>
          <HomeIcon />
          <span className="md:inline hidden">Главная</span>
        </Button>
        <Button variant="outline" nativeButton={false} render={<Link href="/works" />}>
          <BriefcaseIcon />
          <span className="md:inline hidden">Работы</span>
        </Button>
      </nav>
    </header>
  )
}

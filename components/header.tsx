import Actions from "./actions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {

  return (
    <div className="flex md:flex-row flex-col w-full h-fit gap-6 md:items-center justify-between">
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
      <Actions />
    </div>
  )
}

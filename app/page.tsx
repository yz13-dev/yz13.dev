import { LogoIcon } from "@/components/logo-svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { email } from "@/const/socials";
import { CopyIcon, GithubIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-[12.5dvh]" />
      <main className="w-full max-w-lg space-y-6 px-6 mx-auto">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-10 outline-4 outline-secondary/5">
              <AvatarImage
                src="https://github.com/yz13-dev.png"
              />
              <AvatarFallback>YZ13</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">yz13</span>
              <span className="text-sm text-muted-foreground">
                Фронтенд разработчик
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <CopyIcon />
            </Button>
            <Button variant="outline">
              <MailIcon />
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground leading-7 text-base">
          В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 inline-flex items-center gap-1 text-foreground hover:underline" rel="noopener" href="https://checkhouse.app">
            <LogoIcon className="size-[14px]" />
            Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
        </p>
        <p className="text-muted-foreground leading-7 text-base">
          Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="text-foreground hover:underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 inline-flex items-center gap-1 text-foreground hover:underline"><MailIcon size={16} />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 inline-flex items-center gap-1 text-foreground hover:underline"><GithubIcon size={16} />Github</Link>
        </p>
      </main>
    </>
  );
}

import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import { LogoIcon } from "@/components/logo-svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { email } from "@/const/socials";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { BookTextIcon, GithubIcon, HomeIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const Post = ({
  children,
  className = ""
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const works = source.getPages().filter(page => page.slugs.includes("work"))
  return (
    <div className="py-6">
      <div className="px-6 flex flex-col gap-2.5 items-start">
        <div className="w-full flex flex-col sm:gap-0 gap-2">
          <div className="flex items-center gap-2.5">
            <Avatar className="md:size-12 sm:size-9 size-7 shrink-0 rounded-full">
              <AvatarImage
                className="rounded-full"
                src="https://github.com/yz13-dev.png"
              />
              <AvatarFallback>YZ</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-medium">YZ13</span>
              <span className="text-lg text-muted-foreground">@yz13-dev</span>
            </div>
          </div>
          <div className={cn("text-lg md:pl-15 sm:pl-12 pl-0", className)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {

  const works = source.getPages().filter(page => page.slugs.includes("work"))

  return (
    <div className="flex flex-row items-start">
      <div className="md:w-1/3 w-fit flex xl:justify-end justify-start">
        <header className="md:max-w-2xs max-w-19 w-full">
          <div className="flex items-center md:justify-start justify-center px-4.5 h-16">
            <LogoIcon className="size-9" />
          </div>
          <nav className="*:w-full py-3 *:justify-start">
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-6 text-xl [&_svg]:size-7! gap-3"
              nativeButton={false} render={<Link href="/" />}
            >
              <HomeIcon />
              <span className="md:inline hidden">Главная</span>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-6 text-xl [&_svg]:size-7! gap-3"
              nativeButton={false} render={<Link href="/works" />}
            >
              <BookTextIcon />
              <span className="md:inline hidden">Блог</span>
            </Button>
          </nav>
        </header>
      </div>
      <div className="md:max-w-2xl max-w-[calc(100%-76px)] w-full">
        <Post>
          <p className="text-muted-foreground leading-7 text-balance align-bottom">
            В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-secondary rounded-md h-5 text-foreground underline" rel="noopener" href="https://checkhouse.app">
              <LogoIcon className="size-[14px] inline-block mb-0.5 mr-1" />
              Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
          </p>
          <p className="text-muted-foreground leading-7 text-balance">
            Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><MailIcon className="size-[14px] inline-block mb-0.5 mr-1" />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><GithubIcon className="size-[14px] inline-block mb-0.5 mr-1" />Github</Link>
          </p>
        </Post>
        <Post className="space-y-6">
          <p className="text-muted-foreground leading-7 text-balance">
            Активность на GitHub
          </p>
          <Suspense fallback={<GithubGraphSkeleton />}>
            <GithubContributions />
          </Suspense>
        </Post>
      </div>
      <div className="w-1/3 md:flex hidden"></div>
    </div>
  )
}

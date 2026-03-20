import CalComEmbed from "@/components/calcom-embed";
import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import CopyButton from "@/components/copy-button";
import Footer from "@/components/footer";
import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import { email, telegram } from "@/const/socials";
import { getTimeline, TimelineItem } from "@/utils/timeline";
import { BriefcaseIcon, CalendarIcon, CopyIcon, GithubIcon, HomeIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const TimelineDot = () => {
  return (
    <div className="size-8 shrink-0 flex items-start px-2 justify-start">
      <div className="relative -left-2 size-4 flex items-center justify-center bg-background">
        <div className="size-2 rounded-xs bg-foreground" />
      </div>
    </div>
  );
};

const TimelineCard = ({ work }: { work: TimelineItem }) => {

  const date = new Date(work.date);
  const formattedDate = date.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="flex items-center gap-0 z-10">
      <TimelineDot />
      <div className="py-2 px-3 h-fit rounded-md hover:bg-secondary w-full transition-colors">
        <div className="relative w-full flex items-center justify-between gap-4">
          {
            work.type === "project" && work.url &&
            <Link href={work.url} className="absolute inset-0" />
          }
          {
            work.type === "work" &&
            <Link href={`/work/${work.id}`} className="absolute inset-0" />
          }
          <div className="flex flex-col w-full gap-0.5">
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Работа</Badge>
                <span className="font-medium text-sm">{work.title}</span>
              </div>
              <span className="text-muted-foreground text-sm">{formattedDate}</span>
            </div>
            <span className="text-sm text-muted-foreground">{work.description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default async function Home() {

  const timeline = getTimeline();


  return (
    <>
      <main className="w-full max-w-2xl space-y-8 md:p-12 p-4">
        <div className="space-y-6 w-full">
          <div className="flex w-full h-fit items-center justify-between">
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
            <div className="flex items-center gap-2">
              <Button variant="link" nativeButton={false} render={<Link href="/" />}>
                <HomeIcon />
                <span className="md:inline hidden">Главная</span>
              </Button>
              <Button variant="link" nativeButton={false} render={<Link href="/works" />}>
                <BriefcaseIcon />
                <span className="md:inline hidden">Работы</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ButtonGroup>
              <CopyButton variant="outline" text={email!} disabled={!email}>
                <CopyIcon />
              </CopyButton>
              <Button variant="outline" disabled={!email} nativeButton={false} render={<Link href={`mailto:${email}`} target="_blank" rel="noopener" />}>
                <MailIcon />
              </Button>
            </ButtonGroup>
            {
              telegram &&
              <Button variant="outline" nativeButton={false} render={<Link href={telegram} target="_blank" rel="noopener" />}>
                <SendIcon />
                <span>Написать</span>
              </Button>
            }
            <CalComEmbed variant="outline">
              <CalendarIcon />
              <span>Созвон</span>
            </CalComEmbed>
          </div>
          <p className="text-muted-foreground leading-7 text-base text-balance align-bottom">
            В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-secondary rounded-md h-5 text-foreground underline" rel="noopener" href="https://checkhouse.app">
              <CheckhouseLogoIcon className="size-[14px] inline-block mb-0.5 mr-1" />
              Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
          </p>
          <p className="text-muted-foreground leading-7 text-base text-balance">
            Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><MailIcon className="size-[14px] inline-block mb-0.5 mr-1" />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><GithubIcon className="size-[14px] inline-block mb-0.5 mr-1" />Github</Link>
          </p>
        </div>
        {/* contributions */}
        <div className="py-8">
          <Suspense fallback={<GithubGraphSkeleton />}>
            <GithubContributions />
          </Suspense>
        </div>
        {/* timeline */}
        <div className="w-full relative">
          <div className="absolute left-0 top-0 w-8 px-2 h-full flex justify-start">
            <Separator orientation="vertical" className="-z-1" />
          </div>
          <div className="w-full space-y-6">
            {
              timeline.map(item => {

                return <TimelineCard work={item} key={item.id} />
              })
            }
          </div>
        </div>
      </main >
      <Footer />
    </>
  );
}

import CalComEmbed from "@/components/calcom-embed";
import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import CopyButton from "@/components/copy-button";
import Footer from "@/components/footer";
import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { WorkExperience } from "@/components/work-experience/work-experience";
import { WORK_EXPERIENCE } from "@/const/exp";
import { email } from "@/const/socials";
import { source } from "@/lib/source";
import { BriefcaseIcon, CalendarIcon, CopyIcon, ExternalLinkIcon, GithubIcon, HomeIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";


export default async function Home() {

  const works = source.getPages().filter(page => page.slugs.includes("work"))


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
              <Button variant="outline" disabled={!email} nativeButton={false} render={<Link href={`mailto:${email}`} />}>
                <MailIcon />
              </Button>
            </ButtonGroup>
            <Button variant="outline">
              <SendIcon />
              <span>Написать</span>
            </Button>
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
        {/* projects */}
        <div>
          <div className="py-3">
            <span className="text-xl font-medium">Проекты</span>
          </div>
          <div className="space-y-6">
            <div className="relative flex items-center justify-between w-full gap-4 py-3">
              <Link href="https://checkhouse.app" className="absolute inset-0" />
              <div className="flex flex-col">
                <span className="font-medium">Checkhouse</span>
                <span className="text-muted-foreground">Мониторинг сайтов и серверов</span>
              </div>
              <Button nativeButton={false} variant="ghost" render={<Link href="https://checkhouse.app" />}><ExternalLinkIcon /></Button>
            </div>
          </div>
        </div>
        {/* contributions */}
        <div className="py-8">
          <Suspense fallback={<GithubGraphSkeleton />}>
            <GithubContributions />
          </Suspense>
        </div>
        {/* exp */}
        <div>
          <div className="py-3">
            <span className="text-xl font-medium">Опыт</span>
          </div>
          <WorkExperience className="w-full px-0" experiences={WORK_EXPERIENCE} />
        </div>
        {/* blog */}
        <div>
          <div className="py-3">
            <span className="text-xl font-medium">Блог</span>
          </div>
          <div className="space-y-3">
            {
              works
                .filter((item, index, arr) => {
                  const isInItems = arr.some(work => (work.data.items || []).includes(item.data.id))
                  return !isInItems
                })
                .map(work => {

                  const date = new Date(work.data.date)

                  const items = (work.data.items || []).map(item => works.find(work => work.data.id === item)).filter(item => item !== undefined);
                  return (
                    <div key={work.path} className="relative">
                      <span className="md:absolute md:-left-12 top-3.5 left-0 text-sm text-muted-foreground">{date.getFullYear()}</span>
                      {work.url && <Link href={work.url} className="absolute inset-0" />}
                      <div className="flex items-center justify-between py-3 gap-2">
                        <span>
                          <span className="font-medium">{work.data.title}</span>
                          {" - "}
                          <span className="text-muted-foreground">{work.data.description}</span>
                        </span>
                        <Button nativeButton={false} variant="ghost" size="icon-xs" render={<Link href={work.url} />}>
                          <ExternalLinkIcon />
                        </Button>
                      </div>
                      <div className="py-3 space-y-3">
                        {
                          items
                            .map(item => (
                              <div key={item.path} className="relative">
                                {item.url && <Link href={item.url} className="absolute inset-0" />}
                                <div className="flex items-center justify-between gap-2">
                                  <span>
                                    <span className="font-medium">{item.data.title}</span>
                                    {" - "}
                                    <span className="text-muted-foreground">{item.data.description}</span>
                                  </span>
                                  <Button nativeButton={false} variant="ghost" size="icon-xs" render={<Link href={item.url} />}>
                                    <ExternalLinkIcon />
                                  </Button>
                                </div>
                              </div>
                            ))
                        }
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

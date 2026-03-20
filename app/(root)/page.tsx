import Actions from "@/components/actions";
import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import Footer from "@/components/footer";
import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import Header from "@/components/header";
import { Timeline, TimelineCard } from "@/components/timeline";
import { email } from "@/const/socials";
import { getTimeline } from "@/utils/timeline";
import { GithubIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  const timeline = getTimeline();

  return (
    <>
      <main className="w-full max-w-2xl space-y-8 md:p-12 p-4">
        <Header />
        <Actions />

        <p className="text-muted-foreground leading-7 text-base text-balance align-bottom">
          В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-secondary rounded-md h-5 text-foreground underline" rel="noopener" href="https://checkhouse.app">
            <CheckhouseLogoIcon className="size-[14px] inline-block mb-0.5 mr-1" />
            Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
        </p>
        <p className="text-muted-foreground leading-7 text-base text-balance">
          Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><MailIcon className="size-[14px] inline-block mb-0.5 mr-1" />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><GithubIcon className="size-[14px] inline-block mb-0.5 mr-1" />Github</Link>
        </p>
        {/* contributions */}
        <div className="py-8">
          <Suspense fallback={<GithubGraphSkeleton />}>
            <GithubContributions />
          </Suspense>
        </div>
        {/* timeline */}
        <Timeline>
          {
            timeline.map(item => {
              return <TimelineCard item={item} key={item.id} />
            })
          }
        </Timeline>
      </main >
      <Footer />
    </>
  );
}

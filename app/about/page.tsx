import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import Header from "@/components/header";
import { HostkitJSLogo } from "@/components/hostkitjs-logo";
import { email } from "@/const/socials";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<{
    year?: string;
  }>;
}
export default async function Page({ searchParams }: PageProps) {
  const { year } = await searchParams;

  return (
    <>
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
      </div>
      <div className="text-balance text-muted-foreground text-2xl md:pt-12 pt-4 md:px-12 px-4 max-w-2xl mx-auto w-full leading-9 tracking-tight">
        <p>
          В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-secondary rounded-md h-5 text-foreground underline" rel="noopener" href="https://checkhouse.app">
            <CheckhouseLogoIcon className="size-5 inline-block mb-0.5 mr-1" />
            Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
        </p>
        <br />
        <p>
          Также небольшой хостинг для статических сайтов <Link href="https://yz13.site" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">yz13.site</Link>, к нему в доплнение CLI для загрузки из терминала или CI&CD <Link href="https://hostkitjs.ru" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><HostkitJSLogo className="size-5 inline-block mb-0.5 mr-1" />HostkitJS</Link>
        </p>
        <br />
        <p>
          Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><MailIcon className="size-5 inline-block mb-0.5 mr-1" />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">Github</Link>
        </p>
      </div>
      <div className="max-w-2xl mx-auto w-full md:p-12 p-4">
        <Suspense fallback={<GithubGraphSkeleton />}>
          <GithubContributions year={year} />
        </Suspense>
      </div>
    </>
  )

}

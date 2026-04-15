import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import Footer from "@/components/footer";
import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import { GridCell } from "@/components/grid";
import Header from "@/components/header";
import { email } from "@/const/socials";
import { getWall } from "@/wall";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  const wall = getWall()

  return (
    <>
      <div className="w-full h-fit relative">
        <div className="size-full -z-50 absolute inset-0 pattern-paper" />
        <div className="w-full h-fit">
          <div className="w-full container mx-auto space-y-8 md:px-12 sm:px-4 px-0">
            <GridCell className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 bg-background">
              <GridCell className="sm:col-span-2 row-span-2 p-8 bg-background">
                <main className="size-full flex flex-col gap-8">
                  <Header />

                  <p className="text-muted-foreground text-2xl leading-9 tracking-tight text-balance">
                    В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-secondary rounded-md h-5 text-foreground underline" rel="noopener" href="https://checkhouse.app">
                      <CheckhouseLogoIcon className="size-5 inline-block mb-0.5 mr-1" />
                      Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
                  </p>
                  <p className="text-muted-foreground text-2xl leading-9 tracking-tight text-balance">
                    Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><MailIcon className="size-5 inline-block mb-0.5 mr-1" />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">Github</Link>
                  </p>
                  {/* contributions */}
                  <div className="py-8">
                    <Suspense fallback={<GithubGraphSkeleton />}>
                      <GithubContributions />
                    </Suspense>
                  </div>
                </main>
              </GridCell>

              {
                wall
                  .map((item, index) => {

                    const Component = item
                    return <Component key={index} />
                  })
              }

            </GridCell>
          </div>
        </div>
        <GridCell>
          <Footer />
        </GridCell>
      </div>
    </>
  );
}

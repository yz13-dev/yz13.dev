import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import { GithubGraphSkeleton } from "@/components/github-graph";
import GithubContributions from "@/components/github-graph-server";
import Header from "@/components/header";
import { HostkitJSLogo } from "@/components/hostkitjs-logo";
import { ImcIcon } from "@/components/logo/imc";
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
      <div className="text-balance text-secondary text-lg md:pt-12 pt-4 md:px-12 px-4 max-w-2xl mx-auto w-full leading-7 tracking-tight">
        <p>
          В 2022 году начал разбираться, как устроены сайты — и с тех пор это моё основное занятие.
        </p>
        <br />
        <p>
          Пишу на React и Next.js, вёрстку собираю на TailwindCSS, типизирую на TypeScript. Понемногу разбираюсь и с backend — на Node.js.
        </p>
        <br />
        <p>
          Сейчас основные проекты — <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-muted rounded-md h-4 text-primary underline" rel="noopener" href="https://checkhouse.app">
            <CheckhouseLogoIcon className="size-4 inline-block mb-0.5 mr-1" />
            Checkhouse</Link>, сервис для мониторинга доступности сайтов и серверов, и <Link aria-label="IMC" target="_blank" className="px-1 bg-muted rounded-md h-4 text-primary underline" rel="noopener" href="https://imc.yz13.dev">
            <ImcIcon className="size-3 inline-block mb-0.5 mr-1" />
            IMC</Link> — менеджер референсов: сохраняю картинки, гифки и видео, разбираю по тегам, а расширение для браузера позволяет добавлять их прямо со страницы.
        </p>
        <br />
        <p>
          Ещё держу <Link href="https://yz13.site" rel="noopener" className="px-1 bg-muted rounded-md h-4 text-primary underline">yz13.site</Link> — небольшой хостинг для статики, и <Link href="https://hostkitjs.ru" rel="noopener" className="px-1 bg-muted rounded-md h-4 text-primary underline"><HostkitJSLogo className="size-4 inline-block mb-0.5 mr-1" />HostkitJS</Link> — CLI к нему для деплоя из терминала или CI/CD.
        </p>
        <br />
        <p>
          Если нужна разработка или поддержка на React/Next.js — пишите в <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-muted rounded-md h-4 text-primary underline">Telegram</Link> или на <Link href={`mailto:${email}`} className="px-1 bg-muted rounded-md h-4 text-primary underline"><MailIcon className="size-4 inline-block mb-0.5 mr-1" />почту</Link>. Код — на <Link href="https://github.com/yz13-dev" className="px-1 bg-muted rounded-md h-5 text-primary underline">GitHub</Link>.
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

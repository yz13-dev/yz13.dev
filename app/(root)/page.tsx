import { LogoFull, LogoIcon } from "@/components/logo-svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { email } from "@/const/socials";
import { source } from "@/lib/source";
import { CopyIcon, ExternalLinkIcon, GithubIcon, MailIcon, NotepadTextIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const works = source.getPages().filter(page => page.slugs.includes("work"))

  return (
    <>
      <div className="w-full h-[12.5dvh]" />
      <main className="w-full max-w-2xl space-y-6 px-6 mx-auto">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-10 outline-2 outline-foreground/5">
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
        <p className="text-muted-foreground leading-7 text-base text-balance align-bottom">
          В данный момент разрабатываю <Link aria-label="Checkhouse" target="_blank" className="px-1 bg-secondary rounded-md h-5 text-foreground underline" rel="noopener" href="https://checkhouse.app">
            <LogoIcon className="size-[14px] inline-block mb-0.5 mr-1" />
            Checkhouse</Link>, для мониторинга доступности(непрерывности работы) сайтов и серверов.
        </p>
        <p className="text-muted-foreground leading-7 text-base text-balance">
          Готов помочь с разработкой и поддержкой проектов на React и NextJS. Можете связаться со мной через <Link href="https://t.me/yz13_dev" rel="noopener" className="px-1 bg-secondary rounded-md h-5 text-foreground underline">@yz13_dev</Link>, или <Link href={`mailto:${email}`} className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><MailIcon className="size-[14px] inline-block mb-0.5 mr-1" />Почту</Link>, также загляните на мой <Link href="https://github.com/yz13-dev" className="px-1 bg-secondary rounded-md h-5 text-foreground underline"><GithubIcon className="size-[14px] inline-block mb-0.5 mr-1" />Github</Link>
        </p>
        {/* projects */}
        <div>
          <div className="py-3">
            <span className="text-xl font-medium">Проекты</span>
          </div>
          <div className="space-y-6">
            <Card className="pt-0">
              <CardContent className="px-0">
                <div className="relative w-full aspect-video">
                  <Image src="https://checkhouse.app/og.png" fill alt="checkhouse.app" />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>Checkhouse</CardTitle>
                <CardDescription>Мониторинг сайтов и серверов</CardDescription>
                <CardAction>
                  <Button nativeButton={false} variant="secondary" render={<Link href="https://checkhouse.app" />}><ExternalLinkIcon /></Button>
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        </div>
        {/* blog */}
        <div>
          <div className="py-3">
            <span className="text-xl font-medium">Работы</span>
          </div>
          <div className="space-y-3">
            {
              works
                .filter((item, index, arr) => {
                  const isInItems = arr.some(work => (work.data.items || []).includes(item.data.id))
                  return !isInItems
                })
                .map(work => {

                  const items = (work.data.items || []).map(item => works.find(work => work.data.id === item)).filter(item => item !== undefined);
                  return (
                    <Item key={work.path} className="bg-card rounded-2xl">
                      <ItemMedia>
                        <NotepadTextIcon />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{work.data.title}</ItemTitle>
                        <ItemDescription className="text-balance">{work.data.description}</ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button nativeButton={false} variant="secondary" render={<Link href={work.url} />}><ExternalLinkIcon /></Button>
                      </ItemActions>
                      {
                        items
                          .map(item => (
                            <Item key={item.path} variant="muted">
                              <ItemMedia>
                                <NotepadTextIcon />
                              </ItemMedia>
                              <ItemContent>
                                <ItemTitle>{item.data.title}</ItemTitle>
                                <ItemDescription className="text-balance">{item.data.description}</ItemDescription>
                              </ItemContent>
                              <ItemActions>
                                <Button nativeButton={false} variant="secondary" render={<Link href={item.url} />}><ExternalLinkIcon /></Button>
                              </ItemActions>
                            </Item>
                          ))
                      }
                    </Item>
                  )
                })
            }
          </div>
        </div>
        <footer>
          <div className="pt-20 flex items-center justify-between mx-auto w-full">
            <span className="text-sm text-muted-foreground">
              YZ13 - фронтенд разработчик.
            </span>
            <span className="text-sm text-muted-foreground">2026</span>
          </div>
          <LogoFull className="py-20 opacity-10" />
        </footer>
      </main>
    </>
  );
}

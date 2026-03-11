import CopyButton from "@/components/copy-button";
import { LogoFull } from "@/components/logo-svg";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { getURL } from "@/lib/domain";
import { source } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { ArrowLeftIcon, ExternalLinkIcon, LinkIcon, NotepadTextIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";



type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {

  const { id: slug } = await params;

  const page = source.getPage(["work", slug]);

  if (!page) return notFound();

  const doc = page.data;

  const items = doc.items || [];

  const group = source.getPages()
    .filter(page => page.slugs.includes("work"))
    .filter(page => items.includes(page.data.id))

  const text = await doc.getText("raw");
  const docData = text.length > 0 ? await doc.load() : null;
  const MDX = docData?.body;

  return (
    <>
      <div className="w-full h-[12.5dvh]" />
      <main className="w-full max-w-2xl space-y-6 px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Button variant="secondary" nativeButton={false} render={<Link href="/" />}>
            <ArrowLeftIcon />
          </Button>
          <CopyButton variant="secondary" text={getURL(page.url)}>
            <LinkIcon />
          </CopyButton>
        </div>
        <div>
          <div className="py-12 *:block space-y-2">
            <span className="text-4xl font-serif font-medium">{page.data.title}</span>
            <span className="text-lg text-muted-foreground">{page.data.description}</span>
          </div>
          <div className="space-y-3">
            {
              group
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
          </div>
        </div>
        {
          MDX &&
          <MDX components={mdxComponents} />
        }
        <footer>
          <div className="pt-20 flex items-center justify-between mx-auto w-full">
            <span className="text-sm text-muted-foreground">
              YZ13 - фуллстек разработчик.
            </span>
            <span className="text-sm text-muted-foreground">2026</span>
          </div>
          <LogoFull className="py-20 opacity-10" />
        </footer>
      </main>
    </>
  )
}

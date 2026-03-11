import CopyButton from "@/components/copy-button";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getURL } from "@/lib/domain";
import { source } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { ArrowLeftIcon, ExternalLinkIcon, LinkIcon } from "lucide-react";
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
        {
          MDX &&
          <MDX components={mdxComponents} />
        }
      </main>
      <Footer />
    </>
  )
}

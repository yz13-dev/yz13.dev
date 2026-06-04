import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { source } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";



type PageProps = {
  params: Promise<{
    id: string;
    year: string;
  }>;
};

export default async function Page({ params }: PageProps) {

  const { id: slug, year } = await params;

  const page = source.getPage(["work", year, slug]);

  if (!page) return notFound();

  const doc = page.data;

  const items = doc.items || [];

  const group = source.getPages()
    .filter(page => page.slugs.includes("work"))
    .filter(page => items.includes(page.data.id))

  const url = doc.url || null

  const text = await doc.getText("raw");
  const docData = text.length > 0 ? await doc.load() : null;
  const MDX = docData?.body;

  return (
    <div className="relative">
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
      </div>
      <main className="w-full max-w-2xl space-y-6 md:p-12 p-4 mx-auto">
        <div>
          <div className="py-12 *:block space-y-2">
            <span className="text-4xl font-serif font-medium">{page.data.title}</span>
            <span className="text-lg text-muted-foreground">{page.data.description}</span>
          </div>
          {
            url &&
            <div className="flex items-center gap-2">
              <Button variant="outline" nativeButton={false} render={<Link href={url} />}>
                <GlobeIcon />
                <span>Посетить сайт</span>
              </Button>
            </div>
          }
          <div className="space-y-3">
            {
              group
                .map(item => (
                  <div key={item.path} className="relative py-2 px-3 h-fit rounded-md hover:bg-secondary w-full transition-colors">
                    {item.url && <Link href={item.url} className="absolute inset-0" />}
                    <div className="flex items-center justify-between gap-2">
                      <span>
                        <span className="font-medium">{item.data.title}</span>
                        {" - "}
                        <span className="text-muted-foreground">{item.data.description}</span>
                      </span>
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
    </div>
  )
}

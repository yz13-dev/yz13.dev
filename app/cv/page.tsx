import { source } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { notFound } from "next/navigation";

type PageProps = {
};
export default async function Page({ }: PageProps) {

  const page = source.getPage(["cv", "ru"]);

  if (!page) return notFound();

  const doc = page.data;

  const text = await doc.getText("raw");
  const docData = text.length > 0 ? await doc.load() : null;
  const MDX = docData?.body;

  return (
    <main className="w-full max-w-2xl space-y-8 md:p-12 p-4">
      {
        MDX &&
        <MDX components={mdxComponents} />
      }
    </main>
  );
}

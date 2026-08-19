import Header from "@/components/header";
import Media from "./components/media";
import Projects from "./components/projects";
import Works from "./components/works";

type PageProps = {
  params: Promise<{
    id: string;
    year: string;
  }>;
  searchParams: Promise<{
    year?: string;
  }>;
};

export default async function Page({ params, searchParams }: PageProps) {

  return (
    <>
      <Header />
      <main className="flex container mx-auto lg:flex-row flex-col items-start">
        <div className="max-w-2xl w-full md:p-12 p-4 space-y-8 lg:sticky lg:top-0">
          <Projects />
          <Works />
        </div>
        <div className="size-full md:p-12 p-4 space-y-8">
          <Media />
        </div>
      </main>
    </>
  )
}

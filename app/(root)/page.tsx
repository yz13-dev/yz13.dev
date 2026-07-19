import Header from "@/components/header";
import Projects from "./components/projects";
import WallWithIMC from "./components/wall-with-imc";
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
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
      </div>
      <div className="max-w-2xl min-h-[calc(100dvh-80px)] mx-auto w-full md:p-12 p-4 space-y-8">
        <Projects />
        <Works />
      </div>
      <div className="container mx-auto w-full md:p-12 p-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 space-y-4">
          <WallWithIMC />
        </div>
      </div>
    </>
  )
}

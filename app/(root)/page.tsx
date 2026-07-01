import Header from "@/components/header";
import ImcGrid from "@/components/imc-grid";
import { ImcWithTextIcon } from "@/components/logo/imc";
import { getWall } from "@/wall";
import Link from "next/link";
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

  const { id: slug, year } = await params;
  const { year: searchYear } = await searchParams;

  const wall = getWall()

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
          {
            wall.map((item, index) => {
              const Component = item
              return (
                <div key={index} className="w-full min-h-fit break-inside-avoid">
                  <Component />
                </div>
              )
            })
          }
        </div>
      </div>
      <section className="container mx-auto w-full space-y-6 md:p-12 p-4">
        <div className="">
          <Link href="https://imc.yz13.dev" target="_blank">
            <ImcWithTextIcon className="h-6 w-fit" />
          </Link>
        </div>
        <ImcGrid />
      </section>
    </>
  )
}

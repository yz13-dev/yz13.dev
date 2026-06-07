import Header from "@/components/header";
import { getWall, getWallColumns } from "@/wall";
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

  const wall = getWallColumns(getWall(), 3)

  return (
    <>
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
      </div>
      <div className="max-w-2xl min-h-[60dvh] mx-auto w-full md:p-12 p-4 space-y-8">
        <Projects />
        <Works />
      </div>
      <div className="container mx-auto w-full md:pb-12 pb-4 md:px-12 px-4">
        <div className="stack md:flex-row flex-col">
          {
            wall.map((column, index) => {
              return (
                <div key={index} className="stack-column">
                  {
                    column.map((item, itemIndex) => {
                      const Component = item
                      return (
                        <div key={`${index}-${itemIndex}`} className="w-full min-h-fit flex-[1,0,0] place-content-center">
                          <Component />
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

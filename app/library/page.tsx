import Header from "@/components/header";
import { getWall } from "@/wall";


export default function Page() {
  const wall = getWall()
  return (
    <>
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
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
    </>
  )
}

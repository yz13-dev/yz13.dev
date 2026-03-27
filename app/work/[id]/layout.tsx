import Works from "@/app/works/components/works";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit 2xl:*:w-fit lg:*:w-1/2 *:w-full">
      <div className="sticky h-fit top-0 lg:block hidden">
        <Works />
      </div>
      <div className="">
        {children}
      </div>
    </div>
  )
}

import Header from "@/components/header";
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

  return (
    <>
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
      </div>
      <Works />
    </>
  )
}

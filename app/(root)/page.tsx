import Home from "./components/home";

type PageProps = {
  searchParams: Promise<{
    year?: string;
  }>;
}
export default async function Page({ searchParams }: PageProps) {
  const { year } = await searchParams;

  return <Home year={year} />
}

import { getCachedContributions } from "@/utils/contributions"
import GithubGraph, { GithubGraphYearSwitcher } from "./github-graph"


export default async function GithubContributions({ year }: { year?: string }) {
  const data = await getCachedContributions(year)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 w-full *:w-fit shrink-0">
        <GithubGraphYearSwitcher years={data.years} />
      </div>
      <div className="size-full">
        <GithubGraph data={data.contributions} />
      </div>
    </div>
  )
}

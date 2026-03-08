import { getCachedContributions } from "@/utils/contributions"
import GithubGraph from "./github-graph"


export default async function GithubContributions() {
  const data = await getCachedContributions()

  return (
    <GithubGraph data={data.contributions} />
  )
}

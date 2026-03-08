"use server"

import { cacheLife, cacheTag } from "next/cache";

const username = "yz13-dev";

export const getCachedContributions = async () => {
  "use cache"
  cacheLife("hours")
  cacheTag("github-contributions")

  const url = new URL(`/v4/${username}?y=last`, 'https://github-contributions-api.jogruber.de');
  const response = await fetch(url);
  const data = (await response.json()) as any;
  const total = data.total[new Date().getFullYear()];

  return { contributions: data.contributions, total };
}

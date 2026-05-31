"use server"

import { cacheLife, cacheTag } from "next/cache";

const username = "yz13-dev";

export const getCachedContributions = async (year?: string) => {
  "use cache"
  cacheLife("hours")
  cacheTag("github-contributions")

  const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
  const response = await fetch(url);

  const data = (await response.json()) as any;

  const contributions: { date: string, count: number, level: number }[] = data.contributions;
  const total: number = data.total[new Date().getFullYear()];
  const years: Record<string, number> = data.total

  const filteredContributions = contributions.filter((c) => {
    if (!year) return true;
    return c.date.includes(year)
  });

  return { contributions: filteredContributions, total, years };
}

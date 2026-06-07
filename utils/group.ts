
export function groupByYear<T>(works: T[], getSlugs: (item: T) => string[]): Record<string, T[]> {
  return works
    .reduce((acc, work) => {
      const slugs = getSlugs(work);
      const year = slugs.find(slug => slug.startsWith("20"));
      if (year) {
        acc[year] = acc[year] || [];
        acc[year].push(work);
      }
      return acc;
    }, {} as Record<string, typeof works>);
}

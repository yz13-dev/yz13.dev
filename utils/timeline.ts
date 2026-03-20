import projects from "@/content/json/projects.json";
import { source } from "@/lib/source";


export type TimelineItem = {
  id: string;
  type: "work" | "project";
  url?: string;
  date: string;
  title: string;
  description: string;
  tags?: string[];
}

export function sortTimelineItems(items: TimelineItem[]): TimelineItem[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getWorksToTimeline(): TimelineItem[] {
  const works = source.getPages().filter(page => page.slugs.includes("work"));

  return works
    .filter((item, index, arr) => {
      const isInItems = arr.some(work => (work.data.items || []).includes(item.data.id))
      return !isInItems
    })
    .map(item => ({
      type: "work",
      id: item.data.id,
      date: item.data.date,
      title: item.data.title,
      description: item.data.description,
      tags: ["работы"]
    }));
}
export function getProjectsToTimeline(): TimelineItem[] {

  return projects.projects.map(item => ({
    type: "project",
    id: item.id,
    date: item.date,
    title: item.title,
    description: item.description,
    tags: item.tags,
    url: item.url
  }));
}

export function getTimeline() {

  const works = getWorksToTimeline();
  const projects = getProjectsToTimeline();

  return sortTimelineItems([
    ...works,
    ...projects
  ]);
}

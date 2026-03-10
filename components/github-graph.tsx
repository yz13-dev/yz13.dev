"use client";
import {
  Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { isFuture } from "date-fns";
import { Skeleton } from "./ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function GithubGraph({ data = [] }: { data?: Activity[] }) {
  return (
    <ContributionGraph data={data} weekStart={1} blockSize={16} blockMargin={4}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => {
          const activityDate = new Date(activity.date);
          if (isFuture(activityDate)) return null;
          return (
            <Tooltip>
              <TooltipTrigger render={<g />}>
                <ContributionGraphBlock
                  activity={activity}
                  className="cursor-pointer"
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{activity.date}</p>
                <p>{activity.count} активностей</p>
              </TooltipContent>
            </Tooltip>
          );
        }}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount />
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export const GithubGraphSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-2 h-[160px] shrink-0">
      <div className="flex items-center *:h-5 gap-10 justify-end">
        <Skeleton className="w-12 shrink-0" />
        <Skeleton className="w-12 shrink-0" />
        <Skeleton className="w-12 shrink-0" />
        <Skeleton className="w-12 shrink-0" />
        <Skeleton className="w-12 shrink-0" />
        <Skeleton className="w-12 shrink-0" />
        <Skeleton className="w-12 shrink-0" />
      </div>
      <Skeleton className="w-full h-[130px]! shrink-0" />
      <div className="flex items-center gap-2 justify-between">
        <Skeleton className="w-1/3 h-[21px]! shrink-0" />
        <Skeleton className="w-1/3 h-[21px]! shrink-0" />
      </div>
    </div>
  );
};

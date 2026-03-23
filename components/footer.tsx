import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { ThemeSwitcher } from "./kibo-ui/theme-switcher";
import { LogoFull } from "./logo-svg";
import StatusBadge, { StatusBadgeSkeleton } from "./status-badge";
import { Separator } from "./ui/separator";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={cn("max-w-2xl space-y-8 md:p-12 p-4", className)}>
      <Separator />
      <div className="flex items-center justify-between mx-auto w-full">
        <span className="text-sm text-muted-foreground">
          YZ13 - фуллстек разработчик / 2026
        </span>
        <ThemeSwitcher />
      </div>
      <div className="flex justify-start mx-auto w-full">
        <Suspense fallback={<StatusBadgeSkeleton />}>
          <StatusBadge />
        </Suspense>
      </div>
      <LogoFull className="py-20 opacity-10" />
    </footer>
  );
}

"use client"
import { getCalApi } from "@calcom/embed-react";
import { ComponentPropsWithoutRef, useEffect } from "react";
import { Button } from "./ui/button";

type CalComEmbedProps = ComponentPropsWithoutRef<typeof Button>;

export default function CalComEmbed({
  className = "",
  children,
  variant = "default",
  size = "default",
  ...props
}: CalComEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "discovery" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return (
    <Button
      data-cal-namespace="discovery"
      data-cal-link="yz13-dev/discovery"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={className}
      variant={variant}
      size={size}
      nativeButton={true}
      {...props}
    >
      {children}
    </Button>
  )
};

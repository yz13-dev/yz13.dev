"use client"
import { getCalApi } from "@calcom/embed-react";
import { ComponentPropsWithoutRef, useEffect } from "react";
import { Button } from "./ui/button";

type CalComEmbedProps = ComponentPropsWithoutRef<typeof Button>;

export const showCalComEmbed = async () => {
  const cal = await getCalApi({ "namespace": "discovery" });
  cal("modal", { calLink: "yz13-dev/discovery", config: { layout: "month_view" } })
};

export const cleanUpEmbed = () => {
  const element = document.getElementsByTagName("cal-modal-box");
  for (const el of element) {
    el.remove()
  }
};

export const checkCalComEmbed = async () => {
  const element = document.getElementsByTagName("cal-modal-box");

  let open = false

  for (const el of element) {
    const state = el.getAttribute("state")
    if (state === "open") open = true
    else cleanUpEmbed()
  }

  return open;
};

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
      id="calcom-embed"
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

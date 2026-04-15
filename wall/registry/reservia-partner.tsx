import WallCard from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia partner"
      className="aspect-square dark"
      containerClassName="bg-muted"
    >
      <div className="size-full relative">
        <div
          className="absolute inset-0 rounded-t-xl bg-background border-x overflow-clip border-t drop-shadow-2xl aspect-video h-full group-hover:scale-105 transition-transform"
        >
          <Image src="/wall/reservia-partner/dashboard.png" className="aspect-video object-cover object-top-left" fill alt="reservia admin" />
        </div>
      </div>
    </WallCard>
  )
}

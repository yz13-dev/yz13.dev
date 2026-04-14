import WallCard from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia admin"
      className="aspect-[2] col-span-2 dark"
      containerClassName="bg-muted"
    >
      <div className="rounded-t-xl bg-background border-x relative overflow-clip border-t drop-shadow-2xl size-full">
        <Image src="/wall/reservia-admin/map-creating.png" className="object-cover object-top" fill alt="reservia admin" />
      </div>
    </WallCard>
  )
}

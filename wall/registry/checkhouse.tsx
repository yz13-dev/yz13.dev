import WallCard from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="a"
      name="b"
      className="aspect-[2] col-span-2"
      containerClassName="bg-muted"
    >
      <div className="rounded-t-xl bg-background border-x relative overflow-clip border-t drop-shadow-2xl size-full">
        <Image src="/wall/checkhouse/checkhouse.png" className="object-cover object-top" fill alt="checkhouse.app" />
      </div>
    </WallCard>
  )
}

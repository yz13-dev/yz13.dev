import WallCard from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="project"
      name="hostkitjs"
      className="sm:aspect-[2] aspect-4/3 sm:col-span-2"
      containerClassName="bg-muted"
      link="https://hostkitjs.ru"
    >
      <div className="rounded-t-xl bg-background border-x relative overflow-clip border-t drop-shadow-2xl size-full group-hover:scale-105 transition-transform">
        <Image src="/wall/hostkitjs/hostkitjs.png" className="object-cover object-top" fill alt="hostkitjs.ru" />
      </div>
    </WallCard>
  )
}

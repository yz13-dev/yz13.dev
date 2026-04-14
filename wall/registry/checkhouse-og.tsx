import WallCard from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="checkhouse og"
      className="aspect-[2] col-span-2 dark"
      containerClassName="md:p-8 p-4 bg-muted"
    >
      <div className="rounded-xl bg-background border-x relative overflow-clip border-t drop-shadow-2xl h-full aspect-1200/628">
        <Image
          src="https://checkhouse.app/og?title=Checkhouse&description=Monitor%20your%20services%2C%20detect%20outages%20instantly%2C%20and%20share%20a%20public%20status%20page."
          className="object-fill object-top" fill alt="checkhouse Open Graph" />
      </div>
    </WallCard>
  )
}

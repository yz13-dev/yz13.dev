import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia client"
      className="aspect-square dark"
      containerClassName="bg-muted items-start"
    >
      {/*<div className="rounded-t-xl bg-background relative overflow-clip drop-shadow-2xl border-x border-t size-full transition-transform">*/}
      <WallCardImage>
        <Image src="/wall/reservia-client/client-step-1.png" fill alt="reservia client" />
      </WallCardImage>
      {/*</div>*/}
    </WallCard>
  )
}

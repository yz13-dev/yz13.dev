import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia partner"
      className="dark"
    >
      <WallCardImage>
        <Image src="/wall/reservia-partner/dashboard.png" className="aspect-video object-contain object-top-left" fill alt="reservia admin" />
      </WallCardImage>
    </WallCard>
  )
}

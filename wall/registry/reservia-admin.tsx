import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia admin"
      className="dark"
    >
      <WallCardImage>
        <Image src="/wall/reservia-admin/map-creating.png" fill alt="reservia admin" />
      </WallCardImage>
    </WallCard>
  )
}

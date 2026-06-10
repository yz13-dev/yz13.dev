import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="checkhouse"
      className="dark"
    >
      <WallCardImage>
        <Image src="/wall/checkhouse/home-page.png" className="aspect-298/167.63" fill alt="checkhouse.app/home" />
      </WallCardImage>
    </WallCard>
  )
}

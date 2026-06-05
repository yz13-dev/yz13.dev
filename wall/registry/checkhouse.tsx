import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="project"
      name="checkhouse"
      link="https://checkhouse.app"
    >
      <WallCardImage>
        <Image src="/wall/checkhouse/checkhouse.png" fill alt="checkhouse.app" />
      </WallCardImage>
    </WallCard>
  )
}

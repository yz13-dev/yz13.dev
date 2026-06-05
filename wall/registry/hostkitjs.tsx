import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="project"
      name="hostkitjs"
      link="https://hostkitjs.ru"
    >
      <WallCardImage>
        <Image src="/wall/hostkitjs/hostkitjs.png" fill alt="hostkitjs.ru" />
      </WallCardImage>
    </WallCard>
  )
}

import WallCard, { WallCardImage } from "@/components/wall-card";
import Image from "next/image";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="checkhouse og"
      className="dark"
      containerClassName="md:pb-8 pb-4"
    >
      <WallCardImage className="rounded-lg">
        <Image
          src="https://checkhouse.app/og?title=Checkhouse&description=Monitor%20your%20services%2C%20detect%20outages%20instantly%2C%20and%20share%20a%20public%20status%20page."
          fill alt="checkhouse Open Graph" />
      </WallCardImage>
    </WallCard>
  )
}

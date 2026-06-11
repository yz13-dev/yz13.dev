import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="project"
      name="checkhouse"
      link="https://checkhouse.app"
    >
      <WallCardImage>
        <CardImage src="/wall/checkhouse/checkhouse.png" className="aspect-298/186" fill alt="checkhouse.app" />
      </WallCardImage>
    </WallCard>
  )
}

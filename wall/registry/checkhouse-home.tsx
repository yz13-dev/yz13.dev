import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="checkhouse"
      className="dark"
    >
      <WallCardImage>
        <CardImage src="/wall/checkhouse/home-page.png" className="aspect-298/167" fill alt="checkhouse.app/home" />
      </WallCardImage>
    </WallCard>
  )
}

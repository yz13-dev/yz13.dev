import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia partner"
      className="dark"
    >
      <WallCardImage>
        <CardImage src="/wall/reservia-partner/dashboard.png" className="aspect-298/210" fill alt="reservia admin" />
      </WallCardImage>
    </WallCard>
  )
}

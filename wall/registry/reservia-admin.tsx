import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia admin"
      className="dark"
    >
      <WallCardImage>
        <CardImage src="/wall/reservia-admin/map-creating.png" className="aspect-298/211" fill alt="reservia admin" />
      </WallCardImage>
    </WallCard>
  )
}

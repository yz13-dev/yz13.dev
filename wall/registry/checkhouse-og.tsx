import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="checkhouse og"
      className="dark"
      containerClassName="md:pb-8 pb-4"
    >
      <WallCardImage className="rounded-lg">
        <CardImage
          className="aspect-298/155"
          src="https://checkhouse.app/og?title=Checkhouse&description=Monitor%20your%20services%2C%20detect%20outages%20instantly%2C%20and%20share%20a%20public%20status%20page."
          fill alt="checkhouse Open Graph" />
      </WallCardImage>
    </WallCard>
  )
}

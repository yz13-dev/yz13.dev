import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";

export const date = "2026-04-15"

export default function Component() {

  return (
    <WallCard
      type="project"
      name="hostkitjs"
      link="https://hostkitjs.ru"
    >
      <WallCardImage>
        <CardImage src="/wall/hostkitjs/hostkitjs.png" className="aspect-298/191" fill alt="hostkitjs.ru" />
      </WallCardImage>
    </WallCard>
  )
}

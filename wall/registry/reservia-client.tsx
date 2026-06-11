import CardImage from "@/components/card-image";
import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="screenshot"
      name="reservia client"
      className="aspect-square dark"
      containerClassName="bg-muted items-start"
    >
      {/*<div className="rounded-t-xl bg-background relative overflow-clip drop-shadow-2xl border-x border-t size-full transition-transform">*/}
      <WallCardImage>
        <CardImage src="/wall/reservia-client/client-step-1.png" className="aspect-298/667" fill alt="reservia client" />
      </WallCardImage>
      {/*</div>*/}
    </WallCard>
  )
}

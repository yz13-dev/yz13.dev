import WallCard, { WallCardImage } from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="video"
      name="checkhouse"
    >
      <WallCardImage>
        <video src="/wall/checkhouse/new-home-page.mp4" muted autoPlay loop playsInline className="aspect-298/167" />
      </WallCardImage>
    </WallCard>
  )
}

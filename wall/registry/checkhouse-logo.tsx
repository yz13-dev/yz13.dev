import { CheckhouseLogoIcon } from "@/components/checkhouse-icon";
import WallCard from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="logo"
      name="checkhouse logo"
      fill
      className="aspect-square"
      containerClassName="bg-muted pt-0!"
      label="Checkhouse лого"
    >
      <div className="size-full flex items-center justify-center">
        <div className="size-[60%]">
          <CheckhouseLogoIcon width="100%" height="100%" />
        </div>
      </div>
    </WallCard>
  )
}

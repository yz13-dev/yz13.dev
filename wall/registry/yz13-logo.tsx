import { LogoIcon } from "@/components/logo-svg";
import WallCard from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="logo"
      name="yz13 logo"
      fill
      className="aspect-square"
      containerClassName="bg-muted pt-0! pattern-grid"
      label="YZ13 лого"
    >
      <div className="size-full flex items-center justify-center">
        <div className="size-[60%]">
          <LogoIcon width="100%" height="100%" />
        </div>
      </div>
    </WallCard>
  )
}

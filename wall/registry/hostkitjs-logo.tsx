import { HostkitJSLogo } from "@/components/hostkitjs-logo";
import WallCard from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="logo"
      name="hostkitjs logo"
      fill
      className="aspect-square"
      containerClassName="bg-muted pt-0! pattern-grid"
      label="HostkitJS лого"
    >
      <div className="size-full flex items-center justify-center">
        <div className="size-[60%]">
          <HostkitJSLogo width="100%" height="100%" />
        </div>
      </div>
    </WallCard>
  )
}

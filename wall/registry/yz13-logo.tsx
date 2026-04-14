import { LogoIcon } from "@/components/logo-svg";
import WallCard from "@/components/wall-card";



export default function Component() {

  return (
    <WallCard
      type="a"
      name="b"
      fill
      className="aspect-square"
      containerClassName="bg-muted pt-0!"
      label="Лого"
    >
      <div className="size-full">
        <LogoIcon width="100%" height="100%" />
      </div>
    </WallCard>
  )
}

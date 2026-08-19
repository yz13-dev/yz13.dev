import { Separator } from "@/components/ui/separator";
import WallWithIMC from "./wall-with-imc";

export default function Media() {
  return (
    <section>
      <div className="flex items-center gap-2 py-3">
        <span className="font-medium text-secondary">Медиа</span>
        <Separator className="shrink" />
      </div>
      <div className="columns-1 sm:columns-2 xl:columns-3 space-y-4">
        <WallWithIMC />
      </div>
    </section>
  )
}

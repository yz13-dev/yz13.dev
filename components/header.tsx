import Link from "next/link";
import Actions from "./actions";
import { LogoFull } from "./logo-svg";

export default function Header() {

  return (
    <div className="flex md:flex-row flex-col w-full h-fit gap-6 md:items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/">
          <LogoFull className="h-8" />
        </Link>
      </div>
      <Actions />
    </div>
  )
}

import Link from "next/link";
import Actions from "./actions";
import { LogoFull } from "./logo-svg";

export default function Header() {

  return (
    <header className="flex container mx-auto md:flex-row flex-col py-4 w-full h-fit gap-6 md:items-center justify-between md:px-12 px-4">
      <div className="flex items-center gap-3">
        <Link href="/">
          <LogoFull className="h-8" />
        </Link>
      </div>
      <Actions />
    </header>
  )
}

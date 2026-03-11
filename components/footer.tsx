import { LogoFull } from "./logo-svg";


export default function Footer() {
  return (
    <footer className="max-w-2xl space-y-6 px-6 mx-auto">
      <div className="pt-20 flex items-center justify-between mx-auto w-full">
        <span className="text-sm text-muted-foreground">
          YZ13 - фуллстек разработчик.
        </span>
        <span className="text-sm text-muted-foreground">2026</span>
      </div>
      <LogoFull className="py-20 opacity-10" />
    </footer>
  )
}

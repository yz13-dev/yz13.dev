import { UserCircleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";



export default function Actions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="lg" nativeButton={false} render={<Link href="/about" />}>
        <UserCircleIcon />
        <span>Обо мне</span>
      </Button>
    </div>
  )
}

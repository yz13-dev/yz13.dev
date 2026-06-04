import { email, telegram } from "@/const/socials";
import { CalendarIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import CalComEmbed from "./calcom-embed";
import CopyButton from "./copy-button";
import { Button } from "./ui/button";



export default function Actions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="lg" nativeButton={false} render={<Link href="/about" />}>
        <span>Обо мне</span>
      </Button>
      <CopyButton variant="outline" size="lg" text={email!} disabled={!email}>
        <MailIcon />
      </CopyButton>
      <CalComEmbed variant="outline" size="lg">
        <CalendarIcon />
        <span>Созвон</span>
      </CalComEmbed>
      {
        telegram &&
        <Button variant="default" size="lg" nativeButton={false} render={<Link href={telegram} target="_blank" rel="noopener" />}>
          <span>Написать</span>
          <SendIcon />
        </Button>
      }
    </div>
  )
}

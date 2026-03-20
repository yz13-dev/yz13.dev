import { email, telegram } from "@/const/socials";
import { CalendarIcon, CopyIcon, MailIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import CalComEmbed from "./calcom-embed";
import CopyButton from "./copy-button";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";



export default function Actions() {
  return (
    <div className="flex items-center gap-2">
      <ButtonGroup>
        <CopyButton variant="outline" text={email!} disabled={!email}>
          <CopyIcon />
        </CopyButton>
        <Button variant="outline" disabled={!email} nativeButton={false} render={<Link href={`mailto:${email}`} target="_blank" rel="noopener" />}>
          <MailIcon />
        </Button>
      </ButtonGroup>
      {
        telegram &&
        <Button variant="outline" nativeButton={false} render={<Link href={telegram} target="_blank" rel="noopener" />}>
          <SendIcon />
          <span>Написать</span>
        </Button>
      }
      <CalComEmbed variant="outline">
        <CalendarIcon />
        <span>Созвон</span>
      </CalComEmbed>
    </div>
  )
}

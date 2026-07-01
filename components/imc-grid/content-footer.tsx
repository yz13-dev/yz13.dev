import { useVideoStore } from "@/components/imc/video"
import { formatDuration } from "@/lib/duration"
import { ArrowUpRightIcon, GlobeIcon, TagsIcon } from "lucide-react"
import Link from "next/link"
import { ReferenceBadge, ReferenceButton, ReferenceFooter, ReferenceFooterGroup, ReferenceLabel } from "../imc/reference"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"



type ContentFooterProps = {
  href: string
  duration_ms: number
  source: any
  tags: any[]
  label: string
}
export default function ContentFooter({ source, duration_ms, label, tags = [], href }: ContentFooterProps) {

  const firstTag = tags[0]?.tag?.name ?? ""
  // const isVideo = mime_type.startsWith("video/")
  //
  const position = useVideoStore(state => state.position)

  const duration = duration_ms ? formatDuration(duration_ms - Math.floor(position * 1000)) : null

  return (
    <ReferenceFooter>
      <ReferenceFooterGroup>
        {
          source &&
          <Avatar>
            <AvatarImage src={source.domain.favicon_url || undefined} />
            <AvatarFallback>
              <GlobeIcon />
            </AvatarFallback>
          </Avatar>
        }
        {
          !!label.length &&
          <ReferenceLabel>
            {label}
          </ReferenceLabel>
        }
      </ReferenceFooterGroup>
      <ReferenceFooterGroup>
        {
          !!duration &&
          <ReferenceBadge>
            {duration}
          </ReferenceBadge>
        }
        {
          tags.length > 0 &&
          <ReferenceBadge>
            <TagsIcon />
            <span>{firstTag}{tags.length > 1 && ` +${tags.length - 1}`}</span>
          </ReferenceBadge>
        }
        {
          href &&
          <ReferenceButton
            nativeButton={false}
            render={<Link href={href} />}
          >
            <ArrowUpRightIcon />
          </ReferenceButton>
        }
      </ReferenceFooterGroup>
    </ReferenceFooter>
  )
}

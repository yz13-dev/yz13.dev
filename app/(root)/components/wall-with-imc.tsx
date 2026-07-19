"use client"
import CardImage from "@/components/card-image"
import { Video } from "@/components/imc/video"
import WallCard, { WallCardImage, WallCardVideo } from "@/components/wall-card"
import { GetImcCollections } from "@/lib/api/imc"
import { toBlurDataURL } from "@/lib/blurhash"
import { getAssetsUrl } from "@/lib/url"
import { Attachment } from "@/types/imc"
import { getWall } from "@/wall"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { ReactNode } from "react"

type TypedWallItem = {
  type: "wall-item",
  date: string
  element: ReactNode
}
type TypedImcItem = {
  type: "imc-item",
  date: string
  element: ReactNode
}

export default function WallWithIMC() {

  const { data } = useQuery<Attachment[]>({
    queryKey: ["imc"],
    queryFn: () => GetImcCollections().then(data => data)
  })

  const wall = getWall()

  const imcTypedItems: TypedImcItem[] = (data || []).map(item => {
    const date = new Date(item.created_at)
    const refSrc = getAssetsUrl(`/v1/attachments/${item.id}/file`)
    const mimeType = item.mime_type;
    const isVideo = mimeType.startsWith("video/")
    const isGif = mimeType.startsWith("image/gif")

    const alt = item.label
    const blurhash = item.blurhash
    return {
      date: format(date, "yyyy-MM-dd"),
      type: "imc-item",
      element: <WallCard
        key={item.id}
        name={item.label || "Без названия"}
        type="imc"
      >
        {
          isVideo &&
          <WallCardVideo style={{ aspectRatio: `${item.width}/${item.height}` }}>
            <Video
              data-slot="reference-attachment"
              src={refSrc}
              draggable={false}
              loop
              muted
              autoPlay
              aria-label={alt}
            />
          </WallCardVideo>
        }
        {
          isGif &&
          <WallCardImage style={{ aspectRatio: `${item.width}/${item.height}` }}>
            <CardImage
              data-slot="reference-attachment"
              src={refSrc}
              draggable={false}
              unoptimized
              fill
              loading="lazy"
              placeholder={blurhash ? "blur" : "empty"}
              blurDataURL={blurhash ? toBlurDataURL(blurhash, mimeType) : undefined}
              alt={alt}
            />
          </WallCardImage>
        }
        {
          !isVideo && !isGif &&
          <WallCardImage style={{ aspectRatio: `${item.width}/${item.height}` }}>
            <CardImage
              data-slot="reference-attachment"
              src={refSrc}
              draggable={false}
              unoptimized
              fill
              loading="lazy"
              placeholder={blurhash ? "blur" : "empty"}
              blurDataURL={blurhash ? toBlurDataURL(blurhash, mimeType) : undefined}
              alt={alt}
            />
          </WallCardImage>
        }
      </WallCard>
    }
  })
  const wallTypedItems: TypedWallItem[] = (wall || []).map(item => {
    const Component = item.element
    return {
      date: item.date,
      type: "wall-item",
      element: <Component key={item.id} />
    }
  })

  return [...imcTypedItems, ...wallTypedItems]
    .toSorted((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate.getTime() - aDate.getTime()
    })
    .map(item => {
      return item.element
    })
}

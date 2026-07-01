"use client"

import { GetImcCollections } from "@/lib/api/imc"
import { toBlurDataURL } from "@/lib/blurhash"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import { VideoProvider } from "../imc/video"
import RefContent from "./content"
import ContentFooter from "./content-footer"
import CardGridWrapper from "./grid"


export default function ImcGrid() {

  const { data } = useQuery({
    queryKey: ["imc"],
    queryFn: () => GetImcCollections().then(data => data)
  })

  console.log("[IMC]", data)

  return (
    <CardGridWrapper>
      {
        (data || []).map(item => {
          const blurhash = item.blurhash
          const cardTags = item.tags ?? []
          return (
            <div key={item.id} className="w-full p-1 bg-muted rounded-lg relative group break-inside-avoid">
              <div className="flex flex-col">
                <div className="absolute inset-0 size-full rounded-lg overflow-clip">
                  <div
                    className="absolute inset-0 size-full rounded-lg blur-xs bg-no-repeat bg-cover bg-center"
                    style={{
                      backgroundImage: blurhash ? `url(${toBlurDataURL(blurhash)})` : undefined
                    }}
                  />
                </div>
                <VideoProvider duration={item.duration_ms}>
                  <RefContent
                    id={item.id}
                    mimeType={item.mime_type}
                    src={item.src}
                    className={cn(
                      "outline-4 outline-transparent group/-hover:outline-foreground/10 bg/-foreground/10",
                      "group-hover:scale/-101 will-change-transform transition-all",
                    )}
                    blurhash={blurhash}
                    style={{
                      aspectRatio: `${item.width}/${item.height}`
                    }}
                  >
                    <ContentFooter
                      duration_ms={item.duration_ms}
                      href={""}
                      source={item.source}
                      tags={cardTags}
                      label={item.label}
                    />
                  </RefContent>
                </VideoProvider>
              </div>
            </div>
          )
        })
      }
    </CardGridWrapper>
  )
}

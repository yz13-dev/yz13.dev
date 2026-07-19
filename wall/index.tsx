import { ReactNode } from "react"
import { default as HostkitJS, date as HostkitJSTimestamp } from "./registry/hostkitjs"
import { default as HostkitJSLogo, date as HostkitJSLogoTimestamp } from "./registry/hostkitjs-logo"
import { default as ReserviaAdmin, date as ReserviaAdminTimestamp } from "./registry/reservia-admin"
import { default as ReserviaAdminBlog, date as ReserviaAdminBlogTimestamp } from "./registry/reservia-admin-blog"
import { default as ReserviaClient, date as ReserviaClientTimestamp } from "./registry/reservia-client"
import { default as ReserviaClientBlog, date as ReserviaClientBlogTimestamp } from "./registry/reservia-client-blog"
import { default as ReserviaPartner, date as ReserviaPartnerTimestamp } from "./registry/reservia-partner"
import { default as ReserviaPartnerBlog, date as ReserviaPartnerBlogTimestamp } from "./registry/reservia-partner-blog"
import YZ13Logo, { date as YZ13LogoTimestamp } from "./registry/yz13-logo"
export type WallItem = {
  id: string
  date: string
  element: () => ReactNode | null
}

export function getWall(): WallItem[] {

  return [
    {
      id: "HostkitJS",
      date: HostkitJSTimestamp,
      element: HostkitJS,
    },
    {
      id: "HostkitJSLogo",
      date: HostkitJSLogoTimestamp,
      element: HostkitJSLogo,
    },
    {
      id: "ReserviaClient",
      date: ReserviaClientTimestamp,
      element: ReserviaClient,
    },
    {
      id: "ReserviaClientBlog",
      date: ReserviaClientBlogTimestamp,
      element: ReserviaClientBlog
    },
    {
      id: "ReserviaAdmin",
      date: ReserviaAdminTimestamp,
      element: ReserviaAdmin,
    },
    {
      id: "ReserviaAdminBlog",
      date: ReserviaAdminBlogTimestamp,
      element: ReserviaAdminBlog,
    },
    {
      id: "ReserviaPartner",
      date: ReserviaPartnerTimestamp,
      element: ReserviaPartner,
    },
    {
      id: "ReserviaPartnerBlog",
      date: ReserviaPartnerBlogTimestamp,
      element: ReserviaPartnerBlog,
    },
    {
      id: "YZ13Logo",
      date: YZ13LogoTimestamp,
      element: YZ13Logo
    }
  ]
}

export function getWallColumns(
  wall: ReturnType<typeof getWall>,
  columns: number
) {
  const result: ReturnType<typeof getWall>[] = Array.from(
    { length: columns },
    () => []
  )

  for (let i = 0; i < wall.length; i++) {
    const columnIndex = i % columns
    result[columnIndex].push(wall[i])
  }

  return result
}

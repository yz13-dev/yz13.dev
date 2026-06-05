import Checkhouse from "./registry/checkhouse"
import CheckhouseLogo from "./registry/checkhouse-logo"
import CheckhouseOg from "./registry/checkhouse-og"
import HostkitJS from "./registry/hostkitjs"
import HostkitJSLogo from "./registry/hostkitjs-logo"
import ReserviaAdmin from "./registry/reservia-admin"
import ReserviaAdminBlog from "./registry/reservia-admin-blog"
import ReserviaClient from "./registry/reservia-client"
import ReserviaClientBlog from "./registry/reservia-client-blog"
import ReserviaPartner from "./registry/reservia-partner"
import ReserviaPartnerBlog from "./registry/reservia-partner-blog"
import YZ13Logo from "./registry/yz13-logo"


export function getWall() {

  return [
    HostkitJS,
    Checkhouse,
    HostkitJSLogo,
    CheckhouseOg,
    CheckhouseLogo,
    ReserviaAdmin,
    ReserviaAdminBlog,
    ReserviaPartner,
    ReserviaPartnerBlog,
    ReserviaClient,
    ReserviaClientBlog,
    YZ13Logo,
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

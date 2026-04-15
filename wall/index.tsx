import Checkhouse from "./registry/checkhouse"
import CheckhouseLogo from "./registry/checkhouse-logo"
import CheckhouseOg from "./registry/checkhouse-og"
import ReserviaAdmin from "./registry/reservia-admin"
import ReserviaAdminBlog from "./registry/reservia-admin-blog"
import ReserviaClient from "./registry/reservia-client"
import ReserviaClientBlog from "./registry/reservia-client-blog"
import ReserviaPartner from "./registry/reservia-partner"
import ReserviaPartnerBlog from "./registry/reservia-partner-blog"
import YZ13Logo from "./registry/yz13-logo"


export function getWall() {

  return [
    Checkhouse,
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

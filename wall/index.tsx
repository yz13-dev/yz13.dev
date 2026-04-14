import Checkhouse from "./registry/checkhouse"
import ReserviaClient from "./registry/reservia-client"
import YZ13Logo from "./registry/yz13-logo"


export function getWall() {

  return [
    Checkhouse,
    ReserviaClient,
    YZ13Logo
  ]
}

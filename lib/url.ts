
export function getAssetsUrl(path?: string) {
  return new URL(path || "/", "https://assets.imc.yz13.dev").toString()
}

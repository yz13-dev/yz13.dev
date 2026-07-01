
const IS_DEV = process.env.NODE_ENV === "development"

export async function GetImcCollections(): Promise<any[]> {
  try {

    const base = IS_DEV ? "https://localhost:8080" : "https://api.imc.yz13.dev"
    const response = await fetch(new URL("/v1/collections/6a66def2-f4c1-4909-b2ec-6daffc26d25b/attachments", base))

    const json = await response.json()

    return json

  } catch (error) {
    console.warn(error)
    return []
  }
}

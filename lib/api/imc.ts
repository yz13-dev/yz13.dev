import type { Attachment } from "@/types/imc";

const IS_DEV = process.env.NODE_ENV === "development";

function getAttachments(value: unknown): Attachment[] {
  if (Array.isArray(value)) return value as Attachment[];

  if (value && typeof value === "object") {
    const response = value as Record<string, unknown>;

    if (Array.isArray(response.items)) return response.items as Attachment[];
    if (Array.isArray(response.data)) return response.data as Attachment[];
    if (Array.isArray(response.attachments))
      return response.attachments as Attachment[];
  }

  throw new TypeError("IMC API returned an unexpected response shape");
}

export async function GetImcCollections(): Promise<Attachment[]> {
  try {
    const base = IS_DEV ? "https://localhost:8080" : "https://api.imc.yz13.dev";
    const response = await fetch(
      new URL(
        "/v1/collections/6a66def2-f4c1-4909-b2ec-6daffc26d25b/attachments",
        base,
      ),
    );

    if (!response.ok) {
      throw new Error(`IMC API request failed with status ${response.status}`);
    }

    return getAttachments(await response.json());
  } catch (error) {
    console.warn(error);
    return [];
  }
}

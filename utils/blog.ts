import z from "zod";



export const meta = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()).optional(),
  authors: z.array(z.string()).optional(),
  date: z.string(),
  pinned: z.boolean().optional(),
  published: z.boolean().optional(),
  banner: z.string().optional(),
  url: z.url().optional(),
  data: z.record(z.string(), z.any()).optional(),
  items: z.array(z.string()).optional(),
})

export type BlogMeta = z.infer<typeof meta>;

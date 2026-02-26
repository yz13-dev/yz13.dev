import { meta } from "@/utils/blog";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/mdx",
  docs: {
    async: true,
    schema: meta
  },
});

export default defineConfig();

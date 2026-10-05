import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import type { GenerateDescription, GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Posts, generatePostTitle, generatePostURL } from "@/collections/Posts";
import type { Post } from "@/payload-types";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateTitle: GenerateTitle<Post> = ({ doc }) => generatePostTitle(doc?.title);

const generateDescription: GenerateDescription<Post> = ({ doc }) => doc?.excerpt ?? "";

const generateURL: GenerateURL<Post> = ({ doc }) => generatePostURL(doc?.slug);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, Posts],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    seoPlugin({
      generateTitle,
      generateDescription,
      generateURL,
    }),
  ],
});

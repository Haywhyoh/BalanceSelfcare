import type { CollectionConfig } from "payload";

import { authenticated } from "@/access/authenticated";

/**
 * Staff accounts for the admin panel. There is no public registration —
 * the first account is created at /admin on first run, and every
 * account after that must be created by an already-authenticated admin.
 */
export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email"],
  },
  auth: true,
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Shown publicly as the article byline.",
      },
    },
    // email + password are added automatically by `auth: true`
  ],
};

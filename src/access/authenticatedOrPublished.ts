import type { AccessArgs, Where } from "payload";
import type { User } from "@/payload-types";

type IsAuthenticatedOrPublished = (args: AccessArgs<User>) => boolean | Where;

/**
 * Signed-in staff can read drafts and published docs.
 * Everyone else can only read documents with `_status: 'published'`.
 */
export const authenticatedOrPublished: IsAuthenticatedOrPublished = ({ req: { user } }) => {
  if (user) return true;

  return {
    _status: {
      equals: "published",
    },
  };
};

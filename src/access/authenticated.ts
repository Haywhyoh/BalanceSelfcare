import type { AccessArgs } from "payload";
import type { User } from "@/payload-types";

type IsAuthenticated = (args: AccessArgs<User>) => boolean;

/** Only signed-in staff (Payload `users`) may perform this action. */
export const authenticated: IsAuthenticated = ({ req: { user } }) => {
  return Boolean(user);
};

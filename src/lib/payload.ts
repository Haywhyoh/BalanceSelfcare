import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Cached Payload Local API client. `getPayload` memoizes internally per
 * config, so calling this repeatedly across Server Components is cheap.
 */
export function getPayloadClient() {
  return getPayload({ config });
}

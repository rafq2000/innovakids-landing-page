import { redirect } from "next/navigation"

// 301 Redirect: /colombia → /co
// Reason: URL cannibalization detected in GSC. Both /colombia and /co
// compete for the same keywords, causing Colombia's position to drop from 5.2 to 47.5.
// All content has been consolidated into /co.
export default function ColombiaRedirect() {
  redirect("/co")
}

import { serve } from "inngest/edge.js";
import { inngest } from "../lib/inngest/client.js";
import { accountVerificationEmail } from "../lib/inngest/functions.js";

export default {
  method: "ALL",
  path: "/api/inngest",
  handler: serve(inngest, [accountVerificationEmail]),
};

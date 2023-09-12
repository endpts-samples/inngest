import crypto from "crypto";
import { sendVerificationEmail } from "../accounts.js";
import { inngest } from "./client.js";

export const accountVerificationEmail = inngest.createFunction(
  { name: "Send Account Verification Email" },
  { event: "dashboard/account.created" },
  async ({ event }) => {
    // To keep the code simple, we'll simply generate a random token
    const token = crypto.randomBytes(32).toString("hex");

    await sendVerificationEmail(event.data.email, token);
  }
);

import crypto from "crypto";
import { sendVerificationEmail } from "../accounts.js";
import { inngest } from "./client.js";

export const accountVerificationEmail = inngest.createFunction(
  { name: "Send Account Verification Email" },
  { event: "dashboard/account.created" },
  async ({ event }) => {
    /**
     * 1. Fetch the account from our database
     * 2. Check the account's email_verified field
     * 3. If the account is already verified, return
     * 4. If the account is not verified, generate a verification token
     * 5. Store the verification token in our database
     * 6. Send the verification email to the user using the token
     */

    // To keep the code simple, we'll simply generate a random token
    const token = crypto.randomBytes(32).toString("hex");

    await sendVerificationEmail(event.data.email, token);
  }
);

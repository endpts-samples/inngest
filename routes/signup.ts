import { createAccount } from "../lib/accounts.js";
import { inngest } from "../lib/inngest/client.js";
import { Route } from "@endpts/types";

export default {
  method: "POST",
  path: "/signup",
  async handler(req) {
    const { email } = await req.json();

    // persist the email and password in our database
    const account = await createAccount(email);

    await inngest.send({
      name: "dashboard/account.created",
      data: {
        account_id: account.id,
        email: account.email,
      },
    });

    return Response.json({
      id: account.id,
      email: account.email,
      email_verified: account.email_verified,
    });
  },
} satisfies Route;

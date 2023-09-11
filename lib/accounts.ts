import crypto from "crypto";

interface Account {
  id: string;
  email: string;
  email_verified: boolean;
}

export async function createAccount(email: string): Promise<Account> {
  return {
    id: crypto.randomUUID(),
    email,
    email_verified: false,
  };
}

export async function sendVerificationEmail(email: string, token: string) {
  // To keep the code simple, we'll simply log a message to the console
  // In practice, we would send an email to the user using some email service (SES, Resend, etc..)
  console.log(`Account verification email sent:`);
  console.log(`  To: ${email}`);
  console.log(`  Token: ${token}`);

  return;
}

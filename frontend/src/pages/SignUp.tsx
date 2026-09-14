import { SignUp } from "@clerk/clerk-react";

export function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface py-12">
      <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" fallbackRedirectUrl="/dashboard" />
    </main>
  );
}

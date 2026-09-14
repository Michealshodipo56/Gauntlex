import { SignIn } from "@clerk/clerk-react";
import { useSearchParams } from "react-router-dom";

export function SignInPage() {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") ?? "/dashboard";

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface py-12">
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl={redirectUrl} />
    </main>
  );
}

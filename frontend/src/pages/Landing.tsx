import { SignInButton, SignUpButton } from "@clerk/clerk-react";

export function Landing() {
  return (
    <main>
      <h1>Gauntlex</h1>
      <p>An AI-guided, project-based coding education platform.</p>
      <SignInButton mode="modal">
        <button type="button">Sign in</button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button type="button">Sign up</button>
      </SignUpButton>
    </main>
  );
}

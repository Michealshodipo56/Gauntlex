import { SignedIn, SignedOut } from "@clerk/clerk-react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to={`/sign-in?redirect_url=${encodeURIComponent(location.pathname)}`} replace />
      </SignedOut>
    </>
  );
}

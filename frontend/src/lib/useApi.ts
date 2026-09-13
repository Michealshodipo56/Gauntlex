import { useAuth } from "@clerk/clerk-react";
import { useCallback } from "react";
import { apiFetch } from "./api";

/** Returns a fetch function pre-wired with the current Clerk session token. */
export function useApi() {
  const { getToken } = useAuth();

  return useCallback(
    async <T,>(path: string, init?: RequestInit) => {
      const token = await getToken();
      return apiFetch<T>(path, token, init);
    },
    [getToken],
  );
}

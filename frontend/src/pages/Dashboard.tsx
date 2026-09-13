import { useEffect, useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import { useApi } from "../lib/useApi";
import type { Subject } from "../lib/types";

export function Dashboard() {
  const api = useApi();
  const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api<Subject>("/api/me/current-subject")
      .then(setCurrentSubject)
      .catch((err) => setError(err.message));
  }, [api]);

  return (
    <main>
      <header>
        <h1>Gauntlex</h1>
        <UserButton />
      </header>
      {error && <p role="alert">Could not load current task: {error}</p>}
      {currentSubject ? (
        <section>
          <h2>{currentSubject.title}</h2>
          <p>Subject: {currentSubject.slug}</p>
        </section>
      ) : (
        !error && <p>Loading current task…</p>
      )}
    </main>
  );
}

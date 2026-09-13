// Mirrors the backend data model (see backend/internal/store and
// 01-CURRICULUM-MAP.md §7) — keep in sync manually until we generate this.

export type PhaseType = "piscine" | "project_phase" | "branch";

export interface Track {
  id: string;
  name: string;
  orderIndex: number;
}

export interface Phase {
  id: string;
  trackId: string;
  name: string;
  orderIndex: number;
  phaseType: PhaseType;
}

export interface Subject {
  id: string;
  phaseId: string;
  slug: string;
  title: string;
  orderIndex: number;
  readmePath: string;
  hasAutomatedTests: boolean;
  optional: boolean;
}

export type ProgressStatus =
  | "locked"
  | "unlocked"
  | "submitted"
  | "auditing"
  | "completed";

export interface UserProgress {
  subjectId: string;
  status: ProgressStatus;
  attempts: number;
  updatedAt: string;
}

export interface GuideMessage {
  role: "user" | "guide";
  content: string;
  createdAt: string;
}

export interface AuditQuestion {
  id: string;
  question: string;
}

export interface SubmissionResult {
  passed: boolean;
  output: string;
}

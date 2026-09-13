package store

import "time"

type PhaseType string

const (
	PhasePiscine      PhaseType = "piscine"
	PhaseProjectPhase PhaseType = "project_phase"
	PhaseBranch       PhaseType = "branch"
)

type ProgressStatus string

const (
	StatusLocked    ProgressStatus = "locked"
	StatusUnlocked  ProgressStatus = "unlocked"
	StatusSubmitted ProgressStatus = "submitted"
	StatusAuditing  ProgressStatus = "auditing"
	StatusCompleted ProgressStatus = "completed"
)

// Confidence carries through the curriculum map's confidence grading
// (see 01-CURRICULUM-MAP.md §7) so the admin tooling and, eventually, any
// user-facing surface can distinguish confirmed ordering from inference.
type Confidence string

const (
	ConfidenceConfirmed Confidence = "confirmed"
	ConfidenceHigh      Confidence = "high"
	ConfidenceMedium    Confidence = "medium"
	ConfidenceLow       Confidence = "low"
)

type Track struct {
	ID         string
	Name       string
	OrderIndex int
}

type Phase struct {
	ID         string
	TrackID    string
	Name       string
	OrderIndex int
	PhaseType  PhaseType
}

type Subject struct {
	ID                  string
	PhaseID             string
	Slug                string
	Title               string
	OrderIndex          int
	ReadmePath          string
	AuditPath           string
	HasAutomatedTests   bool
	Optional            bool
	Confidence          Confidence
	PrerequisiteSubjIDs []string
}

type UserProgress struct {
	UserID    string
	SubjectID string
	Status    ProgressStatus
	Attempts  int
	UpdatedAt time.Time
}

type Attempt struct {
	ID          string
	UserID      string
	SubjectID   string
	SubmittedAt time.Time
	TestsPassed bool
	AuditPassed *bool // nil until the AI Auditor has run
}

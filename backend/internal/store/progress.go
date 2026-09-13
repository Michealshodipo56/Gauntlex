package store

import (
	"context"
	"errors"
	"fmt"

	"github.com/jackc/pgx/v5"
)

var ErrNoCurrentSubject = errors.New("user has no unlocked subject (progress not initialized)")

// CurrentSubjectForUser returns the subject the user is currently unlocked
// on, i.e. the lowest order_index subject across all tracks/phases whose
// progress row is "unlocked" (not yet completed).
func (s *Store) CurrentSubjectForUser(ctx context.Context, userID string) (*Subject, error) {
	const q = `
		SELECT s.id, s.phase_id, s.slug, s.title, s.order_index,
		       s.readme_path, s.audit_path, s.has_automated_tests,
		       s.optional, s.confidence
		FROM subjects s
		JOIN user_progress up ON up.subject_id = s.id
		JOIN phases p ON p.id = s.phase_id
		JOIN tracks t ON t.id = p.track_id
		WHERE up.user_id = $1 AND up.status = 'unlocked'
		ORDER BY t.order_index, p.order_index, s.order_index
		LIMIT 1
	`
	row := s.pool.QueryRow(ctx, q, userID)

	var subj Subject
	err := row.Scan(&subj.ID, &subj.PhaseID, &subj.Slug, &subj.Title, &subj.OrderIndex,
		&subj.ReadmePath, &subj.AuditPath, &subj.HasAutomatedTests, &subj.Optional, &subj.Confidence)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil, ErrNoCurrentSubject
	}
	if err != nil {
		return nil, fmt.Errorf("query current subject: %w", err)
	}
	return &subj, nil
}

// EnsureUserInitialized seeds a brand-new user's progress with the very
// first subject unlocked, if they have no progress rows at all yet.
func (s *Store) EnsureUserInitialized(ctx context.Context, userID string) error {
	const checkQ = `SELECT EXISTS(SELECT 1 FROM user_progress WHERE user_id = $1)`
	var exists bool
	if err := s.pool.QueryRow(ctx, checkQ, userID).Scan(&exists); err != nil {
		return fmt.Errorf("check user progress: %w", err)
	}
	if exists {
		return nil
	}

	const firstSubjectQ = `
		SELECT s.id FROM subjects s
		JOIN phases p ON p.id = s.phase_id
		JOIN tracks t ON t.id = p.track_id
		ORDER BY t.order_index, p.order_index, s.order_index
		LIMIT 1
	`
	var firstSubjectID string
	if err := s.pool.QueryRow(ctx, firstSubjectQ).Scan(&firstSubjectID); err != nil {
		return fmt.Errorf("find first subject: %w", err)
	}

	const insertQ = `
		INSERT INTO user_progress (user_id, subject_id, status, attempts)
		VALUES ($1, $2, 'unlocked', 0)
	`
	if _, err := s.pool.Exec(ctx, insertQ, userID, firstSubjectID); err != nil {
		return fmt.Errorf("insert initial progress: %w", err)
	}
	return nil
}

-- Initial schema for Gauntlex, matching the data model proposed in
-- 01-CURRICULUM-MAP.md §7 (Track -> Phase -> Subject, with per-user
-- progress and attempt history).

CREATE TABLE tracks (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name        text NOT NULL,
    order_index integer NOT NULL,
    UNIQUE (order_index)
);

CREATE TABLE phases (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    track_id    uuid NOT NULL REFERENCES tracks (id) ON DELETE CASCADE,
    name        text NOT NULL,
    order_index integer NOT NULL,
    phase_type  text NOT NULL CHECK (phase_type IN ('piscine', 'project_phase', 'branch')),
    UNIQUE (track_id, order_index)
);

CREATE TABLE subjects (
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    phase_id            uuid NOT NULL REFERENCES phases (id) ON DELETE CASCADE,
    slug                text NOT NULL,
    title               text NOT NULL,
    order_index         integer NOT NULL,
    readme_path         text NOT NULL,
    audit_path          text,
    has_automated_tests boolean NOT NULL DEFAULT false,
    optional            boolean NOT NULL DEFAULT false,
    confidence          text NOT NULL DEFAULT 'medium' CHECK (confidence IN ('confirmed', 'high', 'medium', 'low')),
    UNIQUE (phase_id, order_index),
    UNIQUE (slug)
);

CREATE TABLE subject_prerequisites (
    subject_id       uuid NOT NULL REFERENCES subjects (id) ON DELETE CASCADE,
    prerequisite_id  uuid NOT NULL REFERENCES subjects (id) ON DELETE CASCADE,
    PRIMARY KEY (subject_id, prerequisite_id)
);

-- user_id is the Clerk user ID (external string identifier, not a local FK).
CREATE TABLE user_progress (
    user_id    text NOT NULL,
    subject_id uuid NOT NULL REFERENCES subjects (id) ON DELETE CASCADE,
    status     text NOT NULL CHECK (status IN ('locked', 'unlocked', 'submitted', 'auditing', 'completed')),
    attempts   integer NOT NULL DEFAULT 0,
    updated_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, subject_id)
);

CREATE TABLE attempts (
    id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id      text NOT NULL,
    subject_id   uuid NOT NULL REFERENCES subjects (id) ON DELETE CASCADE,
    submitted_at timestamptz NOT NULL DEFAULT now(),
    tests_passed boolean NOT NULL,
    audit_passed boolean -- NULL until the AI Auditor has evaluated this attempt
);

-- Guide chat history, kept separate from audit context per the platform's
-- core design rule: the Guide must never see audit questions (Gauntlex.md).
CREATE TABLE guide_messages (
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id    text NOT NULL,
    subject_id uuid NOT NULL REFERENCES subjects (id) ON DELETE CASCADE,
    role       text NOT NULL CHECK (role IN ('user', 'guide')),
    content    text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_user_progress_user_status ON user_progress (user_id, status);
CREATE INDEX idx_attempts_user_subject ON attempts (user_id, subject_id);
CREATE INDEX idx_guide_messages_user_subject ON guide_messages (user_id, subject_id, created_at);

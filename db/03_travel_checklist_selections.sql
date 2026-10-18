BEGIN;

CREATE TABLE IF NOT EXISTS www.travel_checklist_selections (
    username VARCHAR(255) PRIMARY KEY REFERENCES www.users(username) ON DELETE CASCADE,
    labels JSONB NOT NULL DEFAULT '[]'::jsonb,
    CHECK (jsonb_typeof(labels) = 'array')
);

COMMIT;

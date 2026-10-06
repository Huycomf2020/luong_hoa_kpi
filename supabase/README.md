# KPI 3.0 — Database backend

This directory contains the database schema and server implementation for the KPI web application. It contains no personnel records, password values, session tokens, private source-file identifiers, or server API keys.

Operational data is accessed through the authenticated server API. The browser receives only the data permitted by the user's assigned role and organizational scope. Browser roles have no direct access to operational tables. Server keys must remain in the deployment environment.

The scoring and approval engine is preserved from the validated reference implementation. Each request has isolated state. Writes use an atomic transaction with revision and session checks; bulk operations preserve preview, per-item decisions, version checks and idempotency.

Existing evidence links remain supported. New optional evidence is private and requires permission checks before a temporary viewing link is issued.

## Maintaining the domain

`functions/kpi-api/domain.js` is generated; do not edit it manually.

```
node kpi-v2/supabase/functions/kpi-api/build-domain.cjs
node kpi-v2/tests/backend.test.cjs
node kpi-v2/tests/supabase-workflows.test.mjs
node kpi-v2/tests/ui.test.cjs
```

The optional source-comparison test needs a private, sanitized snapshot supplied through `KPI_SOURCE_SNAPSHOT`. Never commit that snapshot or import payloads.

Deploy the server entry point and generated domain together. The function checks application sessions itself. The client uses a publishable key, never a server key. Source-system reconciliation and credential migration are managed in the protected environment; the old source is not a second live writer.

See the project validation notes for measured performance and remaining limits. A synthetic burst test does not replace ongoing monitoring of real devices and networks.

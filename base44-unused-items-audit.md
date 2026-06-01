---
title: "Base44 Unused Items Audit — Find Dead Code, Stale Data & Hidden Cruft"
slug: "base44-unused-items-audit"
category: "Debugging"
published: "2026-04-30"
source_file: "unusedItemsAudit.js"
---

# Base44 Unused Items Audit — Find Dead Code, Stale Data & Hidden Cruft

> Audit your entire Base44 app for unused pages, components, hooks, entities, fields, backend functions, integrations, packages, and stale database records — with confidence levels, evidence, and a safe phased cleanup plan. Audit only, no deletions.

**Category:** Debugging  
**Published:** 2026-04-30  
**Source File:** `unusedItemsAudit.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use Sonnet 4.6 (or Opus for very large apps) and run this prompt as-is. It performs a 12-phase static audit and returns a structured report — it does NOT delete or modify anything. Review the findings, then run the per-category cleanup prompts the report generates at the end. Need help executing the cleanup safely? Book a Kode Sessions call or use the ER Service.

---

## Prompt

You are auditing a Base44 application for unused, orphaned, duplicate, dead, or stale items.

Your job is to scan the full codebase and, where possible, the Base44 database/entity layer. Do not delete or rewrite anything yet. First produce a complete audit report with confidence levels, evidence, and a safe cleanup plan.

Base44 context you must understand before auditing:

Base44 apps are React/Vite applications with a managed Base44 backend. The frontend usually includes:

- React
- React Router
- Vite
- Tailwind CSS
- shadcn/ui
- lucide-react
- custom pages, components, hooks, utilities, and API wrappers

The backend usually includes:

- Base44 Entities as NoSQL/MongoDB-compatible collections
- Built-in authentication
- Row-level and field-level security rules
- Serverless backend functions using the Deno runtime
- Base44 SDK access through entities, functions, auth, integrations, files, and connectors
- Realtime updates through WebSockets
- Built-in integrations such as SendEmail, UploadFile, InvokeLLM, GenerateImage, ExtractDataFromUploadedFile, etc.

Important Base44 usage patterns to check:

- Entity usage may appear as:
  - base44.entities.EntityName.method()
  - base44.asServiceRole.entities.EntityName.method()
  - imports from "@/api/entities"
  - imports from "@/api/integrations"
  - generated SDK/client wrappers
  - dynamic entity references inside functions or strings

- Backend function usage may appear as:
  - base44.functions.invoke("functionName", data)
  - base44.functions.fetch("functionName", options)
  - imports from "@/api/functions"
  - direct URL fetch calls
  - automation/agent references
  - form submission handlers
  - admin actions
  - scheduled jobs
  - webhook handlers

- Pages may be used through:
  - React Router route definitions
  - navigation menus
  - sidebar links
  - protected route wrappers
  - role-based dashboards
  - dynamic imports
  - lazy loading
  - admin-only routes
  - deep links from emails or automations

- Components may be used through:
  - direct imports
  - barrel exports
  - dynamic component maps
  - modals
  - dialogs
  - admin tabs
  - conditional rendering
  - role-based rendering
  - feature flags
  - nested page sections

- Database fields may be used through:
  - direct property access
  - destructuring
  - forms
  - filters
  - sorting
  - table columns
  - charts
  - reports
  - exports
  - backend functions
  - automations
  - generated prompts
  - notification templates
  - email templates
  - analytics logic
  - permissions/security rules

Your audit goal:

Find unused or stale items across the entire app, including but not limited to:

1. Unused pages
2. Unused routes
3. Unused components
4. Unused hooks
5. Unused utilities/helpers
6. Unused context providers
7. Unused API files
8. Unused backend functions
9. Unused entity schemas
10. Unused entity fields
11. Unused database collections
12. Orphaned database records
13. Unused enum/status values
14. Unused permissions/roles
15. Unused RLS/security rules
16. Unused integrations
17. Unused uploaded-file references
18. Unused image/file assets
19. Unused environment variables
20. Unused package dependencies
21. Duplicate components or duplicate logic
22. Dead form fields
23. Dead dashboard widgets
24. Dead admin tools
25. Dead notification/email templates
26. Dead automation/webhook logic
27. Dead analytics fields
28. Dead feature flags
29. Stale test/demo/sample data references
30. Generated files that are no longer referenced

Hard rules:

- Do not delete anything.
- Do not rename anything.
- Do not modify schemas.
- Do not remove database fields.
- Do not remove dependencies.
- Do not assume something is unused just because it is not directly imported once.
- Treat dynamic references, string-based references, role-based pages, automations, backend functions, and deep links as possible usage.
- If you are not sure, mark the item as "Needs Review" instead of "Safe to Remove."
- Every finding must include evidence.
- Every finding must include a confidence level.
- Every suggested removal must include rollback risk.

Start with a full app inventory.

Phase 1: Inventory the codebase

Scan every file before making conclusions.

Create an inventory of:

- All pages
- All routes
- All components
- All hooks
- All utilities
- All context providers
- All layout files
- All API/client files
- All entity schema files
- All backend function files
- All integration files
- All config files
- All assets
- All environment variables
- All dependencies in package.json

For each item, record:

- File path
- Export name
- Import references
- Runtime references
- Route references
- Entity references
- Function references
- Confidence that it is used or unused

Phase 2: Build a usage graph

Build a relationship graph that maps:

- Page → components used
- Page → hooks used
- Page → entities queried
- Page → backend functions invoked
- Page → integrations invoked
- Component → child components used
- Component → hooks/utilities used
- Function → entities used
- Function → integrations used
- Function → environment variables used
- Entity → fields used in frontend
- Entity → fields used in backend functions
- Entity → fields used in forms
- Entity → fields used in filters/search/sort
- Entity → fields used in reports/exports/charts
- Entity → fields used in permissions/security logic
- Entity → fields used in automations or generated prompts

Do not rely only on imports. Also search for:

- exact file names
- exact component names
- exact function names
- exact entity names
- lowercase variants
- snake_case variants
- kebab-case variants
- string references
- route path references
- dynamic maps
- object keys
- config arrays
- dashboard tab definitions
- navigation arrays
- role permission maps
- email template links
- automation names
- webhook references

Phase 3: Audit pages and routes

For every page file:

Check whether it is referenced by:

- React Router
- route config
- navigation
- sidebar
- dashboard tabs
- protected route wrappers
- role-based menus
- direct links
- redirect logic
- email links
- backend-generated links
- automations
- onboarding flows
- admin flows

Classify each page as:

- Active
- Probably active
- Admin-only
- Role-based
- Deep-link only
- Duplicate
- Deprecated
- Unused
- Needs review

For unused or suspicious pages, provide:

- file path
- why it appears unused
- all searches performed
- possible risk
- whether it is safe to remove
- recommended action

Phase 4: Audit components

For every component:

Check whether it is:

- directly imported
- exported through index/barrel files
- dynamically referenced
- used inside component maps
- used as a modal/dialog/drawer
- used in admin-only flows
- used in role-based flows
- duplicated by another component
- replaced by a newer component
- only used by an unused page

Classify each component as:

- Active
- Shared/core
- Page-specific
- Admin-only
- Duplicate
- Deprecated
- Unused
- Needs review

For duplicates, compare:

- purpose
- props
- UI behavior
- entity/function usage
- differences
- which version appears newer or safer

Phase 5: Audit hooks and utilities

For each hook/helper/util:

Check:

- imports
- dynamic references
- duplicate logic
- similar utilities
- old naming
- unused exports
- dead functions inside active files
- helper functions used only by unused files

Classify each as:

- Active
- Partially unused
- Duplicate
- Deprecated
- Unused
- Needs review

Phase 6: Audit Base44 entities

Find all entity schemas. They may exist in:

- base44/entities
- src/entities
- generated entity files
- API/entity wrapper files
- schema/config directories

For each entity, identify:

- entity name
- schema fields
- required fields
- default fields
- enum/status fields
- relationships to other entities
- frontend usage
- backend function usage
- form usage
- table/list usage
- analytics/reporting usage
- security/permission usage
- automation usage
- integration usage

For each entity, classify:

- Actively used
- Used only by backend functions
- Used only by admin
- Used only for analytics/logging
- Used only for historical records
- Legacy/deprecated
- Unused
- Needs review

Important:

Do not mark an entity unused unless you have searched for all of these patterns:

- EntityName
- entityName
- entity_name
- entity-name
- plural form
- singular form
- display labels
- collection-style references
- imports from "@/api/entities"
- base44.entities.EntityName
- base44.asServiceRole.entities.EntityName
- string references inside functions
- references inside prompts/templates
- references inside automation/webhook logic

Phase 7: Audit entity fields

For each field in each entity:

Search whether the field is used in:

- create forms
- edit forms
- filters
- sorting
- search
- table columns
- cards
- detail views
- charts
- reports
- exports
- backend functions
- automations
- webhooks
- email templates
- AI prompts
- validation logic
- permissions
- role checks
- status workflows
- migration/backfill logic
- integrations
- imported/exported CSV logic
- file upload metadata
- relationship joins

Classify each field as:

- Active
- Write-only
- Read-only
- Backend-only
- Analytics-only
- Legacy
- Empty in database
- Unused in code
- Needs review

For suspicious fields, report:

- entity name
- field name
- schema location
- whether code references exist
- whether database values exist, if database access is available
- whether it is safe to hide from UI
- whether it is safe to stop writing
- whether it is safe to remove later
- migration risk

Phase 8: Audit database records if database access is available

If you can inspect the Base44 database/data layer, analyze:

- document counts per entity
- records with missing required fields
- records with null/empty stale fields
- records referencing deleted/missing parent records
- orphaned child records
- records tied to deleted users
- uploaded file URLs not referenced by any active records
- duplicate records
- old test records
- records with old status values no longer used in code
- records with old role values no longer used
- records that appear generated during testing
- records that belong to deprecated workflows

If database access is not available, clearly say:

"Database-level cleanup cannot be confirmed from code alone. This audit can identify unused schemas and fields, but not safely confirm unused records without live data access."

Do not recommend deleting live records unless:

- no code references exist
- no relationship references exist
- record is clearly test/demo/sample data
- record has no business/audit/history value
- rollback/export plan is provided

Phase 9: Audit backend functions

For each backend function:

Check whether it is invoked by:

- frontend code
- base44.functions.invoke()
- base44.functions.fetch()
- API wrappers
- forms
- buttons
- automations
- webhooks
- agents
- scheduled jobs
- external services
- email links
- admin tools
- other backend functions

Inside each function, identify:

- entities used
- fields used
- integrations used
- env vars used
- files used
- auth context used
- service role usage
- external API usage
- response shape
- frontend consumers

Classify each function as:

- Active
- Frontend-invoked
- Automation-invoked
- Webhook-only
- Admin-only
- Service-role-only
- Deprecated
- Duplicate
- Unused
- Needs review

Do not mark a function unused if it could be called externally or by automation unless you have searched for webhook/scheduled/agent references.

Phase 10: Audit integrations

Find all uses of:

- InvokeLLM
- SendEmail
- UploadFile
- GenerateImage
- ExtractDataFromUploadedFile
- connectors
- custom integrations
- OAuth connectors
- API keys
- external fetch calls

For each integration, report:

- where it is used
- what entity/function/page depends on it
- whether the result is stored
- whether the result field is still used
- whether the integration appears duplicated
- whether it creates unused data
- whether it uses credits unnecessarily

Phase 11: Audit package dependencies

Review package.json and imports.

For each dependency, classify:

- Used directly
- Used indirectly
- Build/runtime dependency
- Dev-only dependency
- Possibly unused
- Unused
- Needs review

Do not mark packages unused if they are used through:

- Vite plugins
- Tailwind config
- shadcn/ui
- PostCSS
- ESLint
- test tooling
- generated files
- config files
- dynamic imports

Phase 12: Produce the final report

Return the audit in this exact structure:

# Base44 Unused Items Audit

## 1. Executive Summary

Include:

- total files scanned
- total pages found
- total components found
- total entities found
- total backend functions found
- total integrations found
- total suspicious unused items
- total safe-to-remove candidates
- total needs-review candidates
- database access status

## 2. Safe-To-Remove Candidates

Only include items with high confidence.

For each item:

- Type:
- Name:
- Path:
- Evidence:
- Why it appears unused:
- Searches performed:
- Risk level:
- Rollback plan:
- Recommended cleanup action:

## 3. Needs-Review Candidates

For each item:

- Type:
- Name:
- Path:
- Why it is suspicious:
- Why it cannot be confirmed:
- What needs to be manually checked:
- Risk level:
- Recommendation:

## 4. Duplicate or Replaced Items

For each duplicate:

- Old item:
- Newer item:
- Similarity:
- Differences:
- Which one appears active:
- Recommendation:

## 5. Unused or Suspicious Entity Schemas

For each entity:

- Entity name:
- Schema path:
- Code references found:
- Backend references found:
- UI references found:
- Database records found, if available:
- Risk level:
- Recommendation:

## 6. Unused or Suspicious Entity Fields

Group by entity.

For each field:

- Field name:
- Code references:
- Form references:
- Backend references:
- Database values, if available:
- Risk level:
- Recommendation:

## 7. Backend Function Audit

For each suspicious function:

- Function name:
- Path:
- Invocation references:
- Entities touched:
- Integrations used:
- Auth/service-role behavior:
- Risk level:
- Recommendation:

## 8. Integration/Credit Waste Audit

List any integrations that appear unused, duplicated, or running where they are not needed.

Include:

- integration name
- where it is called
- possible waste
- safer replacement
- recommendation

## 9. Dependency Audit

List unused or suspicious packages.

Include:

- package name
- current evidence
- config references checked
- risk
- recommendation

## 10. Database Cleanup Notes

If database access is available, include:

- orphaned records
- duplicate records
- test/demo records
- stale status values
- stale role values
- uploaded files with no references

If database access is not available, include:

- what could not be verified
- what queries/checks should be run manually

## 11. Cleanup Order

Create a safe phased cleanup order:

Phase 1: remove obvious dead imports and dead local functions  
Phase 2: remove unused components/pages with no route or dynamic references  
Phase 3: remove duplicate UI pieces after replacing references  
Phase 4: disable unused backend functions before deleting  
Phase 5: hide deprecated fields from UI before removing schema fields  
Phase 6: export/archive database records before deletion  
Phase 7: remove dependencies last

## 12. Cleanup Prompts

After the audit, generate separate Base44-safe cleanup prompts.

Each cleanup prompt must:

- focus on one category only
- tell the AI to scan first
- make small changes
- preserve design and logic
- avoid database deletion unless explicitly approved
- list exactly what changed
- include rollback notes

Do not perform cleanup yet. Audit first.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

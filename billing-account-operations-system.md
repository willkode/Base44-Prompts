---
title: "Build a Complete Billing & Account Operations System"
slug: "billing-account-operations-system"
category: "App Building"
published: "2026-05-05"
source_file: "billingAccountOperations.js"
---

# Build a Complete Billing & Account Operations System

> Add a full billing and account operations layer to your Base44 app — subscription status, invoice/payment history, failed payment alerts, internal billing notes, plan upgrade/downgrade tools, trial tracking, cancellation requests, and refund workflows — built around your existing app, admin area, and roles.

**Category:** App Building  
**Published:** 2026-05-05  
**Source File:** `billingAccountOperations.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use Claude Sonnet 4.6 for this task. The prompt forces a full app scan first so billing, refunds, and plan controls are wired into your actual entities, roles, and admin patterns instead of a generic template. Run on a stable, checkpointed app. Pairs well with the Admin Foundation, Communications & Alerts, and Reporting & Visibility prompts.

---

## Prompt

Scan my entire Base44 app first so you fully understand how it currently works before making changes.

Act like a senior product engineer, system architect, and Base44 implementation expert. Don't guess. Inspect existing app structure, pages, components, entities, schema, workflows, auth logic, backend functions, automations, email flows, roles, permissions, admin areas, and current billing-related logic before building.

JOB
1. Understand how the app currently works
2. Find the safest, cleanest way to add billing and account operations
3. Implement so they fit the current app
4. Reuse existing patterns/styles/entities/permissions/admin architecture
5. Avoid breaking current flows

BEFORE WRITING CODE
Scan all pages, routes, layouts, navigation, backend functions, entities, automations, integrations, user/account-related logic. Identify whether app has subscriptions/payments/trials/plans/invoices/account status. Identify payment provider if any. Identify roles with billing access. Identify current admin tools to extend. Identify notification/email systems to reuse.

BILLING AND ACCOUNT OPERATIONS

1. SUBSCRIPTION STATUS VIEW
Current status (active/trialing/past_due/canceled/expired/unpaid/paused), current plan, billing cycle, renewal/expiration date, access active or limited based on status.

2. INVOICE OR PAYMENT STATUS
Recent invoices/payments: number, date, amount, status, payment method reference. Statuses: paid/pending/failed/refunded/disputed/void. Admin review full billing history. Users see own history if fits app.

3. FAILED PAYMENT ALERTS
Detect failed/past due. Admin alerts. User-facing warning. Status labels + dates. Clear workflow for what happens after failure. Reuse existing notification patterns. Optional email alert flow.

4. MANUAL BILLING NOTES
Internal notes on account/billing record. Private, not visible to end users. Created by + date. Note history. Follow existing internal notes pattern.

5. PLAN UPGRADE OR DOWNGRADE TOOLS
Admins change plan manually. Self-service if app supports. Show current plan + target plan. Track effective date. Store who made change. Audit logging for up/downgrades. Respect existing roles + account access rules.

6. TRIAL STATUS TRACKING
On trial flag, start/end date, days remaining, expired state. Admins manually adjust/review. Trial filters in admin. Trial conversion state if useful.

7. CANCELLATION REQUEST WORKFLOW
User submits if direct cancellation not supported. Reason. Admin review/approve/deny/complete. Statuses: new/under_review/approved/completed/denied. Request + resolution dates. Notify staff. History tied to account.

8. REFUND REQUEST HANDLING
User or admin submits. Capture reason, amount, related invoice/payment, notes. Admin workflow: new/under_review/approved/denied/refunded. Internal notes + decision history. Who handled + when. Audit trail.

IMPLEMENTATION
- Map current app first, explain where features should live
- Use existing design/component patterns/naming
- Extend existing admin area, else create in cleanest logical place
- Protect sensitive billing behind role-based access
- Users see only own info
- Internal notes/refund tools/plan controls staff-admin only
- Audit log plan changes, trial edits, cancellation handling, refund decisions, billing note creation
- Reuse status badges, table styles, forms, detail layouts
- Simple UX for admins

DATA / ENTITY EXPECTATIONS
Create cleanly and relate properly if missing: Subscription, BillingProfile, Invoice, PaymentRecord, BillingNote, TrialStatus, CancellationRequest, RefundRequest, BillingAuditLog. Link properly to user/account/client/workspace/organization.

ADMIN FEATURES
Billing overview, search/filtering, status filters, failed payment queue, trial tracking, cancellation requests, refund requests, billing notes, plan change tools, account timeline/history.

USER FEATURES (if applicable)
Current subscription/plan/trial status, payment/invoice history, failed payment warning, request cancellation/refund/plan change.

SECURITY
- No internal notes to users
- No cross-user billing data
- Don't break auth/role logic
- No duplicate billing systems
- No hardcoded provider assumptions
- Integrate with existing provider logic if present
- If no provider, build app-side structure ready for later integration

OUTPUT IN PHASES
1: Audit, summarize current account/billing/admin/user area, implementation plan
2: Entities/fields/relationships/backend functions/permissions
3: UI for admins and users
4: Workflows, notifications, audit logs, status handling
5: Final review — permissions correct, flows work, statuses right, nothing broken, design consistent

IMPORTANT: Don't stop after analysis — implement. Don't replace working billing features unnecessarily. Prefer extending. Keep code/schema/UI consistent.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

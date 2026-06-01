---
title: "Add a Complete Onboarding & Retention System"
slug: "complete-onboarding-and-retention-system"
category: "App Building"
published: "2026-04-30"
source_file: "onboardingRetention.js"
---

# Add a Complete Onboarding & Retention System

> Add a tailored onboarding and retention layer to your Base44 app — guided onboarding flow, setup checklist, welcome emails, missing-step reminders, health scoring, churn warnings, and re-engagement workflows. Scans your app first so everything is built around your actual activation moment, not a generic template.

**Category:** App Building  
**Published:** 2026-04-30  
**Source File:** `onboardingRetention.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use Sonnet 4.6 for this build. The prompt forces a full app scan first so onboarding, health scoring, churn detection, and re-engagement are tailored to your actual user flows and activation moment instead of a generic template. Run the scan/plan phase first, review what it intends to add, then approve the build. Make sure your existing email provider (Resend, Mailchimp, etc.) is connected before triggering reminder/re-engagement flows. Need help wiring it up safely? Book a Kode Sessions call or use the ER Service.

---

## Prompt

Scan my entire Base44 app first so you fully understand how it currently works before making changes.

Analyze existing app structure, pages, components, entities, roles, automations, backend functions, forms, navigation, current user flows so anything you add fits naturally.

Don't guess. Don't overwrite working logic unless required. Reuse patterns/entities/styling/permissions/architecture.

GOAL: Add a complete onboarding and retention system.

FIRST
1. Scan and document how the app works
- All user roles
- How new users are created
- Current signup/login/profile/first-use flow
- Entities/fields for users/accounts/plans/subscriptions/activity/status/engagement
- Backend functions/automations/email systems in place
- Existing admin area (extend if possible)
- The main "activation moment" — the key action a user must complete to get value

2. Based on the scan, design onboarding and retention around the ACTUAL purpose of the app
- Onboarding guides users to most important setup steps
- Retention tracks engagement, identifies drop-off risk, brings users back

FEATURES TO ADD

A. GUIDED ONBOARDING FLOW
Appears after signup or first login. Multi-step. Each step explains next action. Based on actual setup needs. Allow skip. Save progress to continue later. Show progress clearly. Auto-complete based on user actions. Don't force steps that don't apply to role/account type.

B. ADMIN VIEW OF ONBOARDING PROGRESS
Admin dashboard section. Each user's status. Complete/incomplete/skipped/stuck steps. Filter by status/signup date/role/account type/progress level. Users who started but never finished. Users who completed and became active. Useful for support/ops teams.

C. WELCOME EMAILS OR SEQUENCES
Send welcome email after signup. Optional short onboarding sequence. Emails match app purpose and guide toward completion. Reuse existing email provider. Store send history. Prevent duplicates. Admins see whether emails were sent.

D. SETUP CHECKLIST
Visible checklist in logical place (dashboard/onboarding/account home). Items reflect most important setup steps. Auto-update as users complete actions. Completed + remaining. Admins define/adjust checklist logic if supported. Useful even after guided onboarding closed.

E. MISSING STEP REMINDERS
Detect incomplete onboarding/critical setup. Reminders by email and/or in-app (whichever supported). Trigger based on time delays + missing actions. Don't send to users who completed required steps. Admin visibility into reminder status.

F. HEALTH SCORE OR ENGAGEMENT TRACKING
Simple user health score based on real usage. Signals: onboarding completion, recent activity, feature usage, logins, setup completion, account progress. Understandable, not overly complex. Show in admin area. Show supporting signals/reasons behind score. Scoring logic editable in code, structured clearly.

G. CHURN WARNING SIGNS
Detect: incomplete onboarding, low activity, inactivity for a period, unfinished setup, declining usage, failure to reach activation milestones. Surface in admin area. Quickly identify users needing outreach. Show why user is at risk.

H. RE-ENGAGEMENT WORKFLOWS
Logic to identify inactive/stalled/at-risk users. Trigger re-engagement emails, in-app prompts, or admin follow-up flags. Messages tied to what user has/hasn't completed. Simple, practical, based on current app capabilities. Tracking of when actions triggered.

DATA AND STRUCTURE
Create missing entities/fields/relationships/backend functions/scheduled jobs/automations. Reuse existing user/account entities. Clean/normalized schema. Timestamps for onboarding started/completed, last active, reminder sent, engagement score updated, churn flagged, re-engagement triggered. Track status history. Permissions — admin-only for internal progress/risk/retention data.

ADMIN AND PERMISSIONS
Use existing admin roles. Plug into existing role logic. Protect all admin onboarding/retention views. Users only see their own data. Internal notes, risk flags, operational views admin-only.

UI AND UX
Consistent with current styling. No clutter. Simple clear onboarding. Admin retention reporting useful, not overwhelming. Good empty states, status labels, progress indicators. Clear feedback after actions.

TECHNICAL
Existing Base44 patterns. Reuse components. Reuse email/notification/automation systems. Don't break flows. Don't remove working features. Modular, maintainable.

TESTING
1. New user can sign up and go through onboarding
2. Progress saves correctly
3. Checklist updates based on actions
4. Welcome emails and reminders trigger correctly, no duplicates
5. Admin sees progress
6. Health score updates based on real activity
7. Churn warnings flag right users
8. Re-engagement workflows trigger
9. Permissions enforced
10. Nothing broken

FINAL OUTPUT
1. Summary of how app currently works
2. What onboarding/retention systems added
3. New entities/fields/backend functions/automations/admin views
4. Assumptions made
5. Areas still needing manual review
6. Recommended next improvements

IMPORTANT: Don't give generic onboarding. Tailor everything — onboarding, health scoring, churn detection, re-engagement — to actual purpose and workflows of this app after scanning. Build as if it was in the app from day one.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

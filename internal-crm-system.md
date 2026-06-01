---
title: "Build a Complete Internal CRM System"
slug: "internal-crm-system"
category: "App Building"
published: "2026-04-28"
source_file: "internalCrmSystem.js"
---

# Build a Complete Internal CRM System

> Add a full HubSpot-style internal CRM to your existing Base44 app — leads, contacts, companies, deals, pipelines, activities, tasks, reports, automations, and AI helpers — built natively into your current app without breaking existing flows.

**Category:** App Building  
**Published:** 2026-04-28  
**Source File:** `internalCrmSystem.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use Claude Sonnet 4.6 or Opus for this task. Run the prompt in phases: let the AI scan your full app first (Phase 1), confirm reuse decisions, then proceed with the build. Do NOT run it in one pass on a large existing app — break it into modules (entities → pages → pipeline → activities → reports → automations → AI). Need expert help? Book a Kode Sessions call or use the Hire Me service.

---

## Prompt

I need you to add a complete internal CRM system to my existing Base44 app.

This should be a full lead management, contact management, company management, deal pipeline, sales activity, follow-up, reporting, and automation system similar to HubSpot CRM.

This is an internal business tool.

IMPORTANT:
Before building anything, scan my entire existing app first.

Do not blindly create duplicate systems. Reuse my current authentication, users, roles, navigation, layout, admin dashboard, notifications, file handling, email/SMS integrations, activity logs, and design system wherever possible.

Do not break existing pages, routes, permissions, entities, backend functions, automations, or user flows.

The CRM must feel native to my current app, not like a separate bolted-on product.

---

# PHASE 1 — FULL APP SCAN FIRST

Before making changes, scan the full app:

- Existing pages
- Existing layout system
- Sidebar/header/navigation
- Current user/auth system
- Current role system
- Existing admin tools
- Existing notification system
- Existing email system
- Existing SMS system
- Existing contact/client/customer entities
- Existing lead/customer forms
- Existing file upload/storage patterns
- Existing dashboard/reporting patterns
- Existing activity/audit log patterns
- Existing modals/dialogs
- Existing table/card/list components
- Existing mobile responsiveness
- Existing backend functions
- Existing automations

After scanning, identify:

1. Where the CRM should live in the app navigation
2. Which current entities can be reused
3. Which new entities are required
4. Which existing roles should access the CRM
5. Which pages/components should be reused
6. Which notification/email/SMS systems should be integrated
7. Any naming conflicts
8. Any security risks
9. Any performance concerns before building

Then proceed with the build.

---

# MODULE NAME

Add this internal tool as:

CRM

Navigation label:

CRM

Suggested routes:

/crm
/crm/dashboard
/crm/leads
/crm/contacts
/crm/companies
/crm/deals
/crm/pipeline
/crm/tasks
/crm/activities
/crm/calendar
/crm/lists
/crm/campaigns
/crm/reports
/crm/import
/crm/settings

If my app already has a better routing pattern, follow the existing pattern.

---

# CORE GOAL

Build a full CRM system that lets my team:

- Capture leads
- Manage contacts
- Manage companies/accounts
- Track deals/opportunities
- Build multiple sales pipelines
- Drag deals through pipeline stages
- Assign leads, contacts, companies, and deals to users
- Track calls, emails, meetings, notes, SMS, and tasks
- View full customer timeline/history
- Add tags, lifecycle stages, lead sources, and custom fields
- Score and qualify leads
- Create follow-up tasks
- Manage sales activities
- Automate lead assignment and follow-ups
- Track pipeline revenue
- Forecast revenue
- Generate reports
- Import/export CRM data
- Segment contacts into lists
- Use AI to summarize records, score leads, draft follow-ups, and recommend next steps

---

# USER ROLES AND PERMISSIONS

Use my existing app roles if available.

If needed, support these CRM permissions:

## Super Admin
- Full CRM access
- Manage all leads, contacts, companies, deals, activities, reports, settings, imports, exports, automations, and custom fields
- Delete/archive CRM records
- Manage all pipeline settings
- View all team data

## Admin
- View and manage all CRM records
- Assign owners
- Manage pipelines
- View reports
- Import/export data
- Manage CRM settings except destructive system settings if restricted

## Sales Manager
- View team CRM records
- Manage assigned team members
- Assign leads/deals
- Manage pipelines
- View team reports
- Create reports
- Approve lost/deleted deal changes if required

## Sales Rep
- View assigned leads, contacts, companies, and deals
- Create new leads, contacts, companies, and deals
- Update owned records
- Log activities
- Create tasks
- Move deals through allowed stages
- View personal dashboard and pipeline

## Marketing User
- View leads/contacts
- Create lists/segments
- Manage lead sources, tags, and campaigns
- View marketing attribution
- Cannot delete deals unless also granted sales permission

## Viewer
- Read-only access to allowed CRM records
- Cannot edit, delete, export, or reassign records

---

# CRM ACCESS MODEL

Every CRM record should support ownership and visibility.

Use fields like:
- owner_id
- team_ids
- visibility
- created_by
- updated_by

Visibility options:
- private
- team
- all_crm_users

Rules:
- Super Admin/Admin can see all records
- Sales Managers can see team records
- Sales Reps can see records they own or are assigned to
- Viewers can only see records allowed by role or sharing
- Sensitive notes should only be visible to allowed roles
- Exports should be restricted to Admin/Sales Manager unless otherwise allowed

---

# REQUIRED ENTITIES

Create these entities unless equivalent ones already exist. If equivalent entities exist, extend them safely instead of duplicating.

## CRMLead
first_name, last_name, full_name, email, phone, company_name, job_title, website, lead_status (new/attempted_contact/contacted/qualified/unqualified/converted/lost), lifecycle_stage (subscriber/lead/marketing_qualified_lead/sales_qualified_lead/opportunity/customer/evangelist/other), lead_source (website/referral/social_media/paid_ads/organic_search/email_campaign/event/cold_outreach/partner/manual_entry/other), source_detail, campaign_id, owner_id, assigned_team_id, score, priority (low/medium/high/urgent), qualification_status (unqualified/researching/qualified/disqualified), qualification_notes, budget, expected_value, need, timeline, decision_maker, company_size, industry, location_city, location_state, location_country, timezone, tags, custom_fields, last_contacted_date, next_follow_up_date, converted_contact_id, converted_company_id, converted_deal_id, converted_date, lost_reason, archived, created_by, updated_by, created_date, updated_date.

## CRMContact
first_name, last_name, full_name, email, secondary_email, phone, mobile_phone, job_title, company_id, company_name, owner_id, lifecycle_stage, contact_status (active/inactive/do_not_contact/bounced/unsubscribed), lead_source, source_detail, score, priority, tags, lists, website, linkedin_url, twitter_url, facebook_url, address_line_1, address_line_2, city, state, postal_code, country, timezone, birthday, notes_summary, last_contacted_date, next_follow_up_date, last_activity_date, total_deal_value, open_deal_count, closed_won_deal_count, closed_lost_deal_count, email_opt_in, sms_opt_in, do_not_call, custom_fields, archived, created_by, updated_by, created_date, updated_date.

## CRMCompany
name (required), domain, website, phone, industry, company_size, annual_revenue, owner_id, company_type (prospect/partner/customer/vendor/competitor/other), lifecycle_stage, status (active/inactive/archived), description, address_line_1, address_line_2, city, state, postal_code, country, timezone, linkedin_url, twitter_url, facebook_url, tags, custom_fields, primary_contact_id, contact_count, open_deal_count, total_deal_value, last_contacted_date, next_follow_up_date, last_activity_date, archived, created_by, updated_by, created_date, updated_date.

## CRMDeal
title (required), description, amount, expected_close_date, actual_close_date, pipeline_id, stage_id, stage_name, probability, weighted_value, status (open/won/lost/archived), priority, owner_id, company_id, contact_ids, lead_id, source, campaign_id, products_or_services, deal_type (new_business/renewal/upsell/cross_sell/partnership/other), lost_reason, lost_notes, won_notes, next_step, next_follow_up_date, last_contacted_date, last_activity_date, tags, custom_fields, archived, created_by, updated_by, created_date, updated_date.
Weighted value should calculate from amount and probability.

## CRMPipeline
name (required), description, pipeline_type (sales/onboarding/partnership/renewal/custom), active, default_pipeline, created_by, updated_by, created_date, updated_date.

## CRMPipelineStage
pipeline_id, name (required), description, stage_order, probability, stage_type (open/won/lost), color, is_closed_stage, is_won_stage, active.
Default sales pipeline stages: New Lead, Qualified, Discovery Scheduled, Proposal Sent, Negotiation, Contract Sent, Closed Won, Closed Lost. Allow admins to edit.

## CRMActivity
related_type (lead/contact/company/deal), related_id, lead_id, contact_id, company_id, deal_id, activity_type (note/call/email/sms/meeting/task/status_change/deal_stage_change/assignment_change/file_upload/form_submission/automation/system), title, body, outcome (completed/no_answer/left_voicemail/interested/not_interested/follow_up_needed/booked_meeting/sent_proposal/closed_won/closed_lost/other), direction (inbound/outbound/internal), actor_id, assigned_to, activity_date, due_date, completed, completed_date, mentioned_user_ids, attachment_ids, metadata, created_date.

## CRMTask
title (required), description, task_type (call/email/sms/meeting/follow_up/proposal/contract/general), status (todo/in_progress/completed/cancelled), priority, owner_id, assigned_to, related_type, related_id, lead_id, contact_id, company_id, deal_id, due_date, reminder_date, completed_date, recurring, recurrence_rule, created_by, updated_by, created_date, updated_date.

## CRMNote
related_type, related_id, body (rich text), plain_text_body, author_id, mentioned_user_ids, pinned, private_note, edited, edited_date, deleted, created_date.

## CRMFile
related_type, related_id, uploaded_by, file_name, file_url, file_type, file_size, description, created_date.

## CRMList
name, description, list_type (static/dynamic), object_type (lead/contact/company/deal), filters, member_ids, owner_id, visibility (private/team/all_crm_users), created_by, updated_by, created_date, updated_date.

## CRMTag
name, color, object_types (array), global, created_by, created_date.

## CRMCustomField
object_type, name, field_key, field_type (text/number/date/select/multi_select/checkbox/user/url/currency/phone/email), options, required, show_in_table, show_on_record, filterable, sort_order, active.

## CRMNotification
recipient_id, actor_id, related_type, related_id, notification_type (assigned_lead/assigned_deal/assigned_task/mentioned/follow_up_due/deal_stage_changed/deal_won/deal_lost/lead_converted/file_uploaded/note_added), title, message, read, read_date, action_url, created_date.
If the app already has notifications, integrate with the existing notification entity instead.

## CRMImportJob
object_type, uploaded_by, file_name, file_url, status (uploaded/mapping/processing/completed/failed), total_rows, processed_rows, successful_rows, failed_rows, duplicate_rows, field_mapping, error_log, created_date, completed_date.

## CRMFormSubmission
form_name, source_url, lead_id, contact_id, submitted_data, ip_address, user_agent, referrer, utm_source, utm_medium, utm_campaign, utm_term, utm_content, created_date.

## CRMCampaign
name, description, campaign_type (email/sms/social/paid_ads/event/content/referral/other), status (planned/active/paused/completed/archived), owner_id, start_date, end_date, budget, leads_generated, deals_created, revenue_generated, created_by, updated_by, created_date, updated_date.

---

# REQUIRED PAGES

## 1. CRM Dashboard (/crm/dashboard)
Summary cards: New leads, Open deals, Pipeline value, Weighted pipeline value, Deals won/lost this month, Overdue follow-ups, Tasks due today, Conversion rate, Average deal size.
Charts: Leads by source, Deals by stage, Revenue forecast, Deals won over time, Lead status breakdown, Sales activity by user, Pipeline value by owner.
Sections: My tasks due today, Overdue follow-ups, Recent leads, Recently updated deals, Recent CRM activity, At-risk deals, Unassigned leads.

## 2. Leads Page (/crm/leads)
Table/card view, search, filter (status/lifecycle/source/owner/priority/score/dates/tags), sort, bulk actions (assign/status/tag/list/task/archive/convert), New Lead and Import Leads buttons. Click opens drawer/detail page.

## 3. Lead Detail (/crm/leads/:leadId)
Show lead info, qualification, tags, custom fields, timeline, notes, tasks, emails, calls, SMS, meetings, files, related campaign, conversion panel. Actions: edit, assign, create task, log call/email/SMS, add note, upload file, convert, archive, mark unqualified/lost.
Conversion: create or link contact/company, optionally create deal, carry over notes/activities/tags/files/source/campaign, set status to converted, store converted_*_id.

## 4. Contacts Page (/crm/contacts)
Table, search by name/email/phone/company, filter by owner/lifecycle/status/company/tags/source/dates/opt-ins, sort, bulk actions, New Contact, Import Contacts.

## 5. Contact Detail (/crm/contacts/:contactId)
Full profile, social, address, custom fields, related deals/company, timeline, notes, tasks, calls, emails, SMS, meetings, files. Actions: edit, assign, create deal/task, log call/email/SMS, schedule meeting, add note, upload file, add to list, archive.

## 6. Companies Page (/crm/companies)
Table, search by name/domain/industry, filter by owner/type/lifecycle/industry/size/location/tags/open deals, sort, New Company, Import Companies.

## 7. Company Detail (/crm/companies/:companyId)
Show name, domain, website, phone, industry, size, revenue, owner, lifecycle, address, description, tags, custom fields, contacts at company, related deals, timeline, notes, tasks, calls, emails, SMS, meetings, files. Actions: edit, add contact, create deal/task, log activity, upload file, archive.

## 8. Deals Page (/crm/deals)
Table, search by deal/company/contact, filter (pipeline/stage/owner/status/priority/amount/close date/type/source/tags), sort, bulk actions, New Deal.

## 9. Pipeline Board (/crm/pipeline)
Drag-and-drop board. Pipeline dropdown, columns by stage, deal cards with title/company/amount/owner/close date/priority/last activity/next follow-up/tags. On drop: update stage, recalc probability and weighted value. Per-stage totals (count + weighted). Highlight overdue follow-ups, no-activity 7+ days, overdue close date, high-value deals. Filters by owner/close date/priority/source/tags/amount. Quick add per stage. Click opens detail.

## 10. Deal Detail (/crm/deals/:dealId)
Full deal info, weighted amount, pipeline/stage/probability, status, owner, company, contacts, expected close date, deal type, source, priority, tags, custom fields, next step, timeline, notes, tasks, calls, emails, SMS, meetings, files. Actions: edit, move stage, mark won/lost, add contact, link company, create task, log call/email/SMS, schedule meeting, add note, upload file, archive.
On lost: require lost_reason, allow lost_notes, set actual_close_date.
On won: allow won_notes, set actual_close_date, update related contact/company lifecycle if appropriate.

## 11. CRM Tasks (/crm/tasks)
Tabs: My Tasks, Due Today, Overdue, Upcoming, Completed, Team Tasks. Search, filter (user/type/priority/status/related/due date), sort, quick complete, click opens modal, create task button. Completion creates a CRMActivity.

## 12. CRM Activities (/crm/activities)
Timeline/table, filter by type/user/related/date/outcome/direction, search body, export for admins, click opens related record. Types: notes, calls, emails, SMS, meetings, tasks, stage changes, assignments, automations, file uploads, form submissions.

## 13. CRM Calendar (/crm/calendar)
Show follow-ups, calls, meetings, due dates, expected close dates. Month/week/day views, filter by user, click opens related record, create task/meeting from calendar.

## 14. Lists / Segments (/crm/lists)
Create static/dynamic lists for leads/contacts/companies/deals. Filter builder (field/operator/value) with operators: equals, does not equal, contains, does not contain, is empty, is not empty, gt, lt, between, before, after. Add/remove records, export if allowed, use list for email/SMS campaign if integrations exist.

## 15. Campaigns (/crm/campaigns)
Create campaign, track lead source, associate leads/deals, metrics (leads generated, contacts created, deals created/won, pipeline value, revenue, conversion rate). Detail page with related leads/contacts/deals/activity.

## 16. CRM Reports (/crm/reports)
Reports: Leads by source/status/over time, conversion rate, contacts by lifecycle, deals by stage, pipeline value by stage/owner, weighted forecast, deals won/lost by month, win rate, avg deal size, avg sales cycle, sales activity by user, tasks completed by user, overdue follow-ups, no-activity deals, revenue forecast, campaign performance. Filters: date/owner/pipeline/source/campaign/team/lifecycle. Use existing chart library or Recharts.

## 17. Import (/crm/import)
CSV import for leads/contacts/companies/deals. Flow: upload → object type → field mapping → preview → duplicate detection (skip/update/create duplicate) → run → results → failed rows. Permission-gated.

## 18. CRM Settings (/crm/settings)
Admin-only. Manage: pipelines, stages, lead statuses, lifecycle stages, lost reasons, tags, custom fields, assignment rules, notification settings, import/export permissions, automation settings, data retention.

---

# RECORD DETAIL UI

Consistent layout. Left/main: header, key fields, timeline, notes, tasks, emails, calls, SMS, meetings, files. Right sidebar: owner, status/stage, priority, lifecycle, source, tags, custom fields, related records, created date, last activity, next follow-up. Header: name/title, status/stage badge, owner, primary action, more actions menu.

# TIMELINE
Each lead/contact/company/deal has a full timeline showing: notes, calls, emails, SMS, meetings, tasks, stage changes, owner changes, form submissions, file uploads, lead conversion, deal won/lost, automation events. Each entry: icon, type, user, date/time, summary, related links, expand/collapse.

# NOTES & @MENTIONS
Notes support @mentions. Detect @name or @email, save mentioned_user_ids, create notifications, no self-notification, no duplicates. Lightweight detection on submit is acceptable.

# EMAIL / SMS
If app has integrations, connect CRM. Email: log manual, send if integration exists, save to timeline, templates if practical, track sent date/subject/body/recipient/sender, create follow-up task. SMS: log manual, send if integration exists, save to timeline, respect sms_opt_in/do_not_contact. If no integrations: build activity logging structure, manual log buttons, do not fake sending.

# CALL & MEETING LOGGING
Quick action buttons: Log Call, Log Email, Log SMS, Log Meeting, Add Note, Create Task. Call: direction, outcome, datetime, notes, follow-up. Meeting: datetime, attendees, outcome, notes, follow-up.

# LEAD SCORING
Manual edit + optional rule-based scoring. Example rules: business email +10, phone +5, company +10, high expected value +20, referral source +15, contacted in last 7 days +5, opened/responded +10 (if email tracking), no activity in 30 days -15, marked unqualified -50. Store score on lead/contact. Allow admins to configure rules later if practical.

# DEAL FORECASTING
Calculate: total open pipeline, weighted pipeline value, forecast by month/owner/stage. weighted_value = amount * probability / 100. Update when amount/stage/probability changes.

# AUTOMATIONS
If Base44 automations are available, build:
- New Lead Assignment: assign to default/round-robin/team, notify owner, create follow-up task if configured.
- Follow-Up Reminder (daily): notify users of due/overdue tasks.
- Stale Deal Reminder (daily/weekly): notify owners of open deals with no activity 7+ days.
- Lead Follow-Up Reminder (daily): notify owners of leads with next_follow_up_date due/overdue.
- Deal Close Date Reminder (daily): notify owners of open deals closing within 7 days.
- Weekly CRM Digest: summary to admins/sales managers.
If automations unavailable, create fields/UI hooks but do not fake.

# AI FEATURES (if app supports AI calls — do not block core CRM if unavailable)
- AI Lead Summary: summarize lead, qualification, missing fields, recommend next step.
- AI Contact Summary: relationship history, recent items, recommended follow-up.
- AI Deal Summary: status, risks, missing next steps, recommendations.
- AI Follow-Up Draft: draft email/SMS based on history. User must review.
- AI Lead Scoring Assist: suggested score, reasoning, qualification recommendation, suggested next task.
- AI Pipeline Risk Review on dashboard: stale, overdue, close-date risks, low-activity high-value, recommended actions.
All AI output review-before-save. Never auto-send AI-generated outreach.

# NOTIFICATIONS
Trigger for: new assigned lead/deal/task, @mention, follow-up due, task overdue, deal moved stage, deal won/lost, lead converted, file uploaded, stale deal warning. No self-notify, no duplicates, clear title/message, action_url. If app has notifications, use existing system.

# DASHBOARD ALERTS
Unassigned leads, overdue tasks, deals with no activity 7+ days, deals past expected close date, leads with no follow-up, high-value deals at risk, contacts marked do_not_contact, import errors.

# SEARCH
Global CRM search across leads/contacts/companies/deals/emails/phones/tags/notes (if practical)/task titles. Available in dashboard, all list pages, pipeline, global header if practical.

# FILTERING / SORTING
All list pages: filter by owner/status/stage/source/lifecycle/priority/dates/tags/campaign/company/value/location. Sort by created/updated/last activity/next follow-up/priority/score/amount/name.

# BULK ACTIONS
Leads: assign, change status, add/remove tag, add to list, create tasks, convert if safe, archive.
Contacts: assign, change lifecycle, add/remove tag, add to list, create tasks, archive.
Companies: assign, add/remove tag, archive.
Deals: assign, change stage, change priority, add tag, create tasks, archive.
Respect permissions.

# CUSTOM FIELDS
Admin-managed for leads/contacts/companies/deals. Types: text, number, date, select, multi-select, checkbox, user, URL, currency, phone, email. Show on detail/forms; columns if show_in_table; filters if filterable. Store in custom_fields object.

# TAGS
Global tags with name + color, work across all object types, filterable, usable in lists/segments.

# DUPLICATE DETECTION
Leads/contacts: match by email then phone. Companies: match by domain then name. Deals: warn if same company/contact has similar open deal title. On create/import: show possible duplicates and let user continue/merge/link if practical. At minimum, warn clearly.

# RECORD MERGING (OPTIONAL)
Admin merge for leads/contacts/companies. Pick primary, move activities/notes/tasks/files/deals, preserve fields, archive duplicate, log activity. If too complex, duplicate warning only.

# IMPORT / EXPORT
Import: CSV upload, mapping, duplicate detection, preview, results, error log. Export (admin/manager): leads, contacts, companies, deals, activities, reports. Respect permissions.

# ACTIVITY LOGGING
Create CRMActivity for: lead created/assigned/status changed/converted, contact created/updated, company created/updated, deal created/stage changed/amount changed/won/lost, note added, call/email/SMS/meeting logged, task created/completed, file uploaded, owner changed, tag added/removed, import completed, automation ran. Show on related records.

# SECURITY
Authenticated only. Role-based access on every page. Permission checks on every create/update/delete. Backend functions validate user permissions. Sales reps cannot view private records they do not own unless shared. Viewers cannot edit/delete/export. Export and import access restricted. Confirm destructive actions. No frontend-only protection. Validate all input. No private notes leakage. Respect do_not_contact, email_opt_in, sms_opt_in, do_not_call.

# PERFORMANCE
Pagination, search/filtered queries, lazy loading, query limits. Load timeline/files/notes/tasks per tab. Avoid giant dashboard queries. Use summary counts. Limit recent activity. Cache small lookup data. Tables must remain fast at hundreds/thousands of records.

# RESPONSIVE
Desktop: full dashboard, tables, pipeline, reports.
Tablet: responsive cards/tables, collapsible filters, scrollable pipeline.
Mobile: simplified dashboard, cards, full-screen drawers, quick actions, easy call/email/SMS buttons.

# UI/UX
Use existing design system. Include: dashboard cards, filterable tables, pipeline board, drawers/modals, status/priority/lifecycle badges, owner avatars, empty/loading/error states, confirm dialogs, toasts, responsive design. No raw forms.

# EMPTY STATES
- No leads: "No leads yet. Add a lead manually or import a CSV."
- No contacts: "No contacts yet. Convert a lead or create a contact."
- No companies: "No companies yet. Add your first company or import company data."
- No deals: "No deals yet. Create your first deal to start tracking pipeline revenue."
- No activities: "No activity yet. Log a call, note, email, SMS, or meeting."
- No tasks: "No CRM tasks yet. Create a follow-up to stay on top of your pipeline."

# VALIDATION
Lead: name or email required, valid email if provided, numeric score, no double conversion, lost/unqualified require reason if configured.
Contact: first/last name or email required, valid email, no email if opt_in false or do_not_contact, no SMS if sms_opt_in false.
Company: name required, normalize domain.
Deal: title required, numeric amount, probability 0–100, stage and pipeline required, lost requires reason, won/lost set actual_close_date.
Task: title required, assigned user required, due_date required for follow-ups, completed sets completed_date.

# BACKEND FUNCTIONS
Use existing pattern. Recommended: createLead, convertLead, createContact, createCompany, createDeal, updateDealStage, markDealWon, markDealLost, createCRMTask, completeCRMTask, logCRMActivity, addCRMNoteWithMentions, uploadCRMFile, importCRMRecords, exportCRMRecords, generateCRMRecordSummary, generateLeadScoreRecommendation, generateDealRiskReview, sendCRMFollowUpReminders, sendWeeklyCRMDigest. Each: auth, permissions, input validation, no over-querying, activity logs, notifications, clear errors.

# DEEP LINKING
/crm/leads/:leadId, /crm/contacts/:contactId, /crm/companies/:companyId, /crm/deals/:dealId, /crm/pipeline?deal=:dealId, /crm/tasks?task=:taskId. Notifications must link correctly.

# ADMIN SETTINGS
Add CRM settings to existing admin area: enable/disable CRM module, manage pipelines/stages, lead statuses, lifecycle stages, lost reasons, custom fields, tags, assignment rules, automation settings, import/export permissions, visibility defaults.

# REUSABLE COMPONENTS
CRMDashboard, CRMStatCard, LeadTable, LeadDetailDrawer, ContactTable, ContactDetailDrawer, CompanyTable, CompanyDetailDrawer, DealTable, DealDetailDrawer, PipelineBoard, PipelineColumn, DealCard, CRMTaskModal, CRMActivityTimeline, CRMNoteComposer, CRMFileList, CRMTagSelector, CRMOwnerSelector, CRMCustomFieldsPanel, CRMFilters, CRMBulkActionBar, CRMImportWizard, CRMReportChart, CRMRecordHeader, CRMRelatedRecordsPanel, CRMQuickActions, CRMEmptyState. Reuse existing components if available.

# FINAL QA
Test these flows:
1. Admin opens CRM dashboard
2. Admin creates a lead
3. Sales rep is assigned to lead and receives notification
4. Sales rep logs a call, adds note with @mention
5. Mentioned user receives notification
6. Sales rep creates follow-up task; appears in CRM tasks
7. Sales rep converts lead into contact/company/deal
8. Deal appears in pipeline; can be dragged to another stage; weighted value updates
9. Deal can be marked won; deal can be marked lost with reason
10. Contact timeline shows activities; company shows related contacts and deals
11. Dashboard metrics update; reports show pipeline data
12. CSV import works; duplicate detection warns
13. Unauthorized user cannot view private CRM record; viewer cannot edit; sales rep cannot export unless allowed
14. Mobile CRM views are usable
15. Existing app functionality still works

# OUTPUT AFTER BUILD
Provide a clear summary:
1. CRM pages added
2. Entities created or modified
3. Backend functions added
4. Permissions added
5. Notifications added
6. Automations added
7. AI helpers added
8. Import/export features added
9. Reports added
10. Manual setup still required
11. Known limitations
12. Recommended next improvements

Build this as a production-ready internal CRM system that feels native to my current Base44 app.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

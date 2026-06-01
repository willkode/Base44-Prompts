---
title: "Complete Support Ticket System"
slug: "complete-support-ticket-system"
category: "Workflow"
published: "2026-05-06"
source_file: "completeSupportTicketSystem.js"
---

# Complete Support Ticket System

> A 14-prompt series that guides you through building a full customer support ticket system inside your Base44 app — from data models and customer portals to admin dashboards, internal notes, SLA tracking, email notifications, role-based access, and a final security audit.

**Category:** Workflow  
**Published:** 2026-05-06  
**Source File:** `completeSupportTicketSystem.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

**What this prompt series is for**
Run these 14 prompts in order. Each prompt builds on the previous one.

Start a new chat session with your Base44 AI and paste Prompt 1 first. Do not skip ahead — each prompt assumes the previous step is complete.

After Prompt 13 (QA Audit), wait for the full report before running Prompt 14.

**What you'll build:**
- Customer ticket creation & portal
- Admin/support dashboard
- Public replies + private internal notes
- Email notifications
- Role-based access control (Customer, Agent, Manager, Admin)
- Ticket assignment & workflow automation
- Categories, tags, and saved replies
- SLA & overdue tracking
- Reporting dashboard
- Final QA + security audit

---

## Prompt

--- PROMPT 1: Scan the Existing App First ---

You are a senior Base44 architect and support-system product engineer.

Before building anything, scan my entire app first.

Do not create, edit, delete, or modify anything yet.

Review:
- Existing pages
- Existing layouts
- Existing entities
- Existing functions
- Existing roles
- Existing permissions
- Existing authentication logic
- Existing navigation
- Existing admin areas
- Existing email or notification systems
- Existing user profile structure
- Any current support/contact/help features
- Any places where a support ticket system should connect

After scanning, give me a clear implementation plan for adding a full customer support ticket system.

The system must include:
- Customer ticket creation
- Customer ticket portal
- Admin/support ticket dashboard
- Ticket detail page
- Public customer replies
- Private internal notes
- Support team visibility into internal notes
- Ticket assignment
- Ticket status management
- Ticket priority management
- Categories
- Tags
- Activity logs
- Email notifications
- Role-based access control
- Support manager/admin permissions

Your response must include:
1. What currently exists in the app
2. What needs to be added
3. What pages need to be created or updated
4. What entities need to be created
5. What functions need to be created
6. What permissions and role rules are needed
7. What email notifications are needed
8. Recommended build order
9. Any risks or conflicts you found

Do not build yet. Only scan and report.


--- PROMPT 2: Create the Data Models ---

Now create the full data model foundation for the customer support ticket system.

Create the required entities for:
1. SupportTicket
2. TicketReply
3. TicketInternalNote
4. TicketActivityLog
5. SupportCategory
6. SavedReply
7. SupportNotificationSetting
8. EmailTemplate

Requirements:

SupportTicket must track:
- Ticket number, Subject, Description
- Customer user ID, name, email
- Status, Priority, Category
- Assigned agent ID and name
- Tags, Source, Attachment URLs
- Related account/order/client/project ID if applicable
- Last customer reply date, Last agent reply date
- Resolved date, Closed date, Due date
- SLA status, Archived status

TicketReply must support:
- Public customer-visible replies
- Author details, Attachments
- Email sent tracking, Created/Updated date

TicketInternalNote must support:
- Private notes visible only to support staff
- Author details, Pinned notes
- Mentioned support users, Attachments, Created/Updated date

TicketActivityLog must track:
- Status changes, Priority changes, Assignment changes
- Customer replies, Agent replies, Internal notes
- Ticket closing, reopening, escalations

Important rules:
- Internal notes must never be visible to customers
- Customers can only access their own tickets
- Support staff can access tickets based on role and assignment
- Admins can access everything

After creating the entities, summarize what was created.


--- PROMPT 3: Build Customer Ticket Pages ---

Build the customer-facing support ticket experience.

Create or update the following pages:
1. Support Home — overview, "Create New Ticket" button, recent tickets, ticket status summary, empty states
2. Create Ticket — subject, category dropdown, priority dropdown, description, attachment upload, submit + confirmation
3. My Tickets — only logged-in customer's tickets; show ticket number, subject, status, priority, category, last updated; filters (open, waiting, resolved, closed); search by subject or ticket number
4. Ticket Detail — ticket info, public conversation only, allow customer to reply, show status + dates

Security rules:
- Customers must never see internal notes
- Customers must never see tickets from other users
- Customers must not be able to assign tickets or change support-only fields

Use clean, modern, mobile-first UI.


--- PROMPT 4: Build Admin Support Dashboard ---

Build the admin/support ticket dashboard with:
1. Support Dashboard — open tickets, new today, waiting on support/customer, high-priority, overdue, avg response/resolution times, tickets by category/agent
2. All Tickets page — searchable/filterable ticket table (status, priority, category, agent, date range, overdue, tags); columns: ticket#, subject, customer, status, priority, category, agent, last updated, created, SLA status
3. Ticket Management page — ticket details, public conversation, reply box, private internal notes panel, assignment/status/priority/category/tags controls, activity log

Important:
- Internal notes must be visually separate from public replies
- Clear label: internal notes are private
- Only admins and support staff can see internal notes


--- PROMPT 5: Add Internal Notes ---

Build the internal notes system — private, visible only to support agents, managers, and admins.

Add an Internal Notes panel to the admin Ticket Management page with:
- Add, view, pin, edit, delete notes
- Show author and timestamp
- Mention another support team member
- Optional attachment support

Rules:
- Never appear in customer portal
- Never emailed to customer
- Included in activity log
- Use warning label: "Private internal note — not visible to customer"
- Pinned notes appear at top


--- PROMPT 6: Add Public Reply System ---

Build the public reply system.

Customers can: reply to own tickets, view only public replies, add attachments.

Support agents can: reply publicly, view all public conversation, send customer-facing responses.

When agent replies publicly:
- Save to TicketReply (public), update last agent reply date, set status to Waiting on Customer, log activity, trigger email notification

When customer replies:
- Save to TicketReply (public), update last customer reply date, set status to Waiting on Support, log activity, notify assigned agent or support team

Important: Make it hard for agents to accidentally post an internal note as a public reply.


--- PROMPT 7: Add Role-Based Access Control ---

Add RBAC for: Customer, Support Agent, Support Manager, Admin.

Customers: create/view own tickets, reply to own tickets, view public replies only. Cannot see internal notes, other customers' tickets, or admin dashboard.

Support Agents: view assigned tickets, add public replies and internal notes, change status/priority/tags.

Support Managers: view all tickets, assign/reassign, view all internal notes, manage categories, review performance.

Admins: full access — manage settings, email templates, delete/archive tickets.

Apply across pages, navigation, data reads/writes, buttons, forms, and ticket actions.

After implementing, test each role path and report what was secured.


--- PROMPT 8: Add Email Notifications ---

Build the email notification system using the app's existing email integration.

Create email events for:
- Ticket created (to customer), New ticket (to support/admin), Ticket assigned (to agent)
- Customer replied (to agent), Support replied (to customer)
- Status changed, Ticket resolved, Ticket closed, Ticket reopened
- Internal note mention (to support member), Ticket overdue alert

Rules:
- Internal notes never sent to customers
- Public replies can be emailed to customers
- Customer replies notify assigned agent (or manager if unassigned)
- Critical tickets immediately notify admin
- Closed ticket email sends only once

Email templates must support variables: customer name, ticket number, subject, status, priority, agent name, reply preview, app name, support portal link.

After building, list all notification events created.


--- PROMPT 9: Add Ticket Assignment and Workflow Automation ---

Build assignment features: assign, reassign, unassign, filter by agent, show agent on detail, log changes.

Add workflow automation:
- New → In Progress/Waiting on Customer (agent action)
- Customer reply → Waiting on Support
- Agent resolves → Resolved
- No customer reply after X days → Closed
- Reopened → Waiting on Support

Auto-priority suggestions:
- Login/Payment issue = High
- Security issue/Data loss = Critical
- Bug report = Normal
- General question = Low

Auto-assignment rules: Billing → billing support, Bug → technical support, Critical → notify admin, Unassigned → manager queue.

Keep it simple and reliable.


--- PROMPT 10: Add Categories, Tags, and Saved Replies ---

Build:
1. Support Categories — admin/manager managed, with default priority and agent, active/inactive. Default categories: Billing, Bug Report, Account Issue, Feature Request, General Question, Technical Support, Refund Request, Onboarding Help.
2. Ticket Tags — add/remove by support staff, used for filtering.
3. Saved Replies — reusable templates with variables (customer name, ticket number), usage tracking, managed by admin/manager.

Make the UI simple and fast for support agents.


--- PROMPT 11: Add SLA and Overdue Tracking ---

Add SLA tracking based on priority:
- Critical: 15 min | Urgent: 1 hour | High: 4 hours | Normal: 24 hours | Low: 48 hours

Track: first response deadline, resolution deadline, overdue status, SLA status, first response time, resolution time.

SLA statuses: On Track, At Risk, Overdue, Resolved.

Show SLA status on: dashboard, all tickets table, ticket management page.

Alerts: overdue tickets on dashboard, critical overdue → notify admin, assigned agent notified when ticket goes overdue.


--- PROMPT 12: Add Reporting Dashboard ---

Build a support reporting dashboard for managers with:
- Total, open, resolved, closed tickets; new by date; by status/priority/category/agent
- Avg first response time, avg resolution time, overdue, reopened tickets

Agent performance: tickets assigned/resolved, avg response/resolution times, replies sent, notes added, open workload.

Filters: date range, agent, category, priority, status.


--- PROMPT 13: Final QA and Security Audit ---

Perform a full QA and security audit. Test:
1. Customer creates ticket
2. Customer views own ticket
3. Customer cannot view another customer's ticket
4. Customer replies to ticket
5. Customer cannot see internal notes
6. Support agent sees assigned tickets
7. Agent adds public reply
8. Agent adds internal note
9. Internal note does not email customer
10. Manager sees all tickets
11. Admin sees all settings
12. Email notifications trigger correctly
13. Ticket status updates correctly
14. Activity logs created correctly
15. Closed ticket behavior works
16. Reopened ticket behavior works

Return a report: what passed, what failed, what needs fixing, security risks, permission issues, broken workflows, recommended fixes.

Do not make fixes until the report is complete.


--- PROMPT 14: Fix Issues Found During QA ---

Fix all issues from the QA report.

Rules:
- Do not change unrelated parts of the app
- Do not redesign unrelated pages
- Do not remove existing working functionality
- Fix only QA-reported issues
- Keep customer data protected, internal notes private, email notifications leak-free

After fixing, summarize: what was fixed, what changed, what security issues were resolved, what still needs manual testing.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

---
title: "Conversion Intelligence System"
slug: "conversion-intelligence-system"
category: "App Building"
published: "2026-05-01"
source_file: "conversionIntelligenceSystem.js"
---

# Conversion Intelligence System

> Add a complete Conversion Intelligence system to your Base44 app — track user behavior, analyze funnels, get specific AI recommendations tied to your products and services, and turn analytics into action.

**Category:** App Building  
**Published:** 2026-05-01  
**Source File:** `conversionIntelligenceSystem.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use Claude Sonnet 4.6 (or Opus for complex apps). Build it in phases: data + tracking → page performance + funnels + goals → AI recommendations + scheduled analysis. Keep all changes additive — do not modify existing pages, routes, or entities. Need help installing it? Book a Kode Sessions call or use the ER Service.

---

## Prompt

You are a senior full-stack engineer and CRO (Conversion Rate Optimization) analyst building inside a Base44 app.

Your task is to add a complete Conversion Intelligence System to the app — additively, without breaking any existing pages, routes, entities, or business logic.

GOAL

Give the admin a clear way to:
1. Track what users actually do on the site
2. See which pages and CTAs are working (and which aren't)
3. Analyze funnels and identify drop-off points
4. Get AI-generated recommendations that are specific, business-aware, and actionable
5. Take action and track which recommendations have been implemented

---

PART 1 — DATA MODEL

Create the following entities. All admin-only via RLS except where noted.

1. UserEvent (anyone can create; admins read/update/delete)
- user_id, session_id, anonymous_id
- event_type (page_view, button_click, cta_click, form_start, form_submit, checkout_start, purchase, lead_created, service_view, product_view, pricing_view, blog_view, scroll_depth, time_on_page, exit_intent, search, download, video_play, external_link_click)
- event_name, page_url, page_path, page_title, page_type
- referrer, device_type, browser, operating_system, country, state, city
- utm_source, utm_medium, utm_campaign, utm_content, utm_term
- metadata (free-form object)

2. UserSession (anyone create/update; admins read/delete)
- user_id, anonymous_id, session_id
- first_page, last_page, referrer, traffic_source
- utm_*, device_type, browser, operating_system, country, state, city
- started_at, ended_at, duration_seconds
- page_count, event_count
- converted, conversion_type, conversion_value

3. PagePerformance (admin-only)
- page_url, page_path, page_title, page_type
- total_views, unique_visitors, average_time_on_page
- bounce_rate, exit_rate, scroll_25/50/75/100_percent
- cta_clicks, form_starts, form_submits, conversion_count, conversion_rate
- revenue_attributed, lead_count, last_updated

4. ConversionGoal (admin-only)
- name, description, goal_type
- target_page_url, target_event_name, target_event_type
- value (number), active (boolean)

5. FunnelDefinition (admin-only)
- name, description, steps (array of {label, match_type, value})
- match_type options: page_path, page_path_prefix, event_type, event_name
- active (boolean)

6. CISettings (admin-only) — singleton
- important_pages (array), ignored_pages (array)
- primary_cta_labels (array), tracked_products (array), tracked_services (array)
- recommendation_frequency (weekly | biweekly | monthly | manual)
- notify_email, notify_on_urgent

7. CIRecommendation (admin-only)
- title, summary, category, priority (urgent/high/medium/low)
- impact_estimate, effort_estimate
- target_page_path, target_funnel_id
- evidence (array of strings — actual metrics that support it)
- suggested_actions (array)
- status (new, acknowledged, in_progress, implemented, dismissed)
- admin_notes, analysis_window_days, generation_batch_id, model_used

---

PART 2 — TRACKING LIBRARY (CLIENT-SIDE)

Create a small, fault-tolerant tracking library:
- Persistent anonymous_id (localStorage)
- Per-visit session_id (sessionStorage) with idle timeout
- Capture page_view on route change
- Capture cta_click on elements with [data-cta] or buttons with primary CTA labels (configurable)
- Capture form_start (first focus) and form_submit
- Capture scroll_depth at 25/50/75/100% (sample to avoid noise)
- Capture time_on_page on unload (sample)
- Capture device, browser, OS, referrer, UTM params
- Sampling for high-frequency events
- Wrap all sends in try/catch — analytics must NEVER break the app
- Mount globally via App.jsx
- EXCLUDE admin and CRM paths from tracking

---

PART 3 — BACKEND FUNCTIONS

All admin-only (verify user.role === 'admin' or x-base44-automation header).

1. trackConversionEvent — public ingest endpoint that creates UserEvent and updates UserSession
2. getConversionOverview(days) — KPIs: visitors, sessions, page_views, cta_clicks, form_submits, top pages, top CTAs, traffic sources
3. getPagePerformance(days) — per-page aggregates with bounce, exit, time on page, scroll, conversion %
4. getPageDetail(path, days) — drill-down per page including top CTAs, referrers, devices, UTM sources, scroll depth
5. getFunnelAnalysis(funnel_id, days) — step-by-step funnel completion with drop-off %, biggest drop-off
6. generateConversionRecommendations(days) — runs an LLM analysis (see PART 5)
7. updateRecommendationStatus(id, status, admin_notes)

---

PART 4 — ADMIN DASHBOARD

Create an admin-only dashboard at /admin/conversion-intelligence with:

Overview page
- Time range selector (7d / 30d / 90d)
- KPI cards: Visitors, Sessions, Page Views, CTA Clicks, Form Submits, Conversion Rate
- Subnav cards linking to: Page Performance, Funnels, Conversion Goals, AI Recommendations, Settings
- Top traffic sources, top pages, top CTAs
- Refresh button

Page Performance page
- Sortable table of all tracked pages with key metrics
- Filter by page type
- Search by path or title
- Click any row to open a detail drawer with scroll depth, top CTAs, referrers, devices, UTM sources, event breakdown

Funnels page
- Builder UI to define multi-step funnels
- Step types: page_path, page_path_prefix, event_type, event_name
- Run analysis with stepwise drop-off visualization and "biggest drop-off" callout

Conversion Goals page
- CRUD form for goals tied to pages, event types, or event names
- Active/paused toggle, monetary value field

AI Recommendations page (THE BUSINESS BRAIN)
- "Generate Recommendations" button (manual run)
- Filters by status, priority, category
- List view with priority badge, status badge, target page, summary
- Click any recommendation to open a detail drawer with full evidence, suggested actions, status changer, and admin notes
- Empty/loading/error states

Settings page
- Manage important_pages, ignored_pages, primary CTA labels
- Tracked products & services
- Recommendation frequency
- Notification email + urgent alert toggle

---

PART 5 — AI RECOMMENDATIONS (THE CRITICAL PART)

This is what separates a "vanity analytics" tool from a real conversion intelligence system.

The LLM analysis must produce recommendations that are:
- SPECIFIC — tied to a real page, CTA, funnel step, product, or service
- EVIDENCE-BASED — every claim backed by an actual metric from the data
- BUSINESS-AWARE — references the products/services the admin sells
- ACTIONABLE — the admin knows exactly what to do next

For EVERY recommendation, the AI must include:

1. The exact page or content area affected (page_path or section name)
2. The user behavior that triggered it (the metric pattern observed)
3. The likely conversion problem (root cause hypothesis)
4. The suggested fix (a concrete change)
5. The reason this fix should help (the underlying CRO principle)
6. The product, service, or offer it supports (tied to tracked_products / tracked_services)
7. The priority level (urgent / high / medium / low)
8. The estimated impact (high / medium / low)
9. The next action the admin should take (one specific next step)

DEDUPLICATION + MERGING

Before saving recommendations:
- If two recommendations target the same page AND the same root cause, merge them into one
- If two recommendations have nearly identical titles or summaries, keep the higher-priority one
- Do not re-create recommendations that already exist as 'new' or 'acknowledged' for the same page+category
- Cap output at 7 high-quality recommendations per run (quality over quantity)

PROMPT INPUTS

Pass the LLM:
- Top 25 pages with: views, unique visitors, conversion rate, bounce rate, avg time, scroll depth, CTA rate
- Funnel summaries (name, step count, first/last step)
- Active conversion goals (name, type, target page/event)
- Tracked products and services from CISettings
- Important pages and ignored pages from CISettings

Use a strict JSON response schema so output is reliable.

NOTIFICATIONS

If any recommendation has priority = 'urgent' AND CISettings.notify_on_urgent is true AND notify_email is set:
- Send an email summary with title, summary, target page, and a link to /admin/conversion-intelligence/recommendations

---

PART 6 — SCHEDULED ANALYSIS

Create a scheduled automation:
- Name: "Weekly Conversion Intelligence Analysis"
- Trigger: every Monday at 7:00 AM in the admin's timezone
- Function: generateConversionRecommendations with days=7
- The function must accept being triggered without an authenticated user (check for the automation header)

---

PART 7 — DASHBOARD UX RULES

- Match the existing admin design system exactly (colors, spacing, typography)
- Every interactive element must meet WCAG AA contrast
- Never block the UI on slow analytics queries — show loading states, fall back gracefully
- Empty states must guide the admin to the next action ("No recommendations yet — click Generate")
- Keep the data tables compact, sortable, and filterable
- Detail drawers on row click — never navigate away unnecessarily
- Use tabular numerals for all metrics
- Recommendation list should sort by priority by default (urgent → low)

---

PART 8 — SAFETY RULES (CRITICAL)

- Never modify existing entities, pages, routes, or business logic
- Never expose tracked data outside the admin role
- Never log PII (email, full IPs) in analytics
- Tracking must be sampled and rate-limited so it cannot DOS the database
- All analytics failures must be silent — they cannot affect the user experience
- Backend functions must verify admin role on every call (or accept the automation header for scheduled runs)

---

DELIVERABLES

After building, return:
1. Summary of every entity, function, page, and automation created
2. How to test the tracking client (open the site, check UserEvent records)
3. How to seed the first funnel and conversion goal
4. How to manually trigger the recommendation engine for the first time
5. Any limitations or follow-up phases

Build the complete system now.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

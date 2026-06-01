I want you to add a complete affiliate system to this existing app. Do not rebuild the app. Do not break existing user flows, auth, dashboards, checkout, subscriptions, payments, or admin areas. First understand the current app structure, routes, entities, user roles, backend functions, payment flow, and existing admin dashboard.

After scanning, build a fully functioning affiliate system with:

- Affiliate signup
- USA and Canada only eligibility
- 90-day cookie tracking
- Affiliate link / URL tracking
- Referral attribution
- Conversion tracking
- Affiliate dashboard
- Admin affiliate dashboard
- Monthly payout tracking
- End-of-month payout calculations
- Fraud-prevention checks
- Admin approval workflow
- Secure permissions
- Clean UI that matches the existing app

## Core Goal

Create a complete affiliate program where approved affiliates can share tracking links, receive credit for referred users or customers, view their clicks, conversions, commissions, and payout status, while admins can review affiliates, monitor performance, approve payouts, and manage the full affiliate program.

## Important Rules

1. Scan the existing app first.
2. Reuse existing design patterns, layout components, buttons, cards, tables, modals, forms, and admin structure.
3. Do not duplicate existing user/account/customer/payment entities unless absolutely necessary.
4. Do not expose affiliate earnings or private affiliate data to other users.
5. Do not allow affiliates to edit their own commission amounts, payout records, conversion records, or approval status.
6. All sensitive actions must happen through backend functions.
7. Admin-only data must be protected by role checks.
8. Affiliate tracking must continue to work even if the user is not logged in.
9. Referral cookies should last 90 days.
10. Only users from the United States and Canada can apply as affiliates right now.

---

# Phase 1: App Scan

Before building anything, scan the full app and report:

- Existing user roles
- Existing auth structure
- Existing admin routes
- Existing checkout/payment/subscription flow
- Existing user/customer entities
- Existing dashboard structure
- Existing backend functions
- Existing permissions/security model
- Best place to add affiliate signup
- Best place to add affiliate dashboard
- Best place to add admin affiliate management

Then proceed with the build.

---

# Phase 2: Data Models / Entities

Create the following entities if they do not already exist.

## Affiliate

Stores affiliate profile and program status.

Fields:

- user_id
- full_name
- email
- country
- state_or_province
- phone
- website
- social_profiles
- audience_description
- promotion_methods
- payout_method
- payout_email
- tax_status
- status: pending, approved, rejected, suspended
- affiliate_code
- default_referral_url
- commission_type: percentage or fixed
- commission_rate
- cookie_duration_days: default 90
- total_clicks
- total_conversions
- total_earnings
- unpaid_earnings
- paid_earnings
- last_payout_date
- admin_notes
- rejection_reason
- created_date
- approved_date
- suspended_date

Rules:

- Affiliate code must be unique.
- Affiliate status defaults to pending.
- Only admins can approve, reject, suspend, or modify commission settings.
- Affiliates can only view and edit safe profile fields.
- Affiliates cannot change earnings, status, commission rate, or payout totals.

---

## AffiliateClick

Tracks referral link clicks.

Fields:

- affiliate_id
- affiliate_code
- visitor_id
- session_id
- ip_hash
- user_agent
- landing_url
- referrer_url
- utm_source
- utm_medium
- utm_campaign
- utm_content
- utm_term
- country
- device_type
- browser
- created_date
- converted: true/false
- conversion_id

Rules:

- Do not store raw IP addresses if avoidable. Store hashed IP for fraud detection.
- A click should be created when a valid affiliate link is visited.
- Repeated clicks from the same visitor should be tracked, but admin dashboard should also show unique visitors.

---

## AffiliateReferral

Stores attribution between a visitor/user/customer and an affiliate.

Fields:

- affiliate_id
- affiliate_code
- visitor_id
- referred_user_id
- referred_customer_email
- first_click_date
- last_click_date
- attribution_expires_date
- status: active, converted, expired, disqualified
- source_url
- landing_url
- created_date

Rules:

- Cookie duration is 90 days.
- If a visitor signs up or purchases within 90 days, the affiliate gets credit.
- Use last-click attribution by default unless an existing referral already converted.
- If attribution expires, mark it expired.
- Prevent self-referrals when possible.

---

## AffiliateConversion

Tracks successful referral events.

Fields:

- affiliate_id
- referral_id
- referred_user_id
- referred_customer_email
- order_id
- subscription_id
- conversion_type: signup, purchase, subscription, upgrade
- conversion_amount
- commission_amount
- commission_type
- commission_rate
- status: pending, approved, rejected, paid
- reason
- conversion_date
- approval_date
- payout_id
- created_date

Rules:

- Conversions default to pending.
- Admin can approve or reject conversions.
- Approved conversions count toward unpaid affiliate earnings.
- Rejected conversions do not count toward payout.
- Paid conversions are locked from normal edits.

---

## AffiliatePayout

Tracks monthly affiliate payouts.

Fields:

- affiliate_id
- payout_month
- payout_year
- period_start
- period_end
- total_conversions
- gross_referred_revenue
- total_commission
- payout_method
- payout_email
- status: draft, pending_review, approved, paid, failed, held
- payment_reference
- admin_notes
- created_date
- approved_date
- paid_date

Rules:

- Payouts are calculated at the end of the month.
- Only approved unpaid conversions should be included.
- Once marked paid, related conversions should be marked paid.
- Admin can place payout on hold.
- Affiliate can view payout status but cannot edit payout records.

---

## AffiliateSettings

Stores program-wide settings.

Fields:

- program_enabled
- allowed_countries: USA, Canada
- default_commission_type
- default_commission_rate
- cookie_duration_days: 90
- minimum_payout_amount
- payout_schedule: end_of_month
- auto_approve_affiliates: false
- auto_approve_conversions: false
- self_referral_allowed: false
- terms_url
- support_email
- created_date
- updated_date

Rules:

- Admin-only.
- Used by backend functions when generating affiliates, commissions, and payouts.

---

# Phase 3: Affiliate Signup

Create an affiliate signup page.

Suggested route:

- \`/affiliate\`
- \`/affiliate/signup\`

The signup page should include:

- Program overview
- Commission explanation
- 90-day cookie explanation
- End-of-month payout explanation
- USA and Canada only notice
- Affiliate application form
- Terms acceptance checkbox
- Submit button

Form fields:

- Full name
- Email
- Country dropdown: United States, Canada only
- State / province
- Phone
- Website
- Social profile links
- Audience description
- How they plan to promote
- Preferred payout method
- Payout email
- Terms agreement checkbox

Validation:

- Country must be United States or Canada.
- Terms must be accepted.
- Email is required.
- Promotion method is required.
- If the user is logged in, connect application to current user.
- If not logged in, allow application but encourage account creation if needed.

After submission:

- Create Affiliate record with \`pending\` status.
- Generate unique affiliate code.
- Show confirmation message.
- Tell applicant their application is pending review.
- Notify admin if the app has notification/email support.
- If the app does not have notifications, create an admin dashboard alert/card.

---

# Phase 4: Affiliate Links and Tracking

Approved affiliates need a unique referral link.

Example formats:

- \`https://yourdomain.com/?ref=AFFILIATECODE\`
- \`https://yourdomain.com/signup?ref=AFFILIATECODE\`
- \`https://yourdomain.com/pricing?ref=AFFILIATECODE\`

When a visitor lands with \`?ref=AFFILIATECODE\`:

1. Validate the affiliate code.
2. Confirm affiliate status is approved.
3. Create or update a visitor ID.
4. Store affiliate tracking data in a 90-day cookie/local storage.
5. Create an AffiliateClick record.
6. Create or update an AffiliateReferral record.
7. Preserve UTM parameters.
8. Continue normal page navigation.

Cookie/local storage values:

- affiliate_code
- affiliate_id
- visitor_id
- first_click_date
- last_click_date
- attribution_expires_date
- landing_url
- referrer_url
- UTM values

Cookie duration:

- 90 days

Attribution:

- Use last-click attribution by default.
- Do not overwrite an already converted referral.
- Do not attribute if affiliate is suspended, rejected, or deleted.
- Do not attribute if cookie is expired.

---

# Phase 5: Conversion Tracking

Add backend-safe conversion tracking.

When a referred visitor:

- Creates an account
- Purchases
- Starts a paid subscription
- Upgrades
- Completes any existing payment event in the app

The system should:

1. Check for active affiliate cookie/local storage.
2. Validate affiliate status.
3. Find or create AffiliateReferral.
4. Create AffiliateConversion.
5. Calculate commission.
6. Mark conversion as pending or approved depending on AffiliateSettings.
7. Update affiliate totals.
8. Connect conversion to order/customer/subscription if those entities exist.

Commission calculation:

- If commission type is percentage:
  - commission = conversion amount × commission rate
- If commission type is fixed:
  - commission = fixed commission rate
- Round to two decimals.
- Never calculate commission on the frontend only.
- Backend function must calculate and store commission.

Self-referral prevention:

- If logged-in user email matches affiliate email, mark conversion as disqualified.
- If referred customer email matches affiliate payout email, mark as disqualified.
- If same user ID as affiliate user ID, mark as disqualified.
- Add admin-visible reason.

---

# Phase 6: Affiliate Dashboard

Create an affiliate dashboard for approved affiliates.

Suggested route:

- \`/affiliate/dashboard\`

If affiliate is pending:

- Show pending approval screen.

If rejected:

- Show rejected status and reason if available.

If suspended:

- Show suspended notice.

Approved affiliate dashboard should include:

## Overview Cards

- Total clicks
- Unique visitors
- Total conversions
- Pending commissions
- Approved unpaid commissions
- Paid commissions
- Total lifetime earnings
- Next payout date
- Current month earnings

## Referral Link Section

- Affiliate referral link
- Copy button
- Link builder with optional UTM fields:
  - campaign
  - source
  - medium
  - content
  - term
- Generated URL preview

## Performance Charts

- Clicks over time
- Conversions over time
- Earnings over time
- Conversion rate

## Conversion Table

Columns:

- Date
- Conversion type
- Conversion amount
- Commission
- Status
- Payout status

## Payout Table

Columns:

- Month
- Total commission
- Status
- Paid date
- Payment reference if available

## Profile / Settings

Affiliate can edit:

- Phone
- Website
- Social links
- Audience description
- Promotion methods
- Payout email
- Payout method

Affiliate cannot edit:

- Status
- Commission rate
- Commission type
- Earnings
- Payout records
- Conversion records

---

# Phase 7: Admin Affiliate Dashboard

Create an admin affiliate dashboard.

Suggested route:

- \`/admin/affiliates\`

Admin dashboard should include:

## Program Overview Cards

- Total affiliates
- Pending applications
- Approved affiliates
- Suspended affiliates
- Total clicks
- Total conversions
- Total referred revenue
- Total unpaid commissions
- Total paid commissions
- Current month payout estimate

## Affiliate Management Table

Columns:

- Affiliate name
- Email
- Country
- Status
- Total clicks
- Total conversions
- Total earnings
- Unpaid earnings
- Paid earnings
- Created date
- Actions

Actions:

- View details
- Approve
- Reject
- Suspend
- Reactivate
- Edit commission
- Add admin notes

## Affiliate Detail Page

Show:

- Profile information
- Application answers
- Referral link
- Click history
- Referral history
- Conversion history
- Payout history
- Admin notes
- Fraud flags
- Commission settings

Admin actions:

- Approve affiliate
- Reject affiliate with reason
- Suspend affiliate
- Reactivate affiliate
- Change commission type
- Change commission rate
- Manually adjust conversion status
- Hold payout
- Mark payout as paid
- Add payment reference
- Add notes

---

# Phase 8: Monthly Payout System

Payment is made at the end of the month.

Create admin tools for monthly payout management.

Suggested route:

- \`/admin/affiliates/payouts\`

The payout dashboard should include:

- Current month estimated payouts
- Previous month unpaid payouts
- Affiliates above minimum payout threshold
- Affiliates below threshold
- Pending review payouts
- Approved payouts
- Paid payouts
- Failed payouts
- Held payouts

Create backend function:

\`generateMonthlyAffiliatePayouts\`

Function behavior:

1. Accept month and year.
2. Find all approved unpaid conversions for that month.
3. Group conversions by affiliate.
4. Calculate total commission per affiliate.
5. Respect minimum payout amount if configured.
6. Create AffiliatePayout records.
7. Attach conversions to payout.
8. Mark payout status as pending_review.
9. Do not mark conversions as paid yet.

Create backend function:

\`markAffiliatePayoutPaid\`

Function behavior:

1. Admin-only.
2. Accept payout ID and payment reference.
3. Mark payout as paid.
4. Mark all included conversions as paid.
5. Update affiliate unpaid earnings and paid earnings.
6. Store paid date.
7. Lock payout from accidental recalculation.

Create backend function:

\`holdAffiliatePayout\`

Function behavior:

1. Admin-only.
2. Accept payout ID and reason.
3. Mark payout as held.
4. Store admin notes.
5. Do not mark conversions as paid.

Create backend function:

\`recalculateAffiliateTotals\`

Function behavior:

1. Admin-only.
2. Recalculate clicks, conversions, unpaid earnings, paid earnings, and lifetime earnings.
3. Useful if admin edits or corrects conversion statuses.

---

# Phase 9: Admin Settings

Create an admin settings page for the affiliate program.

Suggested route:

- \`/admin/affiliates/settings\`

Settings:

- Enable / disable affiliate program
- Default commission type
- Default commission rate
- Cookie duration days, default 90
- Minimum payout amount
- Auto-approve affiliates: yes/no
- Auto-approve conversions: yes/no
- Allowed countries: United States, Canada
- Self-referral allowed: default false
- Affiliate terms URL
- Support email

Admin-only.

---

# Phase 10: Security and Permissions

Implement strong permission checks.

Affiliate users can:

- View their own affiliate profile
- View their own clicks
- View their own conversions
- View their own payouts
- Edit safe profile fields only

Affiliate users cannot:

- View other affiliates
- View other affiliates' earnings
- Modify commission records
- Modify payout records
- Approve themselves
- Change their status
- Change commission rates
- Mark payouts paid

Admins can:

- View all affiliates
- Manage affiliate status
- Manage conversions
- Manage payouts
- Manage settings
- Recalculate totals

Backend functions must verify admin role before admin actions.

Do not rely only on frontend route hiding.

---

# Phase 11: Fraud Prevention

Add basic fraud detection.

Flag suspicious cases:

- Self-referral
- Same email as affiliate
- Same payout email as customer email
- High click volume with no conversions
- Repeated conversions from same visitor
- Suspicious duplicate IP hash
- Multiple accounts using same affiliate cookie
- Affiliate trying to use their own referral link

Create visible fraud flags in admin dashboard.

Fraud fields can include:

- fraud_flag: true/false
- fraud_reason
- reviewed_by_admin
- review_status: unreviewed, cleared, rejected

Do not automatically delete suspicious records. Mark them for admin review.

---

# Phase 12: UI Requirements

The UI should be clean, modern, and match the existing app.

Use:

- Cards for summary stats
- Tables for affiliates, conversions, and payouts
- Badges for statuses
- Modals for approval/rejection/suspension
- Copy button for referral links
- Date filters
- Month/year filters
- Search
- Status filters
- Empty states
- Loading states
- Error states
- Mobile-responsive layouts

Status badge colors:

- pending: yellow
- approved: green
- rejected: red
- suspended: gray
- paid: green
- held: orange
- failed: red

---

# Phase 13: Required Backend Functions

Create backend functions where needed:

## trackAffiliateClick

Purpose:

- Track visitor clicks from referral links.
- Validate affiliate code.
- Create click record.
- Create/update referral record.

## registerAffiliateConversion

Purpose:

- Called after signup/payment/subscription/upgrade.
- Checks cookie/referral data.
- Calculates commission.
- Creates conversion.
- Updates affiliate totals.

## generateMonthlyAffiliatePayouts

Purpose:

- Creates monthly payout batches.

## markAffiliatePayoutPaid

Purpose:

- Marks payout and related conversions as paid.

## holdAffiliatePayout

Purpose:

- Places payout on hold.

## approveAffiliate

Purpose:

- Admin approves affiliate application.

## rejectAffiliate

Purpose:

- Admin rejects affiliate application with reason.

## suspendAffiliate

Purpose:

- Admin suspends affiliate.

## updateAffiliateSettings

Purpose:

- Admin updates program settings.

## recalculateAffiliateTotals

Purpose:

- Admin recalculates affiliate metrics.

All admin functions must verify admin permissions.

---

# Phase 14: Existing Payment Flow Integration

Find the app's current payment, checkout, subscription, order, or invoice flow.

Integrate affiliate conversion tracking into the existing success event.

Examples:

- After successful checkout
- After subscription activation
- After account upgrade
- After paid plan purchase
- After invoice payment confirmation

Do not create fake payment logic if payment logic already exists.

If there is no existing payment system, create the affiliate tracking infrastructure and leave clear integration hooks with comments explaining exactly where conversion tracking should be called later.

---

# Phase 15: Testing / QA

After building, run a full QA pass.

Test these cases:

1. Visitor lands with valid affiliate link.
2. Visitor lands with invalid affiliate code.
3. Visitor lands with suspended affiliate code.
4. Cookie/local storage is saved correctly.
5. Cookie expires after 90 days.
6. Visitor signs up within 90 days.
7. Visitor purchases within 90 days.
8. Conversion is created.
9. Commission is calculated correctly.
10. Affiliate can view their own dashboard.
11. Affiliate cannot view another affiliate's data.
12. Pending affiliate cannot access approved dashboard.
13. Rejected affiliate sees rejected status.
14. Admin can approve affiliate.
15. Admin can reject affiliate.
16. Admin can suspend affiliate.
17. Admin can edit commission rate.
18. Admin can generate monthly payouts.
19. Admin can mark payout paid.
20. Paid conversions are locked.
21. Self-referral is flagged or disqualified.
22. USA and Canada only restriction works.
23. Mobile layout works.
24. Admin route protection works.
25. Backend permission checks work.

---

# Phase 16: Final Output

After completing the build, provide a summary with:

- New pages created
- New entities created
- New backend functions created
- Existing files modified
- How referral tracking works
- How conversions are recorded
- How monthly payouts work
- How admins approve affiliates
- How affiliates access their dashboard
- Any assumptions made
- Any setup still required from me

Do not stop after planning. Build the full affiliate system.`,
  tags: ['affiliate', 'referrals', 'payouts', 'tracking', 'app-building', 'monetization', 'admin'],
};

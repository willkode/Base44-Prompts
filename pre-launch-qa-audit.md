---
title: "Pre-Launch QA Audit + Fix Plan"
slug: "pre-launch-qa-audit"
category: "Debugging"
published: "2026-04-24"
source_file: "preLaunchQAAudit.js"
---

# Pre-Launch QA Audit + Fix Plan

> A complete 27-phase QA audit prompt that acts as a senior QA engineer, security reviewer, and launch readiness auditor. Maps your entire app, runs role-based testing, validates CRUD + forms + mobile + permissions, and produces a full QA report with a launch readiness score before fixing anything.

**Category:** Debugging  
**Published:** 2026-04-24  
**Source File:** `preLaunchQAAudit.js`

---

## Support This Free Prompt Library

I share these prompts for free to help builders create cleaner apps, stronger workflows, and better AI-assisted software.

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use Claude Sonnet 4.6 or Opus. Do NOT let the AI start fixing until the full QA report is complete — that is the whole point. Review the report, approve the fix plan, then let it run the staged fixes. Best used right before a real launch with real users, payments, and private data.

---

## Prompt

You are now acting as a senior QA engineer, product tester, security reviewer, mobile usability tester, and launch readiness auditor.

Your job is to perform a complete QA test of this Base44 app before launch.

IMPORTANT:
Do not start making changes immediately.
Do not rewrite the app blindly.
Do not remove existing features.
Do not change the visual design unless a bug requires it.
Do not create duplicate systems.
Do not guess how the app works.
First, inspect and understand the entire app.

Your goal is to find every possible issue that could break the app, confuse users, cause data loss, expose private data, create permission problems, hurt mobile usability, or make the app feel unfinished.

After the audit, provide a full QA report first.
Then fix the confirmed issues in a careful, staged way.

---

# PHASE 1: FULL APP UNDERSTANDING

Before testing, scan the entire app.

Review:

- All pages
- All components
- All layouts
- All forms
- All routes
- All navigation items
- All modals
- All dashboards
- All user flows
- All database entities
- All backend functions
- All automations
- All integrations
- All permissions
- All role-based access rules
- All file upload areas
- All generated reports
- All public links
- All login/register/account flows
- All empty states
- All loading states
- All error states
- All mobile layouts
- All desktop layouts

Create a clear map of how the app works before testing.

Include:

1. App purpose
2. Main user types
3. Main workflows
4. Main data models
5. Critical pages
6. Critical actions
7. Sensitive data areas
8. Public access areas
9. Admin-only areas
10. Areas most likely to break

Do not fix anything until this app map is complete.

---

# PHASE 2: CREATE A QA TEST MATRIX

Create a complete QA test matrix for the app.

The test matrix should include:

- Page being tested
- User role being tested
- Feature being tested
- Expected behavior
- Actual behavior
- Pass or fail
- Severity level
- Notes
- Recommended fix

Use these severity levels:

- Critical: Breaks the app, causes data loss, exposes private data, or blocks launch
- High: Major user flow is broken or unreliable
- Medium: Feature works but has usability, validation, or edge case problems
- Low: Polish issue, wording issue, spacing issue, or minor improvement

---

# PHASE 3: ROLE-BASED QA TESTING

Test the app as every user role.

For each role, verify:

- The user only sees what they should see
- The user can only access pages they are allowed to access
- The user can only create, edit, delete, or view data they are allowed to manage
- The user cannot access private data through direct URLs
- The user cannot perform restricted actions by changing IDs or route parameters
- The navigation matches that role
- The dashboard matches that role
- Empty states make sense for that role
- Error messages make sense for that role

Test all roles found in the app, including but not limited to:

- Admin
- Owner
- Manager
- Staff
- Client
- Customer
- Guest
- Public user
- Any custom role already used by this app

If the app uses different role names, use the app's existing role names.

---

# PHASE 4: AUTHENTICATION AND ACCOUNT TESTING

Test the authentication and account experience.

Check:

- Login flow
- Logout flow
- Register flow, if enabled
- Invite flow, if used
- Password reset flow, if available
- Session behavior
- Redirects after login
- Redirects after logout
- Protected routes
- Public routes
- Unauthorized access handling
- Role-based redirects
- Broken auth states
- Expired session behavior
- User profile loading
- User account data display

Look for:

- Users landing on the wrong dashboard
- Logged-out users seeing protected data
- Logged-in users being sent to public pages incorrectly
- Admin-only pages visible to normal users
- Direct URL access problems
- Missing loading states while auth is checked
- Infinite loading screens
- Broken redirects
- Blank screens

---

# PHASE 5: PAGE-BY-PAGE QA TESTING

Test every page in the app.

For each page, check:

- Page loads successfully
- Page title is clear
- Page purpose is obvious
- Navigation works
- Buttons work
- Forms work
- Filters work
- Search works
- Sorting works
- Tabs work
- Modals work
- Dropdowns work
- Tables work
- Cards display correct data
- Actions update the correct records
- Empty states appear when no data exists
- Loading states appear while data loads
- Error states appear when something fails
- Success messages appear after completed actions
- No broken links
- No dead buttons
- No duplicate buttons
- No console-breaking code patterns
- No unused UI that does nothing
- No confusing labels
- No mismatched route names
- No placeholder text left in production
- No fake demo data shown as real data unless intended

For every page, report:

- What works
- What fails
- What is confusing
- What could block launch
- What should be fixed before launch

---

# PHASE 6: CRUD TESTING

Test all create, read, update, and delete workflows.

For every data type in the app, test:

## Create

- Can a valid record be created?
- Are required fields enforced?
- Are optional fields handled correctly?
- Are default values set correctly?
- Are created records assigned to the correct user, team, company, client, or property?
- Does the UI update after creation?
- Does the user receive success feedback?
- Does invalid input get blocked?

## Read

- Does the correct data appear?
- Is the data scoped to the correct user or role?
- Are details pages accurate?
- Are lists accurate?
- Are counts accurate?
- Are totals accurate?
- Are statuses accurate?
- Are relationships between records accurate?

## Update

- Can existing records be edited?
- Are only allowed fields editable?
- Are updates saved correctly?
- Does the UI refresh correctly after edits?
- Are timestamps updated correctly?
- Are audit fields preserved?
- Are related records updated if needed?

## Delete

- Can records be deleted only by allowed users?
- Is there a confirmation step before destructive actions?
- Does delete remove the correct record?
- Does delete avoid removing related data incorrectly?
- Does the UI update after deletion?
- Are users prevented from deleting records they should not delete?

Also test soft-delete behavior if the app uses archived, inactive, canceled, or hidden records.

---

# PHASE 7: FORM VALIDATION TESTING

Test every form in the app.

For each form, verify:

- Required fields are marked
- Required fields are enforced
- Email fields validate email format
- Phone fields validate phone format if used
- URL fields validate URL format if used
- Number fields reject invalid numbers
- Date fields reject impossible dates
- File fields reject invalid file types
- Character limits exist where needed
- Long text does not break the layout
- Whitespace-only entries are rejected
- Duplicate records are handled correctly
- Errors appear near the correct field
- Errors are written in plain language
- Success messages are clear
- Submit buttons prevent double submission
- Submit buttons show loading state
- Users cannot submit incomplete forms
- Users do not lose form data after a minor error

Test edge cases:

- Empty input
- Very long input
- Special characters
- Emojis
- Apostrophes
- Quotes
- HTML tags
- Script tags
- Negative numbers
- Zero values
- Large numbers
- Past dates
- Future dates
- Duplicate names
- Duplicate emails
- Invalid files
- Missing files
- Slow upload
- Failed upload

---

# PHASE 8: MOBILE-FIRST QA TESTING

This app must work well on mobile.

Test every page at mobile sizes.

Check:

- 320px width
- 375px width
- 390px width
- 414px width
- 768px tablet width
- Desktop width

For mobile, verify:

- No horizontal scrolling
- No cut-off buttons
- No overlapping text
- No tiny tap targets
- No hidden form fields
- No broken sticky headers
- No broken bottom navigation
- No broken sidebars
- No unusable tables
- No modals that overflow the screen
- No dropdowns that open off-screen
- No cards that become unreadable
- No images that stretch incorrectly
- No report previews that break mobile layout
- Primary actions are easy to find
- Forms are easy to complete with thumbs
- File upload works on mobile
- Camera/photo upload works if used
- Long pages remain usable
- Buttons have enough spacing
- Text is readable without zooming

If tables are not mobile-friendly, recommend converting them into stacked mobile cards.

---

# PHASE 9: DESKTOP QA TESTING

Test the app on desktop layouts.

Check:

- Sidebar behavior
- Top navigation behavior
- Dashboard layout
- Data tables
- Wide screens
- Empty space usage
- Modal sizing
- Multi-column layouts
- Form alignment
- Card grids
- Report previews
- Admin screens
- Settings screens

Look for:

- Stretched layouts
- Awkward empty space
- Misaligned cards
- Broken grids
- Text that spans too wide
- Buttons too far from their context
- Tables without useful columns
- Poor visual hierarchy

---

# PHASE 10: NAVIGATION AND ROUTING TESTING

Test the full navigation system.

Check:

- Main navigation links
- Sidebar links
- Header links
- Footer links
- Breadcrumbs if used
- Back buttons
- Cancel buttons
- Detail page links
- Edit page links
- Public links
- Shared links
- Redirects
- 404 behavior
- Unauthorized page behavior

Verify:

- No broken routes
- No duplicate routes
- No route goes to the wrong page
- Back buttons return to the correct place
- Cancel buttons do not lose context
- Users do not get trapped on a page
- Users can always return to dashboard
- Public links do not expose private app areas

---

# PHASE 11: DATA RELATIONSHIP TESTING

Review every data relationship.

Check:

- Users to accounts
- Users to teams
- Users to clients
- Clients to records
- Properties to reports
- Orders to payments
- Projects to tasks
- Tickets to replies
- Files to records
- Comments to parent records
- Audit logs to actions
- Any other relationships used by this app

Verify:

- Related records load correctly
- Related records are filtered correctly
- Users cannot see unrelated records
- Deleting one record does not break another
- Child records display under the correct parent
- Counts and totals match the real data
- Status changes update related records when needed
- Reports pull the correct related data

Look for orphaned records, missing ownership fields, missing foreign keys, and broken relationships.

---

# PHASE 12: PERMISSION AND SECURITY QA

Perform a serious permission and security review.

Check:

- Role-based access
- Record ownership
- Tenant isolation
- Client isolation
- Admin-only data
- Public link access
- Shared report access
- File access
- Upload access
- Delete permissions
- Edit permissions
- Backend function permissions
- API calls
- Data queries
- Direct URL access
- Hidden UI is not the only protection
- Sensitive actions are protected server-side where possible

Look for these security issues:

- Normal users can view admin data
- Clients can view other clients' records
- Users can edit records they do not own
- Public links expose too much data
- File URLs are exposed incorrectly
- Backend functions trust client-side input too much
- Sensitive IDs are easy to manipulate
- Delete actions are too easy
- Private data appears in public views
- User role can be spoofed from the frontend
- No ownership checks before update/delete
- No validation before backend actions

For every security issue, explain:

- What is exposed
- Who can access it
- Why it is dangerous
- How to reproduce it
- How to fix it

---

# PHASE 13: FILE UPLOAD AND MEDIA QA

If the app uses uploads, images, documents, videos, PDFs, signatures, or attachments, test them thoroughly.

Check:

- Upload button works
- Drag-and-drop works if used
- Mobile upload works
- Camera upload works if used
- Multiple file upload works if used
- File preview works
- File delete works
- File replacement works
- Upload progress appears
- Failed uploads show errors
- Large files are handled correctly
- Invalid file types are blocked
- Empty uploads are blocked
- Uploaded files connect to the correct record
- Uploaded files appear immediately after upload
- Uploaded files remain after refresh
- Uploaded files do not appear under the wrong user or record
- Private files are not publicly exposed unless intended
- Image aspect ratios do not break the layout
- Report generation includes uploaded files correctly

Also test:

- Slow upload
- Interrupted upload
- Multiple images at once
- Duplicate filenames
- Large image files
- Missing file URL
- Broken image URL
- Deleted image behavior

---

# PHASE 14: REPORT, EXPORT, AND DOCUMENT QA

If the app generates reports, PDFs, documents, invoices, receipts, summaries, exports, or downloads, test them.

Check:

- Report data is accurate
- Report includes the correct user/client/property/order/project
- Report includes correct dates
- Report includes correct photos/files
- Report includes correct notes
- Report includes correct signatures if used
- Report includes correct statuses
- Report layout is clean
- Report works on mobile
- Report works on desktop
- Download button works
- Print view works if used
- PDF/export works if used
- Public report links work if used
- Private report links stay protected
- Report does not show placeholder text
- Report does not show missing data labels
- Report handles long text
- Report handles many images
- Report handles no images
- Report handles incomplete data gracefully

Look for:

- Wrong records in reports
- Missing images
- Broken images
- Incorrect timestamps
- Incorrect user names
- Incorrect totals
- Incomplete sections
- Bad page breaks
- Overflowing content
- Reports visible to the wrong person

---

# PHASE 15: SEARCH, FILTER, SORT, AND TABLE QA

Test all search, filter, sort, and table views.

Check:

- Search returns correct results
- Search handles no results
- Search clears correctly
- Search is case-insensitive where appropriate
- Filters work alone
- Filters work together
- Filters clear correctly
- Date filters work
- Status filters work
- Role filters work
- Category filters work
- Sorting works
- Pagination works if used
- Table actions work
- Bulk actions work if used
- Empty table state is clear
- Loading table state is clear

Test edge cases:

- Searching by partial word
- Searching with special characters
- Searching with spaces
- Filtering with no results
- Combining multiple filters
- Sorting after filtering
- Filtering after sorting
- Refreshing while filters are active

---

# PHASE 16: NOTIFICATIONS, EMAILS, AND AUTOMATIONS QA

If the app uses emails, notifications, reminders, scheduled tasks, or automations, test them.

Check:

- Notifications trigger at the correct time
- Notifications go to the correct user
- Notifications do not go to the wrong user
- Email subject lines are correct
- Email body content is correct
- Email links work
- Status change notifications work
- Assignment notifications work
- Reminder notifications work
- Public link emails work
- Admin alert emails work
- Failed automation states are handled
- Duplicate notifications are not sent
- Notifications respect user role and ownership

Look for:

- Missing notification
- Duplicate notification
- Wrong recipient
- Broken link
- Old status in email
- Sensitive data sent to the wrong person
- Automation running too often
- Automation not running at all

---

# PHASE 17: INTEGRATION QA

If the app uses integrations, test each one.

Possible integrations include:

- Stripe
- Twilio
- Resend
- SendGrid
- Mailchimp
- OpenAI
- Claude
- Google APIs
- External APIs
- Webhooks
- Zapier
- Make
- Custom backend functions

For each integration, test:

- Connection setup
- Missing API key behavior
- Invalid API key behavior
- Successful request
- Failed request
- Slow request
- Timeout behavior
- Error message
- Retry behavior if used
- Data mapping
- Duplicate prevention
- Logging
- User feedback
- Security of sensitive keys

Do not expose API keys in the frontend.
Do not display secrets in the UI.
Do not store secrets in normal user-editable fields unless that is the intended app design.

---

# PHASE 18: AI FEATURE QA

If the app uses AI features, test them carefully.

Check:

- Prompt inputs work
- AI output is useful
- AI output is formatted correctly
- AI output saves correctly
- AI output appears in the right place
- AI does not overwrite important user data accidentally
- AI handles empty input
- AI handles bad input
- AI handles long input
- AI handles missing context
- AI handles failed responses
- AI loading state is visible
- AI error state is clear
- Users know what the AI did
- Users can review AI output before using it
- AI does not expose another user's data
- AI does not generate content using the wrong record

Also check:

- Prompt quality
- Context passed into the AI
- Output structure
- Fallback behavior
- Token-heavy areas
- Repeated generation behavior
- Duplicate generation
- Regeneration behavior

---

# PHASE 19: OFFLINE, SYNC, AND RELIABILITY QA

If the app has offline behavior, sync behavior, drafts, local storage, uploads, or delayed saving, test it hard.

Check:

- Data saves correctly online
- Data saves correctly after refresh
- Drafts are preserved if used
- Pending sync items are visible
- Pending sync items eventually sync
- Failed sync items show a clear error
- Users can retry failed sync
- Users do not lose data when connection drops
- Duplicate records are not created after retry
- Photos/files sync to the correct record
- Sync status updates correctly
- Local data clears only when safe
- App handles slow connections
- App handles refresh during upload
- App handles closing and reopening

Test cases:

- Create record while online
- Create record while offline if supported
- Upload image while connection is weak
- Refresh during save
- Submit form twice
- Leave page during save
- Reopen app with pending sync
- Retry failed sync
- Delete item with pending sync
- Edit item with pending sync

---

# PHASE 20: ERROR HANDLING QA

Review every likely failure point.

Check how the app handles:

- Failed data load
- Failed save
- Failed update
- Failed delete
- Failed upload
- Failed login
- Failed permission check
- Failed backend function
- Failed API request
- Missing record
- Deleted record
- Unauthorized record
- Empty response
- Invalid response
- Slow response
- Network failure

Every error should have:

- Clear message
- No scary technical text shown to normal users
- No blank screen
- No infinite spinner
- No broken layout
- A clear next step
- Retry option where appropriate

---

# PHASE 21: PERFORMANCE QA

Review app performance.

Check:

- Slow pages
- Heavy components
- Repeated data calls
- Unnecessary re-renders
- Large lists without pagination
- Large images not optimized
- Images missing width and height
- Images missing lazy loading
- Unused imports
- Unused components
- Large libraries imported unnecessarily
- Backend functions doing too much
- Data queries pulling too much data
- Dashboards loading too many records at once
- Reports loading too slowly
- Mobile performance issues

Recommend fixes for:

- Lazy loading
- Pagination
- Query optimization
- Image optimization
- Reducing repeated API calls
- Removing unused code
- Splitting heavy components
- Better loading states

Do not change the app's design unless needed.

---

# PHASE 22: ACCESSIBILITY QA

Test accessibility and usability.

Check:

- Buttons have clear labels
- Links have clear labels
- Forms have labels
- Inputs have placeholders only as support, not as the only label
- Error messages are readable
- Text has enough contrast
- Font sizes are readable
- Keyboard navigation works where possible
- Focus states are visible
- Modals can be closed
- Icons have text labels where needed
- Images have alt text where appropriate
- Color is not the only way status is communicated
- Required fields are clearly marked

Look for:

- Tiny text
- Low contrast
- Icon-only actions with no explanation
- Confusing form labels
- Missing button text
- Hidden focus states
- Bad mobile tap targets

---

# PHASE 23: CONTENT, COPY, AND POLISH QA

Review all user-facing text.

Check for:

- Typos
- Grammar issues
- Placeholder text
- Inconsistent labels
- Inconsistent button text
- Confusing error messages
- Developer notes accidentally visible
- Incomplete instructions
- Unclear empty states
- Unclear success messages
- Unclear page headings
- Inconsistent capitalization
- Inconsistent status names

Make sure the app feels finished and professional.

---

# PHASE 24: LAUNCH READINESS QA

Create a final launch readiness checklist.

Include:

- Critical issues blocking launch
- High-priority issues strongly recommended before launch
- Medium-priority issues that can be fixed soon after launch
- Low-priority polish items
- Security concerns
- Mobile concerns
- Data concerns
- Performance concerns
- Missing user feedback
- Missing empty states
- Missing error states
- Missing permission checks
- Risky workflows

Then give the app a launch readiness score:

- 90–100: Launch ready
- 75–89: Almost ready, minor fixes needed
- 60–74: Not ready, several important issues
- Below 60: Do not launch

Explain the score clearly.

---

# PHASE 25: QA REPORT FORMAT

After testing, produce a QA report in this exact structure:

## 1. App Summary

Explain what the app does and who it is for.

## 2. User Roles Found

List every user role and what each role can do.

## 3. Critical User Flows

List the most important workflows in the app.

## 4. QA Test Matrix

Create a table with:

- Area
- Role
- Test
- Expected Result
- Actual Result
- Status
- Severity
- Recommended Fix

## 5. Bugs Found

For each bug, include:

- Bug title
- Severity
- Page/component
- User role affected
- Steps to reproduce
- Expected behavior
- Actual behavior
- Likely cause
- Recommended fix
- Launch impact

## 6. Security and Permission Issues

List every permission, privacy, or data access issue.

## 7. Mobile Issues

List every mobile layout or usability issue.

## 8. Data and Sync Issues

List every data loading, saving, upload, or sync issue.

## 9. Performance Issues

List every performance concern.

## 10. UX and Polish Issues

List usability and polish problems.

## 11. Launch Readiness Score

Give a score from 0 to 100 and explain why.

## 12. Fix Plan

Group fixes into:

- Fix immediately before launch
- Fix soon after launch
- Optional improvements

Do not fix anything until this report is completed.

---

# PHASE 26: FIXING RULES

After the QA report is complete, begin fixing issues in this order:

1. Critical security or permission issues
2. Data loss issues
3. Broken core workflows
4. Broken forms
5. Broken mobile layouts
6. Broken uploads/files
7. Broken reports/exports
8. Error handling issues
9. Performance issues
10. UX polish issues

When fixing:

- Make the smallest safe change possible
- Preserve the existing app structure
- Preserve the existing design system
- Reuse existing components
- Reuse existing entities
- Reuse existing permissions
- Do not create duplicate pages
- Do not create duplicate data models
- Do not remove working features
- Do not change business logic unless the QA issue requires it
- Do not introduce new dependencies unless absolutely needed
- Do not expose private data
- Do not weaken permissions
- Do not hide errors without handling them properly

After each group of fixes, explain exactly what was changed.

---

# PHASE 27: POST-FIX REGRESSION TESTING

After fixes are made, retest the affected areas.

For every fixed issue, confirm:

- Original bug no longer happens
- Related workflows still work
- No new permission issue was introduced
- No new mobile issue was introduced
- No new data issue was introduced
- No new broken route was introduced
- No new layout issue was introduced

Create a final regression report with:

- Issue fixed
- How it was fixed
- Retest result
- Remaining risk
- Final status

---

# FINAL OUTPUT REQUIRED

When finished, provide:

1. Full QA report
2. Bugs found
3. Security issues found
4. Mobile issues found
5. Data issues found
6. Performance issues found
7. UX/polish issues found
8. Launch readiness score
9. Fixes completed
10. Remaining recommendations
11. Final launch recommendation

Final recommendation must be one of:

- Ready to launch
- Ready to launch after minor fixes
- Not ready to launch yet
- Do not launch until critical issues are fixed

Be extremely thorough.
Act like this app is being prepared for real customers, real data, payments, private user information, and public launch.

---

## Support

If this prompt saves you time or helps you build better, you can support my work here:

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

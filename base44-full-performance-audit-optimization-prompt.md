# Base44 Full Performance Audit & Optimization Prompt

> A complete Base44 performance audit and optimization prompt for PageSpeed Insights, Core Web Vitals, Lighthouse, frontend efficiency, backend efficiency, mobile performance, dashboards, images, videos, integrations, and launch-ready performance cleanup.

---

## Support This Free Prompt

If this prompt saves you time, helps you improve app performance, or makes your Base44 app more launch-ready, you can support my work here:

[☕ Support Will Kode on Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Instructions

Use this prompt inside an existing Base44 app when you need a full performance audit and optimization pass.

This prompt is designed to make the AI:

- Scan the full app before changing anything
- Identify performance bottlenecks
- Protect existing design, permissions, auth, workflows, and SEO
- Improve PageSpeed, Core Web Vitals, frontend efficiency, backend efficiency, and mobile performance
- Produce a final report after optimization

Recommended use:

- Run this on a stable app checkpoint.
- Let the audit report finish before approving optimization work.
- Test important pages in Google PageSpeed Insights before and after.
- Review any manual compression or third-party script recommendations.
- Confirm no permissions, SEO, or user flows were broken.

---

## Prompt

You are a senior Base44 performance engineer.

Your task is to fully audit and optimize this Base44 application for PageSpeed Insights, Core Web Vitals, Lighthouse performance, perceived speed, frontend efficiency, and backend/API efficiency.

Do not start changing code immediately.

First, scan the entire app.

Review every page, layout, component, route, entity query, backend function, integration call, asset, image, animation, chart, dashboard, form, auth-protected area, admin area, and repeated UI pattern.

Your goal is to improve performance without breaking existing design, functionality, permissions, authentication, data access, workflows, or user experience.

---

# PHASE 1 — FULL APP PERFORMANCE AUDIT

Scan the full application and create a detailed performance report before making changes.

Review:

- All routes and pages
- Public pages
- Dashboard pages
- Admin pages
- Authenticated user pages
- Shared layouts
- Header, footer, nav, sidebar, mobile menu
- Reusable components
- Forms
- Tables
- Cards
- Modals
- Charts
- Image-heavy sections
- Video sections
- Hero sections
- Entity queries
- Backend functions
- Integration calls
- Repeated fetch patterns
- Client-side filtering
- Client-side sorting
- Large lists
- Search features
- Analytics scripts
- Tracking scripts
- Third-party embeds
- External scripts
- Animation libraries
- Icon usage
- Unused imports
- Duplicate components
- Dead code
- Console logs
- Error handling
- Loading states
- Empty states

Produce a report with:

1. Critical performance issues
2. High-impact quick wins
3. Medium-priority improvements
4. Low-priority cleanup
5. Risks before changing anything
6. Files/components likely responsible for poor PageSpeed scores
7. Pages most likely to have the worst performance
8. Suggested optimization order

Do not make changes until the audit is complete.

---

# PHASE 2 — OPTIMIZATION RULES

When making performance improvements, follow these rules:

- Do not change business logic unless required for performance.
- Do not remove features.
- Do not remove security checks.
- Do not weaken access rules.
- Do not bypass authentication.
- Do not expose private data.
- Do not change database/entity structure unless absolutely necessary.
- Do not create duplicate components if existing components can be improved.
- Do not redesign the app unless performance requires layout adjustment.
- Preserve existing visual style.
- Preserve mobile responsiveness.
- Preserve accessibility.
- Preserve SEO content and metadata.
- Keep all changes clean, minimal, and production-ready.

If a change may affect behavior, explain it before applying it.

---

# PHASE 3 — CORE WEB VITALS TARGETS

Optimize the app for these Core Web Vitals:

## Largest Contentful Paint

Improve the loading speed of the main visible content.

Check for:

- Slow hero sections
- Oversized images
- Background images that load too late
- Heavy videos
- Blocking scripts
- Too much data loading before rendering
- Large above-the-fold components
- Unoptimized fonts
- Large layout wrappers
- Client-side only rendering delays

Fix by:

- Compressing or replacing oversized images when possible
- Using properly sized images
- Lazy loading below-the-fold images
- Avoiding unnecessary image preloads
- Prioritizing above-the-fold content
- Simplifying hero components
- Deferring non-critical UI
- Avoiding heavy components in the first viewport
- Showing lightweight skeletons instead of blocking the page

## Interaction to Next Paint

Improve responsiveness after user interaction.

Check for:

- Heavy click handlers
- Large state updates
- Expensive filters
- Expensive sorting
- Large table rendering
- Client-side search over too many records
- Unnecessary re-renders
- Repeated useEffect loops
- Large components that re-render often
- Overuse of animations
- Blocking API calls
- Expensive calculations during render

Fix by:

- Memoizing expensive calculations
- Breaking large components into smaller components
- Avoiding unnecessary state updates
- Moving filtering/search to backend functions when needed
- Debouncing search inputs
- Limiting rendered results
- Adding pagination or "load more"
- Avoiding large array mapping on every render
- Preventing unnecessary re-fetching
- Using stable dependencies in useEffect

## Cumulative Layout Shift

Prevent layout movement during load.

Check for:

- Images without fixed dimensions
- Cards that resize after data loads
- Late-loading banners
- Fonts causing layout shifts
- Skeletons that do not match final layout
- Dynamic buttons or alerts pushing content around
- Modals or embeds altering layout unexpectedly

Fix by:

- Giving images explicit width/height or aspect ratios
- Reserving space for dynamic content
- Matching skeleton size to final UI
- Avoiding layout jumps after data loads
- Keeping banners and alerts stable
- Ensuring hero sections have predictable height

---

# PHASE 4 — FRONTEND CODE OPTIMIZATION

Review all React components.

Optimize:

- Unused imports
- Duplicate imports
- Heavy components
- Unnecessary state
- Unnecessary effects
- useEffect dependency issues
- Components that fetch data too often
- Components that re-render too often
- Inline functions passed deeply when avoidable
- Large conditional render blocks
- Repeated utility logic
- Repeated formatting logic
- Repeated filtering logic
- Console logs
- Debug-only code
- Dead components
- Unused variables
- Overly large files

Apply:

- React.memo where useful
- useMemo for expensive derived data
- useCallback where it prevents unnecessary child renders
- Debounced search where useful
- Component splitting where files are too large
- Lightweight loading states
- Proper error boundaries or fallback states where appropriate

Do not blindly add memoization everywhere. Only add it where it improves performance or reduces unnecessary rendering.

---

# PHASE 5 — ROUTE AND PAGE OPTIMIZATION

Review every page route.

For each page:

- Identify what loads immediately
- Identify what can load later
- Identify what should be lazy loaded
- Identify what data is needed above the fold
- Identify unnecessary queries
- Identify duplicate fetches
- Identify slow components
- Identify heavy assets
- Identify unnecessary animations

Improve each page by:

- Loading only critical data first
- Deferring non-critical sections
- Lazy loading below-the-fold components
- Lazy loading charts, maps, dashboards, and large tables
- Using skeleton loaders
- Avoiding full-page blocking spinners when partial loading is better
- Reducing initial JavaScript work
- Reducing unnecessary render complexity
- Improving mobile load speed

---

# PHASE 6 — IMAGE OPTIMIZATION

Audit all images.

Check for:

- Oversized images
- Uncompressed images
- Wrong image formats
- Images larger than displayed size
- Background images used where normal images would perform better
- Missing alt text
- Images loading above the fold unnecessarily
- Images loading below the fold too early
- Layout shift caused by images
- Repeated image URLs
- Large logos or icons
- Heavy hero images

Fix by:

- Replacing oversized images where possible
- Using smaller display sizes
- Adding lazy loading to below-the-fold images
- Adding eager loading only to important above-the-fold images
- Adding width/height or aspect ratio
- Avoiding huge background images
- Preserving visual quality while reducing file weight
- Ensuring image containers reserve space

If an image should be manually compressed outside of Base44, list it in the final report with file name/location and recommended size.

---

# PHASE 7 — VIDEO OPTIMIZATION

Audit all videos and video backgrounds.

Check for:

- Autoplay hero videos
- Large video files
- Video loaded immediately on mobile
- Video blocking first render
- Missing poster images
- Dark overlays or heavy effects
- Multiple videos loading at once

Fix by:

- Adding poster images when possible
- Deferring video loading until needed
- Avoiding autoplay on mobile if it hurts performance
- Using lightweight fallback images
- Loading video after main content when possible
- Making sure video does not delay Largest Contentful Paint

---

# PHASE 8 — ICON AND UI LIBRARY OPTIMIZATION

Review icon usage.

Check for:

- Importing large icon sets
- Importing unused icons
- Repeated icon imports
- Heavy UI components used unnecessarily
- Large animation dependencies used for tiny effects

Fix by:

- Importing only the icons used
- Removing unused icons
- Simplifying decorative icons if excessive
- Avoiding heavy animated components unless needed
- Keeping shadcn/ui components lean and reusable

---

# PHASE 9 — ANIMATION OPTIMIZATION

Audit all animations and transitions.

Check for:

- Too many animations on page load
- Heavy framer-motion usage
- Animations on large lists
- Animations triggering layout changes
- Animations running before content is visible
- Expensive hover effects
- Mobile performance issues

Fix by:

- Reducing page-load animations
- Keeping animations transform/opacity based
- Avoiding width/height/layout animation where possible
- Disabling or simplifying animations on mobile when needed
- Lazy loading animation-heavy sections
- Respecting reduced motion where possible

---

# PHASE 10 — DATA FETCHING OPTIMIZATION

Audit all Base44 entity queries.

Check for:

- Queries loading too many records
- Queries with no limit
- Client-side filtering over large datasets
- Client-side sorting over large datasets
- Duplicate queries across components
- Queries running on every render
- Queries running before required user data is available
- Admin queries used where user-level queries would work
- Fetching full records when only summary data is needed
- Fetching data for hidden tabs or unopened sections
- Fetching dashboard data all at once
- Re-fetch loops
- Search bars filtering large datasets in the browser

Fix by:

- Adding sensible limits
- Adding pagination
- Loading data only when needed
- Moving heavy search/filter logic to backend functions
- Debouncing search
- Fetching only visible tab data
- Combining duplicate queries where safe
- Avoiding repeated calls across parent/child components
- Caching results in component state where appropriate
- Showing partial content while non-critical data loads

Important:

Do not weaken permissions.
Do not use service role unless the page already requires admin-level access or the current logic clearly requires it.
Do not expose private records to public users.

---

# PHASE 11 — BACKEND FUNCTION OPTIMIZATION

Audit all backend functions.

Check for:

- Slow functions
- Functions returning too much data
- Functions making unnecessary external API calls
- Functions doing repeated work
- Functions without pagination
- Functions without limits
- Functions called too frequently
- Functions called from frontend on every render
- Functions that should cache or summarize results
- Functions that could return lightweight summaries instead of full records
- Functions with inefficient loops
- Functions with unnecessary logging
- Functions missing error handling

Fix by:

- Adding limits
- Returning only needed fields when possible
- Reducing repeated external calls
- Adding pagination support
- Adding search parameters
- Adding summary endpoints where useful
- Improving error handling
- Avoiding wasteful loops
- Avoiding unnecessary service-role reads
- Making responses smaller and faster

---

# PHASE 12 — INTEGRATION CREDIT OPTIMIZATION

Review all integrations and external API usage.

Check for:

- Integrations firing on page load unnecessarily
- Integrations called repeatedly
- AI calls triggered too often
- Email/SMS/Slack calls inside loops
- External API calls made before user confirmation
- Duplicate webhook calls
- Calls that should happen only after form submit
- Calls that should be moved behind a button
- Calls that should be cached
- Calls that should be batched
- Calls triggered by useEffect accidentally

Fix by:

- Moving calls to explicit user actions where appropriate
- Adding guards to prevent duplicate calls
- Adding debouncing/throttling where needed
- Batching calls where possible
- Reducing unnecessary AI/integration calls
- Preventing accidental repeated calls
- Adding clear loading/disabled states during calls
- Adding proper success/error handling

---

# PHASE 13 — JAVASCRIPT BUNDLE OPTIMIZATION

Review bundle weight.

Check for:

- Heavy libraries
- Unused packages
- Large charting libraries loaded globally
- Maps loaded on pages that do not need them
- Rich text editors loaded before needed
- Admin-only components loaded for normal users
- Dashboard-heavy components loaded on public pages
- Duplicate utility functions
- Unused components
- Large static data embedded in code

Fix by:

- Lazy loading heavy components
- Lazy loading route-specific features
- Moving admin-only components behind admin routes
- Loading charts only when visible
- Loading maps only when visible
- Removing unused imports/code
- Splitting large components
- Avoiding unnecessary package usage
- Replacing heavy logic with lightweight utilities where appropriate

---

# PHASE 14 — CSS AND LAYOUT OPTIMIZATION

Review styling and layout.

Check for:

- Overly complex nested layouts
- Repeated large class strings
- Expensive visual effects
- Heavy shadows/blur/backdrop filters
- Layout thrashing
- Mobile overflow
- Hidden content still rendering
- Large offscreen sections rendered immediately
- Duplicate layout wrappers
- Inconsistent spacing causing shifts

Fix by:

- Simplifying layout structure
- Avoiding unnecessary wrappers
- Reducing expensive blur/backdrop effects
- Ensuring mobile layouts are efficient
- Avoiding rendering hidden tab content until needed
- Keeping skeleton layouts stable
- Preserving design quality

---

# PHASE 15 — SEO AND METADATA PRESERVATION

Do not damage SEO while improving speed.

Review:

- Page titles
- Meta descriptions
- Open Graph tags
- Canonical tags
- Structured data if present
- Headings
- Internal links
- Public content
- Image alt text
- Crawlable content
- Blog/article pages if present

Preserve or improve SEO while optimizing performance.

If react-helmet-async or similar SEO handling is used, do not remove it.

---

# PHASE 16 — ACCESSIBILITY PRESERVATION

Performance improvements must not hurt accessibility.

Check:

- Buttons have labels
- Images have alt text
- Forms have labels
- Color contrast remains usable
- Keyboard navigation still works
- Modals remain accessible
- Loading states are understandable
- Disabled states are clear
- Reduced motion is respected where possible

---

# PHASE 17 — MOBILE PERFORMANCE

Prioritize mobile performance because PageSpeed Insights mobile scores are usually stricter.

Review mobile:

- Initial load
- Hero section
- Navigation
- Images
- Videos
- Tables
- Dashboards
- Forms
- Modals
- Animations
- Heavy lists
- Touch interactions

Fix mobile-specific issues:

- Reduce heavy above-the-fold content
- Simplify hero sections
- Lazy load non-critical sections
- Avoid large desktop-only components rendering on mobile
- Improve mobile table/card rendering
- Reduce animation intensity
- Prevent layout shift
- Improve tap responsiveness

---

# PHASE 18 — ADMIN AND DASHBOARD OPTIMIZATION

Dashboards are often performance-heavy.

Review all dashboards and admin pages.

Check for:

- Too many cards loading at once
- Too many charts loading at once
- Large tables
- Full dataset queries
- Repeated metric calculations
- Metrics calculated client-side from large datasets
- Hidden tabs loading data
- Admin pages loading for non-admin users
- Expensive date range calculations
- Re-rendering every metric after small state changes

Fix by:

- Loading summary metrics first
- Lazy loading charts
- Loading tab content only when selected
- Adding pagination to tables
- Using backend functions for heavy aggregation
- Debouncing filters
- Memoizing computed metrics
- Reducing repeated queries
- Keeping admin-only data behind admin checks

---

# PHASE 19 — TABLE AND LIST OPTIMIZATION

Review all lists, tables, feeds, boards, directories, marketplaces, CRMs, tickets, posts, logs, and records.

Check for:

- Rendering too many records
- No pagination
- No search limit
- Client-side search over large arrays
- Client-side sort over large arrays
- Expensive row components
- Images in every row
- Action buttons causing row re-renders
- Expandable rows rendering hidden content

Fix by:

- Adding pagination
- Adding "load more"
- Adding search limits
- Debouncing search
- Moving search/filtering to backend when needed
- Rendering only visible data
- Lazy loading details
- Memoizing rows where useful
- Keeping row components lightweight

---

# PHASE 20 — FORMS AND CHECKOUT FLOWS

Review forms and checkout-related pages.

Check for:

- Slow validation
- Too many API calls during typing
- Expensive autocomplete
- Duplicate submit calls
- Missing disabled state during submit
- Large form components
- Full-page reload patterns
- Payment scripts loading too early
- Checkout scripts loading on non-checkout pages

Fix by:

- Debouncing validation
- Preventing duplicate submissions
- Loading payment scripts only when needed
- Keeping form state efficient
- Showing clear loading states
- Avoiding unnecessary data fetches before submit

---

# PHASE 21 — AUTH FLOW OPTIMIZATION

Review auth-related performance.

Check:

- User profile fetched repeatedly
- Auth checks duplicated across components
- Protected routes loading before auth state is known
- Admin checks repeated too often
- Redirect loops
- Public pages waiting on private data
- Auth modals loading heavy logic unnecessarily

Fix by:

- Centralizing auth state where appropriate
- Avoiding duplicate user fetches
- Loading public pages without waiting on private data
- Guarding protected data properly
- Keeping auth UI lightweight

---

# PHASE 22 — ERROR AND LOGGING CLEANUP

Review logging.

Remove or reduce:

- Console logs
- Debug warnings
- Development-only logs
- Excessive backend logs
- Repeated error logging
- Logs inside loops
- Logs that expose sensitive data

Keep:

- Useful error handling
- Safe user-facing errors
- Critical backend diagnostics
- Security-relevant logs where appropriate

---

# PHASE 23 — IMPLEMENTATION ORDER

After completing the audit, implement improvements in this order:

1. Fix critical issues hurting first load
2. Optimize images and hero sections
3. Fix unnecessary data fetching
4. Fix duplicate API/entity calls
5. Add pagination/search limits
6. Lazy load heavy components
7. Optimize dashboard/admin pages
8. Reduce unnecessary re-renders
9. Clean unused imports and dead code
10. Improve mobile layout speed
11. Stabilize layout shift issues
12. Clean console/debug logs
13. Final test pass

---

# PHASE 24 — FINAL TESTING

After changes are made, test the app carefully.

Test:

- Homepage
- Main public pages
- Login/signup flow
- Dashboard pages
- Admin pages
- Forms
- Search
- Filters
- Tables
- Modals
- Mobile layout
- Desktop layout
- Data loading
- Empty states
- Error states
- Auth-protected routes
- Role-protected routes
- Backend functions
- Integration-triggered actions

Verify:

- No broken routes
- No broken imports
- No missing components
- No broken entity queries
- No permission issues
- No duplicate requests
- No visible layout shift
- No infinite loading states
- No console errors
- No unnecessary console logs
- No degraded SEO
- No degraded accessibility

---

# PHASE 25 — FINAL DELIVERABLE

When finished, provide a final report with:

## Summary

Explain what was improved.

## Files changed

List every file changed and why.

## Performance improvements made

Group by:

- Page speed
- Core Web Vitals
- Image optimization
- Data fetching
- Backend functions
- Bundle size
- Mobile performance
- Dashboard performance
- Integration/API usage
- Layout stability

## Remaining recommendations

List anything that still needs manual review, such as:

- Images that should be externally compressed
- Videos that should be replaced or compressed
- Third-party scripts that may hurt PageSpeed
- Pages that should be tested in Google PageSpeed Insights
- Features that could benefit from backend aggregation
- Components that may need deeper refactoring later

## Risk notes

List any areas where performance was improved carefully but should still be tested.

## Suggested PageSpeed test URLs

List the most important URLs to test in PageSpeed Insights after deployment.

---

# ACCEPTANCE CRITERIA

The work is complete only when:

- The app loads faster on mobile and desktop
- Above-the-fold content renders faster
- Heavy sections are lazy loaded where appropriate
- Images are optimized or flagged for compression
- Layout shifts are reduced
- Large tables/lists are paginated or limited
- Search is debounced or moved server-side where needed
- Duplicate entity/API calls are reduced
- Dashboard/admin pages are more efficient
- Console/debug logs are cleaned up
- Existing functionality still works
- Existing permissions remain secure
- Existing design is preserved
- Existing SEO is preserved or improved
- Final report is provided

Begin by scanning the entire app and producing the audit report first.

---

## Support

This prompt is shared free for the community.

[☕ Buy Me a Coffee](https://buymeacoffee.com/willkode)

---

## Created By

**Will Kode**  
Developer, marketer, AI builder, and Base44 community contributor.

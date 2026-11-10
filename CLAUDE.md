# abackpackersdream.com.au (the live website)

Static site. **Moving to Netlify** (owner, 10 Nov 2026): once the domain points there, every merge to `main` goes live by itself (`netlify.toml` has the redirects and caching that `.htaccess` had), and every PR gets a preview link. Until the switch, it's still uploaded by hand to Crazy Domains (cPanel › File Manager › `public_html`): after a merge, send the owner a zip of the changed files (same folder layout); they back up `public_html` first. The domain, its DNS and the `admin@` mailbox stay at Crazy Domains (the mailbox comes with the hosting plan, so don't cancel hosting until email has moved). The other site repo (`imakshat96/abackpackersdream-site`) is an old copy; don't edit it.

**Always squash-merge PRs here** (owner, 10 Nov 2026). Netlify's free plan only builds commits from members of the owner's Netlify team; commits authored by an agent (e.g. `Claude <noreply@anthropic.com>`, `Cursor Agent`) block the deploy ("Unrecognized Git contributor"), even inside a merge commit. A squash merge makes one commit authored by the owner, which builds. Deploy previews of open PRs stay blocked; that's expected. If a deploy is ever blocked, the owner can use Netlify › Deploys › Trigger deploy.

## The legal pages and the site must match the apps

Owner, 4 Nov 2026: **whenever a feature is added or changed in the apps or the server, check these pages in the same round**, and update them if the wording no longer matches what the apps do:

- Terms: `terms/`, `terms-condition/backpacker/`, `terms-condition/employer/` (the same text three times; change all three).
- Privacy Policy: `privacy-policy/`, `privacy-policy/backpacker/`, `privacy-policy/employer/` (same, change all three).
- Site pages: `index.html`, `hire.html`, `pricing.html` (what the apps do, areas, prices, "coming soon" features).

Things that almost always need a check: what one user can see about another (contact details, location), expressions of interest, ratings, payments and plans, location use, messaging, events and promotions, listings compiled from public sources, account deletion.

When a legal page changes:
1. Set "Last updated" on all six pages to the day it will be uploaded, and the `<lastmod>` for `privacy-policy/` and `terms/` in `sitemap.xml`.
2. **A material change needs at least 30 days' notice to users** (Privacy Policy, "Changes"), in the app or by email, unless it's needed sooner for a legal obligation or a security or safety issue. Tell the owner before publishing.
3. Owen (co-owner) approves legal wording.
4. Publish only after the app and server changes it describes are live.

Every PR in the Android, iOS or Web repos that changes behaviour should say "Legal pages: checked, no change" or link the site PR that updates them.

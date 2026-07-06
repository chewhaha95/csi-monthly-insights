# CS&I Monthly Insights — project guide

Static PWA (Cloudflare Pages) that distils open-source conflict learnings into a
monthly operational-learning digest for military formations. Live at
**https://csi-monthly-insights.pages.dev**. Repo: `chewhaha95/csi-monthly-insights`.

## Intent (read before changing content)
Pass down open-source learnings so divisions/brigades **calibrate them themselves**.
It is a *first cut*, not doctrine. Not prescriptive — no SOP/checklist authoring.
All content is **open-source, non-classified**.

## Standing instructions
- Work on branch **`claude/weekly-briefs-tab-dropdown-wj76s2`**; rebase on `origin/main`
  each change: `git stash -u; git fetch origin main; git checkout -B <branch> origin/main;
  git stash pop`. Push with `--force-with-lease`.
- **Always open a PR AND squash-merge it** (via `mcp__github__create_pull_request` +
  `merge_pull_request`). No merge prompts — the user wants it auto-merged.
- **Bump `sw.js` `CACHE` version every change** (currently `csi-insights-v71`) or users
  get a stale cached build.
- Writing style: see `STYLE.md` — plain but credible analytical register (ISW/RUSI),
  third person only (no "our/we/I"), action-first, keep precise terms, no jargon soup,
  no blunt/naive colloquialism.
- **OPSEC: never reintroduce own-formation names.** All named formations (3 Div, 9 Div,
  6 Div, Armour, Army Int, Commandos, Guards) and the formation filter were scrubbed
  (PR #68). Content uses generic echelons only (Div plans, Bde Comd, Mission HQ,
  Observer sections). Keep it that way in every future edition.
- Do NOT put the `claude-fable-5`/model id or any secret value in commits/PRs.

## Architecture
- **`index.html`** (~2090 lines) — ALL app logic + CSS, vanilla JS. App-shell:
  `.app` is `position:fixed` flex column pinned to the visual viewport (`--vvt`/`--vvh`);
  document never scrolls, content scrolls in `main.scroll`; `overflow-x:hidden`
  everywhere (never let the page scroll sideways). Bottom nav: Pack / Serials / Ask /
  About. Opens on **Weekly Briefs** by default (`state.weekOpen:true`).
- **`data.js`** (~900 lines, ~1.8MB with base64 images) — the entire edition: 14
  serials (M-01..M-03, S-01..S-04, CS-01..CS-03, EX-01..EX-04) across 4 packages, plus
  companion maps (SUMMARY/SIGNAL/APP/ICT/LEARN), PACK/FRAME/PLANNING/KEY_JUDGEMENTS/BLUF,
  the `SYN` synonym map, THEATRE/CONFLICT constants. `FORMATIONS_*`/`_FMK_*` are emptied.
- **`sw.js`** — service worker: network-first for page/data, cache-first for assets;
  passes non-GET through (so `/api/*` POSTs work); Web Push `push`/`notificationclick`
  handlers.
- **`functions/`** — Cloudflare Pages Functions: `api/ask.js` (AI answers),
  `api/subscribe.js` + `api/notify.js` + `_push.js` (Web Push).
- **Weekly briefs** live on a SEPARATE site (`conflictstudiesandinsights.pages.dev`);
  the app fetches + reflows them live (`reflowBrief` in index.html). Nothing weekly is
  stored in this repo.

## Ask assistant (the AI)
Three-tier model chain in `functions/api/ask.js` (first available wins):
1. **Google Gemini 2.5 Flash** (full-context) — used when `GEMINI_API_KEY` env var set.
   Whole corpus fits its window. `thinkingBudget:512` (latency vs depth balance).
2. **Cloudflare Workers AI** (Llama 3.3 70B) — fallback; needs the `AI` binding; gets a
   relevance-trimmed slice.
3. **On-device** deterministic engine (keyword + `SYN` synonyms) — client fallback on
   503/offline. Never a dead end.
- **Grounding is strict**: answer ONLY from the provided material; cite everything;
  decline cleanly (no tangential padding) when not covered; end with
  "First-cut analysis — calibrate before adoption."
- **Weekly briefs are the primary source, serials the distillation** (prompt ordering +
  budgets). Serials are optional — not forced into every answer.
- Client (`_askEnhanced` in index.html) sends the full ranked corpus (all serials +
  ~60 top weekly chunks + ~60 pack chunks); server normalises Gemini SSE to the
  client's `{response}` line format.
- Disclaimer in the Ask pane: "Online assistant — ask non-classified questions only"
  (Gemini free tier may use prompts to improve products; Workers AI does not train).

## Notifications
- **In-app indicator**: bell dot lights on a new weekly (from live archive) or new
  edition (`EDITION_ID`, currently `"2026-06"` in index.html). Acknowledged by opening
  the bell popover. First visit is silently seen.
- **Web Push** (opt-in, real notifications): user taps bell → "Notify me of new briefs".
  Stored in KV. Broadcast via `/api/notify` (token-protected). iOS delivers ONLY to
  home-screen-installed PWAs; Android works from a tab.
- **Send a push** = GitHub → Actions → "Send new-brief push" → Run workflow
  (`.github/workflows/notify-weekly.yml`, manual-only).

## Cloudflare + GitHub setup (already configured — names only, NEVER commit values)
- Pages **bindings**: `AI` (Workers AI), `SUBS` (KV namespace `csi-push-subs`).
- Pages **env vars/secrets**: `GEMINI_API_KEY`, `VAPID_PRIVATE_JWK`, `VAPID_SUBJECT`
  (mailto), `NOTIFY_TOKEN`.
- GitHub **Actions secret**: `NOTIFY_TOKEN` (same value).
- VAPID **public** key is committed in `functions/_push.js` + `index.html` (public, fine).
- **Bindings/vars only attach to deployments created AFTER they're added** → any new
  deploy (a commit) picks them up. Automatic deploys are on (push to `main`).

## Recurring operations
- **Publish a new monthly edition**: replace content in `data.js`; **bump `EDITION_ID`**
  in index.html (e.g. `"2026-07"`) so installed users get the new-edition dot; bump
  `sw.js` cache; update the "Edition · Jun 2026" strings; then run the push workflow.
- **New weekly brief**: nothing to change in this repo (fetched live); just run the push
  workflow if you want to notify.
- **Rotate VAPID key** (optional hygiene — the private key was shared in chat once):
  generate a P-256 keypair, put public in `_push.js`+`index.html`, set private as the
  `VAPID_PRIVATE_JWK` secret, redeploy.

## Verification (do this for every change)
- Inline JS syntax check (strip the serviceWorker line):
  `node -e "const fs=require('fs');const h=fs.readFileSync('index.html','utf8');const
  s=[...h.matchAll(/<script>([\\s\\S]*?)<\\/script>/g)].map(m=>m[1]).join('\\n;\\n')
  .split('\\n').filter(l=>!l.includes('serviceWorker')).join('\\n');new Function(s);
  console.log('OK')"`
- `node --check data.js` / `node --check functions/api/*.js`.
- Playwright regression: scripts live in the session scratchpad (mobile.mjs = full
  2-viewport regression; syn/nomatch/wkask/pkask/coverage/gemunit/push tests). Chromium
  at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`; serve with
  `python3 -m http.server 8137` (dies between bash calls — restart each time).
- Live probe endpoints with `curl`/small node fetch after deploy.

## Constraints / gotchas
- Gemini free tier: ~few hundred requests/day shared; over-quota silently falls back to
  Workers AI. Enable billing (single-digit $/mo) if adoption grows.
- iOS Web Push needs home-screen install; Safari lookbehind regex unsupported (avoid).
- Reflowed weekly tables: fixed-layout CSS fits them to the phone (no sideways scroll);
  see `.weekly table` rules.
- Repo is PUBLIC — no secrets in code; old formation names still exist in git history
  (making the repo private would fully hide them).

## Backlog (not commissioned)
Edition archive (past monthlies for cross-month Ask); anonymous in-app feedback + gap
capture (About tab); "You said, we changed" note per edition; formation-name tripwire
CI check; standalone-launch counter for install metrics; Perplexity draft-edition
pipeline.

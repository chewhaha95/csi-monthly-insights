/* Conflict Studies & Insights — enhanced-answer endpoint (Cloudflare Pages
   Function, Workers AI).

   The client does the retrieval on-device and sends the matching serials as
   context; this function only turns them into a natural-language answer. It
   stores and logs nothing. Requires an AI binding named "AI" on the Pages
   project (dashboard → Settings → Functions → Bindings); until that binding
   exists it returns 503 and the app answers on-device instead.

   Note: Pages bindings only attach to deployments created AFTER the binding
   is added — adding it in the dashboard requires one redeploy to take
   effect (this commit exists to trigger that redeploy). */

const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
// The weekly briefs are the primary evidence base; the serials are the
// monthly distillation layered on top; pack analysis is the thinnest slice.
// Budget the context in that order of priority.
const WK_BUDGET = 9000;   // weekly briefs — primary
const SER_BUDGET = 7000;  // serials — secondary
const PK_BUDGET = 2500;   // pack analysis — supporting

const clip = (v, n) => String(v == null ? '' : v).slice(0, n);

function decisionLine(label, c) {
  return `${label}: ${clip(c.d, 300)}`
    + (c.o ? ` Owner: ${clip(c.o, 120)}` : '')
    + (c.a ? ` Changes: ${clip(c.a, 250)}` : '')
    + (c.t ? ` Trigger: ${clip(c.t, 200)}` : '')
    + (c.x ? ` Trade-off: ${clip(c.x, 200)}` : '')
    + (c.m ? ` Measure: ${clip(c.m, 200)}` : '');
}
function serialBlock(s) {
  const lines = [
    `SER ${clip(s.id, 8)} — ${clip(s.title, 160)}${s.kind ? ' (' + clip(s.kind, 30) + ')' : ''}`,
    `Theatre: ${clip(s.theatre, 60)} · Dates: ${clip(s.dates, 40)} · Assessment: ${clip(s.verdict, 30)}`,
    `Summary: ${clip(s.summary, 400)}`,
  ];
  if (s.signal) lines.push(`Signal: ${clip(s.signal, 300)}`);
  (Array.isArray(s.blocks) ? s.blocks.slice(0, 4) : []).forEach(b => lines.push(clip(b, 700)));
  if (s.lead) lines.push(`Assessment: ${clip(s.lead, 400)}`);
  if (s.div && s.div.d) lines.push(decisionLine('Division decision', s.div));
  if (s.bde && s.bde.d) lines.push(decisionLine('Brigade/unit decision', s.bde));
  if (s.ict && (s.ict.dec || s.ict.fmt)) {
    const runs = Array.isArray(s.ict.run) ? s.ict.run.map(r => clip(r, 200)).join(' | ') : '';
    lines.push(`Rehearsal (${clip(s.ict.fmt, 160)}): setup — ${clip(s.ict.set, 300)}${runs ? ' Steps: ' + clip(runs, 600) : ''}${s.ict.twist ? ' Twist: ' + clip(s.ict.twist, 200) : ''} Decision: ${clip(s.ict.dec, 250)} Standard: ${clip(s.ict.std, 250)}`);
  }
  if (s.learn && (s.learn.why || s.learn.next)) lines.push(`Learn more — Why it matters: ${clip(s.learn.why, 300)}${s.learn.worked ? ' What worked: ' + clip(s.learn.worked, 250) : ''}${s.learn.next ? ' What next: ' + clip(s.learn.next, 250) : ''}`);
  if (Array.isArray(s.sources) && s.sources.length) lines.push(`Sources: ${clip(s.sources.join('; '), 400)}`);
  return lines.join('\n') + '\n\n';
}

function systemPrompt(serials, formation, weekly, pack) {
  // Weekly briefs first and largest — the primary reporting the answer rests on.
  let wctx = '';
  for (const w of weekly) {
    const block = `[Weekly brief, ${clip(w.week, 60)} · ${clip(w.theatre, 80)}] ${clip(w.text, 700)}\n\n`;
    if (wctx.length + block.length > WK_BUDGET) break;
    wctx += block;
  }
  // Serials second — the monthly distillation that adds the formation "so what".
  let ctx = '';
  for (const s of serials) {
    const block = serialBlock(s);
    if (ctx.length + block.length > SER_BUDGET) break;
    ctx += block;
  }
  // Pack analysis — supporting context only.
  let pctx = '';
  for (const p of pack) {
    const block = `[Pack — ${clip(p.pkg, 40)} · ${clip(p.kind, 40)}] ${clip(p.text, 700)}\n\n`;
    if (pctx.length + block.length > PK_BUDGET) break;
    pctx += block;
  }
  return [
    "You are the duty analyst for the Conflict Studies & Insights digest, answering a formation staff officer.",
    "The material below has three layers, in priority order: the WEEKLY BRIEFS are the primary reporting (what happened, week by week); the SERIALS are the monthly distillation of those briefs (the formation-level 'so what' and decisions); the PACK ANALYSIS is supporting synthesis.",
    "Rules — follow all of them:",
    "1. Base the answer primarily on the weekly-brief extracts — they are the source reporting. Draw on the serials to add the operational meaning and the decisions, and the pack analysis only for supporting context. Answer ONLY from the material below; never use outside knowledge, and never invent figures, dates or events.",
    "2. Cite after each claim: weekly extracts in the form (Weekly brief, 22 June – 29 June 2026); serials in the exact form (SER M-02); pack extracts in the form (Pack — Manoeuvre).",
    "3. If none of the material below covers the question, say so plainly in one sentence and name the closest weekly brief or serial.",
    "4. Write in the third person — no \"our\", \"we\", \"I\". Plain, measured, precise; no hype.",
    "5. Keep the answer under 180 words. Short paragraphs, no headings, no markdown syntax.",
    formation ? `6. The reader serves with ${clip(formation, 40)}. When relevant, end with one line "For ${clip(formation, 40)} — ..." drawn from the serials' decisions.` : "",
    "Always finish with exactly: First-cut analysis — calibrate before adoption.",
    "",
    "WEEKLY BRIEF EXTRACTS (primary):",
    wctx || "(none provided)",
    ctx ? "SERIALS (monthly distillation):\n" + ctx : "",
    pctx ? "PACK ANALYSIS EXTRACTS (supporting):\n" + pctx : "",
  ].filter(Boolean).join('\n');
}

export async function onRequestPost({ request, env }) {
  if (!env.AI) return new Response('AI binding not configured', { status: 503 });

  let body;
  try { body = await request.json(); } catch (e) { return new Response('bad request', { status: 400 }); }

  const question = clip(body.question, 500).trim();
  if (!question) return new Response('bad request', { status: 400 });

  /* Up to 14 = the whole edition in summary-only form (the client's fallback
     when retrieval finds no match); MAX_CONTEXT_CHARS stays the hard cap. */
  const serials = Array.isArray(body.serials) ? body.serials.slice(0, 14) : [];
  const weekly = (Array.isArray(body.weekly) ? body.weekly.slice(0, 8) : [])
    .map(w => ({ week: clip(w.week, 60), theatre: clip(w.theatre, 80), text: clip(w.text, 700) }))
    .filter(w => w.text);
  const pack = (Array.isArray(body.pack) ? body.pack.slice(0, 3) : [])
    .map(p => ({ pkg: clip(p.pkg, 40), kind: clip(p.kind, 40), text: clip(p.text, 700) }))
    .filter(p => p.text);
  const history = (Array.isArray(body.history) ? body.history.slice(-4) : [])
    .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: clip(m.text, 600) }))
    .filter(m => m.content);

  const messages = [
    { role: 'system', content: systemPrompt(serials, clip(body.formation, 40), weekly, pack) },
    ...history,
    { role: 'user', content: question },
  ];

  try {
    const stream = await env.AI.run(MODEL, { messages, stream: true, max_tokens: 512 });
    return new Response(stream, {
      headers: { 'content-type': 'text/event-stream', 'cache-control': 'no-store' },
    });
  } catch (e) {
    return new Response('model unavailable', { status: 503 });
  }
}

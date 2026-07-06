/* Conflict Studies & Insights — Ask endpoint (Cloudflare Pages Function).

   The client does the retrieval on-device and posts the corpus as context;
   this function turns it into a grounded natural-language answer. It stores
   and logs nothing.

   Model chain (first available wins):
     1. Google Gemini 2.5 Flash (full-context) — needs a GEMINI_API_KEY
        secret (dashboard → Settings → Environment variables, encrypted).
        The whole corpus fits its 1M-token window, so the model reasons over
        everything, not just the top matches.
     2. Cloudflare Workers AI (Llama 3.3 70B) — needs an "AI" binding. Small
        window, so it gets a relevance-trimmed slice of the same context.
     3. Neither configured / both error → 503, and the app answers on-device.

   Note (Gemini free tier): prompts on the free tier may be used by Google to
   improve their products — hence the app's "non-classified questions only"
   disclaimer. Workers AI does not train on inputs. */

const GEMINI_MODEL = 'gemini-2.5-flash';
const WORKERS_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

// Context budgets (chars). Weekly briefs are the primary source, serials the
// monthly distillation, pack analysis supporting.
const FULL = { wk: 220000, ser: 60000, pk: 90000 };   // Gemini — effectively the whole corpus
const SMALL = { wk: 9000, ser: 7000, pk: 2500 };       // Workers AI — small window

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

function systemPrompt(serials, formation, weekly, pack, budget) {
  let wctx = '';
  for (const w of weekly) {
    const block = `[Weekly brief, ${clip(w.week, 60)} · ${clip(w.theatre, 80)}] ${clip(w.text, 700)}\n\n`;
    if (wctx.length + block.length > budget.wk) break;
    wctx += block;
  }
  let ctx = '';
  for (const s of serials) {
    const block = serialBlock(s);
    if (ctx.length + block.length > budget.ser) break;
    ctx += block;
  }
  let pctx = '';
  for (const p of pack) {
    const block = `[Pack — ${clip(p.pkg, 40)} · ${clip(p.kind, 40)}] ${clip(p.text, 700)}\n\n`;
    if (pctx.length + block.length > budget.pk) break;
    pctx += block;
  }
  return [
    "You are the duty analyst for the Conflict Studies & Insights digest, answering a formation staff officer.",
    "The material below has three layers, in priority order: the WEEKLY BRIEFS are the primary reporting (what happened, week by week, across the whole archive); the SERIALS are the monthly distillation of those briefs (the formation-level 'so what' and decisions); the PACK ANALYSIS is supporting synthesis.",
    "Think carefully across the whole corpus before answering — compare weeks, aggregate across theatres, and reason about trends, not just the single closest extract.",
    "Rules — follow all of them:",
    "1. Answer primarily from the weekly-brief extracts — they are the source reporting and should carry the answer on their own. The serials and pack analysis are optional supporting layers: bring in a serial only when it genuinely adds operational meaning or a decision the weeklies do not — not as a matter of routine, and never force a serial into an answer the weeklies already cover. Answer ONLY from the material below; never use outside knowledge, and never invent figures, dates or events.",
    "2. Cite after each claim: weekly extracts in the form (Weekly brief, 22 June – 29 June 2026); serials in the exact form (SER M-02); pack extracts in the form (Pack — Manoeuvre).",
    "3. When the question compares across weeks or asks how something changed over time, span the FULL timeline — cover the earliest relevant week AND the most recent, and finish on the latest week's state. Keep each week brief so the trajectory reaches the present; never spend the whole answer on the first period.",
    "4. If the material does not actually answer the question, say so directly in one or two sentences, name the single closest weekly brief or serial, and stop. Do NOT pad the reply with loosely-related facts, and never present tangential material as if it answered the question. It is better to decline cleanly than to stretch. You may add one short sentence on what the digest does cover on the topic, if genuinely relevant.",
    "5. Write in the third person — no \"our\", \"we\", \"I\". Plain, measured, precise; no hype.",
    "6. Keep the answer under 260 words (use the upper end only for across-the-weeks comparisons). Short paragraphs, no headings, no markdown syntax.",
    formation ? `7. The reader serves with ${clip(formation, 40)}. Only when a specific decision or action clearly fits, you may add one closing line "For ${clip(formation, 40)} — ..."; if nothing fits naturally, omit it entirely rather than forcing one.` : "",
    "Always finish with exactly: First-cut analysis — calibrate before adoption.",
    "",
    "WEEKLY BRIEF EXTRACTS (primary):",
    wctx || "(none provided)",
    ctx ? "SERIALS (monthly distillation):\n" + ctx : "",
    pctx ? "PACK ANALYSIS EXTRACTS (supporting):\n" + pctx : "",
  ].filter(Boolean).join('\n');
}

const sseHeaders = { 'content-type': 'text/event-stream', 'cache-control': 'no-store' };

/* Transform Gemini's SSE (candidates[].content.parts[].text) into the client's
   expected {"response": "<token>"} line format, so the browser parser is
   model-agnostic. */
function geminiToClientStream(geminiBody) {
  const reader = geminiBody.getReader();
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  let buf = '';
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.enqueue(enc.encode('data: [DONE]\n\n'));
        controller.close();
        return;
      }
      buf += dec.decode(value, { stream: true });
      const lines = buf.split('\n');
      buf = lines.pop();
      for (const line of lines) {
        const s = line.trim();
        if (!s.startsWith('data:')) continue;
        const d = s.slice(5).trim();
        if (!d || d === '[DONE]') continue;
        try {
          const j = JSON.parse(d);
          const parts = j.candidates && j.candidates[0] && j.candidates[0].content && j.candidates[0].content.parts;
          const t = Array.isArray(parts) ? parts.map(p => p.text || '').join('') : '';
          if (t) controller.enqueue(enc.encode('data: ' + JSON.stringify({ response: t }) + '\n\n'));
        } catch (e) { /* skip partial/non-JSON keepalive lines */ }
      }
    },
    cancel() { try { reader.cancel(); } catch (e) {} },
  });
}

function geminiBody(sys, history, question) {
  const contents = [];
  for (const m of history) contents.push({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] });
  // Gemini requires the conversation to start with a user turn.
  while (contents.length && contents[0].role !== 'user') contents.shift();
  contents.push({ role: 'user', parts: [{ text: question }] });
  return JSON.stringify({
    systemInstruction: { parts: [{ text: sys }] },
    contents,
    // Bound the model's internal "thinking" so the first token arrives fast.
    // A small budget keeps enough reasoning for grounded comparison while
    // cutting several seconds off time-to-first-token; 0 would be fastest.
    generationConfig: { temperature: 0.3, maxOutputTokens: 4096, thinkingConfig: { thinkingBudget: 512 } },
  });
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch (e) { return new Response('bad request', { status: 400 }); }

  const question = clip(body.question, 500).trim();
  if (!question) return new Response('bad request', { status: 400 });

  const serials = Array.isArray(body.serials) ? body.serials.slice(0, 14) : [];
  const weekly = (Array.isArray(body.weekly) ? body.weekly.slice(0, 140) : [])
    .map(w => ({ week: clip(w.week, 60), theatre: clip(w.theatre, 80), text: clip(w.text, 700) }))
    .filter(w => w.text);
  const pack = (Array.isArray(body.pack) ? body.pack.slice(0, 200) : [])
    .map(p => ({ pkg: clip(p.pkg, 40), kind: clip(p.kind, 40), text: clip(p.text, 700) }))
    .filter(p => p.text);
  const history = (Array.isArray(body.history) ? body.history.slice(-4) : [])
    .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: clip(m.text, 600) }))
    .filter(m => m.content);
  const formation = clip(body.formation, 40);

  // 1. Gemini — full-context reasoning over the whole corpus.
  if (env.GEMINI_API_KEY) {
    try {
      const sys = systemPrompt(serials, formation, weekly, pack, FULL);
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse&key=${env.GEMINI_API_KEY}`;
      const gres = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: geminiBody(sys, history, question) });
      if (gres.ok && gres.body) return new Response(geminiToClientStream(gres.body), { headers: sseHeaders });
      // non-200 → fall through to Workers AI
    } catch (e) { /* fall through */ }
  }

  // 2. Workers AI — relevance-trimmed slice for the small window.
  if (env.AI) {
    try {
      const sys = systemPrompt(serials.slice(0, 6), formation, weekly.slice(0, 8), pack.slice(0, 4), SMALL);
      const messages = [{ role: 'system', content: sys }, ...history, { role: 'user', content: question }];
      const stream = await env.AI.run(WORKERS_MODEL, { messages, stream: true, max_tokens: 512 });
      return new Response(stream, { headers: sseHeaders });
    } catch (e) { /* fall through */ }
  }

  // 3. Nothing available → client answers on-device.
  return new Response('no model configured', { status: 503 });
}

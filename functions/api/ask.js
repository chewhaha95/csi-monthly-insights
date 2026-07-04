/* Conflict Studies & Insights — enhanced-answer endpoint (Cloudflare Pages
   Function, Workers AI).

   The client does the retrieval on-device and sends the matching serials as
   context; this function only turns them into a natural-language answer. It
   stores and logs nothing. Requires an AI binding named "AI" on the Pages
   project (dashboard → Settings → Functions → Bindings); until that binding
   exists it returns 503 and the app answers on-device instead. */

const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
const MAX_CONTEXT_CHARS = 8000;

const clip = (v, n) => String(v == null ? '' : v).slice(0, n);

function serialBlock(s) {
  const lines = [
    `SER ${clip(s.id, 8)} — ${clip(s.title, 160)}`,
    `Theatre: ${clip(s.theatre, 60)} · Dates: ${clip(s.dates, 40)} · Assessment: ${clip(s.verdict, 30)}`,
    `Summary: ${clip(s.summary, 400)}`,
  ];
  (Array.isArray(s.blocks) ? s.blocks.slice(0, 4) : []).forEach(b => lines.push(clip(b, 700)));
  if (s.div && s.div.d) lines.push(`Division decision: ${clip(s.div.d, 300)} Owner: ${clip(s.div.o, 120)} Trigger: ${clip(s.div.t, 200)} Measure: ${clip(s.div.m, 200)}`);
  if (s.bde && s.bde.d) lines.push(`Brigade/unit decision: ${clip(s.bde.d, 300)} Owner: ${clip(s.bde.o, 120)} Trigger: ${clip(s.bde.t, 200)} Measure: ${clip(s.bde.m, 200)}`);
  if (s.ict && s.ict.dec) lines.push(`Rehearsal focus: ${clip(s.ict.dec, 250)} Standard: ${clip(s.ict.std, 250)}`);
  return lines.join('\n') + '\n\n';
}

function systemPrompt(serials, formation) {
  let ctx = '';
  for (const s of serials) {
    const block = serialBlock(s);
    if (ctx.length + block.length > MAX_CONTEXT_CHARS) break;
    ctx += block;
  }
  return [
    "You are the duty analyst for the Conflict Studies & Insights June 2026 operational-learning digest, answering a formation staff officer.",
    "Rules — follow all of them:",
    "1. Answer ONLY from the serials below. Never use outside knowledge, and never invent figures, dates or events.",
    "2. Cite the serial after each claim, in the exact form (SER M-02).",
    "3. If the serials do not cover the question, say so plainly in one sentence and name the closest serial.",
    "4. Write in the third person — no \"our\", \"we\", \"I\". Plain, measured, precise; no hype.",
    "5. Keep the answer under 180 words. Short paragraphs, no headings, no markdown syntax.",
    formation ? `6. The reader serves with ${clip(formation, 40)}. When relevant, end with one line "For ${clip(formation, 40)} — ..." drawn from the serials' decisions.` : "",
    "Always finish with exactly: First-cut analysis — calibrate before adoption.",
    "",
    "SERIALS:",
    ctx || "(none provided)",
  ].filter(Boolean).join('\n');
}

export async function onRequestPost({ request, env }) {
  if (!env.AI) return new Response('AI binding not configured', { status: 503 });

  let body;
  try { body = await request.json(); } catch (e) { return new Response('bad request', { status: 400 }); }

  const question = clip(body.question, 500).trim();
  if (!question) return new Response('bad request', { status: 400 });

  const serials = Array.isArray(body.serials) ? body.serials.slice(0, 5) : [];
  const history = (Array.isArray(body.history) ? body.history.slice(-4) : [])
    .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: clip(m.text, 600) }))
    .filter(m => m.content);

  const messages = [
    { role: 'system', content: systemPrompt(serials, clip(body.formation, 40)) },
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

/* CS&I "Manoeuvre" digest - content DATA, extracted from index.html.
   Loaded by index.html via <script src="data.js"> BEFORE the render script.
   Pure data only (serials, unit/formation cards, packages, legend text) - no behaviour.
   Top-level const/let here share global scope with the render script, so names resolve as before.
   Edit monthly content HERE; keep each object's keys/shape the render code expects. */

/* ===================== DATA ===================== */
const SERIALS_M = [
  { id:"M-01", kind:"lesson", title:"Encroachment beyond the ceasefire line — Nabatieh",
    conflict:"ISR-LBN", theatre:"Israel–Lebanon", verdict:"success", verdictLabel:"Success",
    formations:["3DIV","9DIV","ARMD"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"The IDF's 17 April ceasefire set a 'yellow line' 10 km north of the Israeli border. By 12 June IDF ground forces were at Nabatieh — 20 km inside Lebanon. Each northward step was framed as a response to a Hezbollah provocation: rocket fire triggered the Dahiyeh strike on 6 June; a tunnel network under Beaufort Ridge 'required' prolonged presence. 436 airstrike waves in the first week of June stopped Hezbollah consolidating at any chokepoint. By 22 June, Jerusalem–Beirut talks were in their 5th round with the IDF holding the expanded zone."},
      {l:"Countermeasure", t:"Hezbollah swarm drones at Kfartebnit slowed the advance rate; Iran leveraged Lebanon as a bargaining chip in the US nuclear talks — but neither reversed the ground gained."},
      {l:"Outcome", t:"IDF success — a territorial fait accompli achieved under active negotiation. The ceasefire line moved 10 km north in under two months."}
    ],
    sources:[
      {u:"https://www.timesofisrael.com/idf-says-over-70-hezbollah-sites-hit-as-troops-advance-near-south-lebanons-nabatieh/",n:"Times of Israel — advance near Nabatieh (12 Jun)"},
      {u:"https://www.washingtontimes.com/news/2026/jun/1/trump-keeps-fragile-iran-talks-intact-urging-restraint-netanyahu/",n:"Washington Times — Iran talks / restraint (1 Jun)"},
      {u:"https://ground.news/article/israel-strikes-dozens-of-hezbollah-targets-in-lebanon-as-trump-and-iran-inch-toward-long-awaited-pea",n:"Ground News / ToI — strikes across Lebanon (13 Jun)"},
      {u:"https://www.washingtontimes.com/news/2026/jun/19/israel-hezbollah-agree-renewed-ceasefire-strikes/",n:"Washington Times — renewed ceasefire (19 Jun)"}
    ] },
  { id:"M-02", kind:"lesson", title:"Two-tier FPV architecture — fibre-optic close, AI deep rear",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Success",
    formations:["3DIV","9DIV","ARMD"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"Ukraine formalised a two-tier drone architecture: (1) an approach zone (0–15 km) flown by unjammable fibre-optic FPVs; (2) a deep rear (50–300 km) worked by AI-autonomous mid-range drones that complete the mission after EW severs the link. Russia cannot apply one EW solution to both tiers. Near Pokrovsk, 90% of frontline supply missions shifted to UGVs because manned-vehicle survival in the approach zone was unacceptable."},
      {l:"Countermeasure", t:"Russia fielded optical AI-detection turrets (non-RF) against fibre-optic FPVs; Ukraine answered with the Brave1 AI intercept turret — a non-RF-vs-non-RF close-battle layer."},
      {l:"Outcome", t:"Ukraine success — Russian frontline logistics destroyed at record rates, with supply shortfalls degrading operational tempo."}
    ],
    sources:[
      {u:"https://centralintelligence.co/drones/story/ukraine-says-air-defenses-down-russian-drones-20260624",n:"Central Intelligence / UA Air Force — two-tier drones (27 Jun)"},
      {u:"https://censor.net/en/news/4007565/ugvs-complete-over-50-000-missions-in-2026",n:"Censor.net / UA MoD — UGVs displace manned supply (8 Jun)"},
      {u:"https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-june-2-2026",n:"ISW — Brave1 close-battle intercept (2 Jun)"}
    ] },
  { id:"M-03", kind:"lesson", title:"Double-tap strike as Russian tactical doctrine",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"threat", verdictLabel:"Threat pattern",
    formations:["3DIV","9DIV","ARMD"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"14–15 June, Kharkiv: Russian forces struck with a Geran-2 drone, waited 30–40 minutes for first responders, then launched four Iskander missiles onto the rescue operation — killing four firefighters and one council worker; a sixth firefighter died on 18 June. ISW confirmed this as deliberate command-level doctrine across multiple June incidents. The 30–40 minute window targets the peak of rescue activity, and the Iskander follow-on is harder to intercept than the initial drone."},
      {l:"Countermeasure", t:"Ukraine adapted — first responders now hold ~40 minutes before entering a strike site and use UGVs for initial assessment. This degraded double-tap effectiveness in the second half of June."},
      {l:"Outcome", t:"Russia tactically successful in the first half of June; Ukraine's adaptation blunted it in the second — a threat pattern we must design CASEVAC and QRF SOPs against."}
    ],
    sources:[
      {u:"https://www.pravda.com.ua/eng/news/2026/06/15/8039326/",n:"Ukrainska Pravda — Kharkiv double-tap (15 Jun)"},
      {u:"https://www.pravda.com.ua/eng/news/2026/06/19/8040126/",n:"Ukrainska Pravda — sixth firefighter dies (19 Jun)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-15-2026/",n:"ISW — double-tap as doctrine (15 Jun)"}
    ] }
];
const FORMATIONS_M = {"3DIV":{c:"f3",n:"3 Div"},"9DIV":{c:"f9",n:"9 Div"},"ARMD":{c:"fa",n:"Armour"}};
const PACKAGES = [
  {k:"MANOEUVRE", label:"Manoeuvre", title:"Manoeuvre", sub:"This month's serials · for 3 Div · 9 Div · Armour", live:true},
  {k:"SENSE", label:"Sense & Strike", title:"Sense & Strike", sub:"This month's serials · for 6 Div · Artillery · Army Int", live:true},
  {k:"CSS", label:"Combat Support", title:"Combat Support", sub:"This month's serials · for Engineer · Signals", live:true},
  {k:"EXPED", label:"Expeditionary", title:"Expeditionary", sub:"This month's serials · for Commandos · Guards", live:true}
];
/* ===== Monthly command pack (the prototype's top-down structure) ===== */
const PACK_M = {
  kicker:"June 2026 · Manoeuvre", titleLine:"for manoeuvre formations",
  changed:"June rewarded method over mass. The IDF moved a ceasefire line 10 km north to Nabatieh in under two months by making every advance a pre-planned response to a provocation — a graduated, deniable encroachment held under active negotiation. Ukraine formalised a two-tier drone fight: an unjammable fibre-optic close layer (0–15 km) and an AI-autonomous deep layer (50–300 km) that no single EW solution can defeat, and pushed 90% of Pokrovsk resupply onto UGVs because manned vehicles no longer survive the approach zone. And Russia's double-tap — a Geran-2 strike followed 30–40 minutes later by Iskander missiles onto the rescue — showed the follow-on is aimed at your recovery effort. For 3 Div, 9 Div and Armour the message is to pre-authorise exploitation triggers, break the co-location signature, and rehearse timed CASEVAC and off-route QRF drills.",
  stats:[
    {n:3, k:"Priority learnings", s:"For this month"},
    {n:3, k:"Hot contests", s:"Under adaptation watch"},
    {n:3, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat the ceasefire line, the TAA layout and the CASEVAC plan as contested. Pre-authorise proportionate exploitation, separate the command/logistics/comms signature, and drill the reaction to a first strike so it defeats the intended second.",
  divPriorities:[
    "Instrument every limit-of-advance and pre-authorise the triggers that move it.",
    "Redesign TAA layout so no single deep strike removes two of command, logistics and comms.",
    "Enforce a timed CASEVAC hold with UGV assessment after any strike."
  ],
  brigadeBluf:"For the close fight this month: advance in deniable steps against pre-set triggers, clear sub-surface before you consolidate, hand resupply to UGVs in the last 5–15 km, and move the QRF off-route the instant a first strike lands.",
  implications:[
    {ech:"Division HQ", t:"Turn ceasefire lines and TAAs into instrumented, pre-authorised problems — creep and deep strike are planning inputs, not surprises."},
    {ech:"Brigades", t:"Rehearse graduated exploitation, sub-surface clearance before consolidation, and the manned-to-UGV resupply handover."},
    {ech:"Armour", t:"Assume RF jamming will not stop a fibre-optic FPV; layer physical/kinetic defeat and off-route QRF movement into mounted drills."}
  ],
  worked:[
    "Graduated, provocation-pegged advances that moved a line without one decisive response.",
    "A two-tier drone fight that no single EW solution could defeat.",
    "A timed responder hold with UGV assessment that blunted the double-tap."
  ],
  failed:[
    "Assuming a ceasefire line holds without instrumenting the gap to the adversary's forward position.",
    "Co-locating command, logistics and comms within reach of a no-signal deep strike.",
    "Relying on RF jamming alone to defeat a fibre-optic FPV."
  ],
  testICT:[
    "Run a battle-staff serial holding ceasefire compliance and pre-planned exploitation at once.",
    "Grade a TAA against a 150 km no-signal deep-strike threat and redesign it.",
    "Rehearse the CASEVAC hold and off-route QRF drill against a double-tap inject."
  ],
  sopReview:[
    "Limit-of-advance instrumentation and pre-authorised exploitation triggers.",
    "TAA signature separation for command, logistics and communications.",
    "CASEVAC hold timing and QRF off-route movement after a first strike."
  ],
  contests:[
    {cap:"Graduated ceasefire encroachment", stage:"hot",
     what:"Moving a ceasefire or limit-of-advance line north in small, individually-deniable steps, each pegged to an adversary provocation and held under active negotiation.",
     counter:"Swarm-drone harassment slowed the advance rate but did not reverse ground; diplomatic leverage did not restore the line.",
     tempo:"Counter-pressure appeared within weeks but only slowed, not reversed, the creep.",
     diffusion:"Israel–Lebanon (17 April line to Nabatieh by 12 June); a repeatable sub-threshold method.",
     supersession:"", id:"M-01"},
    {cap:"Two-tier FPV / AI drone architecture", stage:"hot",
     what:"An unjammable fibre-optic close layer (0–15 km) paired with an AI-autonomous mid-range deep layer (50–300 km) so no single EW solution defeats both.",
     counter:"Optical AI-detection turrets (non-RF) against fibre FPVs, met in turn by AI intercept turrets — a non-RF-vs-non-RF close battle.",
     tempo:"Hardware and software counters cycle in weeks; no durable EW-only answer exists.",
     diffusion:"Ukraine at scale; the model for any drone-saturated approach zone.",
     supersession:"RF-link FPV → fibre-optic + AI-autonomous tiers (once EW saturated the close fight)", id:"M-02"},
    {cap:"Double-tap follow-on strike", stage:"hot",
     what:"An initial drone strike followed 30–40 minutes later by ballistic missiles onto the rescue effort — deliberately converting one strike into mass casualties.",
     counter:"A 40-minute responder hold with UGV assessment degraded the tactic in the second half of June.",
     tempo:"Ukraine adapted within the month; the pattern persists where SOPs lag.",
     diffusion:"Russia–Ukraine (Kharkiv, June); a force-protection threat wherever CASEVAC is predictable.",
     supersession:"", id:"M-03"}
  ],
  priorities:["M-02","M-03","M-01"]
};

/* ===================== SENSE & STRIKE (6 Div · Artillery · Army Int) ===================== */
const LEARN_M = {
  "M-01":{ topic:"Graduated encroachment", status:"High utility", why:"A ceasefire line is only as firm as the response to the first violation — pre-planned, deniable steps can move it decisively.", worked:"The IDF moved the line 10 km north in under two months by pegging each advance to a provocation.", next:"War-game pre-authorised exploitation triggers, and instrument our own ceasefire line against creep." },
  "M-02":{ topic:"Two-tier drone architecture", status:"Action now", why:"No single EW answer defeats both an unjammable close layer and an autonomous deep layer — the co-location signature is now a targeting gift.", worked:"Fibre-optic close-battle plus AI deep strike destroyed Russian frontline logistics at record rates.", next:"Redesign TAA layout for signature separation and push resupply to an unmanned handover point." },
  "M-03":{ topic:"Follow-on strike defeat", status:"Action now", why:"The double-tap deliberately converts one strike into mass casualties by targeting the rescue — SOPs, not luck, defeat it.", worked:"A 40-minute responder hold with UGV assessment blunted the tactic in the second half of June.", next:"Write timed CASEVAC holds and off-route QRF movement into force-protection SOPs and rehearse them." }
};
const CONFLICT_CLASS = {"RUS-UKR":"t-rusukr","ISR-LBN":"t-isrlbn","THA-KHM":"t-thakhm","ISR-HMS":"t-isrhms","USI-IRN":"t-usiirn","SDN":"t-sdn"};
const CONFLICT_CODE = {"RUS-UKR":"RUS–UKR","ISR-LBN":"ISR–LBN","THA-KHM":"THA–KHM","ISR-HMS":"ISR–HMS","USI-IRN":"USI–IRN","SDN":"SUDAN"};

/* ===================== MANOEUVRE (3 Div · 9 Div · Armour) ===================== */
const KIND_LABEL = {lesson:"Lesson", action:"Tactical action", capdev:"Capability dev"};

const PLANNING_M = [
  {b:"Instrument the ceasefire line", p:"For any ceasefire or limit-of-advance, record three things at mission start: the agreed line in coordinates, the forward-most confirmed adversary position, and the gap between them. Treat a growing gap as the baseline-creep indicator regardless of public statements."},
  {b:"Pre-authorise exploitation triggers", p:"Build an escalation-trigger matrix into the OPLAN — provocation category, evidentiary threshold, pre-authorised response and the phase line each unlocks — so exploitation is a planned choice, not an ad-hoc command decision under pressure."},
  {b:"Separate the co-location signature", p:"Lay out TAAs so command, logistics and communications are physically separated. Grade every node against a deep-strike threat that needs no signal link — if one strike removes two categories, redesign before occupation."},
  {b:"Design unmanned last-mile sustainment", p:"For contested resupply, plan a manned drop-off at maximum safe range, a UGV forward relay and UGV CASEVAC. Assume manned ambulances cannot survive the 0–15 km approach zone and build the handover point into the scheme of manoeuvre."},
  {b:"Codify follow-on-strike defeat", p:"Add double-tap conditions to CASEVAC and QRF SOPs: a minimum responder hold, a UGV assessment sequence, and off-route QRF movement — the reaction force is the intended second target."},
  {b:"Plan non-RF drone defeat for armour", p:"Assume RF jamming alone will not stop a fibre-optic or optically-guided FPV. Require a physical/kinetic defeat layer — slat/canopy defences, APS, drone-alert drills — in every mounted plan for the close fight."}
];
const KEY_JUDGEMENTS_M = [
  "A ceasefire line is only as firm as the response to the <em>first</em> violation.",
  "No single EW solution defeats both an unjammable close layer and an autonomous deep layer.",
  "The <em>co-location</em> of command, logistics and comms is now a targeting gift to a no-signal deep strike.",
  "Assume the second strike is aimed at your rescue — defeat the double-tap with SOPs, not luck."
];
const SUMMARY_M = {
  "M-01":"Advance in graduated, individually-deniable steps — each pegged to an adversary provocation — to move a ceasefire line without triggering one decisive response.",
  "M-02":"Split the drone fight into an unjammable fibre-optic close layer and an AI-autonomous deep layer, so no single EW solution defeats both — and move your own logistics unmanned in the approach zone.",
  "M-03":"Treat the follow-on strike on first responders as deliberate doctrine: build a timed CASEVAC hold and off-route QRF movement into every force-protection SOP."
};
const WEEKLY_URL = "https://conflictstudiesandinsights.pages.dev/";
/* Base (no trailing slash) + baked-in fallback week list used when the live
   archive fetch fails/offline. The live list is parsed from the site index and
   supersedes this whenever available. `url` is relative to WEEKLY_BASE. */
const WEEKLY_BASE = "https://conflictstudiesandinsights.pages.dev";
const WEEKLY_WEEKS_FALLBACK = [
  {url:"/", label:"22 June – 29 June 2026"},
  {url:"/15-22-jun-2026.html", label:"15 June – 22 June 2026"},
  {url:"/8-15-jun-2026.html", label:"8 June – 15 June 2026"},
  {url:"/1-8-jun-2026.html", label:"1 June – 8 June 2026"},
  {url:"/25-may-1-jun-2026.html", label:"25 May – 1 June 2026"},
  {url:"/18-25-may-2026.html", label:"18 May – 25 May 2026"},
  {url:"/11-18-may-2026.html", label:"11 May – 18 May 2026"},
  {url:"/4-11-may-2026.html", label:"4 May – 11 May 2026"},
  {url:"/27-apr-4-may-2026.html", label:"27 April – 4 May 2026"},
  {url:"/20-27-apr-2026.html", label:"20 April – 27 April 2026"}
];
const SIGNAL_M = {
  "M-01":"From the weekly tracking of the IDF advance into southern Lebanon — the yellow-line creep from the 17 April ceasefire to Nabatieh and the 5th round of Jerusalem–Beirut talks.",
  "M-02":"From the running weekly drone coverage — Ukraine's fibre-optic close-battle layer, AI mid-range strike in the deep rear, and the shift of Pokrovsk resupply onto UGVs.",
  "M-03":"From the weekly Kharkiv strike reporting — the Geran-2-then-Iskander double-tap and ISW's assessment that it is command-level doctrine."
};
const APP_M = {
  "M-01":{ verdict:"Use it, with changes",
    lead:"The IDF turned a ceasefire into a moving baseline by making each advance a pre-planned response to a provocation. Borrow the method — pre-authorised, proportionate exploitation — but the mirror duty is to instrument our own line so an adversary cannot do this to us.",
    div:{ d:"Decide in advance the adversary action-type and threshold that authorises the next phase-line advance, so exploitation is a pre-planned choice, not an ad-hoc command decision.", o:"Div Comd, on G3/G5 and LEGAD advice.", a:"Adds an escalation-trigger matrix to the OPLAN — provocation category, evidentiary threshold, pre-authorised response and the phase line it unlocks — each paired to an ISR cue.", t:"Advance to the next phase line when a provocation of category X is confirmed by ≥2 sources within Y hours.", x:"Pre-authorisation buys tempo but risks over-reach if the trigger is loose — every trigger trades deniability for speed.", m:"Ground held vs escalation incurred; did each step stay below a decisive-response threshold?" },
    bde:{ d:"Sequence a pre-advance engineer tunnel check and set overwatch in depth, not along the line of advance.", o:"Bde / Armour Comd, on Engr advice.", a:"Inserts a sub-surface clearance annex before consolidation; re-tasks overwatch tanks to cover the breakout in depth.", t:"Do not consolidate an objective until the sub-surface clearance serial reports complete.", x:"Depth overwatch and clearance cost time and tempo vs a faster but sub-surface-blind advance.", m:"Objectives consolidated sub-surface-cleared; overwatch covered the breakout, not just the line." } },
  "M-02":{ verdict:"Use it, with changes",
    lead:"Ukraine beat a single EW solution by running two drone tiers at once and moving its own logistics unmanned where manned vehicles die. We should redesign both our strike architecture and our sustainment around the same split.",
    div:{ d:"Break the co-location signature — AI mid-range drones target predictable clustering of command, logistics and communications.", o:"Div Comd, on G6/G4 and G2 advice.", a:"Redesigns TAA layout so command, logistics and comms are physically separated; grades every node against a no-signal-dependency deep-strike threat.", t:"Displace or disperse a node when it is assessed targetable by a 150 km AI drone with no signal dependency.", x:"Dispersion costs C2 latency, movement and real estate vs an efficient co-located TAA.", m:"Node survivability under a deep-strike inject; no single strike removes two of {command, logistics, comms}." },
    bde:{ d:"Design replenishment around an unmanned handover point for the last 5–15 km.", o:"Bde / Armour Comd, on S4 advice.", a:"Adopts a manned drop-off at max safe range → UGV forward relay → UGV CASEVAC TTP; manned ambulances no longer enter the approach zone.", t:"Switch to unmanned relay when the approach-zone FPV threat is assessed active on the resupply route.", x:"UGV relay adds handover time and a Starlink/RF dependency vs faster manned resupply that cannot survive.", m:"Resupply and CASEVAC completed without a manned vehicle entering the approach zone." } },
  "M-03":{ verdict:"A warning, not a model",
    lead:"The double-tap is an adversary tactic aimed at compounding one strike into mass friendly casualties. There is nothing to copy — the requirement is to make our reaction to a first strike defeat the intended second.",
    div:{ d:"Add a timed hold to CASEVAC following a strike, with UGV assessment running inside the window.", o:"Div Comd / G4-Med, on force-protection advice.", a:"Writes a 40-minute hold into CASEVAC orders after a fire/strike incident, with UGV or remote assessment before manned entry.", t:"Hold manned entry to a fresh strike site until the follow-on window (≈40 min) has elapsed or the site is cleared by UGV.", x:"A timed hold delays treatment of survivors vs the risk of losing the rescue party to the follow-on strike.", m:"No secondary mass-casualty event from a follow-on strike; hold observed and logged." },
    bde:{ d:"QRF reacting to a first strike moves off-route before the follow-on window closes.", o:"Bde / Armour Comd, on S3 advice.", a:"Adds off-route movement and dispersal to QRF SOPs; the QRF treats itself as the double-tap's intended second target.", t:"On a first strike, the QRF displaces off the obvious approach route immediately, not on contact.", x:"Off-route movement is slower and harder to command vs a fast direct response into the beaten zone.", m:"QRF cleared the predicted follow-on area before the window closed." } }
};
const ICT_M = {
  "M-01":{ fmt:"Battle-staff exercise · Div G3/G5 + Bde/Armour O-group · 2 hrs · map + trigger matrix",
    set:"A ceasefire order arrives while your formation holds a contact line; higher wants compliance and an option to exploit to a defensible phase line.",
    run:["Staff simultaneously plan ceasefire compliance and a pre-planned exploitation to a defensible phase line.","Brief the provocation triggers that authorise each advance, each with an evidentiary threshold.","Produce a tunnel-clearance annex and a depth-overwatch plan for consolidation."],
    dec:"Can the staff hold ceasefire compliance and active exploitation at the same time — and who authorises the first advance?",
    twist:"Controller injects an ambiguous provocation (single-source, below threshold) — advance or hold?",
    std:"Exploitation tied to ≥2-source triggers; compliance and exploitation coexist; tunnel annex produced before consolidation." },
  "M-02":{ fmt:"TAA survivability assessment · Div G4/G6 + Bde S4 · 2 hrs · TAA overlay",
    set:"Your formation occupies a TAA within range of AI mid-range drones that no longer need a signal link to complete a strike.",
    run:["Grade every node: 'Targetable by a 150 km AI drone with no signal dependency?' — and redesign the layout to pass.","Separate command, logistics and communications so no single strike removes two of them.","Design the last-5–15 km replenishment around an unmanned handover point."],
    dec:"Which nodes must displace tonight, and where does the manned-to-UGV handover sit on each resupply route?",
    twist:"Controller removes Starlink mid-serial — re-plan UGV C2 on a degraded link.",
    std:"No node fails the deep-strike test; command/logistics/comms physically separated; a manned vehicle never enters the approach zone." },
  "M-03":{ fmt:"Force-protection serial · Bde/Armour O-group + Med + QRF · 90 min · CASEVAC/QRF SOP",
    set:"A Geran-2 strike hits a position; casualties are down and a rescue is forming under an expected Iskander follow-on.",
    run:["Apply the CASEVAC hold: UGV/remote assessment runs inside the 40-minute follow-on window before manned entry.","QRF reacting to the first strike displaces off-route before the window closes.","Rehearse the minimum hold time, UGV assessment sequence and off-route armour movement as a written SOP."],
    dec:"Div — enforce the hold or accept the risk to treat survivors now? Bde — which route does the QRF take to avoid the follow-on?",
    twist:"Controller reports a second incident during the hold — do you split the QRF or hold the SOP?",
    std:"Hold and UGV assessment observed; QRF cleared the predicted follow-on area; no secondary mass-casualty event." }
};
const THEATRE_NAME = {"RUS-UKR":"Russia–Ukraine","ISR-LBN":"Israel–Lebanon","THA-KHM":"Thailand–Cambodia","ISR-HMS":"Israel–Hamas","USI-IRN":"US/Israel–Iran"};
const BLUF_TEXT_M = "In June the manoeuvre fight was decided by <b>method, not mass</b>. The IDF moved a ceasefire line 10 km in under two months by making each advance a <b>pre-planned response to a provocation</b>. Ukraine split the drone fight into an <b>unjammable fibre-optic close layer</b> and an <b>AI-autonomous deep layer</b> that no single EW answer defeats — and moved its own logistics <b>unmanned</b> where manned vehicles die. And Russia's <b>double-tap</b> proved the follow-on strike is aimed at your rescue. Pre-authorise your exploitation triggers, break the co-location signature, and write timed CASEVAC and off-route QRF drills into every SOP.";
const SUGGESTIONS_M = ["What changed for manoeuvre this month?","How do we counter fibre-optic FPV?","What is the double-tap and how do we defeat it?","Lessons for Armour","What to rehearse in ICT","Give me the bottom line"];
const _STOP = new Set("the a an and or of to in for on at by from with into onto over under is are was were be been being it this that those these as our we us your you their they them do does did how what which who why when where than then so such also more most any all key lead led leading about can could should would will not".split(" "));
const _THK = {"RUS-UKR":["russia","russian","ukraine","ukrainian","geran","shahed","donetsk","pokrovsk","kursk"],"ISR-LBN":["israel","israeli","lebanon","lebanese","hezbollah","idf","nabatieh","merkava","beaufort","litani"],"THA-KHM":["thailand","thai","cambodia","cambodian","osmach"],"ISR-HMS":["hamas","gaza","qassam","odeh","haddad","khrizim","decapitation"]};
const _FMK_M = {"3DIV":["3div","3 div","3rd div","third div"],"9DIV":["9div","9 div","9th div","ninth div"],"ARMD":["armour","armor","armoured","armored","tank","tanks","leopard","hunter","bionix","bronco","mbt","afv"]};
const _OUT = {success:["success","successful","succeed","worked","effective","effectively","win","won","decisive","gained","advantage","best","what worked"],failure:["fail","failed","failure","failures","lost","loss","losses","casualt","vulnerable","vulnerability","mistake","wrong","unsustainable","what failed","did not"],threat:["threat","gap","capability","capdev","weakness","unjammable"]};
const _SEC = {bluf:["bottom line","bluf","summary","summarise","summarize","overview","tldr","tl;dr","takeaway","big picture","headline","in short"],planning:["planning","oplan","estimate","checklist","precondition","go/no-go","go no go","gonogo"],ict:["rehearse","ict","in-camp","train","training","exercise","drill","practice","practise"]};

/* ===================== SENSE & STRIKE PACKAGE (Package 2) ===================== */
const FORMATIONS_S = {"6DIV":{c:"f3",n:"6 Div"},"ARTY":{c:"f9",n:"Artillery"},"AINT":{c:"fa",n:"Army Int"}};
const _FMK_S = {"6DIV":["6div","6 div","6th div","sixth div"],"ARTY":["artillery","arty","gunner","gun","fires","himars","counter-battery","counterbattery","gbad"],"AINT":["army int","intelligence","intel","sigint","humint","isr","collection","targeting","int"]};

const SERIALS_S = [
  { id:"S-01", kind:"lesson", title:"Logistics lockdown — fire control over five cities",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Major success",
    formations:["6DIV","ARTY","AINT"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"By 20 June Ukraine's mid-range drone campaign achieved 'fire control' over the M-04 highway (Luhansk City, Starobilsk, Alchevsk, Bryanka, Kadiivka) and the H-20 through Donetsk City. Chonhar Bridge freight fell 71%; Crimea fuel rationing was restricted to government entities; the Moscow Oil Refinery was struck on 18 June and suspended operations. 26 Ukrainian units flew 14 drone types. Choke-point targeting — bridges, canal crossings, junctions — was the mechanism: partial damage creates complete disruption. When Russian repair equipment reached Chonhar, SOF drones struck it in a Phase 2 follow-on."},
      {l:"Countermeasure", t:"Russia rerouted to secondary coastal roads, painted vehicles white and used pontoon bridges — all subsequently targeted."},
      {l:"Outcome", t:"Ukraine major success — 'fire control' over five cities means those routes are no longer viable for predictable military logistics."}
    ],
    sources:[
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-21-2026/",n:"ISW — fire control over the M-04/H-20 (21 Jun)"},
      {u:"https://centralintelligence.co/drones/story/ukraine-says-air-defenses-down-russian-drones-20260624",n:"Central Intelligence — 26 units, 14 drone types (27 Jun)"}
    ] },
  { id:"S-02", kind:"capdev", title:"First autonomous combat intercept — and Russia's hardware counter",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Success",
    formations:["6DIV","ARTY","AINT"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"8 June, Kharkiv Oblast: a MaXon Systems interceptor performed the first fully autonomous drone-on-drone interception — one operator command to select the target, then the system navigated and destroyed the Shahed independently (~95% autonomous). The cost inversion is stark: interceptor ~$3,500 vs Shahed ~$20,000–50,000. AI acquisition under one second versus a human pilot's 5–15 seconds lets one operator manage dozens of simultaneous intercepts."},
      {l:"Countermeasure", t:"Russia fielded the jet-powered Geran-4 Shahed variant to outrun AI interceptors calibrated for the slower baseline. Ukraine's counter was to retrain the AI on Geran-4 footage — a software update, not a hardware replacement, completed within weeks."},
      {l:"Outcome", t:"Ukraine success — Shahed interception ran ~95% (174 of 189 on 26 June)."}
    ],
    sources:[
      {u:"https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-june-5-2026",n:"ISW — first autonomous intercept (5 Jun)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-23-2026/",n:"ISW — Geran-4 speed counter (23 Jun)"},
      {u:"https://centralintelligence.co/drones/story/ukraine-says-air-defenses-down-russian-drones-20260624",n:"Central Intelligence — ~95% interception (27 Jun)"}
    ] },
  { id:"S-03", kind:"lesson", title:"Post-decapitation depth targeting — middle managers and finance",
    conflict:"ISR-HMS", theatre:"Israel–Gaza", verdict:"mixed", verdictLabel:"Partial success",
    formations:["6DIV","ARTY","AINT"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"After May's double leadership decapitation, in June the IDF shifted targeting to the layer below: battalion deputies, engineering-division heads and financial intermediaries — Imad Aslim (Zeitoun Battalion deputy), PIJ engineering head Muhammad Afash, and financiers Khathar Jamasi and Muhammad Khrazin, who moved tens of millions through money changers. The 2–4 week post-decapitation window catches replacement commanders before they embed — less experienced, weaker in COMSEC, forced to make first contact with existing nodes."},
      {l:"Countermeasure", t:"Hamas suppressed internal protests through intimidation, continued ceasefire-phase rearmament, and co-located military functions in protected civilian infrastructure (e.g. the Yafa Hospital commander)."},
      {l:"Outcome", t:"IDF partial success — military-wing leadership degraded, but Hamas governance stayed intact."}
    ],
    sources:[
      {u:"https://www.timesofisrael.com/liveblog_entry/idf-dozens-of-hezbollah-operatives-killed-over-80-targets-struck-in-lebanon-last-night/",n:"Times of Israel — depth targeting of deputies and financiers (19 Jun)"}
    ] },
  { id:"S-04", kind:"lesson", title:"Mass saturation — decoy, cruise, ballistic, hypersonic",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"mixed", verdictLabel:"Mixed",
    formations:["6DIV","ARTY","AINT"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"2 June: 656 drones plus 73 missiles — including 8 Zircon hypersonics (not intercepted) and 33 Iskander-M ballistic. Decoy drones (Gerbera, Italmas, Parodiya) forced air-defence to engage cheap platforms first, consuming expensive interceptors before the strike layer arrived. ISW assessed Russia timed the raid to exploit Patriot interceptor shortages. 23 were killed in Kyiv on 2 June; 681 drones were launched on 14 June."},
      {l:"Countermeasure", t:"Ukraine used AI interceptors for Shaheds, mobile fire groups for low-altitude drones, and EW to redirect decoys before SAM consumption. Its 660-drone retaliation on 26 June hit Kerch naval infrastructure, Crimea air-defence nodes and Russian refineries."},
      {l:"Outcome", t:"Russia partially successful on tactical damage; its strategic aim of breaking Ukrainian will failed."}
    ],
    sources:[
      {u:"https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-june-2-2026",n:"ISW — 2 June composite raid (2 Jun)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-15-2026/",n:"ISW — 681-drone raid (15 Jun)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-27-2026/",n:"ISW — 26 June retaliation (27 Jun)"}
    ] }
];
const SUMMARY_S = {
  "S-01":"Achieve 'fire control' over an adversary's GLOC — route denial, not destruction — by ranking and persistently striking choke points, then hitting the repair effort in a Phase 2 follow-on.",
  "S-02":"Put low-cost AI interceptors in the outermost air-defence layer to win the cost-exchange against mass drones, and treat rapid software retraining — not new hardware — as the real capability.",
  "S-03":"Exploit the 2–4 week window after a leadership kill to target the successor layer and the financial network in parallel — the replacement is least embedded and most exposed.",
  "S-04":"A layered attack demands a layered defence: decoys deplete the magazine, so the failure point is the tier where coverage is thin — and the decoy-as-depletion model also works offensively."
};
const SIGNAL_S = {
  "S-01":"From the weekly interdiction reporting — the M-04/H-20 'fire control' campaign, the 71% fall in Chonhar freight, and Crimea's government-only fuel rationing.",
  "S-02":"From the weekly air-defence reporting — the first autonomous drone-on-drone intercept, the Geran-4 speed counter, and the ~95% Shahed interception rate.",
  "S-03":"From the weekly Gaza targeting reporting — the shift to battalion deputies, engineering heads and financial intermediaries after May's decapitations.",
  "S-04":"From the weekly strike-and-defence reporting — the 2 June composite raid, decoy-led magazine depletion, and the unintercepted Zircon layer."
};
const APP_S = {
  "S-01":{ verdict:"Use it, with changes",
    lead:"Ukraine denied five cities' worth of logistics without destroying the network, by treating route denial as a campaign objective and killing the repair effort. The transferable pieces are a disruption-ranked target list, a fire-control objective category, and repair-node targeting.",
    div:{ d:"Define 'fire control over a route' as a campaign objective category distinct from destruction, and calculate the munitions density and duration to deny the adversary's primary GLOC.", o:"6 Div plans, on G3/Targeting advice.", a:"Adds a route-denial objective to the campaign plan and computes the munitions requirement per choke point for sustained fire control.", t:"Declare fire control achieved when route throughput stays below X% for Y days under observation.", x:"Sustained route denial consumes strike volume that could service destruction targets — denial vs attrition.", m:"GLOC throughput reduction and duration; is the route non-viable for predictable logistics?" },
    bde:{ d:"Pre-compute a Transport Network Disruption Priority List (TNDPL) ranking every crossing and junction by disruption value before operations begin, and track the campaign's signature indicators.", o:"Artillery fire planners + Army Int.", a:"Builds the TNDPL (a bridge outranks a depot; a junction outranks a road segment); Army Int tracks state-directed unit-level incentive/procurement programmes as the capability indicator, not any single drone type.", t:"Strike the highest-ranked node first; on confirmation of a repair order, strike the repair assets before arrival (Phase 2).", x:"Ranking and repair-strike watch cost ISR and planning effort vs reactive servicing of targets as they appear.", m:"Top-5 choke points serviced by disruption value; repair assets struck before they restored a node." } },
  "S-02":{ verdict:"Use it, with changes",
    lead:"The decisive move was architectural and industrial: a cheap AI-intercept layer that inverts the cost-exchange, backed by a data pipeline that re-tunes it in weeks. Assess where our GBAD has an analogue low-cost layer and whether we can re-train that fast.",
    div:{ d:"Reserve conventional SAMs for ballistic and hypersonic threats and assign an analogue low-cost intercept layer to the mass-drone tier.", o:"6 Div GBAD plans.", a:"Restructures the GBAD layer diagram so mass, low-cost, high-volume threats meet a low-cost interceptor and expensive effectors are conserved.", t:"Commit AI/low-cost interceptors first against the mass-drone tier; release SAMs only for the ballistic/hypersonic tier.", x:"A new low-cost layer costs procurement and integration vs continuing to burn expensive interceptors on cheap drones.", m:"Cost-exchange ratio per engagement; SAM inventory preserved for the top tier." },
    bde:{ d:"Track Brave1-type development as a capability signature — state innovation cluster + live operational data corpus + rapid variant cycling.", o:"Army Int.", a:"Adds the signature to the collection plan; the indicator is a software update within weeks of a new adversary platform, not a new drone in the field.", t:"Flag a capability leap when an adversary re-tunes an effector against a new threat within weeks.", x:"Watching the software/data cycle costs collection focus vs simply counting platforms.", m:"Time from new adversary variant to fielded counter, tracked as an indicator." } },
  "S-03":{ verdict:"Use it, with changes",
    lead:"The insight is temporal and structural: a decapitation opens a short window on the successor layer, and money is a parallel target system to the chain of command. Build both into the collection posture.",
    div:{ d:"Formalise a succession-window collection posture that activates within 24 hours of an HVI elimination.", o:"6 Div / Army Int plans.", a:"Pre-builds a collection plan covering succession candidates that triggers on a confirmed HVI kill — the highest-yield window.", t:"Activate the succession-window plan within 24 hours of a confirmed HVI elimination.", x:"Holding a pre-built successor plan ties up collection capacity against a window that may not open.", m:"Successors identified and actioned inside the 2–4 week window." },
    bde:{ d:"Maintain a parallel financial-network map for every priority target organisation and produce two target packages — military chain and financial network.", o:"Army Int.", a:"Maps money changers, remittance nodes and financial intermediaries independently of the military targeting process; identifies the 3 financial nodes whose removal most degrades military capacity.", t:"Nominate a financial node for action when its removal is assessed to degrade military capacity, not merely finances.", x:"A second (financial) target system doubles the analytic load vs a chain-of-command-only picture.", m:"Financial map produced independently; 3 highest-leverage nodes identified and briefed jointly." } },
  "S-04":{ verdict:"A gap to fix now",
    lead:"The 2 June failure was not volume but a capability gap at the top tier that cheap lower layers cannot compensate. The mirror opportunity: lead your own strike packages with decoys to deplete the defender's magazine.",
    div:{ d:"Assess which GBAD tier has a current gap and price the residual impacts of that gap.", o:"6 Div GBAD + Artillery plans.", a:"Maps the intercept system against a composite package (decoys + cruise + ballistic + notional hypersonic) and identifies the tier where the magazine exhausts first.", t:"Prioritise closing the tier that exhausts first under a composite raid, not the cheapest tier.", x:"Buying top-tier coverage is expensive and competes with mass-drone defence spend.", m:"At which tier does the GBAD exhaust its magazine before all threats are defeated — and did that gap close?" },
    bde:{ d:"Lead high-volume offensive strike packages with decoy platforms to force early engagement, then commit the primary strike element.", o:"Artillery fire planners.", a:"Adds a decoy-as-magazine-depletion element to strike packages against layered GBAD.", t:"Launch decoys first to draw expensive interceptors, then commit the primary element into the depleted defence.", x:"Decoys consume launch volume and tip off the raid vs a leaner but more-contested strike.", m:"Interceptors expended on decoys before the primary element arrived; primary-element leakage." } }
};
const ICT_S = {
  "S-01":{ fmt:"Targeting TEWT · 6 Div Targeting + Arty + Army Int · 2 hrs · GLOC overlay + node list",
    set:"The adversary sustains an offensive over one primary GLOC with several bridges, canal crossings and junctions.",
    run:["Build a TNDPL: rank every crossing and junction by disruption value (a bridge outranks a depot; a junction outranks a road segment).","Pick the top 5 choke points and calculate the munitions density and duration needed for fire control over each.","Plan the Phase 2 repair-node strike: strike, confirm the repair order, then strike repair assets before arrival."],
    dec:"Which 5 nodes deliver route denial for the least munitions — and when do you declare fire control achieved?",
    twist:"Controller reports pontoon bridges and white-painted convoys — re-rank the list.",
    std:"TNDPL produced with justified rankings; munitions requirement calculated per node; a repair-strike trigger defined." },
  "S-02":{ fmt:"GBAD analysis serial · 6 Div GBAD + Army Int · 90 min · threat/effector matrix",
    set:"Your GBAD faces a mixed raid of cheap mass drones plus a small number of ballistic and hypersonic threats.",
    run:["Compute the cost-exchange ratio for each effector against each threat category.","Assign the mass-drone tier to a low-cost/AI intercept layer and reserve SAMs for the top tier.","Identify which adversary threat category is most amenable to AI-interceptor defeat and why."],
    dec:"Where does the low-cost layer sit, and at what point do you release a SAM?",
    twist:"Controller fields a faster Geran-4 variant mid-serial — is your answer hardware or a software retrain?",
    std:"Cost-exchange ratios computed; a low-cost layer assigned to the mass tier; SAMs conserved for ballistic/hypersonic." },
  "S-03":{ fmt:"Targeting serial · 6 Div Targeting + Army Int · 2 hrs · org + finance overlays",
    set:"A priority adversary organisation has just lost a senior commander; a 2–4 week succession window is open.",
    run:["Activate a pre-built succession-window collection plan within 24 hours of the kill.","Produce two parallel target packages: the military chain and the financial network.","Identify the 3 financial nodes whose removal most degrades military capacity."],
    dec:"Do you strike the emerging successor now or develop the financial node that constrains the whole organisation?",
    twist:"Controller reports the successor co-located in protected civilian infrastructure — how does that change the package?",
    std:"Succession plan activated inside 24 hrs; financial map built independently; both packages briefed jointly." },
  "S-04":{ fmt:"GBAD stress-test · 6 Div GBAD + Artillery · 2 hrs · effector/threat matrix",
    set:"A composite raid inbound: decoys, cruise missiles, ballistic missiles and a notional hypersonic layer, against a finite interceptor magazine.",
    run:["Sequence the raid and track interceptor expenditure tier by tier.","Identify the tier at which the magazine exhausts before all threats are defeated.","Re-run offensively: lead your own package with decoys to deplete the defender, then commit the primary element."],
    dec:"Which tier gap do you close first — and offensively, how many decoys buy the primary element a clean run?",
    twist:"Controller adds an unintercepted hypersonic layer — does your priority change?",
    std:"Exhaustion tier identified; a closure priority set; an offensive decoy-led package designed with a measurable depletion effect." }
};
const LEARN_S = {
  "S-01":{ topic:"Fire control over a GLOC", status:"High utility", why:"Route denial, not destruction, is the cheaper and more durable effect — and the repair effort is the decisive follow-on target.", worked:"Ukraine made five cities' logistics non-viable and struck Russian repair equipment before it could restore a bridge.", next:"Build a TNDPL and rehearse declaring and holding fire control over the primary GLOC." },
  "S-02":{ topic:"Cost-exchange air defence", status:"Action now", why:"Beating mass drones is an economics problem — a cheap interceptor plus a fast retraining pipeline beats expensive SAMs.", worked:"A $3,500 AI interceptor autonomously killed $20k–50k Shaheds at ~95% and was re-tuned against Geran-4 in weeks.", next:"Map our GBAD cost-exchange and find the low-cost intercept layer for the mass-drone tier." },
  "S-03":{ topic:"Succession-window & finance targeting", status:"High utility", why:"A decapitation is only decisive if the successor layer and the money network are attacked before the replacement embeds.", worked:"The IDF degraded Hamas's military-wing leadership by targeting deputies, engineers and financiers after May's kills.", next:"Stand up a 24-hour succession-window collection posture and a parallel financial-network map." },
  "S-04":{ topic:"Layered saturation attack/defence", status:"Action now", why:"Decoys turn air defence into a magazine-depletion problem; the decisive gap is the tier cheap layers can't cover — and the logic is also an offensive tool.", worked:"Russia's decoy-led composite raids consumed interceptors before the strike layer and left the hypersonic tier unintercepted.", next:"Stress-test our GBAD against a composite package and build a decoy-led offensive strike option." }
};
const PACK_S = {
  kicker:"June 2026 · Sense & Strike", titleLine:"for sense-and-strike formations",
  changed:"June was the month deep fires and air defence became an economics contest. Ukraine achieved 'fire control' over five cities' worth of logistics — route denial, not destruction — by ranking choke points and striking the repair effort in a Phase 2 follow-on. Its first fully autonomous drone-on-drone intercept inverted the cost-exchange ($3,500 vs a $20k–50k Shahed) and, when Russia fielded the faster Geran-4, was re-tuned by a software update in weeks. In Gaza the IDF proved a decapitation only pays if the successor layer and the financial network are hit inside the 2–4 week window. And Russia's 2 June composite raid showed decoys turn air defence into a magazine-depletion problem, with the hypersonic tier left unintercepted. For 6 Div, Artillery and Army Int: rank the network, win the cost-exchange, and close the top-tier gap.",
  stats:[
    {n:4, k:"Priority learnings", s:"For this month"},
    {n:3, k:"Hot contests", s:"Under adaptation watch"},
    {n:3, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat targeting and air defence as ranked, priced problems. Define fire control as an objective category, put a low-cost layer against mass drones, and find the tier where your magazine runs out before the threat does.",
  divPriorities:[
    "Adopt 'fire control over a route' as a campaign objective and compute the munitions to hold it.",
    "Assign a low-cost/AI intercept layer to the mass-drone tier and conserve SAMs for the top tier.",
    "Stress-test GBAD against a composite raid and close the tier that exhausts first."
  ],
  brigadeBluf:"This month: rank every crossing and junction before you strike, kill the repair effort not just the bridge, put cheap interceptors against cheap drones, and open your own strike packages with decoys.",
  implications:[
    {ech:"Division HQ", t:"Make route denial and cost-exchange explicit campaign design choices, not by-products of servicing targets."},
    {ech:"Artillery", t:"Pre-build the disruption-priority list and the decoy-led strike package; strike repair assets before they restore a node."},
    {ech:"Army Intelligence", t:"Track the software/data cycle as a capability indicator and hold a parallel financial-network map for every priority target."}
  ],
  worked:[
    "Choke-point 'fire control' that made five cities' logistics non-viable.",
    "A cheap autonomous interceptor that inverted the cost-exchange and re-tuned in weeks.",
    "Decoy-led raids that depleted the defender's magazine before the strike layer."
  ],
  failed:[
    "Servicing targets reactively instead of ranking the network for route denial.",
    "Spending expensive interceptors on cheap mass drones.",
    "Leaving a top-tier (ballistic/hypersonic) coverage gap that cheap layers cannot fill."
  ],
  testICT:[
    "Build a TNDPL and declare fire control over a primary GLOC.",
    "Compute a GBAD cost-exchange and assign the low-cost layer.",
    "Run a composite-raid stress test and design a decoy-led offensive package."
  ],
  sopReview:[
    "Whether targeting doctrine recognises route denial as distinct from destruction.",
    "GBAD layer assignment and interceptor economics.",
    "Whether a parallel financial-network map exists for priority target organisations."
  ],
  contests:[
    {cap:"Fire control over a GLOC", stage:"hot",
     what:"Persistent choke-point strikes that deny an adversary's primary supply routes — route denial as an objective — with a Phase 2 strike on the repair effort.",
     counter:"Rerouting, white-painted convoys and pontoon bridges — each subsequently targeted.",
     tempo:"Counters appeared within weeks but only displaced, not restored, the logistics.",
     diffusion:"Ukraine (M-04/H-20, Crimea approaches); a model for interdiction of any predictable GLOC.",
     supersession:"", id:"S-01"},
    {cap:"Cost-exchange / autonomous intercept", stage:"emerging",
     what:"Low-cost AI interceptors autonomously defeating mass drones, backed by a data pipeline that re-tunes the model against new variants in weeks.",
     counter:"A faster jet-powered Shahed variant, answered by a software retrain rather than new hardware.",
     tempo:"Counter-and-recounter cycle measured in weeks; advantage to whoever iterates software fastest.",
     diffusion:"Ukraine; directly relevant to any GBAD facing mass-drone raids.",
     supersession:"Human-piloted interception → autonomous AI interception (for the mass-drone tier)", id:"S-02"},
    {cap:"Layered saturation raid", stage:"hot",
     what:"A decoy-led composite raid (decoys, cruise, ballistic, hypersonic) that depletes the interceptor magazine before the strike layer and exploits top-tier coverage gaps.",
     counter:"AI interceptors, mobile fire groups and EW to redirect decoys before SAM consumption — effective on the lower tiers only.",
     tempo:"Attacker holds the initiative where a defender lacks top-tier depth.",
     diffusion:"Russia–Ukraine; a template for and against any layered air attack.",
     supersession:"", id:"S-04"}
  ],
  priorities:["S-01","S-02","S-04"]
};
const PLANNING_S = [
  {b:"Define fire control as an objective", p:"Add 'fire control over a route' to the campaign objective set, distinct from destruction. For the adversary's primary GLOC, calculate the munitions density and duration needed to hold throughput below a set threshold, and define the observation that confirms it."},
  {b:"Rank the network before striking", p:"Pre-compute a Transport Network Disruption Priority List — every crossing and junction ranked by disruption value (a bridge outranks a depot; a junction outranks a road segment) — so the first strike goes to the highest-leverage node, not the easiest target."},
  {b:"Target the repair effort", p:"Plan the Phase 2 follow-on into every interdiction serial: strike, confirm the adversary repair order, then strike the repair assets before they arrive. A node the adversary cannot repair is worth far more than one repeatedly re-struck."},
  {b:"Price the air-defence cost-exchange", p:"For each effector and threat pairing, compute the cost-exchange ratio. Assign the mass-drone tier to a low-cost/AI intercept layer and reserve SAMs for ballistic and hypersonic threats; treat the software retraining cycle as the decisive capability."},
  {b:"Stress-test for magazine depletion", p:"Map the intercept system against a composite package (decoys + cruise + ballistic + notional hypersonic) and find the tier where the magazine exhausts before all threats are defeated. Prioritise closing that tier and price the residual impacts of leaving it open."},
  {b:"Hold a parallel financial map", p:"For every priority target organisation, maintain a financial-network map (money changers, remittance nodes, intermediaries) produced independently of the military targeting process, and stand up a succession-window collection plan that activates within 24 hours of an HVI kill."}
];
const KEY_JUDGEMENTS_S = [
  "Route <em>denial</em> is a distinct objective from destruction — and cheaper to hold.",
  "The decisive follow-on target is the <em>repair effort</em>, not another pass on the bridge.",
  "Air defence against mass drones is an <em>economics</em> problem before it is a technical one.",
  "Cheap layers cannot cover a <em>top-tier</em> gap — decoys make the magazine the target."
];
const BLUF_S = "In June sense-and-strike became a contest of <b>ranking and economics</b>. Ukraine achieved <b>fire control</b> over five cities' logistics by ranking choke points and killing the <b>repair effort</b>, and inverted the air-defence <b>cost-exchange</b> with a cheap autonomous interceptor re-tuned in weeks. Gaza showed a decapitation only pays if you hit the <b>successor layer and the money</b> inside the window, and Russia's composite raids proved <b>decoys deplete the magazine</b> and expose the top tier. Rank the network, win the cost-exchange, and close the tier that runs out first.";
const SUGGESTIONS_S = ["What changed for sense & strike this month?","How do we achieve fire control over a route?","How do we win the air-defence cost-exchange?","What to rehearse in ICT","Lessons for Army Int","Give me the bottom line"];

/* ===================== COMBAT SUPPORT (Engineer · Signals) ===================== */
const FORMATIONS_CSS = {"ENGR":{c:"f3",n:"Engineer"},"SIG":{c:"f9",n:"Signals"}};
const _FMK_CSS = {"ENGR":["engineer","engineers","engr","sapper","breach","breaching","bridge","bridging","obstacle","tunnel","earthmover","bulldozer","d9","yahalom"],"SIG":["signals","signal","sig","comms","communication","communications","ew","electronic warfare","jamming","jammer","starlink","spectrum","c2","relay"]};

const SERIALS_CSS = [
  { id:"CS-01", kind:"lesson", title:"Bridge and repair interdiction — Chonhar Phase 2",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Success",
    formations:["ENGR","SIG"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"7–9 June: Chonhar Bridge was struck in two sequential attacks and traffic fell 71%. 21–23 June: a railway bridge near Rozdolne was struck; when Russian repair equipment arrived, underground operatives reported its movement and SOF drones destroyed the repair equipment the following night. Simultaneously the Henichesk Strait bridge was struck, two Port Kavkaz ferries were destroyed, and Kerch Pantsir and S-400 radars were disabled. By end June, Crimea fuel rationing had extended to government-only."},
      {l:"Countermeasure", t:"Russia deployed pontoon bridges and diverted to coastal roads — both subsequently targeted. Its predictable repair deployment let Ukraine pre-position the follow-on strike."},
      {l:"Outcome", t:"Ukraine success — Crimea's primary logistics arteries were non-operational by the end of June."}
    ],
    sources:[
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-21-2026/",n:"ISW — Chonhar struck, traffic down 71% (21 Jun)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-23-2026/",n:"ISW — SOF strike on repair equipment (23 Jun)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-june-30-2026/",n:"ISW — Crimea rationing government-only (30 Jun)"}
    ] },
  { id:"CS-02", kind:"lesson", title:"50,000 UGV missions — Starlink dependency and passability",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Major success",
    formations:["ENGR","SIG"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"January–June 2026: 50,000+ logistics and evacuation UGV missions (7,500 in January to 14,000 in May; units 117 to 230). On 10 June a 15-hour UGV evacuation extracted two soldiers unreachable by manned vehicles, covering 56 km near the front. 25,000 UGVs were contracted in H1 2026 alone, and 90% of Pokrovsk supply runs are now unmanned."},
      {l:"Countermeasure", t:"Russia targeted UGVs with FPV drones; Ukraine responded with armoured variants and route diversification."},
      {l:"Outcome", t:"Ukraine major success — 600+ wounded evacuated and 4,500 tonnes moved by 3rd Army Corps alone."}
    ],
    sources:[
      {u:"https://censor.net/en/news/4007565/ugvs-complete-over-50-000-missions-in-2026",n:"Censor.net / UA MoD — 50,000+ UGV missions (8 Jun)"},
      {u:"https://www.pravda.com.ua/eng/news/2026/06/10/8038614/",n:"Ukrainska Pravda — 15-hour UGV evacuation (10 Jun)"},
      {u:"https://euromaidanpress.com/2026/06/10/as-ugv-adoption-soars-ukraine-must-write-the-playbook-for-saving-soldiers-lives/",n:"EuroMaidan Press — 90% of Pokrovsk supply unmanned (10 Jun)"}
    ] },
  { id:"CS-03", kind:"lesson", title:"RSF drone siege of El Obeid — infrastructure as the target",
    conflict:"SDN", theatre:"Sudan", verdict:"threat", verdictLabel:"Threat pattern",
    formations:["ENGR","SIG"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"Through June the RSF struck El Obeid's main power substation and fuel station, triggering cascading outages across water, health and transport. Drone strikes across North Kordofan killed at least 33 civilians in one early-June week; 29 countries raised the alarm at the UN Human Rights Council; a girls' school was struck. The siege model achieves three effects without a ground assault: garrison degradation, civilian suffering that generates political pressure, and standoff accumulation of the conditions for a later assault."},
      {l:"Countermeasure", t:"SAF active drone interception had limited effect; the SAF maintained operations in Blue Nile simultaneously, showing multi-front resilience."},
      {l:"Outcome", t:"RSF partial success — El Obeid besieged but not fallen by the end of June: a siege pattern our infrastructure planning must defeat."}
    ],
    sources:[
      {u:"https://www.aljazeera.com/news/2026/6/11/drone-strikes-on-central-sudanese-city-kill-up-to-23-ngo",n:"Al Jazeera — strikes on El Obeid (10 Jun)"},
      {u:"https://allafrica.com/stories/202606100007.html",n:"DNHR / AllAfrica — 33 civilians killed in a week (10 Jun)"},
      {u:"https://www.aljazeera.com/news/2026/6/18/dozens-of-countries-warn-of-atrocities-amid-escalation-in-sudans-el-obeid",n:"Al Jazeera — 29 countries warn at UNHRC (18 Jun)"},
      {u:"https://www.aljazeera.com/news/2026/6/28/digging-with-a-needle-generals-stall-peace-as-sudans-el-obeid-burns",n:"Al Jazeera — the siege model (28 Jun)"}
    ] }
];
const SUMMARY_CSS = {
  "CS-01":"Interdict the repair, not just the bridge: strike, confirm the adversary's repair order, then destroy the repair assets before arrival — and give your own repair effort no persistent signature.",
  "CS-02":"A UGV logistics fleet is a decisive capability with two new dependencies — the C2 link (Starlink) and UGV-specific route passability — both of which must be planned and protected.",
  "CS-03":"A drone siege degrades a position by collapsing its civilian infrastructure — power, water, communications — so hardening means physical protection plus workarounds, and Signals needs 72-hour standalone power."
};
const SIGNAL_CSS = {
  "CS-01":"From the weekly Crimea interdiction reporting — the Chonhar and Rozdolne bridge strikes and the SOF strike on Russian repair equipment.",
  "CS-02":"From the weekly UGV coverage — the 50,000-mission milestone, the 15-hour 56 km evacuation, and the shift of Pokrovsk resupply to unmanned.",
  "CS-03":"From the weekly Sudan reporting — the RSF drone siege of El Obeid, the power-substation strikes and the cascading service outages across North Kordofan."
};
const APP_CSS = {
  "CS-01":{ verdict:"Use it, with changes",
    lead:"The engineer lesson runs both ways: adversary repair nodes are priority targets, and your own repair effort must present no persistent signature. The requirement is a 90-minute repair discipline plus repair-node targeting.",
    div:{ d:"Impose a repair discipline: a decoy repair effort elsewhere, a 90-minute maximum work window, and no persistent signature.", o:"Engr Comd, on Div G3 advice.", a:"Writes repair SOPs requiring (a) a decoy repair at a different location, (b) a 90-minute work window before dispersal, (c) no staging area or parked equipment detectable over hours.", t:"Disperse the repair team at 90 minutes regardless of completion; treat a contested repair site as struck within 24 hours of work beginning.", x:"Time-boxing and decoys slow repair completion vs a faster but detectable persistent effort.", m:"Repair completed inside the window; no persistent signature detectable; team dispersed before 120 minutes." },
    bde:{ d:"Treat adversary repair nodes as priority targets and manage Signals co-location risk at contested sites.", o:"Engr targeting cell + Signals.", a:"Adds a strike sequence — strike, confirm the repair order, strike the repair assets before arrival; Signals elements at a contested bridge plan for inherited targeting risk.", t:"On confirmation of an adversary repair order, strike the repair assets before they reach the site.", x:"Pre-positioning the follow-on ties up ISR and fires vs re-striking the bridge repeatedly.", m:"Repair assets struck before restoring a node; no Signals element lost to inherited targeting." } },
  "CS-02":{ verdict:"Use it, with changes",
    lead:"A large UGV fleet moves logistics and CASEVAC that manned vehicles cannot, but it introduces a Starlink dependency and a new terrain problem. Signals must design a degraded-mode C2 and Engineers must add UGV passability to route recce.",
    div:{ d:"Treat the UGV command link as a critical protected circuit and design a non-Starlink C2 architecture.", o:"Sig Comd, on Div G6 advice.", a:"Produces a degraded-mode UGV C2 SOP — RF mesh, fibre-optic tether for short-range UGVs, or pre-programmed route autonomy — for when Starlink is denied or jammed.", t:"Switch to degraded-mode C2 the moment Starlink is denied or jammed on a resupply route.", x:"Redundant C2 costs equipment, bandwidth and training vs a simpler Starlink-only link.", m:"Logistics and CASEVAC continuity under a Starlink-denied inject." },
    bde:{ d:"Add a UGV passability assessment to all route reconnaissance for contested logistics arteries.", o:"Engr recce, on Bde S3 advice.", a:"Includes gradient, width and obstacle tests for UGVs in route recce — routes usable by manned vehicles may fail for UGVs.", t:"Certify a contested logistics route only after a UGV passability assessment, not a manned-vehicle one.", x:"The extra assessment slows route clearance vs assuming manned passability transfers.", m:"Contested routes certified UGV-passable; no UGV mission failed on un-assessed terrain." } },
  "CS-03":{ verdict:"A warning, not a model",
    lead:"El Obeid shows a besieging force can win by collapsing infrastructure rather than assaulting. There is nothing to copy — the requirement is an infrastructure vulnerability audit and hardened, power-independent Signals.",
    div:{ d:"Run an infrastructure vulnerability audit as the first action supporting a defended position.", o:"Engr Comd, on Div G3 advice.", a:"Identifies the three nodes (power, water, communications) whose loss most degrades viability and hardens each with physical protection plus an operational workaround (generator power, water storage, alternate routes).", t:"Commit hardening to a node when its single-strike loss would cascade into other services.", x:"Hardening and workarounds cost engineer effort and materiel vs accepting the infrastructure risk.", m:"No single strike cascades power into water/comms; each critical node has a workaround." },
    bde:{ d:"Give any Signals node dependent on civilian power standalone generation for 72 hours.", o:"Sig Comd.", a:"Designs Signals installations against the El Obeid failure chain — power failure to communications failure to C2 degradation — with 72-hour independent power.", t:"Bring standalone generation online before relying on any civilian power source in a contested area.", x:"Independent 72-hour power costs fuel, generators and lift vs a lighter mains-dependent posture.", m:"Signals C2 holds for 72 hours through a simulated civilian-power failure." } }
};
const ICT_CSS = {
  "CS-01":{ fmt:"Engineer field serial · Engr troop + Signals det · half-day · bridge/repair site",
    set:"A contested crossing needs field repair while the adversary hunts repair signatures and pre-positions a follow-on strike.",
    run:["Complete the repair to standard in under 90 minutes.","Disperse all equipment before 120 minutes and designate a decoy repair site elsewhere.","Plan the offensive mirror: strike, confirm the adversary repair order, strike the repair assets before arrival."],
    dec:"Do you accept a lower repair standard to beat the 90-minute window, or risk the signature?",
    twist:"Controller detects your staging area at 70 minutes — disperse now or finish?",
    std:"Repair to standard inside 90 minutes; no persistent signature; decoy site designated; repair-node strike sequence briefed." },
  "CS-02":{ fmt:"Signals + Engineer serial · Sig det + Engr recce · 2 hrs · route + C2 overlay",
    set:"Your formation depends on a UGV fleet for resupply and CASEVAC over a contested artery served by Starlink.",
    run:["Map the UGV C2 network and identify the single communications dependency.","Model Starlink denial and produce a degraded-mode UGV C2 SOP (RF mesh / fibre tether / route autonomy).","Run a UGV passability assessment on the artery — gradient, width, obstacles — and re-route as needed."],
    dec:"If Starlink drops mid-mission, does the fleet hold, revert to autonomy, or fall back to manned risk?",
    twist:"Controller jams Starlink during a live CASEVAC run — execute the degraded-mode SOP.",
    std:"C2 dependency identified; degraded-mode SOP produced; route certified UGV-passable." },
  "CS-03":{ fmt:"Infrastructure audit serial · Engr + Sig planners · 2 hrs · node dependency map",
    set:"Your formation supports a defended town whose garrison depends on civilian power, water and communications under drone siege.",
    run:["Map the infrastructure dependencies and identify the three nodes whose loss most degrades viability.","For each, identify the single strike that severs it and design the mitigation (hardening + workaround).","Give the Signals node 72-hour standalone power and test the power → comms → C2 failure chain."],
    dec:"Which single node do you harden first, and does Signals survive a 72-hour power failure?",
    twist:"Controller strikes the substation on day one — does the C2 chain hold on the mitigations?",
    std:"Three critical nodes identified with mitigations; Signals holds 72 hours power-independent; audit produced as a checklist." }
};
const LEARN_CSS = {
  "CS-01":{ topic:"Repair interdiction", status:"High utility", why:"A bridge the adversary cannot repair is worth far more than one repeatedly re-struck — and your own repair signature is a target.", worked:"Ukraine destroyed Russian repair equipment before it could restore a bridge, leaving Crimea's arteries non-operational.", next:"Impose a 90-minute repair discipline with decoys and rehearse repair-node targeting." },
  "CS-02":{ topic:"UGV logistics resilience", status:"Action now", why:"The UGV fleet that saves lives depends on one C2 link and a new passability standard — both are single points of failure if unplanned.", worked:"50,000+ UGV missions moved thousands of tonnes and evacuated 600+ wounded where manned vehicles could not go.", next:"Produce a non-Starlink UGV C2 SOP and add UGV passability to route reconnaissance." },
  "CS-03":{ topic:"Infrastructure siege defeat", status:"Action now", why:"A drone siege can degrade a garrison by collapsing civilian infrastructure without a ground assault — the audit and 72-hour power are the defence.", worked:"El Obeid's power-then-water-then-comms cascade shows exactly the failure chain to design against.", next:"Make an infrastructure vulnerability audit and 72-hour standalone Signals power a pre-deployment standard." }
};
const PACK_CSS = {
  kicker:"June 2026 · Combat Support", titleLine:"for combat-support formations",
  changed:"June turned combat support into a signature-and-dependency fight. Ukraine made Crimea's arteries non-operational not by re-striking bridges but by killing the repair effort — strike, confirm the repair order, destroy the repair assets before arrival — while its own repairs stayed under a 90-minute signature. Its 50,000-mission UGV fleet moved thousands of tonnes and evacuated the unreachable, but exposed two new single points of failure: the Starlink C2 link and UGV-specific route passability. And in Sudan the RSF siege of El Obeid showed a garrison can be collapsed through its civilian infrastructure — power, then water, then communications — without a ground assault. For Engineers and Signals: hide your repair signature, harden the infrastructure chain, and give C2 72 hours of its own power.",
  stats:[
    {n:3, k:"Priority learnings", s:"For this month"},
    {n:3, k:"Hot contests", s:"Under adaptation watch"},
    {n:3, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat the repair effort, the UGV C2 link and the civilian infrastructure chain as the decisive terrain. Time-box and decoy your repairs, build a degraded-mode UGV C2, and audit the power → water → comms cascade before occupation.",
  divPriorities:[
    "Impose a 90-minute repair discipline with a decoy site and no persistent signature.",
    "Produce a non-Starlink degraded-mode UGV C2 SOP and add UGV passability to route recce.",
    "Run an infrastructure vulnerability audit and give Signals 72-hour standalone power."
  ],
  brigadeBluf:"This month: strike the repair, not just the bridge; hide your own repair signature inside 90 minutes; plan for Starlink to drop mid-mission; and assume the substation is struck on day one.",
  implications:[
    {ech:"Division HQ", t:"Make repair-node targeting, UGV C2 resilience and infrastructure audits explicit planning requirements."},
    {ech:"Engineer", t:"Time-box and decoy repairs, add UGV passability to route recce, and harden the power/water/comms chain."},
    {ech:"Signals", t:"Design a degraded-mode UGV C2 and 72-hour power-independent installations against the El Obeid failure chain."}
  ],
  worked:[
    "Killing the repair effort so a struck bridge stayed down.",
    "A UGV fleet that moved logistics and CASEVAC manned vehicles could not.",
    "Multi-front resilience that kept a besieged force fighting."
  ],
  failed:[
    "Persistent, detectable repair signatures at contested crossings.",
    "A single-link (Starlink) UGV C2 with no degraded mode.",
    "Civilian-power dependence that let one strike cascade into a C2 collapse."
  ],
  testICT:[
    "Repair to standard inside 90 minutes with a decoy site, then plan the repair-node strike.",
    "Map UGV C2, model Starlink denial and produce the degraded-mode SOP.",
    "Audit an infrastructure dependency chain and prove 72-hour Signals power."
  ],
  sopReview:[
    "Repair-site dwell time, decoys and signature discipline.",
    "UGV command-link redundancy and route passability standards.",
    "Standalone power duration for Signals nodes in contested areas."
  ],
  contests:[
    {cap:"Repair interdiction", stage:"hot",
     what:"Striking a crossing, confirming the adversary's repair order, then destroying the repair assets before arrival — denying repair rather than re-striking the span.",
     counter:"Pontoon bridges and coastal-road diversions — both subsequently targeted; predictable repair deployment aided the follow-on.",
     tempo:"Counters displaced traffic but did not restore the arteries within June.",
     diffusion:"Ukraine (Crimea approaches); applies to any contested crossing and to protecting one's own repair effort.",
     supersession:"", id:"CS-01"},
    {cap:"UGV logistics at scale", stage:"emerging",
     what:"A fleet of tens of thousands of logistics/CASEVAC UGVs moving supply and casualties where manned vehicles cannot survive, dependent on a Starlink C2 link and UGV-specific route passability.",
     counter:"FPV strikes on UGVs, answered with armoured variants and route diversification.",
     tempo:"Adoption is accelerating faster than the C2-resilience and passability doctrine to support it.",
     diffusion:"Ukraine (90% of Pokrovsk resupply unmanned); the emerging model for contested last-mile logistics.",
     supersession:"Manned last-mile resupply → unmanned UGV relay (in the approach zone)", id:"CS-02"},
    {cap:"Infrastructure drone siege", stage:"hot",
     what:"Collapsing a garrison's viability by striking civilian power, fuel and water so services cascade — degrading the defender without a ground assault.",
     counter:"Active interception (limited effect) and multi-front operations to demonstrate resilience.",
     tempo:"The besieging force holds the initiative where the defender has not hardened the infrastructure chain.",
     diffusion:"Sudan (El Obeid); a force-protection threat for any position dependent on civilian infrastructure.",
     supersession:"", id:"CS-03"}
  ],
  priorities:["CS-01","CS-02","CS-03"]
};
const PLANNING_CSS = [
  {b:"Time-box and decoy repairs", p:"Require every field repair to run under a 90-minute work window with a decoy repair effort at a different location and no staging area or parked equipment detectable over hours. Treat a contested repair site as struck within 24 hours of work beginning."},
  {b:"Target the adversary's repair", p:"Make adversary repair nodes priority targets: strike, confirm the repair order, then strike the repair assets before arrival. A bridge the adversary cannot repair is worth far more than one repeatedly re-struck."},
  {b:"Design a degraded-mode UGV C2", p:"Treat the UGV command link as a critical protected circuit. Produce a non-Starlink C2 SOP — RF mesh, fibre-optic tether for short-range UGVs, or pre-programmed route autonomy — so logistics and CASEVAC do not fail together when the link is denied."},
  {b:"Add UGV passability to route recce", p:"Include gradient, width and obstacle tests for UGVs in all reconnaissance of contested logistics arteries. Routes passable by manned vehicles may fail for UGVs; certify the route for the platform that will actually use it."},
  {b:"Audit the infrastructure chain", p:"As the first action supporting a defended position, identify the three nodes (power, water, communications) whose loss most degrades viability, and harden each with physical protection plus an operational workaround — generator power, water storage, alternate routes."},
  {b:"Guarantee 72-hour independent power", p:"Any Signals node dependent on civilian power must hold standalone generation for at least 72 hours. Design against the power → communications → C2 failure chain as the baseline, not a contingency."}
];
const KEY_JUDGEMENTS_CSS = [
  "Deny the <em>repair</em>, not just the span — an unrepairable bridge is worth many re-struck ones.",
  "Your own repair effort is a <em>signature</em>; work in 90 minutes and disperse.",
  "A UGV fleet fails at its <em>weakest link</em> — plan for Starlink to drop.",
  "A drone siege attacks <em>infrastructure</em>, not walls — audit the power → water → comms cascade."
];
const BLUF_CSS = "In June combat support was decided by <b>signature and dependency</b>. Ukraine made Crimea's arteries non-operational by killing the <b>repair effort</b>, not the span, while hiding its own repairs inside a <b>90-minute</b> window. Its 50,000-mission <b>UGV fleet</b> saved lives but exposed a <b>Starlink</b> C2 link and a UGV passability gap. And Sudan's El Obeid siege showed a garrison can be collapsed through its <b>civilian infrastructure</b>. Hide your repair signature, build a degraded-mode UGV C2, and give Signals <b>72 hours</b> of its own power.";
const SUGGESTIONS_CSS = ["What changed for combat support this month?","How do we defeat repair interdiction?","How do we make UGV logistics resilient?","What to rehearse in ICT","Lessons for Signals","Give me the bottom line"];

/* ===================== EXPEDITIONARY (Commandos · Guards) ===================== */
const FORMATIONS_EXP = {"CMDO":{c:"f3",n:"Commandos"},"GDS":{c:"f9",n:"Guards"}};
const _FMK_EXP = {"CMDO":["commando","commandos","cmdo","raid","special operations","sof","fpv","hunter-killer","small unit","section"],"GDS":["guards","guard","gds","observer","monitoring","ceasefire","peacekeeping","unifil","aot","encroachment","compliance"]};

const SERIALS_EXP = [
  { id:"EX-01", kind:"lesson", title:"O'Smach — three simultaneous sub-threshold actions",
    conflict:"THA-KHM", theatre:"Thailand–Cambodia", verdict:"threat", verdictLabel:"Threat pattern",
    formations:["GDS"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"On 17 June, Thai forces conducted three simultaneous actions: (1) planted Thai flags inside Cambodian territory at Thmar Da checkpoint, Pursat; (2) set fire to a warehouse at the Royal O'Smach Hotel and Resort, Oddar Meanchey; (3) built concrete fences at Ta Krabey Temple, Banteay Ampil. Each was individually below the threshold of a military response. Conducted together they compressed Cambodia's options — responding to any one looked disproportionate, and a combined response risked escalation. Thailand reiterated the area was under Thai control per the December 2025 ceasefire statement."},
      {l:"Assessment", t:"Public statements framed each act as routine, so the coordinated nature only appears when the three are read together — which a sequential, incident-by-incident monitoring posture will miss."},
      {l:"Outcome", t:"Thailand incremental success — three more sub-threshold facts on the ground without escalation; Cambodia failed to alter the trajectory. A coordinated sub-threshold advance our observers must detect and link."}
    ],
    sources:[
      {u:"https://www.akp.gov.kh/post/detail/373611",n:"Cambodian MFA / AKP — three O'Smach actions (19 Jun)"},
      {u:"https://thailand.prd.go.th/en/content/category/detail/id/52/iid/473371",n:"Royal Thai Army — area under Thai control (Feb 2026)"}
    ] },
  { id:"EX-02", kind:"lesson", title:"Observer baseline creep and the dynamic ceasefire line",
    conflict:"ISR-LBN", theatre:"Israel–Lebanon", verdict:"mixed", verdictLabel:"Partial success",
    formations:["GDS"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"The 17 April ceasefire line sat at 10 km; by 12 June the IDF was at Nabatieh, 20 km inside Lebanon, and the Lebanese Army had withdrawn from Kfar Tebnit. A new ceasefire was announced 1 June; the IDF struck Dahiyeh on 6 June after Hezbollah rockets — converting the line into a conditional baseline. By 22 June, Jerusalem–Beirut talks were in their 5th round with the IDF holding the expanded zone. The line moved 10 km north in under two months."},
      {l:"Assessment", t:"Public ceasefire statements lagged the ground reality — announcements did not reflect the moving baseline, which is the core observer challenge."},
      {l:"Outcome", t:"IDF success on the ground — zone expanded and held; Hezbollah degraded (2,500+ killed since March 2026). For observers, a baseline-creep pattern to instrument and report."}
    ],
    sources:[
      {u:"https://www.timesofisrael.com/idf-says-over-70-hezbollah-sites-hit-as-troops-advance-near-south-lebanons-nabatieh/",n:"Times of Israel — IDF at Nabatieh (12 Jun)"},
      {u:"https://www.washingtontimes.com/news/2026/jun/1/trump-keeps-fragile-iran-talks-intact-urging-restraint-netanyahu/",n:"Washington Times — new ceasefire announced (1 Jun)"},
      {u:"https://www.washingtontimes.com/news/2026/jun/19/israel-hezbollah-agree-renewed-ceasefire-strikes/",n:"Washington Times — renewed ceasefire, zone held (19 Jun)"}
    ] },
  { id:"EX-03", kind:"lesson", title:"Hezbollah drone employment against troops on the approach",
    conflict:"ISR-LBN", theatre:"Israel–Lebanon", verdict:"threat", verdictLabel:"Threat pattern",
    formations:["CMDO"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"Through June Hezbollah kept drone pressure on IDF troops: swarm drones at Kfartebnit slowed the advance and diverted air-defence; one-way attack drones struck tanks on the Ali al-Taher hilltop approach on 19 June — a predictable route exploited; five IDF soldiers were wounded in a single strike on 17 June near Nabatieh. Attacks coincided with IDF position announcements, indicating real-time ISR feeding the targeting cycle. Since March 2026, 30 IDF soldiers and one contractor have been killed in southern Lebanon."},
      {l:"Countermeasure", t:"The IDF used attack helicopters for counter-drone support, explosive drones against tunnel exit points, and continuous airstrikes to attrite drone stockpiles, and enforced a retaliatory framework (a Hezbollah rocket on Israeli communities = a Dahiyeh strike, executed 6 June)."},
      {l:"Outcome", t:"Hezbollah partially successful — it slowed the advance and inflicted casualties, though the IDF advanced at higher cost. A drone-ambush threat every assault plan must assume."}
    ],
    sources:[
      {u:"https://ground.news/article/israel-strikes-dozens-of-hezbollah-targets-in-lebanon-as-trump-and-iran-inch-toward-long-awaited-pea",n:"Ground News / ToI — swarm drones at Kfartebnit (13 Jun)"},
      {u:"https://www.timesofisrael.com/liveblog_entry/idf-dozens-of-hezbollah-operatives-killed-over-80-targets-struck-in-lebanon-last-night/",n:"Times of Israel — attack drones on the approach (19 Jun)"},
      {u:"https://www.washingtontimes.com/news/2026/jun/1/israeli-pm-benjamin-netanyahu-orders-strikes-hezbollah-beirut/",n:"Washington Times — retaliatory framework (31 May)"}
    ] },
  { id:"EX-04", kind:"lesson", title:"Force protection for a besieged position under drone siege",
    conflict:"SDN", theatre:"Sudan", verdict:"threat", verdictLabel:"Threat pattern",
    formations:["CMDO","GDS"], multi:false, image:"", imageCredit:"",
    blocks:[
      {l:"Action", t:"The RSF sustained a drone siege of El Obeid through June — power substation, water services and transport infrastructure struck. The UN Security Council warned of mass-atrocity risk. Both sides depend entirely on foreign drone supply (UAE to RSF; Turkey/Russia to SAF). The SAF 5th Infantry Division garrison's operational capability was degraded, though the SAF maintained operations in Blue Nile simultaneously, showing multi-front resilience."},
      {l:"Countermeasure", t:"The SAF's power-independent operations and multi-front posture kept it fighting; international observer presence did not deter the strikes."},
      {l:"Outcome", t:"RSF partial success — El Obeid besieged but not fallen by the end of June. A force-protection standard for any position under infrastructure drone targeting."}
    ],
    sources:[
      {u:"https://www.aljazeera.com/news/2026/6/28/digging-with-a-needle-generals-stall-peace-as-sudans-el-obeid-burns",n:"Al Jazeera — sustained siege of El Obeid (28 Jun)"},
      {u:"https://www.aljazeera.com/news/2026/6/18/dozens-of-countries-warn-of-atrocities-amid-escalation-in-sudans-el-obeid",n:"Al Jazeera / UN News — mass-atrocity warning (20 Jun)"}
    ] }
];
const SUMMARY_EXP = {
  "EX-01":"Detect and link simultaneous, individually-minor actions as one coordinated sub-threshold advance — the observation plan must cover all categories at once and daily reports must make the cumulative pattern explicit.",
  "EX-02":"Instrument a ceasefire line against creep: record the agreed line, the forward-most adversary position and the gap, and design observer reports for real-time escalation within hours.",
  "EX-03":"Assume a predictable approach to an elevated objective is a pre-positioned drone ambush: assess the drone threat corridor, plan suppression for the last 500 m, and cover tunnel exits with drone overwatch.",
  "EX-04":"For any position under infrastructure drone targeting, make 72-hour power-independent operations the baseline and hold force protection — dispersion, cover from air, non-predictable routing — regardless of protected status."
};
const SIGNAL_EXP = {
  "EX-01":"From the weekly Thailand–Cambodia coverage — the 17 June O'Smach actions and the disputed-frontier holding under the December 2025 ceasefire statement.",
  "EX-02":"From the weekly southern-Lebanon reporting — the yellow-line creep to Nabatieh, the conditional-ceasefire conversion after the 6 June Dahiyeh strike, and the 5th round of talks.",
  "EX-03":"From the weekly southern-Lebanon reporting — Hezbollah swarm and one-way attack drones on IDF approaches, and the ISR-cued strikes timed to position announcements.",
  "EX-04":"From the weekly Sudan reporting — the RSF drone siege of El Obeid and the UN Security Council's mass-atrocity warning."
};
const APP_EXP = {
  "EX-01":{ verdict:"A warning, not a model",
    lead:"Three simultaneous below-threshold actions defeated a sequential monitoring posture. The requirement is simultaneous coverage of all sub-threshold categories and a daily report that assesses the cumulative pattern, not isolated incidents.",
    div:{ d:"Provide simultaneous, not sequential, coverage of all sub-threshold action categories across the contested zone.", o:"Guards Mission HQ, on the patrol/observation plan.", a:"Redesigns the observation plan so multiple teams cover flag-planting, construction and arson-type actions at once — three simultaneous actions at three locations exceed a single team's capacity.", t:"Surge coverage when indicators cluster; do not let one incident pull all observation onto it.", x:"Simultaneous coverage spreads limited observers thinner vs concentrating on the most visible incident.", m:"All simultaneous events detected and reported in time; no category left uncovered." },
    bde:{ d:"Make cumulative pattern assessment mandatory in daily observation reports.", o:"Guards observer sections.", a:"Every daily report links same-day actions across the zone into a cumulative pattern assessment and produces a higher-HQ trend recommendation.", t:"Raise a coordinated-advance assessment when ≥2 sub-threshold categories occur the same day in the same contested zone.", x:"Pattern analysis adds reporting burden vs a faster incident-only log.", m:"Daily report links the events and drives a higher-HQ trend recommendation." } },
  "EX-02":{ verdict:"Use it, with changes",
    lead:"The IDF advance shows a ceasefire line is a moving baseline unless it is instrumented. For Guards observers the requirement is a coordinate-defined gap metric and a report format built for real-time escalation.",
    div:{ d:"Define at mission start the agreed ceasefire line in coordinates, the forward-most confirmed adversary position, and the gap between them.", o:"Guards Mission HQ.", a:"Establishes the three baseline figures and treats a growing gap as the creep indicator — the ceasefire is failing regardless of public statements.", t:"Raise a ceasefire-failing assessment when the gap between the agreed line and the forward adversary position grows beyond X over Y days.", x:"Maintaining a precise coordinate baseline costs survey and reporting effort vs a looser narrative picture.", m:"Gap tracked over time; creep flagged before public statements caught up." },
    bde:{ d:"Design observer reports for real-time consumption by higher headquarters.", o:"Guards observer sections.", a:"Standard daily report — current positions vs the agreed line, a SALUTE incident log, and gap analysis against the previous period — with an escalation-trigger report producible within 2 hours of a significant incident.", t:"Produce the escalation-trigger report within 2 hours of a significant incident.", x:"A real-time report format demands discipline and comms bandwidth vs a slower consolidated summary.", m:"Escalation-trigger report produced within 2 hours; gap analysis included every period." } },
  "EX-03":{ verdict:"A warning, not a model",
    lead:"Hezbollah turned predictable approaches into drone ambushes and read IDF position announcements in real time. For Commandos the requirement is a mandatory drone-threat-corridor assessment and tunnel-exit overwatch.",
    div:{ d:"Make a drone threat assessment mandatory for any approach to an elevated objective on a predictable route.", o:"Commando Mission HQ / assault planners.", a:"Assesses (a) approach routes visible from the objective, (b) adversary drone ISR on the approach, (c) a jamming/suppression plan for the last 500 m; adds an acoustic drone-alert drill to approach SOPs.", t:"Do not commit on a predictable elevated approach without a corridor assessment and a last-500 m suppression plan.", x:"Corridor assessment and alternate approaches cost planning time and may lengthen the route vs a direct predictable approach.", m:"Every elevated-objective plan carries a drone-corridor assessment and a suppression plan." },
    bde:{ d:"Place drone overwatch on all known or suspected tunnel exit points before entry.", o:"Commando assault sections.", a:"Covers tunnel exits with explosive-drone overwatch so an adversary emerging cannot reinforce or extract — a direct adaptation of the IDF June tunnel tactic.", t:"Establish exit overwatch before any subterranean entry.", x:"Dedicating drones to exit overwatch reduces the ISR/strike pool for the main effort.", m:"No adversary reinforced or extracted through an uncovered tunnel exit." } },
  "EX-04":{ verdict:"A warning, not a model",
    lead:"El Obeid is the force-protection case for a besieged position: infrastructure targeting plus continued strikes despite observers. For Commandos and Guards the standard is power-independent operations and air-threat force protection irrespective of protected status.",
    div:{ d:"Make power-independent operations mandatory for any position subject to infrastructure drone targeting.", o:"Commando Mission HQ.", a:"Requires communications, C2 and medical capability to operate a minimum 72 hours without external power — the baseline, not a contingency.", t:"Stand up 72-hour independent power and stores before occupying a position under infrastructure targeting.", x:"Self-sufficiency costs fuel, stores and lift vs a lighter posture dependent on local infrastructure.", m:"C2, comms and medical hold 72 hours without external power." },
    bde:{ d:"Maintain force-protection measures irrespective of formally protected status.", o:"Guards observer elements.", a:"Keeps dispersion, covered positioning and non-predictable routing in force — international observer presence did not deter drone strikes.", t:"Apply full force protection whenever in a contested-airspace environment, protected status or not.", x:"Dispersion and cover reduce observation coverage and comfort vs a concentrated static posture.", m:"Observer elements dispersed, covered and non-predictable; no reliance on protected status." } }
};
const ICT_EXP = {
  "EX-01":{ fmt:"Observer exercise · Guards observer sections + Mission HQ · half-day · contested-zone map",
    set:"Three simultaneous sub-threshold events occur the same day at three different points in a contested border zone.",
    run:["Cover all three categories simultaneously and detect and report each in time.","Link the three in a single daily cumulative-pattern assessment.","Produce a higher-headquarters trend recommendation from the pattern."],
    dec:"Do you commit observers to the most visible incident, or hold simultaneous coverage of all three?",
    twist:"Controller adds a fourth, more provocative action to pull coverage — do you chase it?",
    std:"All three detected and reported in time; daily report links them; a higher-HQ trend recommendation produced." },
  "EX-02":{ fmt:"Monitoring serial · Guards observer sections + Mission HQ · half-day · line/position overlay",
    set:"You monitor a ceasefire line while the adversary advances in provocation-pegged steps and public statements lag the ground truth.",
    run:["Define the agreed line, the forward-most adversary position and the gap in coordinates at mission start.","Run a 24-hour cycle producing standard daily reports: positions vs line, SALUTE log, gap analysis.","On a significant incident, produce an escalation-trigger report within 2 hours."],
    dec:"At what gap do you assess the ceasefire failing, and do you report against the ground truth or the public statement?",
    twist:"Controller issues a public 'renewed ceasefire' while the gap keeps growing — what does your report say?",
    std:"Coordinate baseline defined; gap tracked each period; escalation-trigger report produced inside 2 hours." },
  "EX-03":{ fmt:"Assault-planning serial · Commando O-group + assault sections · half-day · objective approach",
    set:"You plan an assault on an elevated objective reachable by a predictable route the adversary can observe.",
    run:["Map the drone threat corridor — where a waiting drone has observation of the approach.","Plan the jamming/intercept measure and a last-500 m suppression, with an acoustic drone-alert drill.","Cover known and suspected tunnel exits with drone overwatch before entry."],
    dec:"Do you take the fast predictable approach with suppression, or a slower approach outside the corridor?",
    twist:"Controller reveals your position was just announced or leaked — the adversary has real-time ISR.",
    std:"Threat corridor mapped; last-500 m suppression and an alternate approach planned; tunnel exits covered before entry." },
  "EX-04":{ fmt:"Force-protection review · Commando + Guards planners · 2 hrs · position/sentry SOP",
    set:"You occupy or observe a position in a contested-airspace environment under sustained infrastructure drone targeting.",
    run:["Confirm 72-hour power-independent operations for C2, comms and medical.","Confirm dispersion and cover-from-air in the occupied-position SOP.","Confirm drone early warning — acoustic, visual, EW — in the sentry-duty SOP."],
    dec:"Do you rely on protected status and local infrastructure, or on self-sufficiency and dispersion?",
    twist:"Controller strikes the position while UN observers are present — does anything in your posture change? It should not.",
    std:"72-hour power-independent ops proven; dispersion and cover-from-air in force; drone early warning in the sentry SOP." }
};
const LEARN_EXP = {
  "EX-01":{ topic:"Sub-threshold pattern detection", status:"High utility", why:"A coordinated sub-threshold advance is invisible to a sequential, incident-by-incident monitoring posture — only cumulative pattern assessment reveals it.", worked:"Thailand added three facts on the ground on one day by keeping each action below the response threshold.", next:"Redesign observation for simultaneous coverage and make cumulative pattern assessment mandatory." },
  "EX-02":{ topic:"Baseline-creep monitoring", status:"High utility", why:"A ceasefire line moves invisibly unless the gap to the adversary's forward position is measured — public statements will lag the truth.", worked:"The IDF moved the line 10 km in under two months while ceasefires were repeatedly announced.", next:"Instrument the line with a coordinate gap metric and a 2-hour escalation-trigger report." },
  "EX-03":{ topic:"Drone-ambush defeat", status:"Action now", why:"A predictable approach to high ground is now a pre-positioned drone ambush, especially when the adversary has real-time ISR on your movements.", worked:"Hezbollah slowed the IDF and inflicted casualties by striking predictable approaches and tunnel exits.", next:"Make a drone-threat-corridor assessment and tunnel-exit overwatch mandatory in assault SOPs." },
  "EX-04":{ topic:"Besieged-position force protection", status:"Action now", why:"A position under infrastructure drone targeting survives on self-sufficiency and dispersion — protected status deters nothing.", worked:"The SAF stayed in the fight through power-independent operations and a multi-front posture.", next:"Set 72-hour power-independent operations and air-threat force protection as the standard for Commandos and Guards." }
};
const PACK_EXP = {
  kicker:"June 2026 · Expeditionary", titleLine:"for expeditionary formations",
  changed:"June was a month of sub-threshold advance and drone-saturated approaches. At O'Smach, Thailand added three facts on the ground in one day by keeping each action below the response threshold — a coordinated advance only visible when the three are read together. In southern Lebanon the IDF moved a ceasefire line 10 km in under two months while ceasefires were repeatedly announced, and Hezbollah turned predictable approaches and tunnel exits into drone ambushes, cued by real-time ISR on IDF position announcements. In Sudan, the RSF siege of El Obeid showed a position can be degraded through its infrastructure while observers look on. For Commandos and Guards: link the pattern, instrument the line, assume the approach is watched, and make 72-hour self-sufficiency the standard.",
  stats:[
    {n:4, k:"Priority learnings", s:"For this month"},
    {n:3, k:"Hot contests", s:"Under adaptation watch"},
    {n:3, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat the contested zone, the ceasefire line and the approach as instrumented problems. Cover sub-threshold categories simultaneously, measure the gap, assess the drone corridor before you move, and carry your own power and cover.",
  divPriorities:[
    "Cover all sub-threshold categories simultaneously and make cumulative pattern assessment mandatory.",
    "Instrument the ceasefire line with a coordinate gap metric and a 2-hour escalation report.",
    "Make a drone-threat-corridor assessment and 72-hour self-sufficiency standard."
  ],
  brigadeBluf:"This month: read three small actions as one advance, report against the ground truth not the press release, treat every predictable approach as a drone ambush, and never rely on protected status for safety.",
  implications:[
    {ech:"Mission HQ", t:"Plan observation for simultaneous coverage, instrument the line, and require drone-corridor and self-sufficiency assessments."},
    {ech:"Commandos", t:"Assess the drone threat corridor and suppress the last 500 m; cover tunnel exits; hold 72-hour power-independent operations."},
    {ech:"Guards", t:"Link same-day sub-threshold actions into a pattern, measure ceasefire-line creep, and keep force protection regardless of protected status."}
  ],
  worked:[
    "Coordinated sub-threshold actions that advanced a claim without triggering a response.",
    "A moving ceasefire line held under repeated public ceasefires.",
    "Drone ambushes on predictable approaches, cued by real-time ISR."
  ],
  failed:[
    "Sequential, incident-by-incident monitoring that misses a coordinated advance.",
    "Trusting public ceasefire statements over a measured line-to-position gap.",
    "Predictable approaches and infrastructure dependence in a drone-saturated environment."
  ],
  testICT:[
    "Run an observer serial linking three simultaneous sub-threshold events into a trend recommendation.",
    "Run a 24-hour monitoring cycle producing a 2-hour escalation-trigger report.",
    "Assess a drone threat corridor and confirm 72-hour power-independent operations."
  ],
  sopReview:[
    "Whether observation covers sub-threshold categories simultaneously and reports cumulative patterns.",
    "Whether the ceasefire line is instrumented as a coordinate gap metric.",
    "Whether assault SOPs carry a drone-corridor assessment and positions carry 72-hour power."
  ],
  contests:[
    {cap:"Coordinated sub-threshold advance", stage:"hot",
     what:"Multiple simultaneous, individually-deniable actions in a contested zone that together advance a territorial claim without crossing the threshold of a military response.",
     counter:"None effective — a sequential monitoring posture responded to each act in isolation and missed the pattern.",
     tempo:"The method works until the defender detects and links the actions as one advance.",
     diffusion:"Thailand–Cambodia (O'Smach, 17 June); a repeatable grey-zone technique.",
     supersession:"", id:"EX-01"},
    {cap:"Drone ambush on the approach", stage:"hot",
     what:"Pre-positioned one-way and swarm drones striking predictable approaches to elevated objectives and tunnel exits, cued by real-time ISR on the moving force.",
     counter:"Attack-helicopter counter-drone support, explosive drones on tunnel exits, and airstrikes to attrite stockpiles — costly and only partial.",
     tempo:"Persistent where approaches stay predictable and movement is telegraphed.",
     diffusion:"Israel–Lebanon; a threat to any assault on canalised high ground.",
     supersession:"", id:"EX-03"},
    {cap:"Infrastructure siege of a position", stage:"hot",
     what:"Degrading a garrison by striking the civilian power, fuel and water it depends on, sustained despite international observers.",
     counter:"Power-independent operations and a multi-front posture kept the garrison in the fight.",
     tempo:"The besieging force holds the initiative where the defender is not self-sufficient.",
     diffusion:"Sudan (El Obeid); the force-protection case for any besieged position.",
     supersession:"", id:"EX-04"}
  ],
  priorities:["EX-03","EX-04","EX-01"]
};
const PLANNING_EXP = [
  {b:"Cover sub-threshold categories at once", p:"Design the observation plan so multiple teams cover the categories of sub-threshold action — flag-planting, construction, arson, patrolling — simultaneously. Three simultaneous actions at three locations exceed a single team's capacity, so plan for concurrency, not sequence."},
  {b:"Make pattern assessment mandatory", p:"Require every daily observation report to link same-day actions across the zone into a cumulative pattern assessment and produce a higher-headquarters trend recommendation. A coordinated advance is only visible in aggregate."},
  {b:"Instrument the ceasefire line", p:"Define at mission start the agreed line in coordinates, the forward-most confirmed adversary position, and the gap between them. Treat a growing gap as the baseline-creep indicator and report against the ground truth, not the public statement."},
  {b:"Build a real-time report format", p:"Standardise a daily report — positions vs the agreed line, a SALUTE incident log, gap analysis against the previous period — and make an escalation-trigger report producible within two hours of a significant incident."},
  {b:"Assess the drone threat corridor", p:"For any approach to an elevated objective, assess the corridor within which a waiting drone observes the approach, plan a jamming/intercept measure and a last-500 m suppression, provide an alternative approach, and cover tunnel exits with overwatch before entry."},
  {b:"Make positions self-sufficient", p:"For any position subject to infrastructure drone targeting, require communications, C2 and medical to operate a minimum 72 hours without external power, and hold force protection — dispersion, cover from air, non-predictable routing — regardless of any protected status."}
];
const KEY_JUDGEMENTS_EXP = [
  "Three small actions on one day are <em>one advance</em> — link them or miss them.",
  "A ceasefire line moves faster than the <em>press release</em>; measure the gap.",
  "A predictable approach to high ground is a <em>pre-positioned drone ambush</em>.",
  "Protected status deters <em>nothing</em> — carry your own power and cover."
];
const BLUF_EXP = "In June the expeditionary fight was <b>grey-zone and drone-saturated</b>. Thailand advanced a claim with three <b>simultaneous sub-threshold actions</b> that a sequential monitor would miss. The IDF moved a ceasefire line 10 km while ceasefires were announced — a <b>baseline you must instrument</b>. Hezbollah made every predictable approach a <b>drone ambush</b> cued by real-time ISR. And Sudan's El Obeid siege proved <b>protected status deters nothing</b>. Link the pattern, measure the gap, assume the approach is watched, and carry 72 hours of your own power.";
const SUGGESTIONS_EXP = ["What changed for expeditionary this month?","How do we detect a sub-threshold advance?","How do we defeat a drone ambush on the approach?","What to rehearse in ICT","Lessons for Guards","Give me the bottom line"];
const PKG = {
  MANOEUVRE: { SERIALS:SERIALS_M, SUMMARY:SUMMARY_M, SIGNAL:SIGNAL_M, APP:APP_M, ICT:ICT_M, LEARN:LEARN_M, PACK:PACK_M, PLANNING:PLANNING_M, KEY_JUDGEMENTS:KEY_JUDGEMENTS_M, FORMATIONS:FORMATIONS_M, BLUF:BLUF_TEXT_M, SUGGESTIONS:SUGGESTIONS_M, FMK:_FMK_M, echelons:["Division","Brigade"] },
  SENSE:     { SERIALS:SERIALS_S, SUMMARY:SUMMARY_S, SIGNAL:SIGNAL_S, APP:APP_S, ICT:ICT_S, LEARN:LEARN_S, PACK:PACK_S, PLANNING:PLANNING_S, KEY_JUDGEMENTS:KEY_JUDGEMENTS_S, FORMATIONS:FORMATIONS_S, BLUF:BLUF_S, SUGGESTIONS:SUGGESTIONS_S, FMK:_FMK_S, echelons:["Division","Unit"] },
  CSS:       { SERIALS:SERIALS_CSS, SUMMARY:SUMMARY_CSS, SIGNAL:SIGNAL_CSS, APP:APP_CSS, ICT:ICT_CSS, LEARN:LEARN_CSS, PACK:PACK_CSS, PLANNING:PLANNING_CSS, KEY_JUDGEMENTS:KEY_JUDGEMENTS_CSS, FORMATIONS:FORMATIONS_CSS, BLUF:BLUF_CSS, SUGGESTIONS:SUGGESTIONS_CSS, FMK:_FMK_CSS, echelons:["Division","Unit"] },
  EXPED:     { SERIALS:SERIALS_EXP, SUMMARY:SUMMARY_EXP, SIGNAL:SIGNAL_EXP, APP:APP_EXP, ICT:ICT_EXP, LEARN:LEARN_EXP, PACK:PACK_EXP, PLANNING:PLANNING_EXP, KEY_JUDGEMENTS:KEY_JUDGEMENTS_EXP, FORMATIONS:FORMATIONS_EXP, BLUF:BLUF_EXP, SUGGESTIONS:SUGGESTIONS_EXP, FMK:_FMK_EXP, echelons:["Mission HQ","Section"] }
};

/* CS&I "Manoeuvre" digest - content DATA, extracted from index.html.
   Loaded by index.html via <script src="data.js"> BEFORE the render script.
   Pure data only (serials, unit/formation cards, packages, legend text) - no behaviour.
   Top-level const/let here share global scope with the render script, so names resolve as before.
   Edit monthly content HERE; keep each object's keys/shape the render code expects. */

/* ===================== DATA ===================== */
const SERIALS_M = [
  { id:"M-01", kind:"lesson", title:"Concealed, dispersed resupply under surveillance and strike (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"mixed", verdictLabel:"Mixed", dates:"early Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/M-01.jpg", imageCredit:"RBC-Ukraine",
    blocks:[
      {l:"What happened", t:"By early July Russian forces stopped moving fuel and ammunition in large convoys and began disguising military cargo as civilian traffic — supplies hidden in ordinary trucks, farm buildings, basements and civilian fuel stations. This was a direct behavioural adaptation to months of Ukrainian mid-range drone interdiction on logistics: dispersal and disguise replaced mass and speed as the survival mechanism."},
      {l:"So what", t:"Convoy-based logistics had become a predictable, high-value target; dispersed, disguised movement sacrifices speed and load size for survivability. The friendly lesson runs two ways — detection doctrine must shift from convoy signatures to unusual movement patterns, and own resupply should adopt dispersal <em>before</em> attrition forces it."}
    ],
    sources:[
      {u:"https://www.reuters.com/world/aerospace-defense/russia-tries-jam-musks-starlink-systems-counter-ukrainian-drones-2026-07-08/",n:"Reuters — Russian logistics adaptation (8 Jul)"},
      {u:"https://newsukraine.rbc.ua/news/russia-tries-to-jam-starlink-to-disrupt-ukrainian-1783543103.html",n:"RBC-Ukraine — dispersal and disguise (8 Jul)"}
    ] },
  { id:"M-02", kind:"lesson", title:"Engaging a mobile team within minutes in a security zone (Lebanon)",
    conflict:"ISR-LBN", theatre:"Israel–Lebanon", verdict:"success", verdictLabel:"Success", dates:"2–3 Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/M-02.jpg", imageCredit:"JNS",
    blocks:[
      {l:"What happened", t:"On 3 July the IDF struck a Hezbollah cell travelling by motorcycle near the Ali al-Tahir Ridge on identification as an imminent threat to ground troops. A month-long clearance operation in Haddatha, inside the security zone, dismantled 90+ pieces of infrastructure, eliminated 20+ fighters and recovered 150+ weapons. On 2 July, ten infrastructure sites and a weapons-transfer truck were struck in response to attacks on troops in Bint Jbeil, Beit Yahoun, Kounine and Baraachit."},
      {l:"So what", t:"A rapid detection-to-engagement sequence on a mobile motorcycle cell demonstrates persistent, low-latency ISR over the security zone rather than reliance on fixed target lists — detection-to-engagement for mobile targets measured in minutes, and area clearance sustained as a month-long, phased operation rather than a single day."}
    ],
    sources:[
      {u:"https://www.jns.org/news/israel-news/idf-strikes-hezbollah-cell-near-southern-lebanon-security-zone/",n:"JNS — cell strike near the security zone (5 Jul)"},
      {u:"https://www.straitstimes.com/world/middle-east/israel-military-says-struck-hezbollah-positions-in-south-lebanon",n:"The Straits Times — infrastructure strikes (2 Jul)"}
    ] }
];
const FORMATIONS_M = {};
/* Three display groups. `members` lists the underlying content bundles that
   feed each tab — Manoeuvre & Expeditionary are merged, CS & CSS is the former
   Combat Support pack relabelled. Serials keep their own per-bundle echelons
   (see SUBPKG_OF in index.html), so a merged tab still labels each serial's
   decision cards at the right formation level. */
const PACKAGES = [
  {k:"MANEXP", label:"Manoeuvre & Expeditionary", title:"Manoeuvre & Expeditionary", sub:"This month's serials · the close fight & deployed missions", live:true, members:["MANOEUVRE","EXPED"]},
  {k:"SENSE", label:"Sense & Strike", title:"Sense & Strike", sub:"This month's serials · deep fires & air defence", live:true, members:["SENSE"]},
  {k:"CSS", label:"CS & CSS", title:"CS & CSS", sub:"This month's serials · engineering, sustainment & comms", live:true, members:["CSS"]}
];
/* ===== Monthly command pack (the prototype's top-down structure) ===== */
const PACK_M = {
  kicker:"July 2026 · Manoeuvre", titleLine:"for manoeuvre formations",
  changed:"July rewarded adaptation over signature. Russian logistics went dispersed and disguised the moment interdiction bit — hidden in civilian trucks, farm buildings and fuel stations — trading speed and load size for survivability and blinding convoy-based detection. In southern Lebanon the IDF interdicted a mobile cell on contact under persistent ISR and ran a month-long, phased clearance inside the security zone. For manoeuvre formations the message is to rebuild detection around unusual movement patterns, set a rapid standard for mobile targets, and disperse your own resupply before attrition forces it.",
  stats:[
    {n:2, k:"Priority learnings", s:"For this month"},
    {n:2, k:"Hot contests", s:"Under adaptation watch"},
    {n:2, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat logistics detection and the security zone as instrumented problems. Assume the adversary disperses and disguises under pressure, hold persistent ISR that can strike mobile teams on contact, and disperse your own resupply before losses force it.",
  divPriorities:[
    "Rebuild logistics detection around unusual movement patterns, not convoy signatures.",
    "Hold persistent ISR over any declared zone with a rapid standard for mobile targets.",
    "Resource area clearance as a phased, protected operation."
  ],
  brigadeBluf:"For the close fight this month: adopt dispersed, disguised resupply early; interdict mobile cells on contact under persistent ISR; and clear contested areas in phases with standing overwatch.",
  implications:[
    {ech:"Division HQ", t:"Turn logistics detection and the security zone into instrumented, pre-planned problems — dispersal and mobile-cell interdiction are collection standards, not surprises."},
    {ech:"Brigades", t:"Rehearse dispersed own resupply and a rapid detection-to-engagement sequence on mobile cells, with phased clearance under overwatch."},
    {ech:"Armoured units", t:"Assume own convoys are the predictable target; move dispersed and disguised before attrition forces it."}
  ],
  worked:[
    "Interdicting a mobile cell on contact under persistent, low-latency ISR.",
    "A month-long, phased clearance that denied 90+ infrastructure sites.",
    "Dispersal and disguise that cut single-strike logistics losses."
  ],
  failed:[
    "Hunting convoy signatures after the adversary dispersed into civilian patterns.",
    "Treating area clearance as a single-day task without standing overwatch.",
    "Waiting for attrition before dispersing own resupply."
  ],
  testICT:[
    "Run a route-denial serial where OPFOR disperses and disguises after losses.",
    "Grade a rapid detection-to-engagement sequence on a mobile cell in a declared zone.",
    "Rehearse phased clearance with standing overwatch and a documentation standard."
  ],
  sopReview:[
    "Logistics detection doctrine — anomaly-based, not convoy-based.",
    "Mobile-target detection-to-engagement latency standard.",
    "Dispersed, disguised own-resupply TTP."
  ],
  contests:[], priorities:["M-02","M-01"]
};

/* ===================== SENSE & STRIKE ===================== */
const LEARN_M = {
  "M-01":{ topic:"Dispersed, disguised logistics", status:"Action now", why:"Once interdiction bites, the adversary trades speed and load size for survivability and hides in civilian patterns — convoy-signature detection goes blind.", worked:"Reduced single-strike losses for Russian logistics, at the cost of slower resupply and smaller loads.", next:"Rebuild detection around unusual movement patterns, and adopt dispersed own resupply before attrition forces it." },
  "M-02":{ topic:"Interdiction on contact", status:"High utility", why:"Persistent, continuous surveillance over a declared zone lets a mobile cell be struck on identification, and turns clearance into a sustained operation.", worked:"A motorcycle cell interdicted before contact; a month-long clearance dismantled 90+ infrastructure sites.", next:"Set a detection-to-engagement standard for mobile targets and resource clearance as a phased, protected operation." }
};
const CONFLICT_CLASS = {"RUS-UKR":"t-rusukr","ISR-LBN":"t-isrlbn","THA-KHM":"t-thakhm","ISR-HMS":"t-isrhms","USI-IRN":"t-usiirn","SDN":"t-sdn"};
const CONFLICT_CODE = {"RUS-UKR":"RUS–UKR","ISR-LBN":"ISR–LBN","THA-KHM":"THA–KHM","ISR-HMS":"ISR–HMS","USI-IRN":"USI–IRN","SDN":"SUDAN"};

/* ===================== MANOEUVRE ===================== */
const KIND_LABEL = {lesson:"Lesson", action:"Tactical action", capdev:"Capability dev"};

const PLANNING_M = [
  {b:"Instrument the security/buffer zone", p:"For any declared zone, record the ISR coverage available against mobile small-team movement and the detection-to-engagement latency you can actually achieve. Treat gaps in persistent coverage as the planning problem, not an afterthought."},
  {b:"Set a mobile-target engagement standard", p:"Fix a detection-to-engagement time standard for mobile targets (e.g. under 15 minutes) and resource the ISR to meet it — persistent coverage, not periodic sweeps."},
  {b:"Phase area clearance with standing overwatch", p:"Plan clearance inside a contested zone as a multi-day, phased operation: fire support and armour overwatch positioned to protect engineer/infantry teams throughout, with a documentation standard for each site denied."},
  {b:"Rebuild logistics detection around anomalies", p:"Assume the adversary disperses and disguises supply movement under strike pressure. Re-task ISR to unusual movement patterns — civilian-vehicle clustering near depots, unusual traffic at abandoned buildings — rather than convoy templates."},
  {b:"Pre-plan dispersed own resupply", p:"For contested ISR, build a dispersed, disguised movement TTP into the sustainment plan from the start — smaller loads, civilian-pattern routing, staggered timing — rather than degrading into it under attrition."}
];
const KEY_JUDGEMENTS_M = [
  "Under sustained surveillance and strike, the enemy trades resupply tempo for survivability — convoy-based detection goes blind.",
  "Detection must shift from convoy signatures to <em>unusual movement patterns</em>.",
  "A zone is only controlled if surveillance can engage <em>mobile</em> teams quickly, not only fixed positions.",
  "Area clearance is a phased operation under overwatch, not a single-day task."
];
const SUMMARY_M = {
  "M-01":"Under sustained surveillance and strike, the enemy disperses resupply and moves it under civilian cover — detect it by movement pattern rather than convoy signature, and disperse friendly resupply before losses force it.",
  "M-02":"Continuous surveillance of a zone lets a mobile team be engaged within minutes, and turns area clearance into a sustained, phased operation rather than a single day."
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
  "M-01":"From the July weekly reporting on Russian logistics — the shift from convoys to civilian-pattern dispersal and disguise under Ukrainian mid-range interdiction.",
  "M-02":"From the July weekly tracking of the southern Lebanon security zone — the motorcycle-cell strike near Ali al-Tahir Ridge and the month-long Haddatha clearance."
};
const APP_M = {
  "M-01":{ verdict:"Use it, with changes",
    lead:"Adversary logistics disperse and disguise once interdiction bites. Borrow the survivability method for our own resupply, and rebuild detection doctrine around the unusual movement patterns dispersal creates.",
    div:{ d:"Assume the adversary will disperse and disguise supply movement under sustained surveillance and strike — plan detection around unusual movement patterns, not convoy signatures.", o:"Div Comd, on G2/G4 advice.", a:"Re-tasks ISR collection to anomaly detection — civilian-vehicle clustering near known depots, unusual traffic at abandoned buildings — and updates the targeting SOP away from convoy templates.", t:"Single-strike loss rates against adversary logistics fall while resupply tempo drops — read as a shift to dispersed movement.", x:"Anomaly-based detection is collection-heavy and slower to confirm than convoy hunting.", m:"Detection method adapts within 48 hrs of the adversary's shift; targeting continues to service dispersed nodes." },
    bde:{ d:"When resupplying under contested ISR, adopt dispersed and disguised movement early — before losses force it — to keep resupply flowing.", o:"Bde Comd, on S4 advice.", a:"Builds a dispersed-movement resupply TTP (smaller loads, civilian-pattern routing, staggered timing) into the sustainment plan rather than reacting after attrition.", t:"Enemy surveillance-and-strike coverage confirmed over the resupply route.", x:"Dispersed movement sacrifices throughput and speed for survivability.", m:"Resupply sustained under ISR without the single-strike losses a convoy would take." } },
  "M-02":{ verdict:"Use it, with changes",
    lead:"Interdicting a mobile cell on contact requires persistent, continuous surveillance over the whole zone — and area denial requires treating clearance as a phased operation, not a single day.",
    div:{ d:"Maintain persistent ISR over any declared buffer/security zone at a resolution sufficient to detect and engage mobile small-team movement — not just fixed infrastructure.", o:"Div Comd, on G2/G3 advice.", a:"Sets a detection-to-engagement standard for mobile targets (within minutes) and allocates persistent coverage rather than periodic sweeps.", t:"A declared security or buffer zone is assigned to the formation.", x:"Persistent, high-resolution coverage is ISR-intensive and hard to sustain across a wide zone.", m:"Mobile small-team movement detected and engaged inside the set latency standard." },
    bde:{ d:"Resource month-long area clearance as a phased operation with fire support and armour overwatch protecting engineer and infantry teams throughout — not a single-day task.", o:"Bde Comd, on Engr advice.", a:"Writes a multi-phase clearance annex with standing overwatch and a documentation standard for infrastructure denied.", t:"An area-clearance task inside a contested zone extends beyond one day.", x:"Sustained overwatch ties down fire support and armour for the duration.", m:"Clearance sustained over weeks without loss of the protecting force; denial documented." } }
};
const ICT_M = {
  "M-01":{ fmt:"Route-denial exercise · Div G2/G4 + Bde S4 · 2 hrs · ISR + logistics overlay",
    set:"An OPFOR cell disperses and disguises its logistics after taking initial convoy losses; your ISR/strike cell must keep servicing the target.",
    run:["OPFOR shifts from convoys to civilian-pattern dispersal; friendly ISR/strike cell continues targeting.","Grade whether the friendly cell adapts its detection method within 48 hours or keeps hunting the old convoy signature.","Re-plan own resupply for the same route using dispersed, disguised movement before losses force it."],
    dec:"Does the targeting cell switch to unusual-movement detection in time, and does own resupply pre-empt attrition with dispersal?",
    twist:"Controller injects a civilian-traffic decoy pattern near a real depot — does the cell over-commit strikes to the decoy?",
    std:"Detection method adapted within 48 hrs; own resupply moves dispersed before attrition; no strike wasted on the decoy pattern." },
  "M-02":{ fmt:"Time-to-engage drill · Div G3 + Bde O-group · 90 min · zone ISR overlay",
    set:"A moving small-team target (motorcycle/light vehicle) is detected inside a declared buffer zone under persistent ISR.",
    run:["Run the detection-to-engagement sequence on the mobile target against a set latency standard (e.g. under 15 minutes).","Sequence a phased clearance of a nearby infrastructure cluster with standing overwatch.","Produce the documentation record for each site denied."],
    dec:"Can the formation detect, positively identify and engage a mobile cell inside the latency standard while protecting the clearance force?",
    twist:"Controller removes a sensor mid-serial — re-plan coverage to hold the latency standard.",
    std:"Mobile target engaged inside the standard; clearance force covered throughout; denial documented." }
};
const THEATRE_NAME = {"RUS-UKR":"Russia–Ukraine","ISR-LBN":"Israel–Lebanon","THA-KHM":"Thailand–Cambodia","ISR-HMS":"Israel–Gaza","USI-IRN":"US/Israel–Iran","SDN":"Sudan"};
const BLUF_TEXT_M = "In July the manoeuvre fight rewarded <b>adaptation over predictability</b>. Enemy resupply dispersed and moved under civilian cover as soon as interdiction took hold, defeating convoy-based detection. In southern Lebanon the IDF <b>engaged a mobile team within minutes</b> under continuous surveillance and cleared a security zone over a sustained, phased operation. Shift detection to <b>unusual movement patterns</b>, hold surveillance able to engage mobile teams quickly, and disperse friendly resupply before losses force it.";
const SUGGESTIONS_M = ["What changed for manoeuvre this month?","How do we detect dispersed, disguised logistics?","How fast should we strike a mobile cell?","What to rehearse in ICT","Lessons for resupply under drones","Give me the bottom line"];
const _STOP = new Set("the a an and or of to in for on at by from with into onto over under is are was were be been being it this that those these as our we us your you their they them do does did how what which who why when where than then so such also more most any all key lead led leading about can could should would will not".split(" "));
const _THK = {"RUS-UKR":["russia","russian","ukraine","ukrainian","geran","shahed","donetsk","pokrovsk","kursk","chonhar"],"ISR-LBN":["israel","israeli","lebanon","lebanese","hezbollah","idf","nabatieh","merkava","beaufort","litani"],"THA-KHM":["thailand","thai","cambodia","cambodian","osmach"],"ISR-HMS":["hamas","gaza","qassam","odeh","haddad","khrizim","decapitation"],"SDN":["sudan","sudanese","rsf","obeid","kordofan","besieged","besiege","siege"]};
const _FMK_M = {};
const _OUT = {success:["success","successful","succeed","worked","effective","effectively","win","won","decisive","gained","advantage","best","what worked"],failure:["fail","failed","failure","failures","lost","loss","losses","vulnerable","vulnerability","mistake","wrong","unsustainable","what failed","did not"],threat:["threat","gap","capability","capdev","weakness","unjammable"]};
const _SEC = {bluf:["bottom line","bluf","summary","summarise","summarize","overview","tldr","tl;dr","takeaway","big picture","headline","in short"],planning:["planning","oplan","estimate","checklist","precondition","go/no-go","go no go","gonogo"],ict:["rehearse","ict","in-camp","train","training","exercise","drill","practice","practise"]};
/* Concept clusters for the on-device assistant. Each inner array is a set of
   equivalent single-word terms; a query token matching any member expands to the
   whole cluster before ranking, so lay phrasing ("drone", "wired") reaches the
   right serials. Members are single lowercase tokens (the tokeniser splits on
   hyphens/spaces), grounded in the June corpus vocabulary. */
const SYN = [
  ["drone","drones","fpv","uav","uas","loitering","quadcopter","geran","shahed"],
  ["fibre","fiber","wired","tethered","optic","unjammable"],
  ["doubletap","double","tap","reattack","rescue","casevac","followup","secondary"],
  ["jam","jamming","jammer","ew","electronic","spoofing","gnss","spectrum","warfare"],
  ["starlink","satcom","satellite","connectivity","uplink"],
  ["ugv","unmanned","robot","robotic","groundrobot"],
  ["bridge","crossing","span","chonhar","pontoon","bridging","interdiction"],
  ["saturation","mass","swarm","overwhelm","saturate","salvo","decoy","cruise","ballistic","hypersonic"],
  ["decapitation","leadership","commander","commanders","managers","finance","depth","targeting"],
  ["autonomous","autonomy","brave1","intercept","interceptor"],
  ["siege","besiege","besieged","encircle","blockade","obeid","infrastructure"],
  ["ceasefire","truce","encroachment","creep","baseline","observer","compliance"],
  ["subthreshold","greyzone","provocation","incursion","threshold"],
  ["resupply","logistics","sustainment","supply","passability"],
  ["engineer","engineers","sapper","repair","breach","obstacle"],
  ["forceprotection","survivability","protection","cover","hardening"],
  ["ammunition","ammo","munition","munitions","shell","shells","round","rounds","magazine","stockpile","reload"],
  ["airdefence","airdefense","sam","interceptor","interception","shorad","gbad","patriot"],
  ["artillery","arty","howitzer","fires","gun","guns","himars","counterbattery","barrage"],
  ["casualty","casualties","wounded","medical","medevac","evacuation","evac","treatment"],
  ["tank","tanks","armour","armor","afv","ifv","mbt","mounted"],
  ["command","c2","headquarters","comms","communications"],
  ["power","grid","electricity","water","fuel","energy","utilities"]
];

/* ===================== SENSE & STRIKE PACKAGE (Package 2) ===================== */
const FORMATIONS_S = {};
const _FMK_S = {};

const SERIALS_S = [
  { id:"S-01", kind:"lesson", title:"Jamming the Starlink satellite link — a new electronic-warfare threat (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"mixed", verdictLabel:"Mixed", dates:"3–8 Jul 2026",
    formations:[], multi:false,
    blocks:[
      {l:"What happened", t:"Russia deployed roughly ten Volna Kupol Garant systems — ground complexes of six trailers with rotating dish antennas — to jam Starlink in the 14–14.5 GHz band across a ~20 km² area, targeting eight satellite channels at once. This is a first: Starlink had been considered largely jam-resistant since 2022. The system does not attack the drone-to-controller link; it blinds the satellite receiver itself."},
      {l:"So what", t:"Each complex emits a powerful, distinctive electronic signature — trading concealment for jamming power — so it becomes a high-value, findable target. Ukraine's units treated the jammers as priority targets: two of ten destroyed within weeks, one within hours of detection, with drone connectivity returning instantly once a jammer was killed."}
    ],
    sources:[
      {u:"https://euromaidanpress.com/2026/07/08/russia-has-found-way-to-jam-starlink-and-take-down-ukraines-drones/",n:"EuroMaidan Press — Volna Kupol Garant (8 Jul)"},
      {u:"https://www.france24.com/en/europe/20260703-ukraine-russia-faces-challenge-jamming-starlink",n:"France24 — jamming Starlink (3 Jul)"},
      {u:"https://www.reuters.com/world/aerospace-defense/russia-tries-jam-musks-starlink-systems-counter-ukrainian-drones-2026-07-08/",n:"Reuters — jammers destroyed on detection (8 Jul)"}
    ] },
  { id:"S-02", kind:"lesson", title:"Refinery strike campaign — leaving no plant untouched (Russia)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Major success", dates:"1–26 Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/S-02.jpg", imageCredit:"Al Jazeera",
    blocks:[
      {l:"What happened", t:"Through July Ukraine ran a near-continuous refinery campaign: Omsk (its largest refinery, 2,700 km away, hit 6 Jul), Ufa and NORSI (twice each), Syzran, Ilsky, and the Salavat petrochemical complex — 'the last major petrol producer not yet hit in 2026' — struck by drones travelling ~1,500 km, plus Baltic loading terminals. Targeting logic was systematic: work down a national list of refineries by capacity until none remained untouched."},
      {l:"So what", t:"By early July over 90% of Russian regions reported fuel rationing or shortages. Russian air defence downed a majority per raid (up to 376–415 a night), but interception did not prevent cumulative degradation given the volume and geographic dispersion — leaving no target untouched, denying any untouched target, was itself the objective."}
    ],
    sources:[
      {u:"https://www.reuters.com/business/energy/ukrainian-drones-hit-russias-largest-refinery-one-deepest-strikes-yet-2026-07-06/",n:"Reuters — Omsk refinery strike (6 Jul)"},
      {u:"https://www.pravda.com.ua/eng/news/2026/07/14/8044021/",n:"Ukrainska Pravda — Salavat complex (14 Jul)"},
      {u:"https://www.aljazeera.com/news/2026/7/9/ukraine-targets-russian-oil-depots-and-tankers-in-drone-attacks",n:"Al Jazeera — nationwide fuel shortages (8 Jul)"}
    ] },
  { id:"S-03", kind:"lesson", title:"Striking the enemy's internal-security command (Gaza)",
    conflict:"ISR-HMS", theatre:"Israel–Gaza", verdict:"success", verdictLabel:"Success", dates:"27 Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/S-03.jpg", imageCredit:"The Media Line",
    blocks:[
      {l:"What happened", t:"On 27 July the IDF and Shin Bet killed the commander of Hamas's Internal Security forces for the central refugee camps in a precision strike on his vehicle in Deir al-Balah. This targets a distinct organisational layer from prior military-wing decapitation: internal security enforces ceasefire-period discipline over the population and suppresses dissent — a internal-security function, not a combat one."},
      {l:"So what", t:"Internal-security/police-function commanders are a distinct target category; removing them degrades population-control and internal discipline rather than combat capacity. The downstream effect — whether it triggers instability, opportunity or retaliatory escalation during a ceasefire — becomes an intelligence indicator to watch."}
    ],
    sources:[
      {u:"https://themedialine.org/headlines/idf-eliminates-hamas-internal-security-commander-demolishes-gaza-tunnel/",n:"The Media Line — internal-security commander strike (26 Jul)"}
    ] }
];
const SUMMARY_S = {
  "S-01":"A first — ground stations jammed the Starlink satellite link itself, but traded concealment for power and were quickly located and destroyed, restoring the link at once. Catalogue the signature and hunt it.",
  "S-02":"A dispersed, high-volume, long-range campaign that leaves no major target untouched degrades the enemy's war effort even against heavy interception — coverage, not cumulative damage, is the aim.",
  "S-03":"The enemy's internal-security command is a target set distinct from its military — striking it degrades control of the population, not combat power; watch the instability that follows."
};
const SIGNAL_S = {
  "S-01":"From the July weekly EW reporting — Russia's Volna Kupol Garant Starlink-uplink jammers and Ukraine's rapid jammer-hunt destruction of them.",
  "S-02":"From the running July deep-strike tracking — Ukraine's systematic refinery campaign down to the last untouched producers and the nationwide Russian fuel crisis.",
  "S-03":"From the July weekly Gaza reporting — the IDF/Shin Bet strike on Hamas's internal-security commander for the central camps."
};
const APP_S = {
  "S-01":{ verdict:"Use it, with changes",
    lead:"A jammer that blinds the satellite uplink is powerful but loud. Catalogue its signature as its own target category and build the rapid strike that restores capability faster than any workaround.",
    div:{ d:"Catalogue the electronic signature of any satellite-uplink jamming system — RF emission pattern, physical trailer configuration, deployment near logistics/critical infrastructure — as a distinct target category.", o:"Div Comd, on the intelligence staff's advice.", a:"Creates a jammer target package (signature library + likely-deployment templates) separate from conventional EW targets.", t:"Friendly satellite-linked C2 or strike suffers sudden, area-wide denial.", x:"Signature cataloguing is intelligence-intensive and must keep pace with new variants.", m:"A satellite-uplink jammer is localised from its signature and passed as an actionable target." },
    bde:{ d:"Any force relying on satellite-linked C2 or strike needs a 'jammer-hunt' priority target list and a rapid-response strike — destroying the jammer restores capability faster than developing a jam-resistant workaround.", o:"Fires, on the intelligence staff's cue.", a:"Adds jammers to the high-priority target list with a pre-planned rapid strike sequence; connectivity restoration is the success measure.", t:"A satellite-uplink jammer is localised inside strike range.", x:"Prioritising jammer strikes diverts fires from other targets during the denial window.", m:"Jammer destroyed and satellite-linked capability restored within the planned response time." } },
  "S-02":{ verdict:"Use it, with changes",
    lead:"Deny the adversary any untouched target. Maintain a ranked 'last untouched target' list and resource a sustained, distributed campaign that degrades capacity even against high interception.",
    div:{ d:"Maintain a live, ranked 'last untouched target' list for any deep-strike campaign against infrastructure that sustains the war effort — leaving no target untouched is the objective, not just cumulative damage.", o:"Div Comd, on the intelligence staff's advice.", a:"Stands up a ranked national-infrastructure target list, updated as nodes are struck, driving strike allocation toward full coverage.", t:"A deep-strike campaign against economic/infrastructure that sustains the war effort is authorised.", x:"Chasing completeness spreads effort thin and demands sustained munitions supply.", m:"No high-value node remains untouched; measurable degradation of adversary capacity." },
    bde:{ d:"Plan munitions and platform allocation for a sustained multi-week, distributed campaign — high volume across dispersed targets degrades capacity even at a high per-raid interception rate.", o:"Fires, on G4 advice.", a:"Shifts planning from single decisive strikes to sustained sortie generation; calculates sortie requirements against an assumed interception rate.", t:"The campaign requires cumulative degradation rather than a single knockout.", x:"Sustained high-volume strike consumes munitions and platforms faster than a single-strike plan.", m:"Full-list coverage achieved within the timeframe despite the interception rate." } },
  "S-03":{ verdict:"Use it, with changes",
    lead:"Governance and internal-security commanders are a separate target set with a separate effect. Package them distinctly and watch the second-order instability their removal creates.",
    div:{ d:"Maintain a parallel target package for the internal security and control function alongside military and financial-network targeting.", o:"Div Comd, on the intelligence staff's advice.", a:"Sorts the adversary organisation into military, financial and internal security and control categories, each with a distinct effects objective.", t:"An organisation enforces discipline over a population through an internal-security layer.", x:"Governance targeting invites scrutiny over effect on the civilian population and ceasefire compliance.", m:"Internal-security targets held as a distinct package with their own effects objective." },
    bde:{ d:"Watch internal-security disruption as a potential trigger for instability in an adversary-held population — collection should look for discipline breakdowns as an indicator of opportunity or of retaliation risk.", o:"Intelligence staff, on Div direction.", a:"Adds internal-order indicators to the collection plan after a internal-security strike.", t:"An internal security and control commander is removed.", x:"Second-order effects are slow and hard to attribute.", m:"Discipline-breakdown indicators tracked and read for opportunity or escalation risk." } }
};
const ICT_S = {
  "S-01":{ fmt:"EW threat brief · Div intelligence + Fires · 2 hrs · EW/target overlay",
    set:"A satellite-uplink jammer denies a friendly drone/UGV fleet across an area; the drone-to-controller link is intact but the satellite receiver is blinded.",
    run:["Model the denial and confirm it is an uplink-jamming, not link-jamming, problem.","Localise the jammer from its RF and physical signature.","Propose a jammer-neutralisation strike sequence within a set time window and confirm capability restores on its destruction."],
    dec:"Can the targeting cell distinguish uplink jamming, localise the emitter and neutralise it inside the window?",
    twist:"Controller fields a second jammer on a different channel set — re-prioritise the hunt.",
    std:"Denial correctly diagnosed; jammer localised from signature; strike sequence restores capability within the window." },
  "S-02":{ fmt:"Deep-strike campaign design · Div intelligence + Fires + G4 · 2 hrs · target list + inventory",
    set:"A finite drone/munitions inventory and an assumed interception rate (e.g. 85%) against a national list of infrastructure that sustains the war effort.",
    run:["Rank the target list by capacity/effect and mark the 'last untouched' nodes.","Calculate sortie requirements to achieve full-list coverage within a set timeframe at the interception rate.","Plan sustained multi-week allocation rather than single decisive strikes."],
    dec:"How many sorties, over what period, achieve full coverage — and is the munitions pipeline resourced for it?",
    twist:"Controller raises the interception rate mid-serial — recompute the campaign.",
    std:"Sortie maths sound; full-list coverage plan resourced; degradation objective, not just damage, articulated." },
  "S-03":{ fmt:"Target categorisation exercise · Div intelligence · 90 min · adversary org chart",
    set:"An adversary organisational chart spanning military, financial and internal security and control functions.",
    run:["Sort targets into military, financial and internal security and control categories.","Assign a distinct effects objective to each category.","Identify the collection indicators that would reveal the second-order effect of an internal-security strike."],
    dec:"Are governance/internal-security targets correctly separated from military ones, each with the right intended effect?",
    twist:"Controller offers a strike opportunity on an internal-security commander during a ceasefire — take it or hold, and why?",
    std:"Categories correctly sorted; distinct effects assigned; second-order indicators identified." }
};
const LEARN_S = {
  "S-01":{ topic:"Satellite-uplink jamming", status:"Action now", why:"Jamming the satellite receiver itself is a new EW category — powerful but loud, and destroying the emitter restores capability faster than any workaround.", worked:"Ukraine killed 2 of 10 jammers in weeks, one within hours of detection; connectivity returned instantly.", next:"Catalogue the jammer signature as a target category and build a rapid jammer-hunt strike." },
  "S-02":{ topic:"Complete-coverage deep strike", status:"High utility", why:"Denying the adversary any untouched node degrades the enemy's capacity to sustain the war even against high per-raid interception.", worked:"Ukraine's systematic refinery campaign drove fuel rationing across 90%+ of Russian regions.", next:"Maintain a ranked 'last untouched target' list and resource a sustained, distributed campaign." },
  "S-03":{ topic:"Governance-layer targeting", status:"High utility", why:"Internal-security commanders are a distinct target set — their removal degrades population control, not combat power, with second-order effects to watch.", worked:"The IDF struck a Hamas internal-security commander as a distinct governance target.", next:"Hold a parallel internal-security target package and track the resulting internal-order indicators." }
};
const PACK_S = {
  kicker:"July 2026 · Sense & Strike", titleLine:"for sense-and-strike formations",
  changed:"July turned sense-and-strike on signatures and completeness. Russia jammed the Starlink uplink itself — a first — but the emitter was loud and Ukraine's jammer-hunt killed it within hours, restoring connectivity instantly. Ukraine's refinery campaign worked a national target list down to the last untouched producer, driving fuel rationing across most of Russia despite a high per-raid interception rate. And the IDF struck the internal security and control layer in Gaza as a target set distinct from the military wing. Catalogue the jammer, deny the adversary every node, and package governance targets on their own.",
  stats:[
    {n:3, k:"Priority learnings", s:"For this month"},
    {n:3, k:"Hot contests", s:"Under adaptation watch"},
    {n:3, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat jammers, target lists and the adversary organisation as distinct problems. Catalogue the satellite-uplink jammer's signature and hunt it, drive deep strike toward complete coverage, and separate governance targeting from military.",
  divPriorities:[
    "Catalogue satellite-uplink jammers as a distinct target category and build a rapid jammer-hunt strike.",
    "Maintain a ranked 'last untouched target' list and resource a sustained, distributed campaign.",
    "Hold a parallel target package for the internal security and control function."
  ],
  brigadeBluf:"For deep fires this month: hunt and kill the jammer to restore capability faster than any workaround; strike toward full-list coverage at a sustainable tempo; and read the second-order effects of a governance strike.",
  implications:[
    {ech:"Division HQ", t:"Turn jammers, infrastructure lists and the adversary org chart into distinct, ranked targeting problems with distinct effects."},
    {ech:"Intelligence staff", t:"Catalogue jammer signatures, maintain a live 'last untouched' list, and separate governance from military targets."},
    {ech:"Fires", t:"Hold a jammer-hunt priority strike and plan sustained, distributed sortie generation against an assumed interception rate."}
  ],
  worked:[
    "A jammer-hunt that killed the emitter in hours and restored connectivity instantly.",
    "A complete-coverage refinery campaign that degraded fuel supply nationwide.",
    "Targeting the governance layer as a distinct effect from military decapitation."
  ],
  failed:[
    "Treating uplink jamming as an ordinary link-jamming problem.",
    "Measuring deep strike by cumulative damage rather than coverage of every node.",
    "Lumping internal-security commanders in with military targets."
  ],
  testICT:[
    "Localise and neutralise a satellite-uplink jammer inside a set window.",
    "Compute sortie requirements for full-list coverage at a given interception rate.",
    "Sort an adversary org chart into military, financial and governance targets."
  ],
  sopReview:[
    "Jammer signature library and rapid jammer-hunt strike.",
    "Ranked 'last untouched target' list and sustained-campaign munitions plan.",
    "Parallel internal-security target package and internal-order indicators."
  ],
  contests:[], priorities:["S-02","S-01","S-03"]
};
const PLANNING_S = [
  {b:"Catalogue the jammer signature", p:"Treat any satellite-uplink jamming system as a distinct target category — record its RF emission pattern, physical configuration and likely deployment near logistics/critical infrastructure. These systems trade concealment for power and are therefore findable."},
  {b:"Build a jammer-hunt strike", p:"For any force relying on satellite-linked C2 or strike, hold a 'jammer-hunt' priority target list and a rapid-response strike — destroying the jammer restores capability faster than developing a jam-resistant workaround."},
  {b:"Keep a 'last untouched target' list", p:"For any deep-strike campaign against infrastructure that sustains the war effort, maintain a live ranked list and drive strike allocation toward completeness — leaving the enemy no untouched target is itself the objective."},
  {b:"Resource for a sustained campaign", p:"Plan munitions and platform allocation for multi-week, distributed strike. Calculate sortie requirements against an assumed interception rate — high volume across dispersed targets degrades capacity even when most drones are downed per raid."},
  {b:"Separate governance from military targeting", p:"Maintain a parallel target package for the internal security and control function, with its own effects objective, and add internal-order indicators to the collection plan to read the second-order effect of a strike."}
];
const KEY_JUDGEMENTS_S = [
  "Jamming the <em>satellite link</em> is a new category — powerful, but the emitter is conspicuous and quickly located.",
  "Destroying the jammer restores the link faster than fielding a jam-resistant alternative.",
  "In a strike campaign, leaving the enemy <em>no untouched target</em> matters more than cumulative damage.",
  "The enemy's internal-security command is a target set distinct from its military."
];
const BLUF_S = "In July deep fires turned on <b>signature and coverage</b>. Russia jammed the <b>Starlink satellite link</b> itself — a first — but the emitter was conspicuous and Ukraine destroyed it within hours, restoring the link at once. Ukraine's strike campaign left <b>no major refinery untouched</b>, forcing fuel rationing across most of Russia despite heavy interception. And the IDF struck the enemy's <b>internal-security command</b> as a distinct target set. Catalogue and hunt the jammer, leave no untouched target, and hold internal-security targeting separate from military.";
const SUGGESTIONS_S = ["What changed for sense & strike this month?","How do we hunt a satellite-uplink jammer?","How do we plan a complete-coverage deep strike?","What to rehearse in ICT","Lessons for the intelligence staff","Give me the bottom line"];

/* ===================== COMBAT SUPPORT ===================== */
const FORMATIONS_CSS = {};
const _FMK_CSS = {};

const SERIALS_CSS = [
  { id:"CS-01", kind:"lesson", title:"Engineer demolition under a ceasefire (Gaza)",
    conflict:"ISR-HMS", theatre:"Israel–Gaza", verdict:"success", verdictLabel:"Success", dates:"27 Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/CS-01.jpg", imageCredit:"The Media Line",
    blocks:[
      {l:"What happened", t:"On 27 July an IDF combat-engineering unit demolished a Hamas tunnel stretching hundreds of metres in northern Gaza, east of the Yellow Line, while maintaining the broader ceasefire-framework deployment posture. Engineer clearance and ceasefire compliance were executed as parallel activities, not sequential ones."},
      {l:"So what", t:"Tunnel demolition against confirmed military infrastructure east of an agreed line can be pre-authorised as compatible with ceasefire compliance — but only with clear standing rules of engagement, and a systematic geolocated record (as released footage provided) that creates a verifiable log for monitoring bodies and deters violation claims."}
    ],
    sources:[
      {u:"https://themedialine.org/headlines/idf-eliminates-hamas-internal-security-commander-demolishes-gaza-tunnel/",n:"The Media Line — tunnel demolition east of the Yellow Line (26 Jul)"}
    ] },
  { id:"CS-02", kind:"lesson", title:"Road recapture drawing an immediate strike on civil buildings (Sudan)",
    conflict:"SDN", theatre:"Sudan", verdict:"mixed", verdictLabel:"Mixed", dates:"late Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/CS-02.jpg", imageCredit:"The Defense Post",
    blocks:[
      {l:"What happened", t:"In late July the Sudanese army pushed RSF forces off the 400 km Khartoum–El-Obeid highway after a multi-day advance across North Kordofan. Within hours of losing the highway, the RSF conducted retaliatory drone strikes on two municipal buildings in El-Obeid — the lawyers' association and an Agricultural Bank branch."},
      {l:"So what", t:"The pattern is fast and clear: loss of a physical/logistics objective triggers immediate symbolic strikes against the opposing side's civil administration in a besieged city, rather than an attempt to retake the route directly. When a major route is recaptured, the most likely response is a strike on civil-administration buildings — so harden them first."}
    ],
    sources:[
      {u:"https://thedefensepost.com/2026/07/27/sudan-el-obeid-drone-strikes/",n:"The Defense Post — El-Obeid drone strikes after highway loss (27 Jul)"}
    ] },
  { id:"CS-03", kind:"capdev", title:"Infrastructure siege run as a campaign, not an incident (Sudan)",
    conflict:"SDN", theatre:"Sudan", verdict:"threat", verdictLabel:"Threat pattern", dates:"Jun–Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/CS-03.jpg", imageCredit:"Al Jazeera",
    blocks:[
      {l:"What happened", t:"By July, El-Obeid had endured siege-like conditions for 18 months, with drone strikes systematically re-targeting power substations, fuel stations, water facilities and healthcare on a near-daily basis. The UN verified 15 drone strikes in June alone causing 45+ civilian deaths; combined June–July civilian drone deaths in Kordofan exceeded 880. The pattern re-strikes already-degraded infrastructure — the objective is sustaining collapse, not a one-time knockout."},
      {l:"So what", t:"A garrison held for 18 months by relying on wells and external water tanks once municipal water failed — pre-existing contingency infrastructure mattered more than active defence against the drones. Any position expected to be besieged must pre-position redundant, non-networked essential services, because primary infrastructure will be struck repeatedly, not once."}
    ],
    sources:[
      {u:"https://www.unfpa.org/resources/flash-update-situation-el-obeid-north-kordofan-sudan-2-july-2026",n:"UNFPA — El-Obeid flash update (2 Jul)"},
      {u:"https://www.aljazeera.com/news/2026/7/6/el-obeid-under-siege-by-rsf-could-this-be-sudans-next-el-fasher",n:"Al Jazeera — El-Obeid under siege (6 Jul)"},
      {u:"https://www.cnn.com/2026/07/20/africa/drone-strikes-el-obeid-sudan-intl",n:"CNN — 880+ civilian drone deaths in Kordofan (20 Jul)"}
    ] }
];
const SUMMARY_CSS = {
  "CS-01":"Engineer demolition of confirmed military infrastructure beyond an agreed line can run alongside ceasefire compliance — given standing rules of engagement and a recorded account that answers any accusation of a breach.",
  "CS-02":"Loss of a road drew an immediate strike on the opponent's civil administration, not a counterattack on the road — harden the likely civil targets the moment a route is recaptured.",
  "CS-03":"A siege re-strikes the same infrastructure to sustain collapse, not to destroy it once — set redundant, self-contained services in place for any position that may be besieged."
};
const SIGNAL_CSS = {
  "CS-01":"From the July weekly Gaza reporting — the IDF combat-engineer tunnel demolition east of the Yellow Line, run alongside ceasefire-framework posture.",
  "CS-02":"From the July weekly Sudan reporting — the SAF recapture of the Khartoum–El-Obeid highway and the RSF's immediate retaliatory strikes on El-Obeid civil buildings.",
  "CS-03":"From the running July Sudan coverage — the 18-month El-Obeid siege and the near-daily re-striking of power, water, fuel and health infrastructure."
};
const APP_CSS = {
  "CS-01":{ verdict:"Use it, with changes",
    lead:"Engineer denial and ceasefire compliance can run in parallel — but only with pre-authorised ROE and a documentation standard that makes the work verifiable rather than a violation claim.",
    div:{ d:"Pre-authorise tunnel/underground demolition as compatible with ceasefire compliance where it targets confirmed military infrastructure east of an agreed line — engineers need standing ROE so operations are not delayed pending case-by-case approval.", o:"Div Comd, on Engineers and LEGAD advice.", a:"Issues standing rules of engagement defining the category of demolition permitted during a ceasefire, with the confirmation standard required.", t:"Confirmed military underground infrastructure is identified east of the agreed line.", x:"Standing authority speeds tempo but risks a compliance dispute if the confirmation standard slips.", m:"Demolition executed without pausing for case-by-case approval and without a sustained compliance breach." },
    bde:{ d:"Document and geolocate demolished infrastructure systematically to create a verifiable record for monitoring bodies and deter violation claims.", o:"Engineers, on Div direction.", a:"Adds a geolocated evidence standard (imagery/footage, coordinates) to every demolition task.", t:"A demolition is conducted under an active ceasefire framework.", x:"Evidence capture adds time and exposure at the site.", m:"Each demolition backed by a geolocated record; no unrebutted violation claim." } },
  "CS-02":{ verdict:"Use it, with changes",
    lead:"After a route is recaptured, expect a symbolic strike on civil administration, not a counterattack. Pre-harden the likely retaliation targets before the enemy reaches for them.",
    div:{ d:"When a major logistics route is recaptured, immediately assess and harden civil/administrative infrastructure in nearby friendly-held population centres — the most likely response is a symbolic strike on civil administration, not a counterattack on the route.", o:"Div Comd, on Engineers advice.", a:"Adds a post-recapture civil-infrastructure hardening step to the consolidation plan.", t:"A contested logistics route is recaptured within adversary drone range.", x:"Diverting engineer effort to civil buildings competes with hardening the route itself.", m:"Likely retaliation targets identified and hardened within 24 hours of recapture." },
    bde:{ d:"Add civil-administration and logistics-adjacent government buildings (banks, professional associations, courts) to critical-node protection wherever they sit within drone range of a contested front.", o:"Signals, on Div direction.", a:"Extends the critical-node protection list beyond military positions to symbolic civil targets.", t:"Civil-administration buildings sit within drone range of the front.", x:"A wider protection list stretches limited counter-UAS and hardening resources.", m:"The three most likely retaliation targets pre-identified and covered." } },
  "CS-03":{ verdict:"A warning, not a model",
    lead:"A siege is a campaign that re-strikes what it already broke. Survivability comes from redundant, non-networked essential services pre-positioned before the siege, not from defending the infrastructure in place.",
    div:{ d:"For any position expected to be besieged for an extended period, pre-position redundant, non-networked essential services — independent wells/water storage, dispersed small-scale power, hardened medical — since primary infrastructure will be re-struck repeatedly.", o:"Div Comd, on Engineers advice.", a:"Builds a siege-contingency infrastructure annex into the deployment plan, independent of the local grid.", t:"A position is assessed as likely to be besieged for an extended period.", x:"Redundant infrastructure is costly to pre-position and may go unused.", m:"Garrison and population sustainable on independent services through repeated strikes on the primary grid." },
    bde:{ d:"Track repeated strikes on the same infrastructure category as a deliberate degradation campaign — cumulative damage/repair cycles are an intelligence indicator of siege duration and adversary drone-stockpile sustainment, not isolated incidents.", o:"Signals, on Div direction.", a:"Logs strike-and-repair cycles by infrastructure category as a running indicator rather than one-off events.", t:"The same infrastructure category is struck repeatedly over time.", x:"Sustained tracking is collection-heavy over a long siege.", m:"Siege duration and adversary drone sustainment estimated from the cumulative pattern." } }
};
const ICT_CSS = {
  "CS-01":{ fmt:"Ceasefire-compliant engineer tasking exercise · Div Engineers + LEGAD · 90 min · ROE + evidence standard",
    set:"An active ceasefire framework is in force; confirmed military underground infrastructure is identified east of the agreed line.",
    run:["Define in advance the categories of demolition/clearance engineers may execute without further authorisation during the ceasefire.","Set the confirmation standard for 'military infrastructure' and the geolocated documentation standard for each task.","Execute a demolition and produce the verifiable record."],
    dec:"Can engineers act on standing ROE without pausing for case-by-case approval, while producing a record that withstands a violation claim?",
    twist:"Controller injects an ambiguous target that may be civilian — does the standard hold the task?",
    std:"Permitted categories and confirmation standard defined; demolition documented and geolocated; ambiguous target correctly held." },
  "CS-02":{ fmt:"Retaliation-pattern exercise · Div Engineers + Signals · 90 min · route + civil-node overlay",
    set:"Friendly forces have just recaptured a key logistics route within adversary drone range.",
    run:["Identify the three most likely adversary retaliation targets — civil-administration and logistics-adjacent government buildings.","Pre-harden them within a 24-hour window.","Confirm counter-UAS coverage over the likely retaliation set."],
    dec:"Do the staff correctly predict a symbolic civil-infrastructure strike rather than a route counterattack, and harden in time?",
    twist:"Controller strikes a fourth, unlisted civil building — was the prediction too narrow?",
    std:"Top three retaliation targets identified and hardened within 24 hrs; counter-UAS coverage confirmed." },
  "CS-03":{ fmt:"Long-duration siege sustainment exercise · Div Engineers + Signals · 2 hrs · infrastructure map + strike log",
    set:"A position faces repeated strikes on primary infrastructure over a simulated 18-month siege.",
    run:["Design redundant, non-networked essential services — water, power, medical — sufficient to sustain the garrison and population.","Log strike-and-repair cycles by category as a siege-duration/adversary-sustainment indicator.","Confirm services survive repeated re-striking of the primary grid."],
    dec:"Can the staff sustain the position on independent services through repeated strikes, and read the strike pattern for siege duration?",
    twist:"Controller strikes the backup water source — is there a third redundancy?",
    std:"Non-networked services sustain garrison and population; strike-and-repair cycles tracked as an indicator; redundancy survives the injects." }
};
const LEARN_CSS = {
  "CS-01":{ topic:"Ceasefire-compliant engineer ROE", status:"High utility", why:"Standing ROE lets engineers deny confirmed military infrastructure east of a line without case-by-case delay, and a geolocated record deters violation claims.", worked:"An IDF tunnel demolition ran in parallel with ceasefire posture, documented on release.", next:"Pre-authorise the permitted demolition categories and set a geolocated evidence standard." },
  "CS-02":{ topic:"Predictable retaliation targets", status:"Action now", why:"Loss of a route triggers a fast symbolic strike on civil administration, not a route counterattack.", worked:"The RSF struck El-Obeid's lawyers' association and a bank within hours of losing the highway.", next:"Pre-harden the most likely civil-administration retaliation targets within 24 hours of a recapture." },
  "CS-03":{ topic:"Siege as a degradation campaign", status:"Action now", why:"A siege re-strikes already-degraded infrastructure to sustain collapse — survivability comes from redundancy pre-positioned before the siege.", worked:"El-Obeid held 18 months on wells and external tanks once municipal water failed.", next:"Pre-position redundant, non-networked essential services and track strike-and-repair cycles as an indicator." }
};
const PACK_CSS = {
  kicker:"July 2026 · CS & CSS", titleLine:"for CS & CSS formations",
  changed:"July made combat support about parallel action and redundancy. IDF engineers demolished a Gaza tunnel alongside ceasefire compliance — standing ROE plus a geolocated record let denial and compliance run together. In Sudan, losing the El-Obeid highway drew an immediate symbolic strike on civil administration rather than a counterattack, so the likely retaliation targets must be hardened first. And the 18-month siege showed infrastructure is re-struck repeatedly: survivability comes from redundant, non-networked services pre-positioned before the siege, and from reading the strike pattern as a campaign.",
  stats:[
    {n:3, k:"Priority learnings", s:"For this month"},
    {n:3, k:"Hot contests", s:"Under adaptation watch"},
    {n:3, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat engineer ROE, civil infrastructure and siege redundancy as pre-planned problems. Let engineers act under standing ROE with a documentation standard, pre-harden the predictable retaliation targets, and pre-position non-networked essential services.",
  divPriorities:[
    "Pre-authorise ceasefire-compliant engineer demolition with a geolocated evidence standard.",
    "Pre-harden civil-administration retaliation targets within 24 hours of a route recapture.",
    "Pre-position redundant, non-networked essential services for any position that may be besieged."
  ],
  brigadeBluf:"For combat support this month: document every ceasefire-period demolition; harden banks, courts and associations as retaliation targets; and give besieged positions independent water, power and medical.",
  implications:[
    {ech:"Division HQ", t:"Turn engineer ROE, civil-infrastructure hardening and siege redundancy into pre-authorised, pre-positioned plans, not case-by-case reactions."},
    {ech:"Engineers", t:"Act under standing ceasefire ROE with a geolocated record; pre-harden retaliation targets and build siege-contingency infrastructure."},
    {ech:"Signals", t:"Add civil-administration nodes to critical-node protection and track strike-and-repair cycles as a siege indicator."}
  ],
  worked:[
    "Engineer denial run in parallel with ceasefire compliance, fully documented.",
    "Reading route loss as a trigger for a symbolic civil-infrastructure strike.",
    "A garrison sustained 18 months on redundant, non-networked services."
  ],
  failed:[
    "Delaying engineer denial for case-by-case approval during a ceasefire.",
    "Hardening only the recaptured route, not the civil buildings the enemy actually strikes.",
    "Defending primary infrastructure in place instead of pre-positioning redundancy."
  ],
  testICT:[
    "Define ceasefire-compliant engineer categories and document a demolition.",
    "Pre-harden the top three retaliation targets within 24 hours of a recapture.",
    "Sustain a besieged position on non-networked services through repeated strikes."
  ],
  sopReview:[
    "Standing ceasefire-period engineer ROE and evidence standard.",
    "Post-recapture civil-infrastructure hardening step.",
    "Siege-contingency non-networked services and strike-cycle tracking."
  ],
  contests:[], priorities:["CS-03","CS-01","CS-02"]
};
const PLANNING_CSS = [
  {b:"Pre-authorise ceasefire-compliant engineer tasks", p:"Define in advance the categories of demolition/clearance engineers may execute during a ceasefire against confirmed military infrastructure east of an agreed line, with the confirmation standard required — so operations are not delayed pending case-by-case approval."},
  {b:"Document every demolition", p:"Set a geolocated evidence standard (imagery/footage, coordinates) for every demolition under a ceasefire — a verifiable record for monitoring bodies that deters violation claims."},
  {b:"Pre-harden retaliation targets on recapture", p:"When a major route is recaptured, immediately identify and harden the most likely adversary retaliation targets — civil-administration and logistics-adjacent government buildings within drone range — within 24 hours."},
  {b:"Extend critical-node protection to civil targets", p:"Add banks, professional associations, courts and other symbolic civil buildings within drone range of a contested front to counter-UAS and hardening planning — they are lower-cost, higher-symbolic-value targets than military positions."},
  {b:"Pre-position siege redundancy", p:"For any position that may be besieged, pre-position redundant, non-networked essential services — independent wells/water storage, dispersed small-scale power, hardened medical — because primary infrastructure will be re-struck repeatedly, not once."},
  {b:"Track strike-and-repair cycles", p:"Log repeated strikes on the same infrastructure category as a deliberate degradation campaign; the cumulative damage/repair pattern is an indicator of siege duration and adversary drone-stockpile sustainment."}
];
const KEY_JUDGEMENTS_CSS = [
  "Engineer denial and ceasefire compliance can run together — with standing rules of engagement and a recorded account.",
  "Loss of a road drew a strike on <em>civil administration</em>, not a counterattack on the road.",
  "A siege re-strikes what it already broke — the aim is to sustain collapse, not to destroy once.",
  "Survivability comes from redundant, <em>self-contained</em> services set in place before the siege."
];
const BLUF_CSS = "In July combat support turned on <b>parallel action and redundancy</b>. IDF engineers demolished a Gaza tunnel <b>while holding the ceasefire</b> — standing rules of engagement and a recorded account let denial and compliance run together. In Sudan, losing the El-Obeid road drew an <b>immediate strike on civil administration</b>, not a counterattack — so harden those buildings first. And the 18-month siege <b>re-struck the same infrastructure</b> to sustain collapse: survivability comes from redundant, self-contained services set in place before the siege.";
const SUGGESTIONS_CSS = ["What changed for CS & CSS this month?","How do engineers work under a ceasefire?","How do we pre-harden retaliation targets?","What to rehearse in ICT","Lessons for Signals","Give me the bottom line"];

/* ===================== EXPEDITIONARY ===================== */
const FORMATIONS_EXP = {};
const _FMK_EXP = {};

const SERIALS_EXP = [
  { id:"EX-01", kind:"lesson", title:"A permanent border fence as a done deal after the ceasefire (Thailand–Cambodia)",
    conflict:"THA-KHM", theatre:"Thailand–Cambodia", verdict:"mixed", verdictLabel:"Mixed", dates:"late Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/EX-01.jpg", imageCredit:"DW News",
    blocks:[
      {l:"What happened", t:"By late July, nearly a year after the deadliest Thailand–Cambodia clashes in decades, Thailand pressed ahead with a permanent border fence along disputed sections, alongside a declared 'safety perimeter' against Cambodian sniper fire. Cambodia states it has lost at least 60 disputed sites and that 20,000+ of its citizens remain displaced. Formal dialogue had entirely stopped by late July, despite the ceasefire nominally holding."},
      {l:"So what", t:"'Ceasefire holding' does not mean static. Permanent construction under a non-violent ceasefire entrenches territorial control that diplomacy alone cannot reverse — and the <em>absence of dialogue</em> is itself a higher-risk indicator than difficult but active talks. For the observer role, both must be tracked and reported as escalatory trends, not routine quiet."}
    ],
    sources:[
      {u:"https://www.youtube.com/watch?v=d6nqBaVhfVc",n:"DW News — permanent border fence (28 Jul)"}
    ] },
  { id:"EX-02", kind:"capdev", title:"The drone as the main threat to fixed and besieged positions (Sudan)",
    conflict:"SDN", theatre:"Sudan", verdict:"threat", verdictLabel:"Threat pattern", dates:"Jul 2026",
    formations:[], multi:false, image:"/img/2026-07/EX-02.jpg", imageCredit:"CNN",
    blocks:[
      {l:"What happened", t:"On-the-ground reporting from besieged El-Obeid documented how ordinary civilian routines — collecting water, market visits — have become primary drone-strike opportunities, with 'you cannot hide from a drone strike' the lived experience. Drone strikes accounted for over 80% of documented civilian fatalities in Kordofan across the year; the tactic exploits predictable movement patterns rather than military positions directly."},
      {l:"So what", t:"For any force in a besieged or static posture the primary threat is airborne, not a ground incursion. Routine daily movement — water, resupply, market/logistics runs — is a predictable strike opportunity that demands deliberate randomisation, dispersal and overhead-cover routing, and a force-protection posture built around counter-UAS detection rather than perimeter defence."}
    ],
    sources:[
      {u:"https://www.cnn.com/2026/07/20/africa/drone-strikes-el-obeid-sudan-intl",n:"CNN — drone strikes on El-Obeid (20 Jul)"}
    ] }
];
const SUMMARY_EXP = {
  "EX-01":"A holding ceasefire is not a stable one: permanent construction secures ground that talks cannot recover, and a breakdown in talks is more dangerous than difficult talks — report both as warning signs.",
  "EX-02":"For a fixed or besieged force the main threat is the drone, striking predictable routines — water, resupply, market runs — so vary the routine under cover and build force protection around counter-drone, not the perimeter."
};
const SIGNAL_EXP = {
  "EX-01":"From the July weekly tracking of the Thailand–Cambodia border — permanent fence construction and a declared safety perimeter under a nominally holding ceasefire with dialogue stopped.",
  "EX-02":"From the July weekly Sudan reporting — the El-Obeid siege and drone strikes on civilian routine as the dominant cause of casualties in Kordofan."
};
const APP_EXP = {
  "EX-01":{ verdict:"A warning, not a model",
    lead:"A quiet ceasefire can conceal steady territorial consolidation. The observer duty is to treat permanent construction and the absence of dialogue as reportable escalatory trends, not routine calm.",
    div:{ d:"Track and report permanent construction (fencing, fortified perimeters) during a ceasefire as territorial consolidation — an operationally significant action, not a low-priority observation.", o:"Mission HQ, on the reporting cell's advice.", a:"Adds a standing reporting line for permanent construction and territorial change to the collection plan, distinct from kinetic-incident reporting.", t:"Any permanent construction observed inside a disputed or agreed-limit area.", x:"Raising 'quiet' construction to higher HQ risks appearing alarmist over a non-violent ceasefire.", m:"Construction and territorial change reported and escalated as a consolidation trend." },
    bde:{ d:"Report the absence of bilateral dialogue as a distinct indicator alongside kinetic incidents.", o:"Observer sections, on Mission HQ direction.", a:"Adds a 'state of dialogue' field to routine reporting so a zero-contact ceasefire is flagged as higher-risk.", t:"Formal dialogue between parties lapses while the ceasefire nominally holds.", x:"Dialogue status is harder to verify than kinetic events and may lag reality.", m:"A zero-dialogue ceasefire is flagged to higher HQ as an escalatory state." } },
  "EX-02":{ verdict:"A warning, not a model",
    lead:"For a besieged or static force the drone is the primary threat and it hunts routine. Force protection must be rebuilt around unpredictability and counter-UAS rather than perimeter defence.",
    div:{ d:"Plan force protection for extended static deployments on the assumption the primary threat is airborne, allocating counter-UAS detection and warning accordingly.", o:"Mission HQ, on force-protection advice.", a:"Re-weights the force-protection plan from ground-incursion defence to counter-UAS detection, warning and overhead cover.", t:"A deployment enters an extended static or besieged posture within drone range.", x:"Counter-UAS resourcing competes with the ground-threat posture units default to.", m:"Counter-UAS detection/warning in place before the static phase; posture no longer ground-threat-default." },
    bde:{ d:"Treat routine daily movement (water, resupply, market/logistics runs) as predictable drone-strike opportunities requiring deliberate randomisation, dispersal and overhead-cover routing.", o:"Section comd, on Mission HQ direction.", a:"Rewrites the daily routine for unpredictability and cover rather than efficiency — varied timing/routing, dispersed movement, covered water and resupply points.", t:"Sustained daily drone threat over a static position.", x:"Randomisation and cover cost time and efficiency in every routine task.", m:"No routine task follows a predictable, observable pattern; movement uses cover." } }
};
const ICT_EXP = {
  "EX-01":{ fmt:"Observer reporting exercise · Mission HQ + observer sections · 90 min · zone map + reporting template",
    set:"A 'quiet' ceasefire scenario: one party conducts ongoing permanent construction and no bilateral dialogue is taking place.",
    run:["Trainees report the scenario using the standard template.","Grade whether they flag permanent construction as territorial consolidation and zero dialogue as an escalatory indicator — not a stable status quo.","Escalate both to higher HQ with the reasoning."],
    dec:"Do the observers correctly read a non-violent but consolidating ceasefire as an escalatory trend requiring higher-HQ attention?",
    twist:"Controller adds a reassuring official statement that the ceasefire 'holds' — do trainees defer to it over the ground truth?",
    std:"Construction and absence of dialogue both flagged and escalated; official statement not taken over observed reality." },
  "EX-02":{ fmt:"Besieged-position force-protection exercise · Mission HQ + section comds · 2 hrs · routine + threat overlay",
    set:"A simulated static position under sustained daily drone threat must sustain water, resupply and market access.",
    run:["Redesign the standard daily routine for unpredictability and cover, prioritising survivability over efficiency.","Re-weight the force-protection plan from ground-incursion to counter-UAS detection and warning.","Identify the predictable movement patterns an adversary would target and break them."],
    dec:"Can trainees convert an efficient but predictable routine into an unpredictable, covered one, and re-orient force protection to the airborne threat?",
    twist:"Controller reports a strike on the water point during the serial — re-plan collection under threat.",
    std:"No routine task remains predictable/observable; counter-UAS posture adopted; water/resupply continue under threat." }
};
const LEARN_EXP = {
  "EX-01":{ topic:"Consolidation under a quiet ceasefire", status:"High utility", why:"Permanent construction during a non-violent ceasefire entrenches territory diplomacy can't reverse; zero dialogue is a higher-risk state than difficult talks.", worked:"Thailand entrenched control through fencing and a safety perimeter while talks lapsed.", next:"Report construction and absence of dialogue as escalatory indicators, not routine quiet." },
  "EX-02":{ topic:"Airborne threat to static positions", status:"Action now", why:"For a besieged or static force the drone is the primary threat and it hunts predictable routine, not the perimeter.", worked:"Drones caused 80%+ of civilian casualties in Kordofan by exploiting routine movement.", next:"Randomise daily routines with overhead cover and re-orient force protection to counter-UAS." }
};
const PACK_EXP = {
  kicker:"July 2026 · Expeditionary", titleLine:"for expeditionary formations",
  changed:"July was consolidation and the drone. Thailand turned a 'holding' ceasefire into permanent facts on the ground — a border fence and a declared safety perimeter while formal dialogue lapsed entirely, a state riskier than difficult talks. In Sudan the drone became the dominant threat to static and besieged positions, hunting the predictable routines of a besieged population rather than the perimeter. For deployed missions: report permanent construction and the absence of dialogue as escalatory trends, and rebuild force protection around counter-UAS and unpredictability.",
  stats:[
    {n:2, k:"Priority learnings", s:"For this month"},
    {n:2, k:"Hot contests", s:"Under adaptation watch"},
    {n:2, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat a quiet ceasefire and a static posture as active problems. Report construction and zero dialogue as escalatory, assume the drone is the primary threat, and break the pattern of life around essential routines.",
  divPriorities:[
    "Report permanent construction and the absence of dialogue as escalatory indicators.",
    "Plan force protection for static deployments around counter-UAS, not ground incursion.",
    "Break the pattern of life around water, resupply and market routines."
  ],
  brigadeBluf:"For deployed missions this month: flag consolidation under a quiet ceasefire; assume the drone hunts routine; and randomise essential movement under overhead cover.",
  implications:[
    {ech:"Mission HQ", t:"Read a non-violent but consolidating ceasefire as an escalatory trend, and resource force protection against the airborne threat."},
    {ech:"Observer sections", t:"Report construction and dialogue status as distinct indicators alongside kinetic incidents."},
    {ech:"Deployed force", t:"Randomise essential daily movement with overhead cover; assume the drone hunts routine, not the perimeter."}
  ],
  worked:[
    "Reading permanent construction as territorial consolidation under a quiet ceasefire.",
    "Flagging zero dialogue as a higher-risk state than difficult talks.",
    "Recognising the drone as the primary threat to static positions."
  ],
  failed:[
    "Treating a 'holding' ceasefire as a stable status quo.",
    "Deferring to official statements over observed ground truth.",
    "Defaulting to a ground-threat posture against an airborne threat."
  ],
  testICT:[
    "Report a quiet ceasefire with construction and no dialogue as an escalatory trend.",
    "Redesign a besieged position's daily routine for unpredictability and cover.",
    "Re-weight force protection from ground incursion to counter-UAS."
  ],
  sopReview:[
    "Standing reporting lines for construction and dialogue status.",
    "Counter-UAS force-protection posture for static deployments.",
    "Pattern-of-life randomisation for essential routines."
  ],
  contests:[], priorities:["EX-02","EX-01"]
};
const PLANNING_EXP = [
  {b:"Report consolidation, not just contact", p:"Add a standing reporting line for permanent construction and territorial change during a ceasefire, distinct from kinetic-incident reporting — treat fencing and fortified perimeters as operationally significant."},
  {b:"Track the state of dialogue", p:"Add a 'state of dialogue' field to routine reporting. A ceasefire with zero bilateral contact is a higher-risk state than one with active, if difficult, talks — flag it as such."},
  {b:"Assume the airborne threat is primary", p:"For any extended static or besieged deployment, plan force protection on the assumption the primary threat is drone, not ground incursion — allocate counter-UAS detection, warning and overhead cover from the start."},
  {b:"Break the pattern of life", p:"Redesign routine daily movement — water, resupply, market/logistics runs — for unpredictability and cover: varied timing and routing, dispersed movement, covered essential points. Efficiency is subordinate to survivability."}
];
const KEY_JUDGEMENTS_EXP = [
  "A holding ceasefire is not a stable one — permanent construction can secure ground that talks cannot recover.",
  "A breakdown in talks is more dangerous than difficult but continuing talks.",
  "For a fixed or besieged force the main threat is the <em>drone</em>, not a ground attack.",
  "The drone strikes <em>routine</em> — predictable daily movement is the target, not the perimeter."
];
const BLUF_EXP = "In July the expeditionary picture was <b>consolidation and the drone</b>. Thailand turned a holding ceasefire into permanent facts on the ground — a fence and a safety line while talks stopped, a more dangerous state than difficult talks. In Sudan the drone became the <b>main threat to fixed positions</b>, striking the predictable routines of a besieged population rather than the perimeter. Report construction and the breakdown of talks as warning signs, and set fixed positions on a <b>counter-drone posture</b> with varied routine.";
const SUGGESTIONS_EXP = ["What changed for expeditionary this month?","How do we report consolidation under a quiet ceasefire?","How do we protect a static position from drones?","What to rehearse in ICT","Lessons for observer sections","Give me the bottom line"];
/* ===================== FRAME — the three command sections =====================
   Each package is reorganised into three analytical buckets:
   · Opportunities  — EXTERNAL enablers/trends/adversary missteps to leverage
                      (if we'd have to build/buy it ourselves it is Cap Dev, not this)
   · Vulnerabilities — INTERNAL risks/gaps these conflicts expose (tactics,
                      technical deficiencies, supply-chain or training gaps)
   · Capability Development — INTERNAL deliberate actions to exploit an opportunity
                      or fix a vulnerability (doctrine, training, procurement)
   Each item: {t: headline, d: 1–2 line so-what, id: source serial}. */
const FRAME_M = {
  bluf:"July rewarded adaptation over predictability. Enemy resupply dispersed and moved under civilian cover as soon as Ukrainian interdiction took hold, defeating convoy-based detection; in southern Lebanon the IDF engaged a mobile team within minutes under continuous surveillance and cleared a security zone over a sustained, phased operation. The habits that draw losses are convoy-based detection, rushed single-day clearance, and reactive resupply. The response is deliberate: detect resupply by movement pattern rather than convoy signature, hold surveillance able to engage mobile teams quickly, phase clearance under continuous overwatch, and disperse friendly resupply from the outset.",
  opportunities:[
    {t:"Engage mobile teams under persistent surveillance", d:"Held under continuous surveillance, the IDF engaged a Hezbollah team on a motorbike within minutes of locating it. Cover a zone closely enough to engage moving teams, not only fixed positions.", id:"M-02"},
    {t:"Disperse and conceal resupply under surveillance", d:"Russia reduced its losses by moving fuel and ammunition in civilian vehicles and buildings rather than convoys. Apply the same to friendly resupply before the enemy begins attriting it.", id:"M-01"}
  ],
  vulnerabilities:[
    {t:"Convoy-based detection fails once the enemy disperses", d:"Detection built on convoy signatures goes blind when the enemy spreads resupply into ordinary civilian movement; the fall in tempo is the only indicator.", id:"M-01"},
    {t:"Rushed clearance and reactive resupply", d:"Treating area clearance as a single day, or dispersing resupply only after losses, cedes ground the enemy has already taken.", id:"M-02"}
  ],
  capdev:[
    {t:"Detect resupply by movement pattern, not convoy signature", d:"Re-orient surveillance to unusual movement — civilian vehicles massing near known depots, activity at disused buildings — and set a standard for how quickly a located mobile target can be engaged.", id:"M-01"},
    {t:"Phase clearance; plan dispersed resupply from the outset", d:"Resource area clearance as a phased operation under continuous overwatch, and build dispersed, concealed resupply into the sustainment plan from the start.", id:"M-02"}
  ]
};
const FRAME_S = {
  bluf:"July turned deep fires into a contest of signature and coverage. Russia jammed the Starlink satellite link itself — a first — but the emitter was conspicuous and Ukraine destroyed it within hours, restoring the link at once. Ukraine's strike campaign worked methodically down a national target list until no major refinery remained untouched, forcing fuel rationing across most of Russia despite heavy interception. And the IDF struck the enemy's internal-security command as a target set distinct from the military wing. Catalogue and hunt the jammer, leave the enemy no untouched target, and hold internal-security targeting separate from military.",
  opportunities:[
    {t:"Hunt the satellite-link jammer", d:"The jammer traded concealment for power and was easy to locate; destroying it restored the link at once — faster than fielding a jam-resistant alternative.", id:"S-01"},
    {t:"Leave the enemy no untouched target", d:"Working a national refinery list down to the last untouched plant degraded the enemy's fuel supply nationwide, even against heavy per-raid interception.", id:"S-02"},
    {t:"Strike the enemy's internal-security command", d:"Targeting internal security degrades the enemy's hold over the population rather than its combat power — a distinct target set with a distinct effect.", id:"S-03"}
  ],
  vulnerabilities:[
    {t:"Mistaking link jamming for ordinary jamming", d:"Treating a satellite-link jammer as a routine drone-link jamming problem wastes the counter and prolongs the outage.", id:"S-01"},
    {t:"Measuring strike by damage, not coverage", d:"Judging a campaign by cumulative damage leaves the enemy untouched targets; interception then looks like success while capacity survives.", id:"S-02"},
    {t:"Targeting the enemy as one undivided set", d:"Grouping internal-security commanders with military targets loses the distinct effect on the enemy's control of its population.", id:"S-03"}
  ],
  capdev:[
    {t:"Build a jammer signature library and a rapid strike", d:"Catalogue satellite-link jammers as their own target set and hold a priority strike that restores the link on the emitter's destruction.", id:"S-01"},
    {t:"Keep a live target list and sustain the tempo", d:"Maintain a ranked national-infrastructure list and resource sustained, dispersed strike sized against expected interception.", id:"S-02"},
    {t:"Hold internal-security targeting separately", d:"Keep internal-security targets as a distinct set with their own aim, and watch the instability that follows a strike.", id:"S-03"}
  ]
};
const FRAME_CSS = {
  bluf:"July made combat support a question of parallel action and redundancy. IDF engineers demolished a Gaza tunnel while holding the ceasefire posture — standing rules of engagement and a recorded account let denial and compliance run together. In Sudan, the loss of the El-Obeid road drew an immediate strike on civil administration rather than a counterattack, so the likely targets must be hardened first. And the 18-month siege re-struck the same infrastructure repeatedly to sustain collapse: survivability comes from redundant, self-contained services set in place before the siege, and from reading the strike pattern as a campaign.",
  opportunities:[
    {t:"Run denial and ceasefire compliance together", d:"Standing rules of engagement and a recorded account let engineers demolish confirmed military infrastructure beyond the agreed line without pausing for approval or breaching the ceasefire.", id:"CS-01"},
    {t:"Anticipate the retaliation, not a counterattack", d:"Losing the road drew a quick strike on civil administration — hardening the likely targets first beats defending a route the enemy will not attack.", id:"CS-02"}
  ],
  vulnerabilities:[
    {t:"Waiting on case-by-case approval under a ceasefire", d:"Without standing rules of engagement and a recorded account, engineer denial stalls awaiting approval and invites accusations of a breach.", id:"CS-01"},
    {t:"Exposed civil administration and defending in place", d:"Unhardened civil buildings within drone range are the enemy's chosen target, and defending fixed infrastructure cedes a siege designed to re-strike it.", id:"CS-03"}
  ],
  capdev:[
    {t:"Set standing engineer rules of engagement and a recording standard", d:"Pre-authorise the demolition permitted during a ceasefire, with a recorded, located account that answers any accusation of a breach.", id:"CS-01"},
    {t:"Pre-harden likely targets and build siege redundancy", d:"Harden civil administration on recapture of a route, and set redundant, self-contained water, power and medical for any position that may be besieged.", id:"CS-03"}
  ]
};
const FRAME_EXP = {
  bluf:"July was consolidation and the drone. Thailand turned a holding ceasefire into permanent facts on the ground — a border fence and a declared safety line while talks stopped altogether, a more dangerous state than difficult talks. In Sudan the drone became the main threat to fixed positions, striking the predictable routines of a besieged population rather than the perimeter. For deployed missions: report construction and the breakdown of talks as warning signs, treat the drone as the main threat, and break the routine around essential tasks.",
  opportunities:[
    {t:"Read consolidation under a quiet ceasefire", d:"Permanent construction during a ceasefire secures ground that talks cannot recover — a warning sign to detect and report, not routine quiet.", id:"EX-01"},
    {t:"Treat a breakdown in talks as a warning", d:"A ceasefire with no contact between the parties is more dangerous than one with difficult talks — report it alongside incidents.", id:"EX-01"}
  ],
  vulnerabilities:[
    {t:"Mistaking a holding ceasefire for a stable one", d:"Recording only incidents lets territorial consolidation and a breakdown in talks pass as routine quiet.", id:"EX-01"},
    {t:"A ground-threat posture against the drone", d:"For a fixed or besieged force the main threat is the drone, and it strikes routine; a perimeter-defence posture leaves daily movement exposed.", id:"EX-02"}
  ],
  capdev:[
    {t:"Report construction and the state of talks", d:"Add standing reporting on permanent construction and on whether the parties are talking, so consolidation and a breakdown are flagged as warning signs.", id:"EX-01"},
    {t:"Adopt a counter-drone posture and vary the routine", d:"Re-weight force protection to counter-drone detection and warning, and vary essential daily movement under cover.", id:"EX-02"}
  ]
};
/* Merged Manoeuvre & Expeditionary bundle for the combined tab. FRAME sections
   and the overview arrays are concatenated (lossless); the lede is a concise
   synthesis of the two packages' BLUFs — no new claims. Per-serial echelons are
   resolved via SUBPKG_OF, so this bundle's `echelons` is only a fallback. */
const FRAME_MANEXP = {
  bluf:"July rewarded adaptation over predictability, across the close fight and deployed missions alike. Enemy resupply dispersed and moved under civilian cover as soon as interdiction took hold, defeating convoy-based detection; a mobile team was engaged within minutes under continuous surveillance; a holding ceasefire concealed permanent territorial consolidation while talks stopped; and the drone became the main threat to fixed positions, striking predictable routine rather than the perimeter. The response is deliberate: detect resupply by movement pattern, engage mobile teams quickly under surveillance, report construction and the breakdown of talks as warning signs, and set fixed positions on a counter-drone posture with varied routine.",
  opportunities: FRAME_M.opportunities.concat(FRAME_EXP.opportunities),
  vulnerabilities: FRAME_M.vulnerabilities.concat(FRAME_EXP.vulnerabilities),
  capdev: FRAME_M.capdev.concat(FRAME_EXP.capdev)
};
const PACK_MANEXP = Object.assign({}, PACK_M, {
  kicker:"July 2026 · Manoeuvre & Expeditionary",
  titleLine:"for manoeuvre & expeditionary formations",
  changed: [PACK_M.changed, PACK_EXP.changed].filter(Boolean).join(" "),
  stats: (PACK_M.stats||[]).map((s,i)=>Object.assign({}, s, {n: s.n + ((PACK_EXP.stats||[])[i]||{n:0}).n})),
  commandLens: PACK_M.commandLens + " " + PACK_EXP.commandLens,
  brigadeBluf: [PACK_M.brigadeBluf, PACK_EXP.brigadeBluf].filter(Boolean).join(" "),
  divPriorities: (PACK_M.divPriorities||[]).concat(PACK_EXP.divPriorities||[]),
  implications: (PACK_M.implications||[]).concat(PACK_EXP.implications||[]),
  contests: (PACK_M.contests||[]).concat(PACK_EXP.contests||[]),
  worked: (PACK_M.worked||[]).concat(PACK_EXP.worked||[]),
  failed: (PACK_M.failed||[]).concat(PACK_EXP.failed||[]),
  sopReview: (PACK_M.sopReview||[]).concat(PACK_EXP.sopReview||[]),
  testICT: (PACK_M.testICT||[]).concat(PACK_EXP.testICT||[])
});
const PKG = {
  MANEXP:    { SERIALS:SERIALS_M.concat(SERIALS_EXP), SUMMARY:Object.assign({},SUMMARY_M,SUMMARY_EXP), SIGNAL:Object.assign({},SIGNAL_M,SIGNAL_EXP), APP:Object.assign({},APP_M,APP_EXP), ICT:Object.assign({},ICT_M,ICT_EXP), LEARN:Object.assign({},LEARN_M,LEARN_EXP), PACK:PACK_MANEXP, FRAME:FRAME_MANEXP, PLANNING:PLANNING_M.concat(PLANNING_EXP), KEY_JUDGEMENTS:KEY_JUDGEMENTS_M.concat(KEY_JUDGEMENTS_EXP), FORMATIONS:Object.assign({},FORMATIONS_M,FORMATIONS_EXP), BLUF:[BLUF_TEXT_M,BLUF_EXP].filter(Boolean).join(" "), SUGGESTIONS:[...new Set(SUGGESTIONS_M.concat(SUGGESTIONS_EXP))], FMK:Object.assign({},_FMK_M,_FMK_EXP), echelons:["Division","Brigade"] },
  MANOEUVRE: { SERIALS:SERIALS_M, SUMMARY:SUMMARY_M, SIGNAL:SIGNAL_M, APP:APP_M, ICT:ICT_M, LEARN:LEARN_M, PACK:PACK_M, FRAME:FRAME_M, PLANNING:PLANNING_M, KEY_JUDGEMENTS:KEY_JUDGEMENTS_M, FORMATIONS:FORMATIONS_M, BLUF:BLUF_TEXT_M, SUGGESTIONS:SUGGESTIONS_M, FMK:_FMK_M, echelons:["Division","Brigade"] },
  SENSE:     { SERIALS:SERIALS_S, SUMMARY:SUMMARY_S, SIGNAL:SIGNAL_S, APP:APP_S, ICT:ICT_S, LEARN:LEARN_S, PACK:PACK_S, FRAME:FRAME_S, PLANNING:PLANNING_S, KEY_JUDGEMENTS:KEY_JUDGEMENTS_S, FORMATIONS:FORMATIONS_S, BLUF:BLUF_S, SUGGESTIONS:SUGGESTIONS_S, FMK:_FMK_S, echelons:["Division","Unit"] },
  CSS:       { SERIALS:SERIALS_CSS, SUMMARY:SUMMARY_CSS, SIGNAL:SIGNAL_CSS, APP:APP_CSS, ICT:ICT_CSS, LEARN:LEARN_CSS, PACK:PACK_CSS, FRAME:FRAME_CSS, PLANNING:PLANNING_CSS, KEY_JUDGEMENTS:KEY_JUDGEMENTS_CSS, FORMATIONS:FORMATIONS_CSS, BLUF:BLUF_CSS, SUGGESTIONS:SUGGESTIONS_CSS, FMK:_FMK_CSS, echelons:["Division","Unit"] },
  EXPED:     { SERIALS:SERIALS_EXP, SUMMARY:SUMMARY_EXP, SIGNAL:SIGNAL_EXP, APP:APP_EXP, ICT:ICT_EXP, LEARN:LEARN_EXP, PACK:PACK_EXP, FRAME:FRAME_EXP, PLANNING:PLANNING_EXP, KEY_JUDGEMENTS:KEY_JUDGEMENTS_EXP, FORMATIONS:FORMATIONS_EXP, BLUF:BLUF_EXP, SUGGESTIONS:SUGGESTIONS_EXP, FMK:_FMK_EXP, echelons:["Mission HQ","Section"] }
};

/* CS&I "Manoeuvre" digest - content DATA, extracted from index.html.
   Loaded by index.html via <script src="data.js"> BEFORE the render script.
   Pure data only (serials, unit/formation cards, packages, legend text) - no behaviour.
   Top-level const/let here share global scope with the render script, so names resolve as before.
   Edit monthly content HERE; keep each object's keys/shape the render code expects. */

/* ===================== DATA ===================== */
const SERIALS_M = [
  { id:"M-01", kind:"lesson", title:"Drone-delivered explosives under a ceasefire posture (Lebanon)",
    conflict:"ISR-LBN", theatre:"Israel–Lebanon", verdict:"threat", verdictLabel:"Observed threat pattern", dates:"September 2026",
    formations:[], multi:false, image:"/img/2026-09/M-01.jpg", imageCredit:"PBS NewsHour",
    blocks:[
      {l:"What happened", t:"UN News reported that UNIFIL peacekeepers observed drones dropping explosive-filled jerrycans near Al Mansuri between the preceding Thursday and Sunday, with at least nine explosions recorded on the Saturday. Peacekeepers also logged airstrikes, artillery activity, troop deployments, engineering work and vehicle movement, and facilitated 16 humanitarian missions on the Thursday and Friday."},
      {l:"So what", t:"An expeditionary mission may have to maintain liaison and humanitarian support while the local threat remains active. Force-protection assumptions should be tied to observed activity and task exposure rather than to the formal ceasefire designation."},
      {l:"Evidence & limits", t:"UN reporting supports the occurrence of the observed activity and the mission facilitation. It does not establish munition specifications, intent for each drop, engagement effectiveness or any universal counter-drone solution."}
    ],
    sources:[
      {u:"https://news.un.org/en/story/2026/09/1168333",n:"UN News — Lebanon violations and humanitarian missions (14 Sep)"},
      {u:"https://www.pbs.org/newshour/show/on-the-ground-with-un-peacekeepers-as-lebanon-israel-mission-nears-its-end",n:"PBS NewsHour — UN peacekeepers as the Lebanon mission nears its end"}
    ] },
  { id:"M-02", kind:"lesson", title:"Transport exposure beyond the forward area (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"threat", verdictLabel:"Reported exposure pattern", dates:"13–27 Sep 2026",
    formations:[], multi:false, image:"/img/2026-09/M-02.jpg", imageCredit:"Al Jazeera",
    blocks:[
      {l:"What happened", t:"Al Jazeera reported that a Russian drone struck a Ukrainian locomotive roughly 5 km from the Polish border on 13 September and described attacks on crossings towards Moldova. Reuters reported on 27 September that strikes had increasingly continued through the day rather than predominantly at night."},
      {l:"So what", t:"Transport scheduling should account for both geographic reach and temporal persistence. Distance from the front and daylight alone are insufficient grounds for reducing protection or contingency planning."},
      {l:"Evidence & limits", t:"These accounts document selected incidents and a reported timing shift. They do not establish that every western route is interdicted, nor quantify the military throughput lost."}
    ],
    sources:[
      {u:"https://www.aljazeera.com/news/2026/9/18/russia-targets-ukraines-peaceful-borders",n:"Al Jazeera — strikes near Ukraine's western borders (18 Sep)"},
      {u:"https://www.reuters.com/world/russian-attacks-kills-three-ukrainian-cities-strikes-hit-kyiv-districts-2026-09-27/",n:"Reuters — daytime strikes and communications infrastructure (27 Sep)"}
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
const PACK_M = {
  kicker:"September 2026 · Manoeuvre", titleLine:"for manoeuvre & expeditionary formations",
  changed:"September reporting shows that deployed forces and support movement cannot rely on either a nominal ceasefire or a night-only threat model. In Lebanon, UN personnel recorded drone-delivered explosives and active military operations while continuing humanitarian facilitation; in Ukraine, attacks increasingly extended through the day and towards western transport connections. These are exposure and mission-continuity observations, not proof of a new manoeuvre doctrine. For deployed and manoeuvre formations the message is to tie force protection to observed activity rather than the ceasefire label, and to plan the continuity of essential movement and liaison under a persistent, extended-reach drone threat.",
  stats:[
    {n:2, k:"Priority observations", s:"For this month"},
    {n:2, k:"Exposure watch", s:"Under adaptation watch"},
    {n:2, k:"For local validation", s:"Next ICT cycle"}
  ],
  commandLens:"Treat the ceasefire label and the night/distance assumption as hypotheses to test, not planning facts. Assess actual activity from observed strikes, engineering and movement; protect the essential tasks that must continue under recurring drone alerts; and report observed incidents separately from confirmed outcomes.",
  divPriorities:[
    "Base force protection on observed activity — strikes, engineering work, troop movement, access restrictions — not on the ceasefire designation.",
    "Identify the essential tasks (liaison, medical support, essential movement) that must continue through recurring drone warnings, with alternative timings, routes and abort criteria.",
    "Separate observed incidents, party claims, access status and mission output in reporting."
  ],
  brigadeBluf:"For deployed and close-fight tasks this month: keep a current force-protection assessment regardless of the ceasefire label; plan essential movement for extended-reach, round-the-clock drone exposure; and log what was observed apart from what was confirmed.",
  implications:[
    {ech:"Division HQ", t:"Hold a current, activity-based force-protection assessment that does not defer to a ceasefire designation, and resource the continuity of essential mission tasks."},
    {ech:"Brigades", t:"Plan essential movement and liaison for persistent daytime and extended-reach drone exposure, with alternative timings, routes and abort criteria."},
    {ech:"Deployed units", t:"Record observed incidents, party claims, access status and mission output as distinct lines so threat is not confused with outcome."}
  ],
  worked:[
    "Facilitating humanitarian missions while logging the active threat around them, rather than standing down on the ceasefire label.",
    "Reading daytime and far-rear transport incidents as evidence that distance and darkness no longer confer safety.",
    "Keeping observation disciplined — recording what was seen, not inferring effect."
  ],
  failed:[
    "Treating a ceasefire designation as a substitute for a current force-protection assessment.",
    "Assuming daytime or geographically distant movement is inherently safer.",
    "Blurring threats observed with outcomes confirmed in mission reporting."
  ],
  testICT:[
    "Run a force-protection estimate for a nominal-ceasefire area using only observed activity.",
    "Replan an essential movement for extended-reach, round-the-clock drone exposure with abort criteria.",
    "Grade a mission log on whether it separates observed incidents from confirmed outcomes."
  ],
  sopReview:[
    "Activity-based force-protection assessment independent of the ceasefire label.",
    "Essential-task continuity list with alternative timings, routes and abort criteria.",
    "Reporting standard separating observed incidents, claims, access and output."
  ],
  contests:[], priorities:["M-01","M-02"]
};

/* ===================== SENSE & STRIKE ===================== */
const LEARN_M = {
  "M-01":{ topic:"Force protection under a nominal ceasefire", status:"For validation", why:"A ceasefire is a political condition, not a current threat assessment — monitoring and humanitarian tasks continued amid drones, airstrikes, artillery and engineering work.", worked:"UNIFIL kept facilitating humanitarian missions while logging the active threat around them.", next:"Tie force-protection assumptions to observed activity and task exposure, and plan continuity of essential tasks under recurring alerts." },
  "M-02":{ topic:"Transport exposure beyond the forward area", status:"For validation", why:"Strikes reached a locomotive near the Polish border and crossings towards Moldova, and reportedly extended through the day — distance and darkness no longer confer safety.", worked:"Reporting made the exposure visible early enough to question night/distance scheduling assumptions.", next:"Schedule movement against geographic reach and temporal persistence, with alternative timings, routes and contingency planning." }
};
const CONFLICT_CLASS = {"RUS-UKR":"t-rusukr","ISR-LBN":"t-isrlbn","THA-KHM":"t-thakhm","ISR-HMS":"t-isrhms","USI-IRN":"t-usiirn","SDN":"t-sdn"};
const CONFLICT_CODE = {"RUS-UKR":"RUS–UKR","ISR-LBN":"ISR–LBN","THA-KHM":"THA–KHM","ISR-HMS":"ISR–HMS","USI-IRN":"USI–IRN","SDN":"SUDAN"};

/* ===================== MANOEUVRE ===================== */
const KIND_LABEL = {lesson:"Lesson", action:"Tactical action", capdev:"Capability dev"};

const PLANNING_M = [
  {b:"Test the movement assumption", p:"Ask which movement assumptions depend on darkness, daylight or distance rather than current evidence — and revalidate them against observed activity for the area."},
  {b:"Name the tasks that must continue", p:"Identify the essential deployed tasks (liaison, medical support, essential movement) that must continue during prolonged drone alerts, and give each alternative timings, routes and abort criteria."},
  {b:"Separate observed from confirmed", p:"Keep the mission log able to distinguish threats observed from outcomes actually confirmed — observed incidents, party claims, access status and mission output as distinct lines."}
];
const KEY_JUDGEMENTS_M = [
  "A ceasefire is a <em>political condition</em>, not a substitute for a current force-protection assessment.",
  "Threat exposure includes movement and task continuity, not only the security of a fixed site.",
  "Distance from the front and darkness are no longer, on their own, grounds to reduce protection."
];
const SUMMARY_M = {
  "M-01":"A ceasefire is a political condition, not a current threat assessment — UNIFIL recorded drones, airstrikes and engineering work while still running humanitarian missions, so tie force protection to observed activity and plan the continuity of essential tasks under recurring alerts.",
  "M-02":"Strikes reached a locomotive near the Polish border and extended through the day, so schedule transport against geographic reach and temporal persistence — distance and darkness alone no longer justify reduced protection."
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
  "M-01":"From the September weekly reporting on Lebanon — UNIFIL observations of drone-dropped explosives near Al Mansuri alongside airstrikes, artillery, engineering work and continued humanitarian facilitation.",
  "M-02":"From the September weekly tracking of Ukraine's rear — a drone strike on a locomotive near the Polish border, attacks towards Moldova crossings, and a reported shift to daytime strikes."
};
const APP_M = {
  "M-01":{ verdict:"A warning, not a model",
    lead:"A ceasefire designation is not a force-protection assessment. Base protection on observed activity, and plan which essential tasks must continue while the local threat remains live.",
    div:{ d:"Maintain a current, activity-based force-protection assessment for any nominal-ceasefire area, driven by observed strikes, engineering work, troop movement and access restrictions rather than the ceasefire label.", o:"Div/Mission HQ, on the reporting cell's advice.", a:"Replaces a label-driven posture with a standing, activity-based assessment updated from observed activity.", t:"A deployed task continues in an area under a nominal ceasefire.", x:"An activity-based posture is collection-heavy and may read as alarmist over a 'quiet' ceasefire.", m:"Force-protection posture tracks observed activity, not the designation." },
    bde:{ d:"Define which essential tasks (liaison, medical support, essential movement) must continue through recurring drone warnings, each with alternative timings, routes and abort criteria.", o:"Deployed unit comd, on Mission HQ direction.", a:"Writes a mission-continuity plan naming the must-continue tasks and their abort criteria rather than suspending all movement on each alert.", t:"Recurring drone warnings interrupt essential tasks.", x:"Continuity under threat accepts residual risk to keep tasks running.", m:"Essential tasks continue under alerts with pre-set alternatives and abort criteria." } },
  "M-02":{ verdict:"A warning, not a model",
    lead:"Distance and darkness no longer confer safety on movement. Schedule transport against geographic reach and temporal persistence, with contingency built in.",
    div:{ d:"Plan rear and cross-border movement on the assumption that strikes reach far-rear transport connections and continue through the day, not only at night near the front.", o:"Div HQ, on G4 advice.", a:"Drops the night/distance safety assumption from movement planning and resources contingency for far-rear routes.", t:"Essential movement runs through the far rear or near a border connection.", x:"Round-the-clock contingency reduces throughput and raises coordination load.", m:"Movement plans hold against daytime, far-rear strikes without a single assumed-safe window." },
    bde:{ d:"Give each essential movement alternative timings, routes and abort criteria rather than a fixed schedule keyed to darkness or distance.", o:"Unit comd, on S4 advice.", a:"Builds alternates and abort criteria into movement orders and rehearses rerouting.", t:"A route is assessed as exposed to extended-reach, daytime strike.", x:"Alternates and aborts cost time and fuel.", m:"Essential movement completes via alternates when the primary window is struck." } }
};
const ICT_M = {
  "M-01":{ fmt:"Ceasefire force-protection estimate · Div/Mission HQ + reporting cell · 90 min · activity overlay",
    set:"A deployed task must continue in an area under a nominal ceasefire while drones, airstrikes, artillery and engineering work are observed nearby.",
    run:["Build the force-protection estimate from observed activity, not the ceasefire label.","Name the essential tasks that must continue and set alternative timings, routes and abort criteria.","Record observed incidents, party claims, access status and mission output as separate lines."],
    dec:"Does the staff protect the force on observed activity and keep the essential tasks running without deferring to the ceasefire designation?",
    twist:"Controller issues an official statement that the ceasefire 'holds' — does the posture defer to it over observed activity?",
    std:"Posture tracks observed activity; essential tasks continue with abort criteria; incidents separated from outcomes." },
  "M-02":{ fmt:"Rear-movement planning drill · Div G4 + unit S4 · 90 min · route + threat overlay",
    set:"An essential movement must run through the far rear, near a border connection, under daytime and extended-reach drone threat.",
    run:["Drop the night/distance safety assumption and plan against geographic reach and temporal persistence.","Build alternative timings, routes and abort criteria for the movement.","Reroute on a simulated strike against the primary window."],
    dec:"Can the movement complete when distance and darkness no longer confer safety, using pre-set alternates and aborts?",
    twist:"Controller strikes the alternate route in daylight — is there a third option?",
    std:"No single assumed-safe window; alternates and aborts in place; movement completes under daytime far-rear strike." }
};
const THEATRE_NAME = {"RUS-UKR":"Russia–Ukraine","ISR-LBN":"Israel–Lebanon","THA-KHM":"Thailand–Cambodia","ISR-HMS":"Israel–Gaza","USI-IRN":"US/Israel–Iran","SDN":"Sudan"};
const BLUF_TEXT_M = "In September, deployed forces and support movement could not rely on either a <b>nominal ceasefire</b> or a <b>night-only threat model</b>. In Lebanon, UN personnel recorded drone-delivered explosives and active military operations while continuing humanitarian facilitation; in Ukraine, attacks extended through the day and towards <b>western transport connections</b>. Tie force protection to <b>observed activity</b>, not the ceasefire label, and plan the continuity of essential movement and liaison under a persistent, extended-reach drone threat. These are exposure and mission-continuity observations, not a new manoeuvre doctrine.";
const SUGGESTIONS_M = ["What changed for manoeuvre this month?","How do we protect a force under a nominal ceasefire?","How do we plan movement under daytime, far-rear strikes?","What to validate in ICT","Lessons for deployed missions","Give me the bottom line"];
const _STOP = new Set("the a an and or of to in for on at by from with into onto over under is are was were be been being it this that those these as our we us your you their they them do does did how what which who why when where than then so such also more most any all key lead led leading about can could should would will not".split(" "));
const _THK = {"RUS-UKR":["russia","russian","ukraine","ukrainian","geran","shahed","donetsk","pokrovsk","kursk","chonhar","borova","locomotive","moldova"],"ISR-LBN":["israel","israeli","lebanon","lebanese","hezbollah","idf","nabatieh","merkava","beaufort","litani","unifil","mansuri","peacekeeper","peacekeepers"],"THA-KHM":["thailand","thai","cambodia","cambodian","osmach"],"ISR-HMS":["hamas","gaza","qassam","odeh","haddad","khrizim","decapitation","ocha"],"SDN":["sudan","sudanese","rsf","obeid","kordofan","besieged","besiege","siege"]};
const _FMK_M = {};
const _OUT = {success:["success","successful","succeed","worked","effective","effectively","win","won","decisive","gained","advantage","best","what worked"],failure:["fail","failed","failure","failures","lost","loss","losses","vulnerable","vulnerability","mistake","wrong","unsustainable","what failed","did not"],threat:["threat","gap","capability","capdev","weakness","unjammable","exposure"]};
const _SEC = {bluf:["bottom line","bluf","summary","summarise","summarize","overview","tldr","tl;dr","takeaway","big picture","headline","in short"],planning:["planning","oplan","estimate","checklist","precondition","go/no-go","go no go","gonogo"],ict:["rehearse","ict","in-camp","train","training","exercise","drill","practice","practise"]};
/* Concept clusters for the on-device assistant. Each inner array is a set of
   equivalent single-word terms; a query token matching any member expands to the
   whole cluster before ranking, so lay phrasing ("drone", "wired") reaches the
   right serials. Members are single lowercase tokens (the tokeniser splits on
   hyphens/spaces), grounded in the corpus vocabulary. */
const SYN = [
  ["drone","drones","fpv","uav","uas","loitering","quadcopter","geran","shahed","jet","jetpowered"],
  ["fibre","fiber","wired","tethered","optic","unjammable"],
  ["doubletap","double","tap","reattack","rescue","casevac","followup","secondary"],
  ["jam","jamming","jammer","ew","electronic","spoofing","gnss","spectrum","warfare"],
  ["starlink","satcom","satellite","connectivity","uplink"],
  ["ugv","unmanned","robot","robotic","groundrobot"],
  ["bridge","crossing","span","chonhar","pontoon","bridging","interdiction","locomotive","rail","railway"],
  ["saturation","mass","swarm","overwhelm","saturate","salvo","decoy","cruise","ballistic","hypersonic","glide"],
  ["decapitation","leadership","commander","commanders","managers","finance","depth","targeting"],
  ["autonomous","autonomy","brave1","intercept","interceptor","interceptors"],
  ["siege","besiege","besieged","encircle","blockade","obeid","infrastructure"],
  ["ceasefire","truce","encroachment","creep","baseline","observer","compliance","unifil","peacekeeping","peacekeeper","monitoring"],
  ["subthreshold","greyzone","provocation","incursion","threshold"],
  ["resupply","logistics","sustainment","supply","passability","distribution","transshipment","rear","transport"],
  ["engineer","engineers","sapper","repair","breach","obstacle","maintenance","spares","oil"],
  ["forceprotection","survivability","protection","cover","hardening","recoverability","continuity"],
  ["ammunition","ammo","munition","munitions","shell","shells","round","rounds","magazine","stockpile","reload"],
  ["airdefence","airdefense","sam","interceptor","interception","shorad","gbad","patriot","pantsir","radar"],
  ["artillery","arty","howitzer","fires","gun","guns","himars","counterbattery","barrage","mlrs"],
  ["casualty","casualties","wounded","medical","medevac","evacuation","evac","treatment","humanitarian","aid"],
  ["tank","tanks","armour","armor","afv","ifv","mbt","mounted"],
  ["command","c2","headquarters","comms","communications","mobile","network","datacentre","datacenter"],
  ["power","grid","electricity","water","fuel","energy","utilities","generator","generators"],
  ["airfield","airfields","runway","aviation","sortie","aircraft"],
  ["transition","withdrawal","handover","successor","liaison"]
];

/* ===================== SENSE & STRIKE PACKAGE (Package 2) ===================== */
const FORMATIONS_S = {};
const _FMK_S = {};

const SERIALS_S = [
  { id:"S-01", kind:"lesson", title:"Jet-powered drones challenge existing interception methods (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"threat", verdictLabel:"Documented adaptation pressure", dates:"15–22 Sep 2026",
    formations:[], multi:false, image:"/img/2026-09/S-01.jpg", imageCredit:"Reuters",
    blocks:[
      {l:"What happened", t:"Reuters reported on 15 September that Russia's use of jet-powered drones had increased roughly sixfold over three summer months, according to Ukrainian military data it reviewed, with speeds of up to 500 km/h outpacing Ukraine's low-cost interceptors. On 22 September Reuters quoted the Ukrainian Air Force spokesperson putting interception at about 60% for jet-powered drones, against more than 90% for earlier propeller-driven models."},
      {l:"So what", t:"Counter-UAS capability needs periodic revalidation against an evolving flight envelope. A cost-effective solution against one threat class can become an operational gap when speed and altitude change."},
      {l:"Evidence & limits", t:"The interception percentages are attributed Ukrainian figures, not independently audited; denominators and reporting periods may differ. The sixfold increase describes the preceding summer reported in September, not a September-only change."}
    ],
    sources:[
      {u:"https://www.reuters.com/business/aerospace-defense/ukraine-races-counter-russias-jet-powered-drone-attacks-2026-09-15/",n:"Reuters — Ukraine races to counter jet-powered drones (15 Sep)"},
      {u:"https://www.reuters.com/business/aerospace-defense/jet-powered-russian-drones-strain-ukraines-air-defences-2026-09-22/",n:"Reuters — jet-powered drones strain air defences (22 Sep)"}
    ] },
  { id:"S-02", kind:"lesson", title:"The interim defence burden falls on scarce assets (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"mixed", verdictLabel:"Reported mitigation constraints", dates:"September 2026",
    formations:[], multi:false, image:"/img/2026-09/S-02.jpg", imageCredit:"Reuters",
    blocks:[
      {l:"What happened", t:"Reuters reported that military aircraft carried much of the burden against faster drones, while dwindling air-to-air missiles increasingly pushed pilots towards cannon engagements and their debris-collision risk; new cheap guided missiles and interceptor designs were under consideration. On 30 September Ukraine reported intercepting 254 of 285 drones, of which 174 were described as faster jet-propelled models."},
      {l:"So what", t:"A capability gap should be assessed alongside its interim cost — scarce missiles, aircraft availability, crew fatigue and risk. A daily aggregate interception total should not be read as evidence that the jet-drone-specific gap has closed."},
      {l:"Evidence & limits", t:"The 30 September total gives no separate interception outcomes for jet and propeller classes. Candidate solutions and tests do not establish scalable fielded effectiveness."}
    ],
    sources:[
      {u:"https://www.reuters.com/business/aerospace-defense/ukraine-races-counter-russias-jet-powered-drone-attacks-2026-09-15/",n:"Reuters — Ukraine races to counter jet-powered drones (15 Sep)"},
      {u:"https://www.reuters.com/world/europe/russian-air-strikes-kill-one-injure-five-around-kyiv-officials-say-2026-09-30/",n:"Reuters — attacks on Ukraine's energy grid (30 Sep)"}
    ] }
];
const SUMMARY_S = {
  "S-01":"Jet-powered drones at up to 500 km/h outpaced low-cost interceptors, with interception reportedly around 60% against them versus 90%+ for propeller models — counter-UAS capability must be periodically revalidated against the flight envelope, not assumed constant. Figures are attributed Ukrainian data, not audited.",
  "S-02":"Faster drones pushed the interim burden onto scarce aircraft and dwindling air-to-air missiles, raising cost, fatigue and risk — assess a capability gap alongside its interim cost, and do not read a daily aggregate interception total as proof the jet-drone gap has closed."
};
const SIGNAL_S = {
  "S-01":"From the September weekly air-defence reporting — a reported sixfold summer rise in jet-powered drones and the gap between ~60% interception against them and 90%+ against propeller models.",
  "S-02":"From the running September air-defence tracking — the interim reliance on aircraft and scarce air-to-air missiles, cannon-engagement debris risk, and the 30 September 254-of-285 total."
};
const APP_S = {
  "S-01":{ verdict:"Use it, with changes",
    lead:"Classify the threat by what it takes to engage it — speed, altitude and warning time — and revalidate the defensive mix against the real flight envelope, not the familiar one.",
    div:{ d:"Classify air threats by engagement requirements — speed, altitude and warning time — rather than by the single 'drone' label, and revalidate the counter-UAS mix against each class.", o:"Div Comd, on air-defence advice.", a:"Sets a periodic revalidation of the defensive mix against the current flight envelope, treating a faster class as a distinct problem.", t:"A new or faster threat class appears in reporting or trials.", x:"Class-by-class revalidation is analysis- and trials-intensive.", m:"The mix is assessed against the demanding class, not assumed from past performance." },
    bde:{ d:"Use trials that replicate demanding speed and altitude profiles, not only familiar low-speed targets, before judging the counter solution adequate.", o:"Air-defence unit, on Div direction.", a:"Designs trials around the real flight envelope and records where the low-cost solution fails.", t:"A counter-UAS solution is being evaluated.", x:"Demanding trials are harder and costlier to stage than low-speed runs.", m:"Trials expose the operational gap before fielding, not after." } },
  "S-02":{ verdict:"Use it, with changes",
    lead:"Judge a defensive gap with its interim cost attached, and read interception by threat class — not by a combined daily total.",
    div:{ d:"Assess any capability gap alongside the interim burden it imposes — scarce missiles, aircraft availability, crew fatigue and risk — and hold an interim response while a new solution is produced.", o:"Div Comd, on air-defence and G4 advice.", a:"Pairs each identified gap with its interim-cost and an interim mitigation, rather than waiting on the end solution.", t:"A threat class exceeds the current low-cost defence.", x:"Interim reliance on high-end assets depletes scarce stocks and crews.", m:"The gap is covered by a costed interim response until production catches up." },
    bde:{ d:"Report interception by threat class and consequence — not just total objects intercepted — so a class-specific weakness is not hidden by a high aggregate.", o:"Air-defence unit, on Div direction.", a:"Breaks interception reporting down by class, warning time, cost and magazine depth.", t:"Daily interception totals are reported.", x:"Class-level reporting is more work than a single headline figure.", m:"A jet-class gap stays visible even when the daily total looks high." } }
};
const ICT_S = {
  "S-01":{ fmt:"Threat-class revalidation exercise · Div air-defence + Fires · 90 min · threat envelope overlay",
    set:"A faster, higher-flying drone class appears against a defence optimised for slower propeller-driven targets.",
    run:["Classify the threat by engagement requirements — speed, altitude, warning time.","Design a trial that replicates the demanding envelope, not a familiar low-speed target.","Identify where the low-cost solution fails and what interim response covers it."],
    dec:"Does the cell revalidate the mix against the real envelope and expose the gap before fielding?",
    twist:"Controller raises the threat speed mid-serial — does the plan still hold?",
    std:"Threat classified by engagement need; demanding trial designed; operational gap and interim response identified." },
  "S-02":{ fmt:"Interim-burden assessment · Div air-defence + G4 · 90 min · inventory + risk overlay",
    set:"Faster drones force reliance on aircraft and dwindling air-to-air missiles while a new solution is in development.",
    run:["Cost the interim burden — missiles, aircraft availability, crew fatigue, debris risk.","Break interception reporting down by threat class and consequence.","Decide the interim response to hold until production catches up."],
    dec:"Is the gap assessed with its interim cost, and is class-level performance visible behind the daily total?",
    twist:"Controller presents a high daily aggregate — do the staff still flag the jet-class gap?",
    std:"Interim burden costed; reporting broken down by class; interim response set; aggregate not mistaken for closure." }
};
const LEARN_S = {
  "S-01":{ topic:"Revalidating counter-UAS against the envelope", status:"Action now", why:"Jet-powered drones at up to 500 km/h outpaced low-cost interceptors; a solution tuned to slower targets became a gap as speed and altitude changed.", worked:"Reporting surfaced the ~60% vs 90%+ class gap and prompted new interceptor trials.", next:"Classify threats by engagement requirements and revalidate the mix against the real flight envelope, class by class." },
  "S-02":{ topic:"The interim cost of a defensive gap", status:"Action now", why:"The interim burden fell on scarce aircraft and air-to-air missiles, raising cost, fatigue and risk, while a daily aggregate could hide the jet-class weakness.", worked:"The constraint was made visible alongside candidate cheap-missile and interceptor solutions.", next:"Assess each gap with its interim cost, hold an interim response, and report interception by class and consequence." }
};
const PACK_S = {
  kicker:"September 2026 · Sense & Strike", titleLine:"for sense-and-strike formations",
  changed:"September's clearest adaptation was a faster, higher-flying drone threat that strained a defence built partly around slower propeller-driven systems. Reuters reported a substantial performance gap between the two threat classes — interception around 60% against jet-powered drones versus more than 90% against propeller models — and a search for new interceptors and inexpensive guided missiles. The learning issue is the speed at which detection, engagement and procurement can adapt together, and the interim burden that falls on scarce aircraft and air-to-air missiles meanwhile. Official interception figures are attributed, not independently audited.",
  stats:[
    {n:2, k:"Priority observations", s:"For this month"},
    {n:2, k:"Adaptation watch", s:"Under adaptation watch"},
    {n:2, k:"For local validation", s:"Next ICT cycle"}
  ],
  commandLens:"Classify air threats by what it takes to engage them — speed, altitude, warning time — not by the drone label. Revalidate the defensive mix against the real envelope, assess each gap with its interim cost, and read interception by threat class rather than a combined daily total.",
  divPriorities:[
    "Classify air threats by engagement requirements and revalidate the counter-UAS mix against each class.",
    "Hold a costed interim response for a class the low-cost defence cannot cover, while production catches up.",
    "Report interception by threat class, warning time, cost and magazine depth — not a single aggregate."
  ],
  brigadeBluf:"For air defence this month: treat a faster drone class as a distinct problem; design trials around the demanding envelope; and keep the interim burden on scarce assets visible and costed.",
  implications:[
    {ech:"Division HQ", t:"Revalidate the defensive mix against the current flight envelope and pair every gap with a costed interim response."},
    {ech:"Air-defence units", t:"Design trials around demanding speed and altitude profiles, and report interception by threat class and consequence."},
    {ech:"Fires", t:"Plan for the interim burden on aircraft and scarce air-to-air missiles while a new solution is produced."}
  ],
  worked:[
    "Surfacing the class-specific gap (≈60% vs 90%+) rather than resting on a high aggregate.",
    "Testing new interceptor designs and weighing inexpensive guided missiles against the faster threat.",
    "Making the interim burden on scarce aircraft and missiles explicit."
  ],
  failed:[
    "A low-cost defence optimised for yesterday's slower threat.",
    "Reading a combined daily interception rate as cover against a specific attack class.",
    "Leaning on fighter fallback that shifts risk to pilots and scarce air-to-air missile stocks."
  ],
  testICT:[
    "Classify a faster drone threat by engagement requirements and design a demanding trial.",
    "Cost the interim burden of a defensive gap and set an interim response.",
    "Break an interception report down by threat class and consequence."
  ],
  sopReview:[
    "Periodic counter-UAS revalidation against the current flight envelope.",
    "Costed interim response for an uncovered threat class.",
    "Interception reporting by class, warning time, cost and magazine depth."
  ],
  contests:[], priorities:["S-01","S-02"]
};
const PLANNING_S = [
  {b:"Name what would break the mix", p:"Ask what changes in speed, altitude or attack persistence would invalidate the current defensive mix — and revalidate the mix against that envelope rather than the familiar one."},
  {b:"Cost the interim burden", p:"Identify what interim burden would fall on higher-end assets — aircraft, scarce air-to-air missiles, crews — while production catches up, and hold a costed interim response."},
  {b:"Report by threat class", p:"Break performance reports down by threat class and consequence, not just total objects intercepted, so a class-specific weakness is not hidden by a high aggregate."}
];
const KEY_JUDGEMENTS_S = [
  "Technical adaptation matters only if it becomes an <em>available and sustainable</em> operational response.",
  "Evaluate protection by threat class; do not infer equal performance from a combined daily total.",
  "A capability gap should be read alongside its interim cost — scarce missiles, aircraft, crews and risk."
];
const BLUF_S = "In September the clearest adaptation was a <b>faster, higher-flying drone threat</b> that strained a defence built partly around slower propeller systems. Reuters reported interception of roughly <b>60% against jet-powered drones versus 90%+</b> against propeller models, and a search for new interceptors and cheap guided missiles. The issue is how fast detection, engagement and procurement can adapt together — and the interim burden that falls on scarce aircraft and air-to-air missiles meanwhile. Evaluate protection <b>by threat class</b>, not a combined daily total; figures are attributed, not audited.";
const SUGGESTIONS_S = ["What changed for sense & strike this month?","Why do jet-powered drones strain the defence?","How should we read interception rates?","What to validate in ICT","Lessons for air defence","Give me the bottom line"];

/* ===================== COMBAT SUPPORT ===================== */
const FORMATIONS_CSS = {};
const _FMK_CSS = {};

const SERIALS_CSS = [
  { id:"CS-01", kind:"lesson", title:"Communications and power join the wider strike contest (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"threat", verdictLabel:"Reported infrastructure disruption", dates:"27–30 Sep 2026",
    formations:[], multi:false, image:"/img/2026-09/CS-01.jpg", imageCredit:"Al Jazeera",
    blocks:[
      {l:"What happened", t:"Reuters reported that Ukraine's largest mobile service provider said its headquarters had been hit amid attacks on communications infrastructure. Russia claimed strikes on data centres and logistics sites; Reuters explicitly said it could not independently verify the Russian claims. On 30 September Reuters reported strikes against energy infrastructure that forced power cuts."},
      {l:"So what", t:"Assess how the loss of a communications site and power supply would interact with logistics coordination, repair and essential services. Multiple sites are not genuinely redundant if they share vulnerable dependencies."},
      {l:"Evidence & limits", t:"Communications-site damage is not proof of nationwide service failure or military C2 disruption. A claim of military association does not establish lawful target status; distinction, proportionality and precautions require separate legal assessment."}
    ],
    sources:[
      {u:"https://www.reuters.com/world/russian-attacks-kills-three-ukrainian-cities-strikes-hit-kyiv-districts-2026-09-27/",n:"Reuters — daytime strikes and communications infrastructure (27 Sep)"},
      {u:"https://www.reuters.com/world/russia-says-it-struck-military-infrastructure-vessels-ukraine-2026-09-27/",n:"Reuters — Russian claims on logistics, ports and data centres (27 Sep)"},
      {u:"https://www.reuters.com/world/europe/russian-air-strikes-kill-one-injure-five-around-kyiv-officials-say-2026-09-30/",n:"Reuters — attacks on Ukraine's energy grid (30 Sep)"}
    ] },
  { id:"CS-02", kind:"lesson", title:"Maintaining services through mission transition and supply constraints (Lebanon/Gaza)",
    conflict:"ISR-LBN", theatre:"Israel–Lebanon", verdict:"mixed", verdictLabel:"Continuity challenge", dates:"September 2026",
    formations:[], multi:true, image:"/img/2026-09/CS-02.jpg", imageCredit:"OCHA",
    blocks:[
      {l:"What happened", t:"UNIFIL's commander told Reuters on 19 September that other UN agencies and Lebanese troops would need to assume mission tasks before withdrawal, including humanitarian assistance and information sharing; Reuters reported parallel discussions over successor arrangements on 17 September. Separately, OCHA's 25 September Gaza report described shortages and restrictions affecting medical supplies, shelter materials, generators, spare parts and engine oil."},
      {l:"So what", t:"Different operational contexts, but both show that continuity depends on complete support chains. A transition needs a resourced successor; essential equipment needs parts, consumables, access and operators. Handover and contingency plans should name the function at risk and what is required to keep it available."},
      {l:"Evidence & limits", t:"This cross-context comparison is an analytical analogy, not evidence of a common cause or equivalent mission. The UNIFIL withdrawal was prospective during September and should not be reported as a completed September outcome."}
    ],
    sources:[
      {u:"https://www.reuters.com/world/middle-east/un-peacekeeping-chief-lebanon-says-smooth-transition-is-critical-before-pull-out-2026-09-19/",n:"Reuters — UNIFIL transition and humanitarian continuity (19 Sep)"},
      {u:"https://www.reuters.com/world/europe/military-leaders-meet-paris-mull-post-un-mission-plans-2026-09-17/",n:"Reuters — planning a post-UN mission in Lebanon (17 Sep)"},
      {u:"https://www.ochaopt.org/content/humanitarian-situation-report-25-september-2026",n:"OCHA — Gaza humanitarian situation report (25 Sep)"}
    ] }
];
const SUMMARY_CSS = {
  "CS-01":"A strike on a mobile operator's headquarters and on energy infrastructure shows communications and power are now in the strike contest — assess how their loss interacts with logistics, repair and essential services, because multiple sites are not redundant if they share vulnerable dependencies. Russian target claims were not independently verified.",
  "CS-02":"Continuity depends on complete support chains — a UNIFIL transition needs a resourced successor for aid access, liaison and information-sharing, and Gaza shows generators fail without spares, oil, access and operators. Name the function at risk and what keeps it available; the UNIFIL pull-out was prospective, not a September outcome."
};
const SIGNAL_CSS = {
  "CS-01":"From the September weekly reporting on Ukraine's rear — the strike on the largest mobile provider's headquarters, unverified Russian claims on data centres and logistics, and 30 September energy strikes forcing power cuts.",
  "CS-02":"From the September weekly tracking of Lebanon and Gaza — UNIFIL transition planning with humanitarian continuity and information-sharing, and OCHA's report of shortages affecting generators, spare parts and engine oil."
};
const APP_CSS = {
  "CS-01":{ verdict:"A warning, not a model",
    lead:"Communications and power are in the strike contest. Test resilience at the level of functions and shared dependencies, not individual protected sites.",
    div:{ d:"Assess how the loss of a communications site and power supply would interact with logistics coordination, repair and essential services — treating nominal redundancy as suspect where sites share power, access or communications dependencies.", o:"Div Comd, on G6/G4 advice.", a:"Maps shared dependencies across communications, power and transport and tests whether critical functions survive a combined outage.", t:"Communications or power nodes come under strike.", x:"Dependency mapping and combined-outage testing are analysis-heavy.", m:"Critical functions hold through a simultaneous communications and power disruption; false redundancy is identified." },
    bde:{ d:"Confirm that alternative sites for a critical function do not share the same vulnerable power, access or communications dependency before counting them as redundancy.", o:"Signals, on Div direction.", a:"Audits 'redundant' alternates for shared dependencies and records which are genuinely independent.", t:"A critical function relies on a nominally redundant alternate.", x:"Genuinely independent alternates cost more than co-dependent ones.", m:"Each counted redundancy is confirmed independent of the primary's key dependencies." } },
  "CS-02":{ verdict:"Use it, with changes",
    lead:"Continuity depends on complete support chains. Name the function at risk and what keeps it available — a resourced successor, or parts, consumables, access and operators.",
    div:{ d:"Treat mission transition as a continuity problem — assign every task to be handed over (aid access, liaison, information sharing) to a resourced successor with an acceptance check, not just a count of bases and personnel transferred.", o:"Div/Mission HQ, on the transition cell's advice.", a:"Builds a function-by-function handover register with a named successor, resources and an acceptance check for each.", t:"A mission moves towards withdrawal or transfer.", x:"Function-level handover is slower than a base/personnel drawdown.", m:"Every essential function is accepted by a resourced successor before the site closes." },
    bde:{ d:"Plan essential-service contingency around complete inputs — spares, engine oil, repair personnel and access — not equipment alone, since provision without maintenance inputs leaves services unavailable.", o:"Engineers, on Div direction.", a:"Adds consumables, spares, operator support and access constraints to essential-service contingency stocks.", t:"An essential service depends on equipment that needs servicing.", x:"Holding consumables and operator support raises the contingency footprint.", m:"Essential services stay available through the maximum tolerable outage, not just on first power-up." } }
};
const ICT_CSS = {
  "CS-01":{ fmt:"Dependency-resilience exercise · Div G6 + G4 · 2 hrs · function + dependency map",
    set:"Communications and power nodes are struck while logistics coordination, repair and essential services must continue.",
    run:["Map shared dependencies across communications, power and transport for each critical function.","Test whether functions survive a simultaneous communications and power outage.","Identify which 'redundant' alternates share the primary's vulnerable dependency."],
    dec:"Do critical functions survive a combined outage, and is false redundancy exposed before it is relied on?",
    twist:"Controller removes the alternate that shared a power feed — does a genuinely independent option exist?",
    std:"Dependencies mapped; functions tested against a combined outage; false redundancy identified." },
  "CS-02":{ fmt:"Transition & continuity exercise · Div/Mission HQ + Engineers · 2 hrs · handover register + stock list",
    set:"A mission moves towards transfer while an essential service depends on equipment needing spares, oil and operators.",
    run:["Build a function-by-function handover register — named successor, resources, acceptance check.","List the maintenance inputs (spares, oil, repair personnel, access) each essential service needs.","Set the maximum tolerable outage and the tested recovery time per function."],
    dec:"Is every transferred task owned by a resourced successor, and does each essential service have the inputs to stay available?",
    twist:"Controller withholds engine oil for the generators — does the service still run to the tolerable-outage limit?",
    std:"Handover register complete with acceptance checks; maintenance inputs listed; outage/recovery times set." }
};
const LEARN_CSS = {
  "CS-01":{ topic:"Dependency-level resilience", status:"Action now", why:"Communications and power are now struck as part of the contest, and nominal redundancy fails where sites share power, access or communications dependencies.", worked:"The strikes on a mobile operator's HQ and on energy infrastructure made the shared-dependency risk visible.", next:"Map shared dependencies and test whether critical functions survive a simultaneous communications and power outage." },
  "CS-02":{ topic:"Continuity through transition and supply", status:"For validation", why:"Continuity depends on complete support chains — a transition needs a resourced successor, and equipment needs spares, oil, access and operators.", worked:"UNIFIL leadership stressed handing over aid access, liaison and information-sharing before withdrawal; OCHA flagged the missing maintenance inputs in Gaza.", next:"Assign each transferred task to a resourced successor with an acceptance check, and stock consumables, spares, operators and access for essential services." }
};
const PACK_CSS = {
  kicker:"September 2026 · CS & CSS", titleLine:"for CS & CSS formations",
  changed:"September linked sustainment resilience to two kinds of continuity: preserving connected logistics, communications and power networks under strike; and transferring peacekeeping functions before a mission withdraws. A strike on Ukraine's largest mobile operator and on energy infrastructure showed communications and power are in the contest, while UNIFIL transition planning and OCHA's Gaza report showed that handover and equipment both fail without complete support chains — generators are no solution without spares, oil, access and operators. For CS & CSS formations the focus is dependencies and recovery rather than isolated protected assets, and function-level transition rather than a base-and-personnel drawdown.",
  stats:[
    {n:2, k:"Priority observations", s:"For this month"},
    {n:2, k:"Dependency watch", s:"Under adaptation watch"},
    {n:2, k:"For local validation", s:"Next ICT cycle"}
  ],
  commandLens:"Test resilience at the level of functions and shared dependencies, not isolated assets. Map where communications, power and transport support several functions; treat nominal redundancy as suspect; and handle mission transition as a continuity problem — a resourced successor and complete maintenance inputs for every essential service.",
  divPriorities:[
    "Map shared dependencies across communications, power and transport, and test critical functions against a combined outage.",
    "Treat mission transition as a continuity problem — a resourced successor and acceptance check for every handed-over task.",
    "Plan essential-service contingency around complete inputs: spares, engine oil, repair personnel and access, not equipment alone."
  ],
  brigadeBluf:"For combat support this month: confirm redundancy is genuinely independent before counting it; hand over functions, not just bases; and stock the consumables, spares and operators that keep essential services running.",
  implications:[
    {ech:"Division HQ", t:"Test resilience at function and dependency level, and plan transition as continuity — not a base-and-personnel count."},
    {ech:"Engineers", t:"Build essential-service contingency around spares, oil, operators and access, and set tolerable-outage and recovery times."},
    {ech:"Signals", t:"Audit 'redundant' communications and power alternates for shared dependencies before relying on them."}
  ],
  worked:[
    "Reading communications and power as connected, strikeable parts of the contest.",
    "Stressing handover of aid access, liaison and information-sharing before any withdrawal.",
    "Flagging that generators fail without spares, oil, access and operators."
  ],
  failed:[
    "Counting nominal redundancy that shares the same power, access or communications dependency.",
    "A withdrawal plan that counts bases and personnel and misses the functions that must continue.",
    "Providing equipment without the maintenance inputs that keep it available."
  ],
  testICT:[
    "Map shared dependencies and test critical functions against a combined communications-and-power outage.",
    "Build a function-by-function handover register with a resourced successor and acceptance check.",
    "List the maintenance inputs each essential service needs and set its tolerable-outage and recovery time."
  ],
  sopReview:[
    "Dependency map and combined-outage test for critical functions.",
    "Function-level transition register with named successors and acceptance checks.",
    "Essential-service contingency covering consumables, spares, operators and access."
  ],
  contests:[], priorities:["CS-01","CS-02"]
};
const PLANNING_CSS = [
  {b:"Find the shared dependencies", p:"Identify which essential functions share power, communications, transport or external-support dependencies — nominal redundancy is not redundancy if the alternatives fail together."},
  {b:"Set outage and recovery targets", p:"Record the maximum tolerable outage and the tested recovery time for each essential function, and confirm functions can operate during a combined power-and-communications disruption."},
  {b:"Own every transferred task", p:"Before a mission changes, name who accepts each task and what resources prove readiness — aid access, liaison and information-sharing, not just a count of bases and personnel."},
  {b:"Stock the maintenance inputs", p:"Ensure essential-service contingency plans include spares, engine oil, repair personnel and access arrangements — equipment without maintenance inputs leaves the service unavailable."}
];
const KEY_JUDGEMENTS_CSS = [
  "Resilience should be tested at <em>function and dependency</em> level, not merely asset level.",
  "Mission transition is a <em>continuity</em> problem as well as a withdrawal problem.",
  "Equipment without maintenance inputs — spares, oil, operators, access — leaves essential services unavailable."
];
const BLUF_CSS = "In September sustainment resilience turned on two kinds of continuity: preserving connected <b>logistics, communications and power networks</b> under strike, and transferring peacekeeping functions before a mission withdraws. A strike on Ukraine's largest mobile operator and on energy infrastructure showed communications and power are in the contest; UNIFIL transition planning and OCHA's Gaza report showed <b>handover and equipment both fail without complete support chains</b> — generators are no solution without spares, oil, access and operators. Focus on <b>dependencies and recovery</b>, not isolated protected assets.";
const SUGGESTIONS_CSS = ["What changed for CS & CSS this month?","How do we test resilience at dependency level?","How do we hand over a mission's functions?","What to validate in ICT","Lessons for Signals and Engineers","Give me the bottom line"];

/* ===================== EXPEDITIONARY ===================== */
/* No standalone expeditionary serials in the September edition — the deployed-
   mission cases sit in the Manoeuvre bundle (M-01/M-02). All EXP bundles are
   empty so the MANEXP merge (below) reduces cleanly to the Manoeuvre package. */
const FORMATIONS_EXP = {};
const _FMK_EXP = {};

const SERIALS_EXP = [];
const SUMMARY_EXP = {};
const SIGNAL_EXP = {};
const APP_EXP = {};
const ICT_EXP = {};
const LEARN_EXP = {};
const PACK_EXP = {
  kicker:"September 2026 · Expeditionary", titleLine:"for expeditionary formations",
  changed:"", stats:[], commandLens:"", divPriorities:[], brigadeBluf:"",
  implications:[], worked:[], failed:[], testICT:[], sopReview:[], contests:[], priorities:[]
};
const PLANNING_EXP = [];
const KEY_JUDGEMENTS_EXP = [];
const BLUF_EXP = "";
const SUGGESTIONS_EXP = [];
/* ===================== FRAME — the three command sections =====================
   Each package is reorganised into three analytical buckets:
   · Opportunities  — EXTERNAL enablers/trends/adversary missteps to leverage
                      (if we'd have to build/buy it ourselves it is Cap Dev, not this)
   · Vulnerabilities — INTERNAL risks/gaps these conflicts expose (tactics,
                      technical deficiencies, supply-chain or training gaps)
   · Capability Development — INTERNAL deliberate actions to exploit an opportunity
                      or fix a vulnerability. This edition frames them as questions
                      for local validation, in keeping with its observational register.
   Each item: {t: headline, d: 1–2 line so-what, id: source serial}. */
const FRAME_M = {
  bluf:"September reporting shows that deployed forces and support movement cannot rely on either a nominal ceasefire or a night-only threat model. In Lebanon, UN personnel recorded drone-delivered explosives and active military operations while continuing humanitarian facilitation; in Ukraine, attacks increasingly extended through the day and towards western transport connections. These are exposure and mission-continuity observations, not proof of a new manoeuvre doctrine — tie force protection to observed activity rather than the ceasefire label, and plan the continuity of essential movement and liaison under a persistent, extended-reach drone threat.",
  opportunities:[
    {t:"Assess actual activity, not the ceasefire label", d:"Combine observed strikes, engineering work, troop movement and access restrictions rather than relying on the ceasefire designation.", id:"M-01"},
    {t:"Protect mission continuity", d:"Identify what must continue during recurring drone warnings — liaison, medical support and essential movement.", id:"M-01"}
  ],
  vulnerabilities:[
    {t:"Assuming a ceasefire means low threat", d:"Humanitarian and monitoring tasks continued amid active military activity.", id:"M-01"},
    {t:"Treating daytime or distant movement as safer", d:"Reporting describes persistent daytime attacks and incidents near western transport connections.", id:"M-02"}
  ],
  capdev:[
    {t:"Can essential movement continue another way?", d:"Validate whether essential movements can continue with alternative timings, routes and abort criteria.", id:"M-02"},
    {t:"Does reporting separate incident from outcome?", d:"Check that deployment reporting separates observed incidents, party claims, access status and mission output.", id:"M-01"}
  ]
};
const FRAME_S = {
  bluf:"September's clearest adaptation was a faster, higher-flying drone threat that strained a defence built partly around slower propeller-driven systems. Reuters reported a substantial performance gap between the two threat classes — about 60% interception against jet-powered drones versus more than 90% against propeller models — and a search for new interceptors and inexpensive guided missiles. The learning issue is the speed at which detection, engagement and procurement can adapt together, and the interim burden that falls on scarce aircraft and air-to-air missiles. Official interception figures are attributed, not independently audited.",
  opportunities:[
    {t:"Classify the threat by engagement requirements", d:"Speed, altitude and warning time matter alongside the drone label.", id:"S-01"},
    {t:"Use trials to expose the operational gap", d:"Ukraine tested new interceptor designs while weighing inexpensive guided missiles.", id:"S-01"}
  ],
  vulnerabilities:[
    {t:"A defence optimised for yesterday's threat", d:"A low-cost mix tuned to slower drones may not cover a faster, higher-flying one.", id:"S-01"},
    {t:"An aggregate rate hides a class weakness", d:"A combined daily interception total can conceal a gap against a specific attack class.", id:"S-02"},
    {t:"Fighter-based fallback shifts risk to scarce assets", d:"Leaning on aircraft and air-to-air missiles burdens pilots and depletes scarce stocks.", id:"S-02"}
  ],
  capdev:[
    {t:"Do trials replicate the demanding envelope?", d:"Validate whether trials replicate demanding speed and altitude profiles, not only familiar low-speed targets.", id:"S-01"},
    {t:"Are the metrics reviewed together?", d:"Check that threat-class interception rates, warning times, cost and magazine depth are reviewed together.", id:"S-02"},
    {t:"Is an interim response available?", d:"Confirm an interim response is available while a new solution is being produced.", id:"S-02"}
  ]
};
const FRAME_CSS = {
  bluf:"September linked sustainment resilience to two kinds of continuity: preserving connected logistics, communications and power networks under strike, and transferring peacekeeping functions before a mission withdraws. A strike on Ukraine's largest mobile operator and on energy infrastructure showed communications and power are in the contest; UNIFIL transition planning and OCHA's Gaza report showed that handover and equipment both fail without complete support chains — generators are no solution without spares, oil, access and service support. These cases point to dependencies and recovery rather than isolated protected assets.",
  opportunities:[
    {t:"Map shared dependencies", d:"Communications, power and transport may support several essential functions at once.", id:"CS-01"},
    {t:"Transfer functions before closing sites", d:"UNIFIL leadership stressed humanitarian continuity and information-sharing with Lebanese forces ahead of any pull-out.", id:"CS-02"},
    {t:"Plan maintenance inputs with equipment", d:"Spare parts and engine oil are part of service availability, not an afterthought.", id:"CS-02"}
  ],
  vulnerabilities:[
    {t:"False redundancy on a shared dependency", d:"Nominal alternatives fail if they share the same power, access or communications dependency.", id:"CS-01"},
    {t:"A withdrawal plan that counts only bases", d:"Counting bases and personnel can miss aid access, liaison and information-sharing functions.", id:"CS-02"},
    {t:"Equipment without maintenance inputs", d:"Generators and the like leave services unavailable without spares, oil and operator support.", id:"CS-02"}
  ],
  capdev:[
    {t:"Can functions ride a combined outage?", d:"Validate whether critical functions operate during simultaneous power and communications disruption.", id:"CS-01"},
    {t:"Is every transferred task owned?", d:"Check each transferred task is assigned to a resourced successor with an acceptance check.", id:"CS-02"},
    {t:"Do stocks cover consumables and operators?", d:"Confirm contingency stocks cover consumables, spares, operator support and access constraints.", id:"CS-02"}
  ]
};
const FRAME_EXP = { bluf:"", opportunities:[], vulnerabilities:[], capdev:[] };
/* Merged Manoeuvre & Expeditionary bundle for the combined tab. With no
   standalone expeditionary serials this month the EXP arrays are empty, so the
   FRAME sections and overview arrays reduce to the Manoeuvre package; the lede
   is a concise synthesis and introduces no new claims. Per-serial echelons are
   resolved via SUBPKG_OF, so this bundle's `echelons` is only a fallback. */
const FRAME_MANEXP = {
  bluf:"September reporting shows that deployed forces and support movement cannot rely on either a nominal ceasefire or a night-only threat model. In Lebanon, UN personnel recorded drone-delivered explosives and active military operations while continuing humanitarian facilitation; in Ukraine, attacks extended through the day and towards western transport connections. Tie force protection to observed activity rather than the ceasefire label, and plan the continuity of essential movement and liaison under a persistent, extended-reach drone threat — these are exposure and mission-continuity observations, not proof of a new manoeuvre doctrine.",
  opportunities: FRAME_M.opportunities.concat(FRAME_EXP.opportunities),
  vulnerabilities: FRAME_M.vulnerabilities.concat(FRAME_EXP.vulnerabilities),
  capdev: FRAME_M.capdev.concat(FRAME_EXP.capdev)
};
const PACK_MANEXP = Object.assign({}, PACK_M, {
  kicker:"September 2026 · Manoeuvre & Expeditionary",
  titleLine:"for manoeuvre & expeditionary formations",
  changed: [PACK_M.changed, PACK_EXP.changed].filter(Boolean).join(" "),
  stats: (PACK_M.stats||[]).map((s,i)=>Object.assign({}, s, {n: s.n + ((PACK_EXP.stats||[])[i]||{n:0}).n})),
  commandLens: [PACK_M.commandLens, PACK_EXP.commandLens].filter(Boolean).join(" "),
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

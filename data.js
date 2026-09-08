/* CS&I "Manoeuvre" digest - content DATA, extracted from index.html.
   Loaded by index.html via <script src="data.js"> BEFORE the render script.
   Pure data only (serials, unit/formation cards, packages, legend text) - no behaviour.
   Top-level const/let here share global scope with the render script, so names resolve as before.
   Edit monthly content HERE; keep each object's keys/shape the render code expects. */

/* ===================== DATA ===================== */
const SERIALS_M = [
  { id:"M-01", kind:"lesson", title:"Local advances under a contested reconnaissance-strike system (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Developing success", dates:"August 2026",
    formations:[], multi:false, image:"/img/2026-08/M-01.jpg", imageCredit:"Critical Threats Project",
    blocks:[
      {l:"What happened", t:"ISW reported that Ukrainian forces made advances in the Borova direction during August. In the same sector, the Borova military administration reported intensified Russian FPV-drone, MLRS and glide-bomb attacks that restricted movement on the key logistics routes into the Borova hromada."},
      {l:"So what", t:"The tactical problem is not simply taking ground; it is sustaining the force through the adversary's reconnaissance-strike envelope after the advance. Manoeuvre should be sequenced with drone suppression, route protection, alternative trans-shipment arrangements and an explicit plan to restore movement after strikes."}
    ],
    sources:[
      {u:"https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-august-28-2026",n:"Critical Threats Project — Borova-direction advance (28 Aug)"},
      {u:"https://understandingwar.org/research/russia-ukraine/russian-offensive-campaign-assessment-august-25-2026/",n:"Institute for the Study of War — offensive campaign assessment (25 Aug)"}
    ] },
  { id:"M-02", kind:"lesson", title:"Drone and missile interdiction of the logistics network (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"threat", verdictLabel:"Threat pattern", dates:"27 Aug 2026",
    formations:[], multi:false,
    blocks:[
      {l:"What happened", t:"Reuters reported that Russian missiles and drones targeted Ukrainian ports, industrial sites and retailer distribution facilities in an hours-long attack on Kyiv and other locations. Ukrainian officials said the strikes affected logistics and economic infrastructure; Russia's Defence Ministry stated that it had struck military-industrial and military-related targets."},
      {l:"So what", t:"The intermediate rear is no longer a sanctuary. The adversary can combine local FPV pressure against movement corridors with long-range strikes against logistics, port and distribution infrastructure. Sustainment planning should therefore include dispersed trans-shipment points, alternate routes, mobile repair and reload capacity, and time-bound drills for rerouting after the loss of a node."}
    ],
    sources:[
      {u:"https://www.reuters.com/world/europe/explosions-heard-ukraines-kyiv-reuters-witness-says-2026-08-27/",n:"Reuters — strikes on ports, industry and distribution (27 Aug)"}
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
  kicker:"August 2026 · Manoeuvre", titleLine:"for manoeuvre formations",
  changed:"August showed that manoeuvre now depends on first shaping the adversary's drone, air-defence and logistics systems. In the Borova direction Ukrainian forces made local advances while Russian FPV, MLRS and glide-bomb attacks restricted the routes and rear areas that sustained them; separately, long-range strikes hit Ukrainian ports, industry and distribution facilities. Manoeuvre and sustainment are contested by the same reconnaissance-strike system. For manoeuvre formations the message is to plan a local advance alongside the suppression of hostile drones, the protection of intermediate rear areas and the rapid restoration of disrupted logistics routes.",
  stats:[
    {n:2, k:"Priority learnings", s:"For this month"},
    {n:2, k:"Hot contests", s:"Under adaptation watch"},
    {n:2, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat the local advance and the routes that sustain it as one problem. Set an entry condition for hostile drone suppression, route viability and ISR coverage before committing a manoeuvre force, disperse and harden the intermediate rear, and measure how fast sustainment recovers after interdiction.",
  divPriorities:[
    "Define a manoeuvre-entry condition set — drone suppression, route viability, local air-defence disruption and friendly ISR coverage — before committing a manoeuvre element.",
    "Harden and diversify the intermediate rear: disperse holding areas, repair points, reload sites and command posts, and vary routes and timings.",
    "Measure logistics recoverability — alternate routes, replacement sites, rerouting time, repair capacity and maximum tolerable outage for every critical node."
  ],
  brigadeBluf:"For the close fight this month: sequence the advance with drone suppression and route protection; move and hold the support echelon dispersed; and rehearse recovery of movement after a strike, not just the assault itself.",
  implications:[
    {ech:"Division HQ", t:"Plan the advance and its sustainment as a single reconnaissance-strike problem — set the entry conditions, resource drone suppression and treat the intermediate rear as manoeuvre-critical terrain."},
    {ech:"Brigades", t:"Rehearse a bounded advance that exploits a created window, then hold and recover the support echelon through the adversary's strike envelope."},
    {ech:"Armoured units", t:"Assume movement corridors and rear routes are watched and struck; disperse, vary routing and timing, and plan alternate trans-shipment from the outset."}
  ],
  worked:[
    "Local advances made where a window in the adversary's ability to sense and strike could be created and exploited.",
    "Reading intermediate-rear logistics as part of the close fight, not a protected sanctuary.",
    "Planning sustainment to reroute and recover after interdiction rather than to avoid all loss."
  ],
  failed:[
    "Manoeuvre attempted without suppressing the hostile drone, artillery and aviation systems that watch the force and its support echelon.",
    "A linear sustainment model — fixed rear routes, centralised distribution, predictable replenishment cycles — offering a repeatable interdiction problem.",
    "Rear-area complacency that leaves distribution centres, ports, industry, vehicle parks and trans-shipment points inside the enemy's strike space."
  ],
  testICT:[
    "Set and check a manoeuvre-entry condition set before a bounded advance in a contested reconnaissance-strike environment.",
    "Stress-test sustainment after the loss of a key route, reload point or repair site to drone interdiction.",
    "Time the rerouting and restoration of movement after a strike on a logistics node."
  ],
  sopReview:[
    "Manoeuvre-entry condition set and the ISR that confirms it.",
    "Dispersed, diversified intermediate-rear layout and routing.",
    "Logistics-recoverability measures — alternate routes, replacement sites, time-to-recover."
  ],
  contests:[], priorities:["M-01","M-02"]
};

/* ===================== SENSE & STRIKE ===================== */
const LEARN_M = {
  "M-01":{ topic:"Manoeuvre through a contested strike envelope", status:"Action now", why:"Taking ground is the easy part; sustaining the force through the adversary's reconnaissance-strike envelope after the advance is the hard part.", worked:"Local advances in the Borova direction where a window could be created, even under intensified FPV, MLRS and glide-bomb pressure on the routes behind.", next:"Sequence the advance with drone suppression, route protection, alternate trans-shipment and an explicit plan to restore movement after strikes." },
  "M-02":{ topic:"The intermediate rear as a target set", status:"Action now", why:"The adversary combines local FPV pressure on movement corridors with long-range strikes on ports, industry and distribution — the rear is no longer a sanctuary.", worked:"Long-range strikes reached logistics and economic infrastructure well beyond the front, with claimed and disputed target categories.", next:"Build dispersed trans-shipment, alternate routes, mobile repair and reload, and time-bound rerouting drills into the sustainment plan." }
};
const CONFLICT_CLASS = {"RUS-UKR":"t-rusukr","ISR-LBN":"t-isrlbn","THA-KHM":"t-thakhm","ISR-HMS":"t-isrhms","USI-IRN":"t-usiirn","SDN":"t-sdn"};
const CONFLICT_CODE = {"RUS-UKR":"RUS–UKR","ISR-LBN":"ISR–LBN","THA-KHM":"THA–KHM","ISR-HMS":"ISR–HMS","USI-IRN":"USI–IRN","SDN":"SUDAN"};

/* ===================== MANOEUVRE ===================== */
const KIND_LABEL = {lesson:"Lesson", action:"Tactical action", capdev:"Capability dev"};

const PLANNING_M = [
  {b:"Define manoeuvre conditions", p:"Before committing a manoeuvre force, identify the minimum conditions for hostile drone suppression, route viability, local air-defence disruption and friendly ISR coverage — and confirm them, rather than assuming them, at the start line."},
  {b:"Stress-test the intermediate rear", p:"Table-top and field-test sustainment after the loss of a key route, vehicle park, reload point, repair site or command post to drone attack. Treat gaps in survivable coverage as the planning problem, not an afterthought."},
  {b:"Treat rear routes as manoeuvre terrain", p:"Plan protection, dispersion and alternate trans-shipment for the intermediate rear as part of the scheme of manoeuvre — ports, distribution sites and repair nodes are now within the adversary's strike space."},
  {b:"Measure logistics recoverability", p:"For every critical support node record alternate routes, replacement sites, rerouting time, repair capacity and the maximum tolerable period of outage — resilience is the ability to recover, not the assumption that every node can be defended."}
];
const KEY_JUDGEMENTS_M = [
  "Tactical manoeuvre increasingly exploits a deliberately created <em>local window</em> in the adversary's ability to sense, strike, resupply and reinforce.",
  "Intermediate-rear logistics are a <em>primary target set</em> in the close fight, including beyond traditional artillery range.",
  "Sustainment resilience is measured by the ability to continue and recover after disruption, not by the assumption that every node can be defended.",
  "Manoeuvre and sustainment are now contested by the same reconnaissance-strike system, so they must be planned together."
];
const SUMMARY_M = {
  "M-01":"Local advances succeed where a window can be created in the adversary's ability to sense and strike — but the force must then be sustained through that same envelope, so sequence the advance with drone suppression, route protection and a plan to restore movement after strikes.",
  "M-02":"The intermediate rear is no longer a sanctuary — the adversary pairs local FPV pressure with long-range strikes on ports, industry and distribution, so plan dispersed trans-shipment, alternate routes, mobile repair and time-bound rerouting after node loss."
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
  "M-01":"From the August weekly reporting on the Borova direction — Ukrainian local advances against intensified Russian FPV, MLRS and glide-bomb pressure on the logistics routes behind them.",
  "M-02":"From the August weekly tracking of long-range strikes — Russian missiles and drones reaching Ukrainian ports, industry and retailer distribution facilities in the deep rear."
};
const APP_M = {
  "M-01":{ verdict:"Use it, with changes",
    lead:"A local advance is only as good as the sustainment that follows it. Set an entry condition for the advance, and plan the restoration of movement through the adversary's strike envelope as part of the same operation.",
    div:{ d:"Commit a manoeuvre element only once a defined entry condition set is met — hostile drone suppression, route viability, local air-defence disruption and friendly ISR coverage.", o:"Div Comd, on G2/G3 advice.", a:"Writes a manoeuvre-entry condition set into the plan and resources the ISR and suppression needed to confirm it, rather than committing on a timeline alone.", t:"A local advance is proposed inside a contested reconnaissance-strike envelope.", x:"Waiting on the condition set can cede tempo if the window is short.", m:"The advance is launched only against confirmed conditions, and the force is sustained through the envelope afterwards." },
    bde:{ d:"Plan the advance and the recovery of movement behind it as one sequence — a bounded manoeuvre force exploiting a created window, with route protection and alternate trans-shipment ready before the start line.", o:"Bde Comd, on S3/S4 advice.", a:"Bounds the objective to what the support echelon can sustain, and rehearses restoring movement after a strike rather than only the assault.", t:"Intensified FPV, MLRS or glide-bomb pressure is confirmed on the routes behind the objective.", x:"A bounded objective trades depth for a force that can actually be sustained.", m:"Movement on the key routes is restored within the planned time after interdiction." } },
  "M-02":{ verdict:"Use it, with changes",
    lead:"Treat the intermediate rear as contested ground. Disperse and diversify it, and measure how quickly it recovers after a strike rather than assuming it can be protected.",
    div:{ d:"Plan the intermediate rear for survivability — disperse holding areas, repair points, reload sites and command posts, and vary routes and timings — on the assumption it will be struck.", o:"Div Comd, on G4 advice.", a:"Replaces a linear, centralised sustainment layout with a dispersed, diversified one, and sets recoverability measures for every critical node.", t:"Long-range strike and local FPV pressure are both assessed against the rear.", x:"Dispersion and diversification cost throughput and coordination.", m:"No single strike removes a critical support function; movement reroutes and recovers inside the tolerable outage." },
    bde:{ d:"Hold mobile repair and reload capacity and pre-planned alternate routes, and drill rerouting after the loss of a node against a time standard.", o:"Bde Comd, on S4 advice.", a:"Stands up dispersed trans-shipment points and time-bound rerouting drills rather than relying on a single protected route or node.", t:"A distribution site, port node or reload point is assessed as within strike range.", x:"Mobile and dispersed sustainment is harder to command than a fixed hub.", m:"Resupply continues after a node is lost, within the rerouting time standard." } }
};
const ICT_M = {
  "M-01":{ fmt:"Manoeuvre-entry condition drill · Div G2/G3 + Bde O-group · 2 hrs · ISR + route overlay",
    set:"A local advance is proposed in a contested reconnaissance-strike environment; the routes behind the objective are under FPV, MLRS and glide-bomb pressure.",
    run:["Define the entry condition set — drone suppression, route viability, air-defence disruption, ISR coverage — and confirm each against the overlay.","Bound the objective to what the support echelon can sustain.","Sequence the advance with the restoration of movement after a strike."],
    dec:"Are the entry conditions met and confirmed, and is the force sustainable through the strike envelope after the advance?",
    twist:"Controller collapses one condition (a suppression task fails) mid-serial — hold, re-bound, or commit anyway?",
    std:"Advance committed only against confirmed conditions; objective bounded to the sustainment; movement restored within the planned time." },
  "M-02":{ fmt:"Rear-area resilience drill · Div G4 + Bde S4 · 2 hrs · logistics + threat overlay",
    set:"A dispersed intermediate rear faces local FPV pressure and a long-range strike on a distribution or reload node.",
    run:["Lay out holding areas, repair points, reload sites and command posts for dispersion and diversified routing.","Strike a node and reroute movement against a time standard.","Record the recoverability measures — alternate routes, replacement sites, rerouting time, tolerable outage."],
    dec:"Does the rear survive a single strike, and does movement reroute and recover inside the tolerable outage?",
    twist:"Controller strikes the alternate route as well — is there a third option?",
    std:"No single strike removes a critical function; rerouting inside the standard; recoverability measures recorded." }
};
const THEATRE_NAME = {"RUS-UKR":"Russia–Ukraine","ISR-LBN":"Israel–Lebanon","THA-KHM":"Thailand–Cambodia","ISR-HMS":"Israel–Gaza","USI-IRN":"US/Israel–Iran","SDN":"Sudan"};
const BLUF_TEXT_M = "In August the manoeuvre fight depended on <b>first shaping the adversary's drone, air-defence and logistics systems</b>. Ukrainian forces made local advances in the Borova direction while Russian FPV, MLRS and glide-bomb attacks restricted the routes that sustained them, and long-range strikes reached ports, industry and distribution in the deep rear. Manoeuvre and sustainment are now contested by the <b>same reconnaissance-strike system</b>. Set an entry condition for the advance, treat the intermediate rear as manoeuvre-critical terrain, and measure how fast logistics recover after a strike.";
const SUGGESTIONS_M = ["What changed for manoeuvre this month?","What conditions do we set before an advance?","How do we protect the intermediate rear?","What to rehearse in ICT","Lessons for sustainment under drones","Give me the bottom line"];
const _STOP = new Set("the a an and or of to in for on at by from with into onto over under is are was were be been being it this that those these as our we us your you their they them do does did how what which who why when where than then so such also more most any all key lead led leading about can could should would will not".split(" "));
const _THK = {"RUS-UKR":["russia","russian","ukraine","ukrainian","geran","shahed","donetsk","pokrovsk","kursk","chonhar","borova"],"ISR-LBN":["israel","israeli","lebanon","lebanese","hezbollah","idf","nabatieh","merkava","beaufort","litani"],"THA-KHM":["thailand","thai","cambodia","cambodian","osmach"],"ISR-HMS":["hamas","gaza","qassam","odeh","haddad","khrizim","decapitation"],"SDN":["sudan","sudanese","rsf","obeid","kordofan","besieged","besiege","siege"]};
const _FMK_M = {};
const _OUT = {success:["success","successful","succeed","worked","effective","effectively","win","won","decisive","gained","advantage","best","what worked"],failure:["fail","failed","failure","failures","lost","loss","losses","vulnerable","vulnerability","mistake","wrong","unsustainable","what failed","did not"],threat:["threat","gap","capability","capdev","weakness","unjammable"]};
const _SEC = {bluf:["bottom line","bluf","summary","summarise","summarize","overview","tldr","tl;dr","takeaway","big picture","headline","in short"],planning:["planning","oplan","estimate","checklist","precondition","go/no-go","go no go","gonogo"],ict:["rehearse","ict","in-camp","train","training","exercise","drill","practice","practise"]};
/* Concept clusters for the on-device assistant. Each inner array is a set of
   equivalent single-word terms; a query token matching any member expands to the
   whole cluster before ranking, so lay phrasing ("drone", "wired") reaches the
   right serials. Members are single lowercase tokens (the tokeniser splits on
   hyphens/spaces), grounded in the corpus vocabulary. */
const SYN = [
  ["drone","drones","fpv","uav","uas","loitering","quadcopter","geran","shahed"],
  ["fibre","fiber","wired","tethered","optic","unjammable"],
  ["doubletap","double","tap","reattack","rescue","casevac","followup","secondary"],
  ["jam","jamming","jammer","ew","electronic","spoofing","gnss","spectrum","warfare"],
  ["starlink","satcom","satellite","connectivity","uplink"],
  ["ugv","unmanned","robot","robotic","groundrobot"],
  ["bridge","crossing","span","chonhar","pontoon","bridging","interdiction"],
  ["saturation","mass","swarm","overwhelm","saturate","salvo","decoy","cruise","ballistic","hypersonic","glide"],
  ["decapitation","leadership","commander","commanders","managers","finance","depth","targeting"],
  ["autonomous","autonomy","brave1","intercept","interceptor"],
  ["siege","besiege","besieged","encircle","blockade","obeid","infrastructure"],
  ["ceasefire","truce","encroachment","creep","baseline","observer","compliance"],
  ["subthreshold","greyzone","provocation","incursion","threshold"],
  ["resupply","logistics","sustainment","supply","passability","distribution","transshipment","rear"],
  ["engineer","engineers","sapper","repair","breach","obstacle"],
  ["forceprotection","survivability","protection","cover","hardening","recoverability"],
  ["ammunition","ammo","munition","munitions","shell","shells","round","rounds","magazine","stockpile","reload"],
  ["airdefence","airdefense","sam","interceptor","interception","shorad","gbad","patriot","pantsir","radar","nebo","kasta","sopka"],
  ["artillery","arty","howitzer","fires","gun","guns","himars","counterbattery","barrage","mlrs"],
  ["casualty","casualties","wounded","medical","medevac","evacuation","evac","treatment"],
  ["tank","tanks","armour","armor","afv","ifv","mbt","mounted"],
  ["command","c2","headquarters","comms","communications"],
  ["power","grid","electricity","water","fuel","energy","utilities"],
  ["airfield","airfields","runway","aviation","sortie","aircraft","primorsko","yeysk","millerovo"],
  ["port","ports","industry","industrial","economic","manufacturing"],
  ["sead","dead","suppression","strikesystem","architecture"]
];

/* ===================== SENSE & STRIKE PACKAGE (Package 2) ===================== */
const FORMATIONS_S = {};
const _FMK_S = {};

const SERIALS_S = [
  { id:"S-01", kind:"lesson", title:"Attacking drone launch, radar and airfield defence as one target system (Russia)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Developing success", dates:"20 Aug 2026",
    formations:[], multi:false, image:"/img/2026-08/S-01.jpg", imageCredit:"Kyiv Independent",
    blocks:[
      {l:"What happened", t:"Ukraine's military intelligence stated that Ukrainian forces struck airfields at Primorsko-Akhtarsk in southern Russia and in occupied Donetsk on 20 August. Kyiv Independent reported that the sites were used to store, prepare and launch long-range drones, and that the operation also targeted Nebo-U and Niobiy radar systems. RBC-Ukraine reported Ukrainian claims that the strikes hit drone-related facilities and air-defence infrastructure."},
      {l:"So what", t:"Drone launch, surveillance, air defence and aviation support should be treated as a single target system. Attacking the radar and air-defence layer alongside the launch infrastructure can reduce the adversary's ability to detect, protect and regenerate long-range drone operations. Physical-destruction claims should remain attributed until corroborated by imagery, official confirmation or additional independent reporting."}
    ],
    sources:[
      {u:"https://kyivindependent.com/ukraine-hits-russian-drone-launch-airfields-in-primorsko-akhtarsk-occupied-donetsk-hur-says/",n:"Kyiv Independent — drone-launch airfields and radars struck (20 Aug)"},
      {u:"https://newsukraine.rbc.ua/news/ukraine-strikes-deep-inside-russia-hitting-1787229638.html",n:"RBC-Ukraine — strikes on drone and air-defence sites (20 Aug)"}
    ] },
  { id:"S-02", kind:"lesson", title:"Degrading airfield sensors and defence before aviation can regenerate (Russia)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"success", verdictLabel:"Claimed tactical success", dates:"30 Aug 2026",
    formations:[], multi:false, image:"/img/2026-08/S-02.jpg", imageCredit:"Kyiv Independent",
    blocks:[
      {l:"What happened", t:"Kyiv Independent reported claims by the commander of Ukraine's Unmanned Systems Forces that strikes at Yeysk and Millerovo airfields targeted a Pantsir-S1 system, Sopka-2 and Kasta-2E2 radar systems, an RSP-27 radar complex, a Nebo-SV radar system, aviation facilities and weapons-storage infrastructure."},
      {l:"So what", t:"The airfield is not a discrete point target. Its output depends on a protective and enabling cluster of sensors, air-defence systems, runways, fuel, weapons storage and maintenance infrastructure. Strike planning should seek cumulative degradation across the cluster, while collection should focus on whether the adversary has shifted aircraft, replaced radars or restored sortie generation."}
    ],
    sources:[
      {u:"https://kyivindependent.com/ukrainian-drones-destroy-russian-air-defense-radar-systems-at-yeysk-millerovo-airfields/",n:"Kyiv Independent — radar and air-defence systems at Yeysk and Millerovo (30 Aug)"}
    ] }
];
const SUMMARY_S = {
  "S-01":"Drone launch, surveillance, air defence and aviation support are one target system — attacking the radar and air-defence layer alongside launch infrastructure degrades the adversary's ability to detect, protect and regenerate long-range drones. Keep destruction claims attributed until corroborated.",
  "S-02":"An airfield's output depends on a cluster of sensors, air defences, runways, fuel, storage and maintenance — plan cumulative degradation across the cluster and collect on whether aircraft moved, radars were replaced or sorties resumed."
};
const SIGNAL_S = {
  "S-01":"From the August weekly deep-strike reporting — the 20 August strikes on drone-launch airfields at Primorsko-Akhtarsk and in occupied Donetsk, and on Nebo-U and Niobiy radars.",
  "S-02":"From the running August airfield tracking — claimed strikes at Yeysk and Millerovo on Pantsir-S1, Sopka-2, Kasta-2E2, RSP-27 and Nebo-SV systems and airfield support."
};
const APP_S = {
  "S-01":{ verdict:"Use it, with changes",
    lead:"Attack the launch, sensing, air-defence and aviation-support layers together, not the drones one by one — and hold reported effects as claims until they are corroborated.",
    div:{ d:"Maintain a single target-system model that links the adversary's drone-launch sites, radars, air-defence assets and aviation support, so strike planning attacks the connected system rather than individual weapons.", o:"Div Comd, on the intelligence staff's advice.", a:"Builds a strike-system target list that ties launch, sensing, protection and sustainment into one package.", t:"An adversary long-range drone operation is generated from a defended airfield or launch complex.", x:"System-level targeting is intelligence-intensive and slower to assemble than a single aim point.", m:"Strikes reduce the adversary's ability to detect, protect and regenerate launches, not just destroy airframes." },
    bde:{ d:"Sequence suppression of the radar and air-defence layer with the strike on launch infrastructure, and record each reported effect as a claim until corroborated.", o:"Fires, on the intelligence staff's cue.", a:"Runs a suppress-then-strike sequence and applies a confidence standard to every claimed result.", t:"Radars and air-defence systems are assessed as protecting the launch site.", x:"Suppressing the defensive layer first spends effort before the main strike.", m:"Access created for the follow-on strike; claimed effects separated from corroborated ones." } },
  "S-02":{ verdict:"Use it, with changes",
    lead:"Treat the airfield as a cluster, not a point. Degrade sensors, defences, storage and maintenance cumulatively, and collect on regeneration rather than counting airframes.",
    div:{ d:"Plan strikes for cumulative degradation across the airfield cluster — sensors, air defences, runways, fuel, weapons storage and maintenance — rather than a single decisive hit.", o:"Div Comd, on the intelligence staff's advice.", a:"Sequences targets across the cluster and sets collection to read whether the airfield's output recovers.", t:"A defended airfield sustains adversary sortie or launch generation.", x:"Cumulative degradation demands sustained effort and munitions.", m:"Airfield output falls and stays down; regeneration indicators tracked." },
    bde:{ d:"Focus collection after a strike on whether the adversary shifted aircraft, replaced radars or restored sortie generation — not on the count of systems reportedly hit.", o:"Intelligence staff, on Div direction.", a:"Adds regeneration indicators to the collection plan and applies the confidence standard to claimed destruction.", t:"An airfield cluster is struck and results are claimed.", x:"Regeneration indicators take time to confirm and may lag.", m:"Restored or relocated capability detected early; claims held until corroborated." } }
};
const ICT_S = {
  "S-01":{ fmt:"Strike-system targeting exercise · Div intelligence + Fires · 2 hrs · target-system overlay",
    set:"An adversary long-range drone operation is generated from a defended airfield with associated radars and air-defence systems.",
    run:["Map launch, sensing, air-defence and aviation-support nodes as one connected target system.","Sequence suppression of the radar/air-defence layer with the strike on launch infrastructure.","Record each reported effect against a confidence standard — claimed, corroborated, inferred."],
    dec:"Does the cell attack the connected system rather than individual airframes, and separate claim from confirmation?",
    twist:"Controller supplies a strike claim with no corroboration — does the cell log it as confirmed?",
    std:"Target system mapped; suppress-then-strike sequenced; claims separated from corroborated effects." },
  "S-02":{ fmt:"Airfield-cluster degradation exercise · Div intelligence + Fires · 90 min · airfield map + collection plan",
    set:"A defended airfield sustains sortie/launch generation from a cluster of sensors, defences, storage and maintenance.",
    run:["Rank the cluster nodes for cumulative degradation rather than a single decisive hit.","Set collection to read regeneration — aircraft moved, radars replaced, sorties resumed.","Apply the confidence standard to each claimed result."],
    dec:"Is the plan for cumulative degradation, and is collection reading regeneration rather than counting airframes?",
    twist:"Controller relocates the aircraft mid-serial — does collection catch the move?",
    std:"Cluster degradation sequenced; regeneration indicators set; claims held until corroborated." }
};
const LEARN_S = {
  "S-01":{ topic:"Strike-system targeting", status:"Action now", why:"Attacking launch, sensing, air defence and aviation support together degrades the adversary's ability to detect, protect and regenerate long-range drones — more than destroying airframes one by one.", worked:"Strikes on drone-launch airfields at Primorsko-Akhtarsk and occupied Donetsk also targeted Nebo-U and Niobiy radars.", next:"Maintain an integrated strike-system target list and sequence SEAD/DEAD with the follow-on strike." },
  "S-02":{ topic:"Airfield-cluster degradation", status:"High utility", why:"An airfield's output depends on a cluster of sensors, defences, runways, fuel, storage and maintenance — cumulative degradation matters more than a single hit.", worked:"Claimed strikes at Yeysk and Millerovo across Pantsir-S1, Sopka-2, Kasta-2E2, RSP-27 and Nebo-SV systems and support.", next:"Plan cumulative degradation across the cluster and collect on regeneration; hold destruction claims until corroborated." }
};
const PACK_S = {
  kicker:"August 2026 · Sense & Strike", titleLine:"for sense-and-strike formations",
  changed:"August turned deep fires into a contest over the adversary's strike architecture. Ukrainian reporting described attacks on drone-launch airfields, radars, air-defence systems, aviation facilities and weapons storage — struck not as separate targets but as the connected system that detects, protects, launches, sustains and regenerates long-range strikes. For sense-and-strike formations the message is to sequence SEAD/DEAD with the strike campaign, target the architecture rather than individual weapons, and keep claimed physical effects attributed where independent confirmation is unavailable.",
  stats:[
    {n:2, k:"Priority learnings", s:"For this month"},
    {n:2, k:"Hot contests", s:"Under adaptation watch"},
    {n:2, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat the adversary's launch, sensing, air-defence, C2, sustainment and industrial layers as one target system. Sequence suppression with the follow-on strike, plan cumulative degradation across a cluster rather than a single hit, and record claim, corroboration and inferred effect separately.",
  divPriorities:[
    "Maintain an integrated strike-system target list — sensors, air defences, airfields, launch sites, logistics, C2, weapons storage and industrial sustainment in one model.",
    "Sequence SEAD/DEAD as an operational enabler for access and follow-on effects, not merely a supporting task.",
    "Enforce target-development discipline — separate official claims, independently verified damage and inferred operational impact."
  ],
  brigadeBluf:"For deep fires this month: suppress or deceive the sensing and air-defence layer, then strike the launch and sustainment nodes before the adversary reconstitutes; and log every result as claim, corroboration or inference.",
  implications:[
    {ech:"Division HQ", t:"Model the adversary's strike architecture as one connected system and plan follow-on effects before the initial suppression mission begins."},
    {ech:"Intelligence staff", t:"Hold an integrated target-system list, set regeneration indicators, and apply a confidence standard to every reported strike result."},
    {ech:"Fires", t:"Run the detect–locate–suppress–confirm–strike sequence and plan cumulative degradation across a cluster rather than a single decisive hit."}
  ],
  worked:[
    "Attacking launch, radar and air-defence layers together rather than airframes one by one.",
    "Sequencing suppression of sensors and defences with the strike on launch and support.",
    "Planning cumulative degradation across an airfield cluster instead of a single knockout."
  ],
  failed:[
    "Isolated strikes that leave enemy sensors, launchers and air defences operating as a mutually supporting system.",
    "A platform-centric target model that lets the adversary regenerate strikes.",
    "Overclaiming strike effects that are not independently verifiable at the time of reporting."
  ],
  testICT:[
    "Map an adversary launch/sensing/defence complex as one target system and sequence SEAD/DEAD with the strike.",
    "Plan cumulative degradation across an airfield cluster and set regeneration indicators.",
    "Apply a claim/corroboration/inference confidence standard to reported strike results."
  ],
  sopReview:[
    "Integrated strike-system target list linking sensors, defences, launch, C2, storage and industry.",
    "Suppression-and-strike drill with follow-on planned before the first mission.",
    "Confidence standard recording source, geolocation, imagery basis and assessed effect."
  ],
  contests:[], priorities:["S-01","S-02"]
};
const PLANNING_S = [
  {b:"Plan strike effects as a system", p:"Maintain a target model linking the adversary's sensors, air defences, airfields, launch sites, C2, fuel, logistics and reconstitution pathways — and plan the follow-on strike before the initial suppression mission begins."},
  {b:"Separate claim from confirmation", p:"For every reported strike, record the claim source, corroborating evidence, assessed confidence, physical effect, operational effect and indicators of enemy regeneration — separately, not as a single 'destroyed' line."},
  {b:"Sequence SEAD/DEAD with the strike", p:"Treat suppression of the sensing and air-defence layer as an operational enabler for access and follow-on effects; rehearse the detect–locate–suppress–confirm–strike sequence before the adversary reconstitutes."},
  {b:"Collect on regeneration", p:"Set collection to read whether the adversary shifted aircraft, replaced radars or restored sortie generation after a strike — measure system interruption and regeneration time, not the count of targets struck."}
];
const KEY_JUDGEMENTS_S = [
  "A deep-strike campaign gains leverage when it attacks the enemy's capacity to <em>launch, protect, sustain and regenerate</em> fires as a connected system.",
  "SEAD/DEAD is increasingly an <em>operational enabler</em> for access and follow-on effects, not merely a supporting tactical task.",
  "Target-development discipline requires separating official claims, independently verified physical damage and inferred operational impact.",
  "The same radars and air defences protecting airfields and launch sites can be a concentrated point of failure in the enemy's long-range strike system."
];
const BLUF_S = "In August deep fires turned on the adversary's <b>strike architecture</b>. Ukrainian reporting described attacks on drone-launch airfields, radars, air-defence systems, aviation facilities and weapons storage — attacked as one connected system that detects, protects, launches, sustains and regenerates long-range strikes. Sequence <b>SEAD/DEAD with the strike campaign</b>, target the architecture rather than individual weapons, and keep claimed effects <b>attributed</b> where independent confirmation is unavailable.";
const SUGGESTIONS_S = ["What changed for sense & strike this month?","How do we target a strike system, not weapons?","How should we sequence SEAD/DEAD with a strike?","What to rehearse in ICT","Lessons for the intelligence staff","Give me the bottom line"];

/* ===================== COMBAT SUPPORT ===================== */
const FORMATIONS_CSS = {};
const _FMK_CSS = {};

const SERIALS_CSS = [
  { id:"CS-01", kind:"lesson", title:"Logistics and distribution infrastructure as a contested rear-area system (Ukraine)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"threat", verdictLabel:"Threat pattern", dates:"27 Aug 2026",
    formations:[], multi:false, image:"/img/2026-08/CS-01.jpg", imageCredit:"Al Jazeera",
    blocks:[
      {l:"What happened", t:"Reuters reported Russian attacks against Ukrainian ports, industrial sites and retailer distribution facilities, with Ukrainian and Russian official accounts differing on the precise target categories and intended effects. The attack nonetheless illustrates that logistics-related economic infrastructure is within the active strike contest."},
      {l:"So what", t:"Sustainment planners should not separate military logistics from the wider physical system on which it depends. Civilian distribution capacity, port access, industrial maintenance and transport connectivity can become operational vulnerabilities where they support military movement, replenishment or national endurance. Their protection and recovery should be planned accordingly."}
    ],
    sources:[
      {u:"https://www.reuters.com/world/europe/explosions-heard-ukraines-kyiv-reuters-witness-says-2026-08-27/",n:"Reuters — strikes on ports, industry and distribution (27 Aug)"}
    ] },
  { id:"CS-02", kind:"lesson", title:"Targeting weapons flow rather than a single logistics facility (Russia)",
    conflict:"RUS-UKR", theatre:"Russia–Ukraine", verdict:"mixed", verdictLabel:"Developing campaign", dates:"August 2026",
    formations:[], multi:false,
    blocks:[
      {l:"What happened", t:"Al Jazeera reported that Ukraine was pressing a campaign to disrupt the flow of Russian personnel, munitions and fuel, alongside attacks against airfields, transport routes, launchers and radars. Separate Ukrainian reporting described strikes against drone-launch sites and associated radar infrastructure."},
      {l:"So what", t:"The objective is not the destruction of a particular warehouse or commercial facility in isolation. It is degradation of the linked movement-and-generation system: transport routes, storage, launch infrastructure, sensors, fuel and the personnel-and-maintenance processes that turn supplies into combat effects. Target assessment should measure system interruption and regeneration time rather than count individual targets struck."}
    ],
    sources:[
      {u:"https://www.aljazeera.com/news/2026/8/28/ukraine-reinforces-donetsk-as-it-seeks-to-disrupt-russias-weapons-flow",n:"Al Jazeera — campaign to disrupt Russian weapons flow (28 Aug)"},
      {u:"https://kyivindependent.com/ukraine-hits-russian-drone-launch-airfields-in-primorsko-akhtarsk-occupied-donetsk-hur-says/",n:"Kyiv Independent — strikes on launch sites and radars (20 Aug)"}
    ] }
];
const SUMMARY_CSS = {
  "CS-01":"Military logistics cannot be separated from the civilian physical system it depends on — ports, distribution, industrial maintenance and transport connectivity become operational vulnerabilities where they sustain military movement or national endurance, so plan their protection and recovery.",
  "CS-02":"Attack the linked movement-and-generation system, not a single warehouse — routes, storage, launch infrastructure, sensors, fuel and the maintenance processes that turn supplies into combat effects — and measure system interruption and regeneration time, not targets struck."
};
const SIGNAL_CSS = {
  "CS-01":"From the August weekly reporting — Russian strikes on Ukrainian ports, industry and retailer distribution facilities, with disputed target categories.",
  "CS-02":"From the running August coverage — Ukraine's campaign to disrupt Russian personnel, munitions and fuel flow alongside strikes on airfields, routes, launchers and radars."
};
const APP_CSS = {
  "CS-01":{ verdict:"A warning, not a model",
    lead:"Treat sustainment as a contested network, not a rear-area function. Map the physical system military logistics depends on, and plan its protection and recovery — but test a facility's function before treating it as decisive.",
    div:{ d:"Map the sustainment network — critical hubs, transport routes, trans-shipment points, repair nodes, alternate sites and single points of failure — and plan protection and recovery across it, not around individual military depots.", o:"Div Comd, on G4 advice.", a:"Builds a network map with chokepoints, redundancy and time-to-recover, and exercises rerouting after the loss of a node.", t:"Long-range strike reaches the ports, industry and distribution that sustain the force.", x:"Network-wide protection stretches limited hardening and counter-UAS resources.", m:"No single hub loss cascades across combat functions; movement reroutes inside the tolerable outage." },
    bde:{ d:"Disperse repair and reload into smaller, mobile, relocatable sites rather than a few high-signature hubs, and hold pre-planned alternate routes.", o:"Bde Comd, on S4 advice.", a:"Replaces centralised distribution with dispersed, relocatable capacity and time-bound rerouting drills.", t:"A distribution or maintenance hub is assessed as within strike range.", x:"Dispersed capacity is harder to command and coordinate than a central hub.", m:"Resupply continues after a hub is struck; recovery inside the standard." } },
  "CS-02":{ verdict:"Use it, with changes",
    lead:"Judge a campaign against the enemy's logistics by system interruption, not target count — and apply a function test before treating civilian-appearing infrastructure as decisive.",
    div:{ d:"Assess strikes on the enemy's sustainment by the interruption and regeneration time of the linked movement-and-generation system — routes, storage, launch, sensors, fuel and maintenance — not by the number of facilities struck.", o:"Div Comd, on the intelligence staff's advice.", a:"Sets measures of effect around system interruption and reconstitution rather than a target tally.", t:"A campaign to disrupt the enemy's weapons flow is under way.", x:"System-level assessment is slower and harder to attribute than counting targets.", m:"Interruption and regeneration time measured; effort directed at the highest-dependency nodes." },
    bde:{ d:"Apply a target-function test before assessing a commercial or civilian-appearing facility as operationally significant — establish its verified role, dependency, scale of use and likely military effect if disrupted.", o:"Intelligence staff, on Div direction.", a:"Adds a function test to target development so commercial appearance is not mistaken for military significance.", t:"A civilian-appearing facility is proposed as a target on the weapons-flow system.", x:"The function test slows target development and may hold a marginal target.", m:"Only facilities with an evidenced military or sustainment function are assessed as significant." } }
};
const ICT_CSS = {
  "CS-01":{ fmt:"Sustainment-network resilience exercise · Div G4 + Bde S4 · 2 hrs · logistics network map",
    set:"Long-range strike reaches the ports, industry and distribution the force depends on; military logistics ride the same physical system.",
    run:["Map critical hubs, routes, trans-shipment points, repair nodes, alternate sites and single points of failure.","Disperse repair and reload into smaller, relocatable sites and set alternate routes.","Strike a hub and reroute against a time standard; record time-to-recover."],
    dec:"Does the network survive the loss of a hub without cascading across combat functions, and does movement recover inside the tolerable outage?",
    twist:"Controller strikes the alternate site as well — is there further redundancy?",
    std:"Network mapped with chokepoints and redundancy; dispersed capacity holds; rerouting inside the standard." },
  "CS-02":{ fmt:"Weapons-flow target-development exercise · Div intelligence · 90 min · movement-and-generation model",
    set:"A campaign to disrupt the enemy's weapons flow — routes, storage, launch, sensors, fuel and maintenance — with several civilian-appearing candidate targets.",
    run:["Model the linked movement-and-generation system and rank nodes by dependency.","Apply the function test to each civilian-appearing candidate before assessing significance.","Set measures of effect around interruption and regeneration time, not target count."],
    dec:"Are targets chosen by evidenced dependency, and is effect measured by system interruption rather than a tally?",
    twist:"Controller offers a high-signature commercial site with no evidenced military function — take it or hold?",
    std:"Function test applied; effort on highest-dependency nodes; effect measured by interruption and regeneration." }
};
const LEARN_CSS = {
  "CS-01":{ topic:"Sustainment as a contested network", status:"Action now", why:"Military logistics ride the civilian physical system — ports, distribution, industry and transport — which the adversary now strikes in the deep rear.", worked:"Long-range strikes on Ukrainian ports, industry and distribution showed the vulnerability of concentrated logistics capacity.", next:"Map the network with chokepoints, redundancy and time-to-recover, and disperse repair and reload into relocatable sites." },
  "CS-02":{ topic:"Weapons-flow targeting", status:"High utility", why:"Disrupting the linked movement-and-generation system degrades combat output more than destroying a single warehouse — but civilian appearance is not military significance.", worked:"Ukraine's campaign paired strikes on routes, storage, launch, sensors and fuel to interrupt the flow of personnel, munitions and fuel.", next:"Measure interruption and regeneration time, and apply a function test before treating civilian-appearing infrastructure as decisive." }
};
const PACK_CSS = {
  kicker:"August 2026 · CS & CSS", titleLine:"for CS & CSS formations",
  changed:"August reinforced that sustainment is a contested network rather than a rear-area function. Long-range strikes on ports, industry and distribution exposed the vulnerability of concentrated logistics capacity; the campaign against the adversary's airfields, radars and weapons-flow infrastructure showed the value of targeting the enemy's sustainment architecture. For CS & CSS formations the planning task is to distinguish a facility's commercial appearance from its demonstrated operational function, and to design own support systems for dispersion, recovery and replacement.",
  stats:[
    {n:2, k:"Priority learnings", s:"For this month"},
    {n:2, k:"Hot contests", s:"Under adaptation watch"},
    {n:2, k:"Immediate actions", s:"For next ICT cycle"}
  ],
  commandLens:"Treat logistics as a network to protect and a target system to disrupt. Map own hubs, routes and single points of failure and design for dispersion and recovery; and before assessing a civilian-appearing facility as decisive, establish its verified military or sustainment function.",
  divPriorities:[
    "Map own logistics as a network — critical hubs, routes, trans-shipment points, repair nodes, alternate sites and single points of failure.",
    "Build recoverable sustainment that can reroute, repair, disperse and reconstitute after a strike rather than depend on avoiding all losses.",
    "Apply a target-function test to the enemy's civilian-appearing infrastructure — verified role, dependency, scale and likely military effect if disrupted."
  ],
  brigadeBluf:"For combat support this month: disperse repair and reload into smaller, relocatable sites; hold alternate routes and rerouting drills; and treat weapons-flow targeting as system interruption, not a target count.",
  implications:[
    {ech:"Division HQ", t:"Design own sustainment for dispersion, recovery and replacement, and hold the enemy's logistics as a target system measured by interruption and regeneration."},
    {ech:"Engineers", t:"Build dispersed, relocatable repair and reload capacity and pre-position redundancy rather than defend high-signature hubs in place."},
    {ech:"Signals", t:"Map chokepoints and single points of failure, add civilian-appearing but militarily significant nodes to protection, and track recovery times."}
  ],
  worked:[
    "Reading logistics as a network with chokepoints and redundancy, not a set of fixed depots.",
    "Targeting the enemy's linked movement-and-generation system rather than a single facility.",
    "Building sustainment to reroute, repair and reconstitute after a strike."
  ],
  failed:[
    "Centralised logistics concentration whose disruption cascades across combat functions.",
    "Treating commercial infrastructure as militarily decisive without evidence of its function.",
    "Rear-area complacency that leaves ports, distribution, industry and transport inside the strike model."
  ],
  testICT:[
    "Map own sustainment as a network and reroute after the loss of a hub against a time standard.",
    "Build dispersed, relocatable repair and reload capacity and prove it survives a strike.",
    "Apply a function test to civilian-appearing enemy infrastructure before assessing significance."
  ],
  sopReview:[
    "Logistics-network map with chokepoints, redundancy and time-to-recover.",
    "Dispersed, relocatable repair-and-reload posture and alternate routing.",
    "Target-function test for civilian-appearing infrastructure."
  ],
  contests:[], priorities:["CS-01","CS-02"]
};
const PLANNING_CSS = [
  {b:"Map dual-use dependencies", p:"Identify civilian infrastructure with demonstrated military, industrial or sustainment relevance; separately identify own dependencies that require dispersion, redundancy or protection. Commercial appearance is not by itself military significance."},
  {b:"Measure recovery, not only protection", p:"For every critical support node record alternate locations, reroute times, replacement capacity and the maximum tolerable period of outage — resilience is the ability to continue and recover after disruption, not the assumption that every node can be defended."},
  {b:"Map own logistics as a network", p:"Record critical hubs, chokepoints, alternative routes, repair capacity, stock redundancy and time-to-recover, and exercise rerouting after the loss of a node — rather than treating logistics as a set of fixed depots."},
  {b:"Disperse repair and reload", p:"Use smaller, mobile and relocatable repair and reload sites rather than a few high-signature maintenance and replenishment hubs whose disruption cascades across combat functions."},
  {b:"Apply a target-function test", p:"Before assessing a commercial or civilian-appearing facility as operationally significant, establish its verified role, relevant dependency, scale of use and likely military effect if disrupted."}
];
const KEY_JUDGEMENTS_CSS = [
  "The logistics network is <em>both</em> a vulnerability to protect and a target system to disrupt.",
  "Commercial appearance does not by itself establish military significance — operational function and dependency must be evidenced.",
  "Resilience is measured by the ability to continue and recover after disruption, not by the assumption that every rear-area node can be defended.",
  "Long-range strike on ports, industry and distribution shows the danger of concentrated logistics capacity."
];
const BLUF_CSS = "In August combat support turned on <b>network resilience and target-function discipline</b>. Long-range strikes on ports, industry and distribution exposed the vulnerability of concentrated logistics capacity; the campaign against the adversary's airfields, radars and weapons-flow infrastructure showed the value of targeting the enemy's sustainment architecture. The task is to distinguish a facility's <b>commercial appearance from its demonstrated function</b>, and to design own support for <b>dispersion, recovery and replacement</b>.";
const SUGGESTIONS_CSS = ["What changed for CS & CSS this month?","How do we make sustainment recoverable?","How do we test a facility's military function?","What to rehearse in ICT","Lessons for Signals","Give me the bottom line"];

/* ===================== EXPEDITIONARY ===================== */
/* No expeditionary serials in the August edition — the Manoeuvre & Expeditionary
   tab therefore shows the Manoeuvre content only. All EXP bundles are empty so
   the MANEXP merge (below) reduces cleanly to the Manoeuvre package. */
const FORMATIONS_EXP = {};
const _FMK_EXP = {};

const SERIALS_EXP = [];
const SUMMARY_EXP = {};
const SIGNAL_EXP = {};
const APP_EXP = {};
const ICT_EXP = {};
const LEARN_EXP = {};
const PACK_EXP = {
  kicker:"August 2026 · Expeditionary", titleLine:"for expeditionary formations",
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
                      or fix a vulnerability (doctrine, training, procurement)
   Each item: {t: headline, d: 1–2 line so-what, id: source serial}. */
const FRAME_M = {
  bluf:"August showed that manoeuvre depends on first shaping the adversary's drone, air-defence and logistics systems. Ukrainian forces made local advances in the Borova direction while Russian forces intensified attacks on the routes and rear areas that sustained them, and long-range strikes reached ports, industry and distribution in the deep rear. Manoeuvre and sustainment are now contested by the same reconnaissance-strike system: a local advance must be planned alongside the suppression of hostile drones, the protection of intermediate rear areas and the rapid restoration of disrupted logistics routes.",
  opportunities:[
    {t:"Condition the battlefield before manoeuvre", d:"Suppress hostile reconnaissance-strike systems, disrupt local logistics and exploit the resulting temporary freedom of action with a bounded manoeuvre force.", id:"M-01"},
    {t:"Treat rear-area logistics as part of the close fight", d:"Russian attacks on Borova-area routes and wider strikes on ports, industry and distribution show that sustainment infrastructure is manoeuvre-critical terrain.", id:"M-02"},
    {t:"Build recovery into sustainment", d:"A survivable support system must reroute, disperse and restore after interdiction rather than rely on a single protected route or logistics node.", id:"M-02"}
  ],
  vulnerabilities:[
    {t:"Manoeuvre without drone suppression", d:"Local movement remains exposed if hostile drone, artillery and aviation systems can detect and target the force or its support echelon.", id:"M-01"},
    {t:"A linear sustainment model", d:"Fixed rear routes, centralised distribution sites and predictable replenishment cycles offer an adversary a repeatable interdiction problem.", id:"M-02"},
    {t:"Rear-area complacency", d:"Distribution centres, ports, industrial facilities, vehicle parks and trans-shipment points are increasingly part of the enemy's strike space.", id:"M-02"}
  ],
  capdev:[
    {t:"Build a manoeuvre-entry condition set", d:"Define the required threshold of hostile drone suppression, route viability, local air-defence disruption and friendly ISR coverage before committing a manoeuvre element.", id:"M-01"},
    {t:"Harden and diversify the intermediate rear", d:"Disperse holding areas, repair points, reload sites and command posts; vary routes and timings; rehearse recovery after drone interdiction.", id:"M-02"},
    {t:"Measure logistics recoverability", d:"Track alternate routes, replacement sites, rerouting time, repair capacity and maximum tolerable outage for every critical support node.", id:"M-02"}
  ]
};
const FRAME_S = {
  bluf:"August highlighted reciprocal campaigns to degrade the adversary's strike architecture. Ukrainian reporting described attacks against drone-launch airfields, radars, air-defence systems, aviation facilities and weapons-storage sites. The operational value lies not in treating each target as separate, but in attacking the connected system that detects, protects, launches, sustains and regenerates long-range strikes. Claimed physical effects should remain attributed where independent confirmation is unavailable.",
  opportunities:[
    {t:"Sequence SEAD/DEAD with strike campaigns", d:"Suppression of radar and air-defence systems can create access and reduce risk for attacks on airfields, drone-launch sites, logistics and industrial targets.", id:"S-01"},
    {t:"Target the strike architecture, not individual weapons", d:"Airfields, launch sites, sensors, air defences, aviation-support infrastructure and weapons storage form a connected target system.", id:"S-01"},
    {t:"Exploit sensor dependencies", d:"The same radars and air-defence systems protecting military airfields and launch sites may offer a concentrated point of failure in the enemy's long-range strike system.", id:"S-02"}
  ],
  vulnerabilities:[
    {t:"Isolated strikes without air-defence suppression", d:"Deep-strike effects may remain limited if enemy sensors, launch systems and air defences continue to operate as a mutually supporting system.", id:"S-01"},
    {t:"A platform-centric target model", d:"Destroying individual drones or launchers without affecting the launch, sustainment and command network allows the adversary to regenerate strikes.", id:"S-02"},
    {t:"Overclaiming strike effects", d:"Official claims on target destruction may not be independently verifiable at the time of reporting; assessment should distinguish claimed damage, corroborated physical effects and inferred operational consequence.", id:"S-02"}
  ],
  capdev:[
    {t:"Maintain an integrated strike-system target list", d:"Link enemy sensors, air-defence assets, airfields, launch sites, logistics, C2, weapons storage and industrial sustainment in a single target-system model.", id:"S-01"},
    {t:"Build a suppression-and-strike drill", d:"Rehearse the sequence of detect, locate, suppress or deceive air defences, confirm effects and strike follow-on targets before the adversary reconstitutes.", id:"S-02"},
    {t:"Create a confidence standard", d:"Record separately the source, confidence level, geolocation, imagery basis and assessed operational effect for each reported strike result.", id:"S-02"}
  ]
};
const FRAME_CSS = {
  bluf:"August reinforced that sustainment is a contested network rather than a rear-area function. Long-range strikes against ports, industrial sites and distribution facilities demonstrate the vulnerability of concentrated logistics capacity; reporting on the campaign against the adversary's airfields, radars and weapons-flow infrastructure demonstrates the potential operational value of targeting the enemy's sustainment architecture. The primary planning task is to distinguish a facility's commercial appearance from its demonstrated operational function, and to design own support systems for dispersion, recovery and replacement.",
  opportunities:[
    {t:"Map logistics as a network", d:"Identify critical hubs, transport routes, trans-shipment points, repair nodes, alternate sites and single points of failure across the sustainment system.", id:"CS-01"},
    {t:"Attack demonstrable operational dependencies", d:"Ports, airfields, logistics nodes, fuel infrastructure and transport routes may generate military effects where their role in mobilisation, distribution or operational sustainment is evidenced.", id:"CS-02"},
    {t:"Build recoverable sustainment", d:"A resilient support system can reroute, repair, disperse and reconstitute after a strike rather than depend on avoiding all losses.", id:"CS-01"}
  ],
  vulnerabilities:[
    {t:"Centralised logistics concentration", d:"Large hubs and predictable distribution patterns create attractive targets whose disruption can cascade across combat functions.", id:"CS-01"},
    {t:"Assumed dual-use significance", d:"Commercial infrastructure should not be treated as militarily decisive without evidence of its military, mobilisation or defence-industrial function.", id:"CS-02"},
    {t:"Rear-area complacency", d:"Ports, distribution centres, industrial facilities and transport infrastructure increasingly sit within the adversary's operational strike model.", id:"CS-01"}
  ],
  capdev:[
    {t:"Map the sustainment network", d:"Record critical hubs, chokepoints, alternative routes, repair capacity, stock redundancy and time-to-recover; exercise rerouting after loss of a node.", id:"CS-01"},
    {t:"Create dispersed repair and reload capacity", d:"Use smaller, mobile and relocatable sites rather than a few high-signature maintenance and replenishment hubs.", id:"CS-01"},
    {t:"Apply a target-function test", d:"Before assessing a commercial or civilian-appearing facility as operationally significant, establish its verified role, relevant dependency, scale of use and likely military effect if disrupted.", id:"CS-02"}
  ]
};
const FRAME_EXP = { bluf:"", opportunities:[], vulnerabilities:[], capdev:[] };
/* Merged Manoeuvre & Expeditionary bundle for the combined tab. With no
   expeditionary serials this month the EXP arrays are empty, so the FRAME
   sections and overview arrays reduce to the Manoeuvre package; the lede is a
   concise synthesis and introduces no new claims. Per-serial echelons are
   resolved via SUBPKG_OF, so this bundle's `echelons` is only a fallback. */
const FRAME_MANEXP = {
  bluf:"August showed that manoeuvre depends on first shaping the adversary's drone, air-defence and logistics systems. Ukrainian forces made local advances in the Borova direction while Russian attacks intensified against the routes and rear areas that sustained them, and long-range strikes reached ports, industry and distribution in the deep rear. Manoeuvre and sustainment are contested by the same reconnaissance-strike system: set an entry condition for the advance, treat the intermediate rear as manoeuvre-critical terrain, and measure how fast disrupted logistics routes recover after a strike.",
  opportunities: FRAME_M.opportunities.concat(FRAME_EXP.opportunities),
  vulnerabilities: FRAME_M.vulnerabilities.concat(FRAME_EXP.vulnerabilities),
  capdev: FRAME_M.capdev.concat(FRAME_EXP.capdev)
};
const PACK_MANEXP = Object.assign({}, PACK_M, {
  kicker:"August 2026 · Manoeuvre & Expeditionary",
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

# Email to TJ — v3

**Subject:** Avail platform — new build is ready, and I think it can take over the whole business

---

Hey TJ,

Quick follow-up on the demo. I rebuilt the whole thing this weekend after our last exchange, and I think it's now in a place where it actually does what we talked about. **Updated URL is the same:** https://avail-wellness-demo.vercel.app

Two things worth pulling up before our call:

1. **`/admin/`** — the new provider dashboard. Outcome intelligence layer on top of Brooke's existing EMR. AI Protocol Builder, Patient Personas (cohort outcomes), HIPAA Method writeup.
2. **`/`** — the patient side. Now has a **weekly check-in** (energy, sleep, mood, libido — 30 seconds, streak tracking) and a **real chat thread with the provider.** This is the part patients actually want — the direct line to Brooke between visits.

Brooke can pull this up on her phone or laptop and click through everything. No login needed for the demo.

---

## Why I think this can run their whole business — not just sit beside it

I went in last time saying "thin layer on top of the EMR." That was correct for week-1 risk. But after rebuilding, I think the long-term opportunity is bigger than that, and I want to be straight with you about it.

**Avail's competitive moat is two things, and an EMR captures neither:**

1. **Brooke's clinical judgment** — which protocol works for which patient, why, and when to adjust. Today this lives in her head and is lost the minute she's not in the room.
2. **Outcome data across her patient base** — 156 patients × 3-4 visits each × labs × body comp × adherence. That's an asset no other practice in her competitive set has, and the existing EMR is treating it like inventory rows instead of intelligence.

The current stack (EMR for charting, scheduling tool for calendar, Stripe/Square for billing, intake form for new patients, secure email for results) is five disconnected tools, each charging her a per-seat fee, none of them talking to each other, and none of them turning her data into anything useful.

**What we replace, in order:**

| Phase | What we replace | Monthly cost saved | What Avail gains |
|---|---|---|---|
| 1 (4 weeks) | — (sits alongside) | $0 | AI protocol drafts, cohort intelligence, weekly check-ins, provider chat |
| 2 (3 months) | Intake forms + secure messaging + check-in surveys | ~$300/mo | Single source of truth for patient state |
| 3 (6 months) | Scheduling + appointment reminders | ~$400/mo | Calendar tied directly to outcome data |
| 4 (9 months) | EMR documentation + **Surescripts e-prescribing** (EPCS-certified, 99% US pharmacy coverage) | ~$1,200/mo | Brooke writes the script once and it ships to Empower / Olympia / Strive / CVS / wherever — no faxing, no double-entry, full audit trail |
| 5 (12+ months) | Billing handoff to Stripe/payor APIs | ~$300/mo | One workflow from intake → outcome → invoice |

That's a **~$2,200/month** software stack consolidation, plus an estimated **15-20 hrs/week** of Brooke's and Nicki's time that today goes into tool-switching, double-entry, and recreating context. At Brooke's effective hourly value, that's the much bigger number.

**Net: Avail goes from "boutique wellness clinic that uses tools" to "boutique wellness clinic that operates on its own purpose-built platform with proprietary outcome intelligence." That's a different business — one that scales without diluting Brooke's judgment.**

---

## What's new in this build (since last email)

- **AI Protocol Builder** (`/admin/protocol-builder/`) — consult recording → cohort match → draft protocol with rationale and source citations. Provider always reviews and approves. Now with HIPAA architecture diagram.
- **Patient Personas** (`/admin/personas/`) — five cohorts (Low T male, perimenopause, PCOS, weight loss, subclinical hypothyroid) with effectiveness scores. "Patients like you typically see X% improvement on this protocol" — backed by Avail's real outcome data.
- **How It Works / Method** (`/admin/method/`) — the compliance + architecture single-pager. HIPAA, PCI scope, consent, liability, phased rollout. This is the page you send to your malpractice carrier.
- **Prescriptions tracking** (both portals) — patient sees every active script, where it's filled (Empower, Olympia, Strive, retail), tracking numbers, refill counts. Provider sees the refill queue across all 142 patients on Rx, pharmacy performance (avg fill time, on-time rate, issues), top meds by cohort, and a complete prescribing audit trail. This is the data the existing EMR doesn't surface.
- **Weekly check-in** (patient side) — the part of the system that actually feeds the protocol intelligence. Patients answer 4 questions in 30 seconds; provider sees correlations between subjective state and objective labs over time.
- **Provider chat** (patient side) — direct messaging, threaded, with read state. Replaces secure email. This is the feature patients ask for most often.

---

## What I need from you and Brooke

Three things:

1. **30 minutes on a screenshare next week.** I walk Brooke through Protocol Builder and the cohort dashboard. I want her honest reaction — does the cohort framing match how she actually thinks about patients? Where does the protocol draft miss?
2. **Permission to run the 4-week pilot.** 5 opted-in patients. Brooke records consult on her phone, uploads to a HIPAA-compliant intake form, AI returns a draft protocol within 24 hrs, she edits/approves/discards. Cost: ~$200/mo infra + my build time. **No EMR integration, no live patient-facing system.** Pure proof of value.
3. **A frank conversation about ownership/equity.** If this becomes Avail's operating system, that's a different relationship than "vendor builds a tool." I'm building this for free in nights and weekends right now because Brooke literally changed my life. But if the answer to "this could run the whole business" is yes, I want to put real time into it, and we should figure out what makes sense for both sides.

---

## On the "take over the whole business" framing — straight up

I don't say that to be cute. I'm saying it because:

- The HIPAA-eligible AI stack (Bedrock + AWS Transcribe Medical + pgvector) is now mature enough that a small team can ship a vertical-specific clinical tool that genuinely beats the horizontal EMRs at the things Avail cares about (protocol intelligence, outcome tracking, patient-provider relationship).
- Avail is already operating in the most defensible space in healthcare — concierge wellness with measurable outcomes — and they have the data to prove it. They just don't have software that makes that data work for them.
- The clinical wellness software market has Spruce and Healthie at the low end and Athena/eClinicalWorks at the top, and **none of them are built around outcome intelligence on a defined patient cohort.** That's the gap.
- I'm not asking Brooke to bet on me. I'm asking her to run a 4-week pilot. If she uses 3 of 5 drafts as starting points and saves real time, we keep going. If not, we've learned something cheap.

If she's into it after the screenshare, I can have the pilot ready in 4 weeks. If she's not, no hard feelings — I just want to be useful.

Updated demo: https://avail-wellness-demo.vercel.app

Talk soon,
Bryce

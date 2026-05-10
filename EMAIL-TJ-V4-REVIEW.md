# Email to TJ — please review the build (v4)

**Subject:** Avail platform — ready for you and Brooke to click through

---

Hey TJ,

The demo is at a real reviewable state. **https://avail-wellness-demo.vercel.app** — same URL as before. I'd love for you and Brooke to spend 15 minutes clicking through both portals together this week. Built around my real patient data so it grounds in something concrete instead of abstract.

**Two portals to look at — switch between them with the "View Provider Portal / View Patient Portal" link at the bottom-left of the sidebar.**

## Provider portal — `/admin/`

The layer that sits on top of Brooke's existing EMR. Built for her and Nicki.

- **Dashboard** — daily snapshot. Revenue, new patients, retention, today's schedule with bookings, outcome headlines.
- **AI Protocol Builder** (`/admin/protocol-builder/`) — consult recording → cohort match → drafted protocol with cited sources. Provider always approves before anything reaches the patient.
- **Patient Personas** (`/admin/personas/`) — five cohorts (Low-T male, Perimenopause, PCOS, Weight Loss, Subclinical Hypothyroid) with effectiveness scores and top-performing protocols. The "your data, organized" piece.
- **How It Works / Method** (`/admin/method/`) — HIPAA, PCI, consent, liability, Surescripts e-prescribing path, four-phase rollout. The page you'd send to your malpractice carrier.
- **Prescriptions** (`/admin/prescriptions/`) — 487 active scripts across 142 patients. Refill queue with priority flagging (urgent rows pull forward when a patient flagged side effects in their check-in). Pharmacy scoreboard: Empower at 96.4% on-time, Olympia at 94.1% with 4 issues last 30 days, Strive at 98.2% clean. Top meds by patient count, prescribing audit log.
- **Patients / Labs / Analytics** — operational tables.

## Patient portal — `/`

What a patient sees between visits.

- **Dashboard** — three big outcome numbers up top, then a **weekly check-in widget** (Energy / Sleep / Mood / Libido on 1-5, 30 seconds, streak tracking). Lab progress chart over time. Upcoming appointment. **Live chat thread with Brooke** that replaces secure email. Upload zones for labs / DEXA / scans.
- **Lab Results** (`/labs/`) — compact timeline of every draw with values + PDF downloads.
- **Body Composition / Supplements / Treatments** — the journey, day-by-day.
- **Prescriptions** (`/prescriptions/`) — every active script with the pharmacy that filled it (Empower for testosterone pellets, Olympia for DHEA, Strive for Rx Vitamin D, Costco for anastrozole), tracking numbers, refill counts, request-refill flow.

## What's flexible

Two things I want to be direct about:

1. **I can make both portals do whatever you and Brooke want them to do.** The current build is my best guess at what's useful — what you actually need is going to be different in 20 places once Brooke clicks through. Tell me what's missing, what's wrong, what's overbuilt, and I'll iterate.

2. **It can integrate with most of the platforms you're already on.** EMR, scheduling, billing, lab vendors (Access Medical, LabCorp, Quest), pharmacy networks, payment processors. Phase 1 doesn't require ripping anything out — we can wire into what's already running.

## And — iOS / Android

I see this as a phone-native experience long-term. Patients want a chat thread and a weekly check-in on their phone, not a browser tab. I haven't built that yet — no point until we know you're pursuing this — but the entire backend and design system would carry over directly. Native iOS + Android with shared API, ~6-8 weeks once we have provider sign-off on the web product.

## What I want from you and Brooke

A frank read on three things after you click through:

1. **Does Brooke recognize her practice in this?** Especially the cohort framing on Personas and the pharmacy scoreboard on Prescriptions. Is that how she actually thinks about her patient base?
2. **What's missing or wrong?** Real gaps in how Avail operates day-to-day — I built from my own patient data so there are blind spots.
3. **Does the "this could run the whole business" framing land**, or is that overreaching? Happy to dial back to "thin layer on top" if that's what feels right.

If it's directionally right, the 5-patient pilot is ready to spec — no EMR integration for Phase 1, just proof of value over 4 weeks. If it's not, equally valuable feedback. I'd rather know now than build the wrong thing.

Demo: https://avail-wellness-demo.vercel.app

Talk soon,
Bryce

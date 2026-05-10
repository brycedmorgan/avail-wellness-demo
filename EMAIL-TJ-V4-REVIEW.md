# Email to TJ — please review the build

**Subject:** Avail platform — full build is ready for your review

---

Hey TJ,

Demo is at a real reviewable state now. Same URL — **https://avail-wellness-demo.vercel.app** — but I'd love 15 minutes of your honest feedback before I send anything to Brooke. Two portals, both clickable, both built around my real patient data so it grounds in something concrete.

## What's in there

### Provider portal — `/admin/`

The layer that runs on top of Brooke's existing EMR. Built for her and Nicki.

- **Dashboard** — daily snapshot. Revenue, new patients, retention, today's schedule with bookings + confirmations, revenue trend, patient outcome headlines.
- **AI Protocol Builder** (`/admin/protocol-builder/`) — consult recording → cohort match → drafted protocol with cited sources. Provider always approves before anything reaches the patient.
- **Patient Personas** (`/admin/personas/`) — five cohorts (Low-T male, Perimenopause, PCOS, Weight Loss, Subclinical Hypothyroid) with effectiveness scores and top protocols. This is the "your data, organized" piece.
- **How It Works / Method** (`/admin/method/`) — compliance posture (HIPAA, PCI, consent, liability), architecture, Surescripts e-prescribing path, four-phase rollout. Page you'd send to your malpractice carrier.
- **Prescriptions** (`/admin/prescriptions/`) — 487 active scripts across 142 patients. Refill queue with priority flagging (urgent rows pulled forward when a patient noted side effects in their check-in). Pharmacy scoreboard so Brooke can see Empower at 96.4% on-time vs. Olympia at 94.1% with 4 issues last 30 days. Top meds by patient count, prescribing audit log.
- **Patients / Labs / Analytics** — operational tables.

### Patient portal — `/`

What a patient sees between visits.

- **Dashboard** — three big outcome numbers up top, then a **weekly check-in widget** (Energy / Sleep / Mood / Libido on 1-5, 30 seconds, streak tracking). Lab progress chart. Upcoming appointment. **Live chat thread with Brooke** that replaces secure email. Upload labs / DEXA / scans.
- **Lab Results** (`/labs/`) — compact timeline of every draw with the values that matter (Total T, Free T, Estradiol) and PDF downloads.
- **Body Composition / Supplements / Treatments** — the journey, day-by-day.
- **Prescriptions** (`/prescriptions/`) — every active script with the pharmacy that filled it (Empower for the testosterone pellets, Olympia for DHEA, Strive for Rx Vitamin D, Costco for anastrozole), tracking numbers, refill counts, request-refill flow.

## What I want from you

A frank read on three things:

1. **Does Brooke recognize her practice in this?** Especially the cohort framing on `/admin/personas/` and the prescription pharmacy scoreboard on `/admin/prescriptions/`. Is that how she actually thinks about her patient base?
2. **Is anything obviously missing or wrong?** I built this from my own patient data so there are gaps where I just don't have visibility into how Avail actually operates day-to-day.
3. **Does the "this could run the whole business" framing land**, or is that overreaching? I sent that pitch in my last note — happy to dial back to "thin layer on top" if that lands better with Brooke.

If it's directionally right, I'd love to set up 30 minutes with you and Brooke next week to walk her through it. If she sees herself in it, I can have a 5-patient pilot ready to run inside of 4 weeks — no EMR integration required for Phase 1, just proof of value.

If it's not — equally valuable feedback. I'd rather know now than build the wrong thing.

Demo: https://avail-wellness-demo.vercel.app (click "View Provider Portal" bottom-left to switch sides).

Talk soon,
Bryce

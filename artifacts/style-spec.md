# Tin Goose Cafe — Premium Landing Page Style Spec

## Project Context
- **Business:** Tin Goose Cafe
- **Category:** Cafe
- **Location:** 22 Centennial Avenue, Alexandra, New Zealand
- **Public signals available:** 4.5 Google rating, local cafe positioning
- **Brand asset status:** No confirmed official visual identity provided; direction below is a premium-local reinterpretation suitable for implementation now.

---

## 1) Visual Direction (North Star)
Create a **warm, elevated, locality-led cafe feel**: modern premium layout, tactile food/coffee photography, restrained typography, and calm motion. The aesthetic should feel **artisan and trustworthy**, not luxury-hotel formal and not rustic-cluttered.

Design tone keywords: **Warm / Refined / Local / Honest / Slow-crafted / Sunlit**.

---

## 2) Design Tokens

### Font Stack
Use high-legibility system-safe + tasteful serif pairing:

- **Display / Headings:** `"Cormorant Garamond", "Iowan Old Style", "Times New Roman", serif`
- **Body / UI:** `"Inter", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif`
- **Fallback-only option (if webfont unavailable):**
  - Headings: `Georgia, "Times New Roman", serif`
  - Body: `"Segoe UI", Arial, sans-serif`

**Type scale (mobile-first):**
- H1: 40/44, weight 500, tracking -0.01em
- H2: 30/36, weight 500
- H3: 22/30, weight 500
- Body L: 18/30, weight 400
- Body: 16/26, weight 400
- Caption: 14/22, weight 450

### Color Palette
Grounded, premium cafe palette inspired by roasted tones + Central Otago light.

- **Primary:** `#2F211A` (Espresso Brown)
- **Primary Hover/Deep:** `#241913`
- **Neutrals:**
  - `#F7F2EA` (Cream Background)
  - `#E9DDCF` (Warm Surface)
  - `#B9A999` (Muted Taupe)
  - `#6E6257` (Secondary Text)
  - `#1F1B18` (High-contrast Text)
- **Accent:** `#B5793E` (Burnished Copper)
- **Accent Soft:** `#D5A66D`
- **Success/Info (optional utility):** `#3F6B57`

**Usage rules:**
- 70% light neutrals, 20% dark text/primary, 10% accent.
- Accent is for CTAs, micro-highlights, rating badges, not large background blocks.

### Spacing Scale
8pt system for consistency:
- `4, 8, 12, 16, 24, 32, 48, 64, 80, 96`

Layout guidance:
- Mobile section padding: `48px 20px`
- Tablet section padding: `64px 28px`
- Desktop section padding: `80px 40px`
- Max content width: `1120px`

### Border Radius Scale
- `4px` — chips, tags
- `8px` — buttons, small cards
- `12px` — default cards/forms
- `20px` — feature blocks
- `28px` — hero imagery masks (sparingly)

### Motion Principles (Subtle + Performance-safe)
- **Duration:**
  - Micro interactions: `120–180ms`
  - Standard transitions: `220–280ms`
  - Section reveals: `360–500ms`
- **Easing:**
  - Standard: `cubic-bezier(0.22, 0.61, 0.36, 1)`
  - Exit/close: `cubic-bezier(0.4, 0, 1, 1)`
- **Rules:**
  - Use opacity + translateY(8–16px) only for reveals
  - Avoid parallax/video-heavy effects on mobile
  - Respect reduced motion preferences (`prefers-reduced-motion`)

---

## 3) Component Styling Rules

### Buttons
- Primary CTA: dark fill (`#2F211A`) + light text (`#F7F2EA`), radius `10px`, min height `44px`
- Secondary CTA: outline `1.5px #2F211A`, transparent fill
- Hover: subtle lift `translateY(-1px)` + darken 4–6%

### Cards
- Use warm light surfaces (`#F7F2EA` / `#E9DDCF`)
- 1px border with low-contrast taupe (`rgba(47,33,26,0.14)`)
- Soft shadow only on desktop: `0 8px 24px rgba(31,27,24,0.08)`

### Imagery
- Prioritize natural light, shallow depth, authentic cafe moments
- Avoid over-processed filters and overly saturated food shots
- Corner rounding: 16–28px depending on block prominence

---

## 4) Landing Page Section Order (Implementation Order)

1. **Hero + Core Value**
   - Headline positioning Tin Goose as a premium local cafe destination in Alexandra
   - Short supporting copy
   - Primary CTA: “Get Directions”
   - Secondary CTA: “Call 03 448 5995”
   - Rating cue: “Rated 4.5 on Google”

2. **Social Proof Strip**
   - Rating badge, location snippet, category (“Cafe”), trust microcopy
   - If review text unavailable, show “Loved by locals and travellers in Alexandra” style neutral proof line

3. **Signature Experience / Why Tin Goose**
   - 3–4 pillars (e.g., coffee quality, seasonal cabinet/menu, relaxed atmosphere, central location)
   - Icon + short copy blocks

4. **Menu Highlights / What to Expect**
   - Curated categories (Coffee, Brunch, Cabinet, Sweet)
   - Keep descriptive and concise pending full menu data

5. **Gallery / Venue Atmosphere**
   - 6–8 image grid or carousel
   - Mix food, coffee, interior, human moments

6. **Visit Information (High Intent)**
   - Address, click-to-call, map embed, opening hours block (if confirmed)
   - Parking/access note placeholder if data becomes available

7. **FAQ (Conversion Friction Reducer)**
   - Typical cafe questions: dine-in/takeaway, dietary options, busy times, group seating

8. **Final CTA + Local Reassurance**
   - Repeat primary CTA (“Plan Your Visit” / “Get Directions”)
   - Concise closing line about Alexandra location convenience

9. **Footer**
   - NAP recap (name, address, phone), legal links, map shortcut

---

## 5) Visual Do / Don’t Rules

### Do
- Use generous whitespace and clear hierarchy
- Keep copy blocks short (2–4 lines on mobile)
- Maintain strong contrast for readability in sunlight/mobile conditions
- Use one accent color consistently for interaction points
- Lead with authenticity (real food, real space, real people)

### Don’t
- Don’t mix more than 2 type families
- Don’t use heavy gradients, glassmorphism, or neon accents
- Don’t over-animate on scroll or stack multiple motion effects
- Don’t crowd hero with too many badges/buttons
- Don’t rely on unverified claims (awards, “best in NZ”, etc.)

---

## 6) Content Assumptions & Data Gaps
- Review text was not accessible; sentiment wording should remain neutral-positive until quotes are sourced.
- Opening hours, menu specifics, dietary claims, and booking policy need confirmation before final publishing.
- Photography quality will strongly influence perceived premium level; stock fallback should be temporary.

---

## Handoff Contract

### Changes made
- Created a complete premium style specification for Tin Goose Cafe.
- Defined implementation-ready design tokens (fonts, colors, spacing, radius, motion).
- Provided a conversion-oriented landing page section order.
- Added explicit visual do/don’t guardrails and known data assumptions.

### Files touched
- `/home/joe/.openclaw/workspace/sample-no-website-rescue/artifacts/style-spec.md`

### Next agent input
- Use this spec to build wireframe and component system.
- Source/confirm factual business data: opening hours, menu highlights, dietary options, booking/walk-in policy.
- Gather authentic imagery aligned to the visual rules.
- Draft final copy per section, keeping trust claims evidence-based.

### Known risks
- Limited source data may create generic messaging if not enriched in copy phase.
- Premium feel depends heavily on photography quality and consistent token usage.
- Unverified operational details (hours/menu/policies) must be validated before launch.

# Limitless Super Greens — Creative Direction v2

Applies to `Landing Page v2.dc.html`. All functional logic (offer selector, bundle math, Subscribe & Save disclosure, quiz, lead capture, tracking, cart hand-off to `Post-Purchase Flow.dc.html`) is unchanged from v1. This pass changes the visual layer only. v1 is kept as `Landing Page.dc.html` for comparison.

Note: the product ships in a **stand-up pouch**, not a bottle. Every "bottle" in the brief is shown as a pouch.

---

## 1. The Super Greens world

### Color
| Role | Name | Hex | Use |
|---|---|---|---|
| Primary | Pouch Yellow | `#EFD84A` | Hero, gift reveal, quiz band. Taken from the packaging. |
| Primary | Forest | `#0B3D24` | Headlines on bright grounds, member card, review summary |
| Primary | Ink | `#0C120E` | Buttons, dark sections, stickers |
| Secondary | Electric Lime | `#CCFF3D` | Ingredient section, final CTA, button text on ink, "selected" state |
| Secondary | Cream | `#F7F1E3` | Neutral sections (benefits, lifestyle, membership, FAQ) |
| Accent | Apple Red | `#C8281F` | Comparison section, savings pills, "0g sugar" sticker. Taken from the flavor art. |
| Legacy | Leaf | `#0D5C33` | Carried over from Limitless X for eyebrows and secondary headline lines |

Section rhythm: Yellow hero → Ink ticker → White → Cream → **Ink** → **Lime** → Cream → **Red** → White → Yellow band → **Ink** bundles → Cream → **Yellow** gifts → White → Cream → **Lime** final → Ink footer. No two neighbouring sections share a ground.

### Type
- **Headline:** Boldonse, uppercase, line-height ~1.02. Use it big (up to 10vw), stack it one short phrase per line, and color each line differently. Sometimes a word sits on an ink or red "tape" block, rotated −2°.
- **Merchandising / labels / prices:** Bebas Neue Pro Bold, uppercase. Prices at 54–56px.
- **Body:** Poppins 400/500, 14–17px. Never below 11.5px, and 11.5px is only for legal copy.
- Background wordmarks (GREENS, HAUL, LIMITLESS) are Boldonse at 18–22vw, tone-on-tone, cropped by the viewport.

### Components
- **Buttons:** full pill, Ink background with Lime text, Bebas 26–30px, a solid 6px Forest drop shadow, and a press state that moves 4px down. On Ink grounds the colors invert (Lime background, Ink text).
- **Badges / stickers:** circles or pills, rotated between −14° and +12°, with a soft shadow. Only use substantiated content: 0g sugar, 2 a day, 16 cal, 60-day guarantee. "BEST VALUE" goes only on the tier with the lowest price per day, and that is computed. "MOST POPULAR" was removed because there is no data behind it.
- **Icons:** the existing benefit PNGs, set in 88px white discs on colored cards.
- **Offer cards:** 32px radius. The recommended tier uses the Lime ground, is taller, and carries a fanned stack of pouches. Other tiers sit on `#17211B`. Selected state is a 3px ring plus a glow.
- **Subscription card:** a Forest "member card" rotated −2°, with ticket notches and the pouch breaking out of the top edge. It shows Normal price, Member price, Savings, Shipping, Gifts and Delivery, all computed.
- **Review cards:** vertical social format (min 420px tall), cycling Cream, Yellow and Lime backgrounds. UGC slots are 9:16 on Ink and labelled PLACEHOLDER until verified content is imported.

### Motion
Motion can be switched off with the `motion` tweak and respects `prefers-reduced-motion`.
- Floating gummies: 5–7.5s ease-in-out bob with ±8° of rotation, 2–3 per section.
- Hero pouch parallax: it lifts and rotates slightly over the first 1000px of scroll.
- Section reveal: 48px rise plus fade, once per section, applied only below the fold.
- Proof ticker: 38s linear marquee.
- Haul meter fill and chip lift: 0.5s and 0.12s.

### Product render style
Use the pouch PNG with transparency. It is always rotated (−8° to +14°), always casts a deep drop shadow (`0 34px 34px rgba(12,18,14,.35)`), and always sits on or breaks out of a solid disc or blob. Never place it flat and centered on white.

### Gummy imagery
`assets/gummy-pile.png`, `gummy-single.png` and `gummy-single-2.png` are cut-outs keyed from the existing `daily-ritual.png` macro. They are good enough for the prototype, but final production needs the dedicated macro shoot (brief P1 below).

---

## 2. Image and photography briefs

Each image-slot on the page is named after its brief ID. Drop finished files straight onto the slot to preview them in place.

**P1 — Gummy macro set (replaces keyed cut-outs)**
Subject: 1, 2, 5 and 12 gummies, plus a "spill" from the tipped pouch. Camera: 100mm macro, 15° above horizontal, f/8 focus-stacked. Background: pure white seamless, so the cut-outs are clean. Lighting: large soft key from upper left, a hard rim from the back right to show translucency, and a white bounce. Show the sugar-free matte dusting and edge translucency. Deliver transparent PNGs at 3000px or larger, plus one 1:1 hero spill on Pouch Yellow `#EFD84A`.

**P2 — Hero composite**
Pouch at a 7° lean with 8–10 gummies spilling from the open top and falling in front, sharp through the frame. Background: solid `#EFD84A`. Desktop crop 4:3 with the pouch right of center and the left 40% empty for the headline. Mobile crop 1:1 with the pouch centered and the top 25% empty. Hard shadow at 30° lower right.

**P3 — Ingredient explosion**
Only ingredients in the formula: kale leaf, spinach, broccoli floret, spirulina powder pile, beet slice, goji berries, pomegranate half, acai berries, tart cherries, pineapple wedge, ginger root, aloe slice. Shoot each ingredient separately on white as a transparent PNG. They get composited around the pouch in the lime section, at 16:9 on desktop and 4:5 on mobile. Keep the center 40% clear for the pouch.

**L1 — Morning.** Pouch beside a ceramic coffee mug and toast on a light oak counter, 7am window light from the left, two gummies on a napkin. 4:5, 45° angle.
**L2 — Desk.** The existing `lifestyle-laptop.png` is in use. Reshoot tighter at 4:5 with a hand reaching for the pouch.
**L3 — Gym.** Top-down into an open black gym bag containing the pouch, headphones, towel, and a lifting strap. Hard flash, high contrast. 4:5. Keep the top-left 25% clear for the label pill.
**L4 — Travel.** Pouch on an airplane tray table beside a boarding pass and phone, window light, soft blue sky out of focus. Alternate: pouch in the mesh pocket of a carry-on. 4:5.
**L5 — On the go.** A hand holding the pouch at arm's length on a city sidewalk, motion-blurred background, golden hour. Wardrobe: neutral streetwear with no competitor logos. 4:5.

**G1 — T-shirt.** Limitless X tee flat-lay, folded, on Electric Lime `#CCFF3D`, top-down with a soft shadow. 1:1. Leave a 15% margin.
**G2 — Hat.** Limitless X hat at a 3/4 front angle on Pouch Yellow `#EFD84A`, hard shadow lower right. 1:1.
**H1 — Haul flat-lay.** An open branded mailer box. Inside and around it: 6 pouches fanned, the folded tee, the hat, and a scatter of gummies. Top-down on Cream `#F7F1E3`. 4:5, with the top-left 20% clear for the label.

**UGC — Reviews.** Only verified customers, with signed usage rights. Format 9:16 selfie video or photo showing the pouch in hand. If you use creator content, label it as sponsored where required.

---

## 3. Paid-social ecosystem (built from page sections)

| Section | Ad format | Notes |
|---|---|---|
| Hero ("Greens. But make them gummies.") | Static 1:1, 4:5 | Pouch, gummies, stars, "From $X" |
| No scoop / No shaker / No excuses | Static 4:5, 9:16 story | Three-color type stack over gummy pile |
| Ingredient explosion | Static 4:5 | "This little gummy is packed." |
| Powder vs Open. Chew. Done. | 2-card carousel | Card 1 crossed-out steps; card 2 lime |
| Casey quote | UGC/quote static 4:5 | Verbatim review, name, 5 stars |
| Pick your haul (6-pouch tier) | Retargeting static / DPA frame | Fanned pouches + gifts + price |
| "Wait. You're getting more." | Promo 9:16 story, 3 frames | Tee → Hat → Free shipping reveal |
| Final lime "LIMITLESS" | End card for video | 60-day seal + CTA |

---

## 4. Open items

- The `lifestyle-benefits.png` asset makes claims (GLP-1, Garcinia, metabolism) that do not match this formula. It has been removed from v2 and should not be used for Super Greens.
- The `lifestyle-desk.png` asset shows the Citrus pouch, which is not available yet. It is excluded from v2.
- Tee and hat retail values are still unset, so haul totals leave them out until the `tshirtValue` / `hatValue` tweaks are filled in.
- Bundle discount percentages are still placeholders (see `funnel-config.json`).

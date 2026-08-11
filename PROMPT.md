# MRN Agro Industries — Website Build Prompt

Copy everything below the line into an AI website builder, or use it as a written spec.

---

## ROLE

You are a web designer and front-end developer building a **4-page corporate website** for a rice
milling company. The client is a regional Indian agro business — the site must look **clean,
professional and trustworthy**, NOT flashy or over-designed. Prioritise clarity, credibility and
easy reading over visual effects.

---

## COMPANY DETAILS

- **Name:** MRN Agro Industries
- **Established:** 2016
- **Location:** Raichur, Karnataka, India
- **Industry:** Rice milling, processing and distribution
- **Products:** Raw Rice, Boiled Rice, Rice Bran, Rice Husk
- **Operations:**
  - Direct sourcing of paddy from farmers across Raichur district
  - Modern milling and processing facility
  - Installed milling capacity of 8 tons per hour
  - Commitment to quality, consistency and customer satisfaction
- **Customers served:** households, wholesalers, distributors, industrial buyers
- **Contact:** info@mrnagro.in · +91 00000 00000 · Mon–Sat, 9:00 AM – 6:00 PM

---

## TECH

- Plain **HTML, CSS and JavaScript** — no frameworks, no build step, no dependencies.
- One shared `styles.css` and one shared `script.js` across all pages.
- Files: `index.html`, `about.html`, `products.html`, `contact.html`.
- Assets in `/public`: `logo.jpeg` (company crest) and `/public/products/` (rice pack renders).
- Must work by opening the HTML file directly in a browser.

---

## DESIGN DIRECTION

**Palette** — earthy, drawn from the company crest:

| Token | Hex | Use |
|---|---|---|
| Forest green (dark) | `#0E3320` | headings, dark sections, footer |
| Forest green (mid) | `#164028` | buttons, links |
| Gold | `#A87C2A` / `#C39A3E` | accents, eyebrow labels, active states |
| Cream | `#F8F5EE` | alternating section backgrounds |
| Sand | `#F1ECE1` | image/product backgrounds |
| Border grey | `#E2DDD1` | card and divider lines |
| Body text | `#3A4136` | paragraphs |

**Typography**
- Headings: a clean serif (Fraunces or similar), weight 500–600, **no italics**
- Body: Inter, 16px, line-height ~1.7
- Small uppercase gold "eyebrow" labels above each section heading

**Style rules**
- White and cream alternating section backgrounds; one dark green section per page
- Cards: white, 1px grey border, small radius (10px), gold border + slight lift on hover
- Buttons: solid dark green or gold, 6px radius, simple colour change on hover
- Generous but not extreme whitespace; section padding ~64–110px
- **Motion:** one simple fade-up on scroll (IntersectionObserver) and counting number
  statistics. No parallax, no 3D tilt, no floating elements, no film grain.
- Fully responsive: 4-col → 2-col → 1-col; hamburger menu below 860px
- Honour `prefers-reduced-motion`

**Imagery** — if no photographs are available, draw the agricultural visuals as **procedurally
generated SVG paddy stalks** (curved stem, two blades, grain heads along the top third) placed
along the bottom of dark green banners and inside a field illustration. Never use broken image
placeholders.

---

## SITE STRUCTURE

Header on every page: logo + "MRN Agro Industries / Raichur, Karnataka", nav links
**Home · About Us · Products** and a **Contact Us** button. Current page highlighted.

Footer on every page: logo, one-line description, Company links, Products links, address and
email, copyright bar.

---

## PAGE 1 — HOME (`index.html`)

### 1. Hero slider
Rotating carousel, 3 slides, auto-advance every 6 seconds, crossfade, prev/next arrows, dots
(active dot becomes a gold bar). Pauses on hover, on focus, and when the tab is hidden. Supports
arrow keys and swipe. All slides share one height so the page never jumps.

**Slide 1** — paddy field scene background
- Eyebrow: `Established 2016 · Raichur, Karnataka`
- Heading: `From Karnataka's Fields to Quality Tables`
- Text: `Premium rice products, responsibly sourced and expertly processed. At MRN Agro Industries, we are committed to delivering quality, consistency, and trust in every grain.`
- Buttons: `Explore Our Products` · `Contact Us`

**Slide 2** — green gradient, product pack image on the right
- Eyebrow: `Our Product Range`
- Heading: `Raw Rice, Boiled Rice, Bran and Husk`
- Text: `A carefully curated range processed with uncompromising attention to quality, serving households, wholesalers, distributors and industrial buyers across the region.`
- Buttons: `View Products` · `Request a Quote`

**Slide 3** — darker green, paddy silhouette along the bottom
- Eyebrow: `Quality Promise`
- Heading: `Quality You Can Trust in Every Grain`
- Text: `Direct sourcing from farmers, a modern facility milling 8 tons per hour, and quality checks at every stage — so what reaches you is consistent, order after order.`
- Button: `About Our Process`

### 2. Statistics strip
Four counting figures on a cream band: **2016** Established · **8** tons/hour Milling Capacity ·
**4** products Product Range · **100%** Direct Farm Sourcing.

### 3. About preview
Two columns — paddy field illustration on one side, copy on the other.
- Eyebrow `About Us`, heading `Rooted in Quality Since 2016`
- Paragraph 1: `Established in 2016, MRN Agro Industries has grown into a trusted name in rice milling and processing in Karnataka. Operating from our state-of-the-art facility in Raichur, we combine traditional agricultural values with modern processing standards to deliver products that meet the highest expectations of quality and consistency.`
- Paragraph 2: `From sourcing premium paddy directly from local farmers to ensuring hygienic processing and timely delivery, every step of our journey reflects our commitment to excellence.`
- Tick list: Direct sourcing from farmers across Raichur district · Modern milling and processing facility · Installed milling capacity of 8 tons per hour
- Button: `Learn More About Us`

### 4. Why Choose Us
Cream background, heading `Built on Trust and Consistency`, eight icon cards in a 4-column grid:
Trusted Since 2016 · Direct Farm Sourcing · Modern Infrastructure · Hygienic Standards ·
8 Tons Per Hour · Consistent Quality · Timely Deliveries · Customer-First Approach.
Each with a one-line description and a simple line-art icon.

### 5. Products preview
Eyebrow `Our Products`, heading `A Carefully Curated Range`, intro text:
`We offer a carefully curated range of agricultural products processed with uncompromising
attention to quality, ensuring they meet the diverse requirements of households, wholesalers,
distributors, and industrial buyers.`
Four clickable product cards (pack image on a sand background + name + one line), each linking to
its anchor on the Products page. Button below: `View All Products`.

### 6. Quality promise
Dark green section. Heading `Quality You Can Trust`, text:
`Every grain that leaves our facility undergoes careful processing to preserve its quality, purity,
and nutritional value. Our dedication to maintaining high standards enables us to serve customers
with products they can consistently rely on.`
Then a numbered 6-step process across the width, each step's top border turning gold as it scrolls
into view: **Farmers → Paddy Selection → Modern Processing → Quality Checks → Packaging →
Customer Delivery**.

### 7. Testimonials
Three quote cards on cream:
- `Consistent quality and timely deliveries have made MRN Agro Industries a reliable business partner for us.` — Wholesale Partner, Karnataka
- `Their commitment to maintaining product standards is evident in every order we receive.` — Distribution Partner, South India
- `A trusted name that combines quality products with excellent customer service.` — Retail Buyer, Raichur

### 8. Closing CTA
Dark green band, centred. Heading `Looking for Premium Quality Rice Products?`, text
`Whether you're a wholesaler, distributor, or business partner, we're here to serve your
requirements with reliability and excellence.`, button `Contact Us Today`.

---

## PAGE 2 — ABOUT US (`about.html`)

**Banner:** breadcrumb `Home / About Us`, heading `About MRN Agro Industries`, subtitle
`A rice milling and processing company from Raichur, Karnataka, working directly with farmers since 2016.`

**Sections:**
1. **Our Story** — `Rooted in Quality Since 2016` with the two About paragraphs, illustration, and a
   four-item tick list (add: *Commitment to quality, consistency and customer satisfaction*).
2. **Facts strip** — 2016 Year Established · 8 tons/hour Milling Capacity · Raichur, Karnataka · 4 products.
3. **Mission & Vision** — two cards side by side on cream, the Vision card in dark green:
   - *Mission:* `To deliver premium-quality rice products through ethical sourcing, advanced processing techniques, and unwavering commitment to customer satisfaction while supporting the agricultural communities that form the foundation of our business.`
   - *Vision:* `To become one of India's most trusted and preferred rice processing companies by setting benchmarks in quality, sustainability, and innovation while creating lasting value for farmers, customers, and communities.`
4. **Why Choose Us** — the same eight points, numbered 01–08, with fuller descriptions.
5. **Our Operations** — `From the Field to the Facility`, with three cards: Sourcing, Processing,
   Distribution. Button: `See What We Produce`.
6. **Our Promise** — dark green, centred pull-quote:
   `At MRN Agro Industries, we believe that quality begins long before processing. It starts with our
   relationships—with farmers, with our customers, and with the communities we serve. By combining
   responsible sourcing practices with efficient milling processes, we strive to deliver products
   that embody purity, consistency, and trust.`
7. **CTA** — `Work With Us` → `Contact Us Today`.

---

## PAGE 3 — PRODUCTS (`products.html`)

**Banner:** breadcrumb `Home / Products`, heading `Our Products`, subtitle = the curated-range
paragraph.

**Sections:**
1. **Quick grid** — the four product cards, each jumping to its detail anchor
   (`#raw-rice`, `#boiled-rice`, `#rice-bran`, `#rice-husk`).
2. **Detail rows** — one alternating row per product: image panel + description + a 4-cell spec
   table (Type / Best For / Packing / Availability).
   - **Raw Rice** — milled and polished without parboiling; natural texture, clean appearance;
     retail packs and bulk. For households, retail, wholesale.
   - **Boiled Rice** — parboiled under controlled conditions; firm, separate grains, nutrients
     retained; moisture and consistency checked before packing. For distributors, institutional
     kitchens, retail.
   - **Rice Bran** — nutrient-dense outer layer recovered during milling; consistent grade.
     For oil extraction units, cattle feed, industrial buyers. Bulk supply.
   - **Rice Husk** — clean, well-separated by-product; biomass fuel and industrial raw material.
     For board mills and industrial buyers. Bulk supply.
3. **Quality promise** — same dark green section and 6-step process as the home page.
4. **Who We Supply** — four cards: Households · Wholesalers · Distributors · Industrial Buyers.
5. **CTA** — `Request a Quote` → `Send an Enquiry`.

---

## PAGE 4 — CONTACT (`contact.html`)

**Banner:** breadcrumb `Home / Contact Us`, heading `Contact Us`, subtitle
`Whether you're a wholesaler, distributor, or business partner, we're here to serve your
requirements with reliability and excellence.`

**Two-column layout:**

*Left — contact details* under heading `We'd Be Glad to Hear From You`, as an icon list:
- Factory & Office — MRN Agro Industries, Raichur, Karnataka, India
- Phone — +91 00000 00000
- Email — info@mrnagro.in
- Working Hours — Monday to Saturday, 9:00 AM – 6:00 PM

*Right — enquiry form* in a cream card titled `Send an Enquiry`:
Name* · Company/Firm · Phone* · Email · Product of Interest (dropdown: Raw Rice, Boiled Rice,
Rice Bran, Rice Husk, Multiple/Not sure) · Approximate Quantity · Requirement (textarea).
Submit button `Submit Enquiry`. With no backend, the form composes a `mailto:` message with all
fields and shows a confirmation note.

**Below:** a full-width map block (Google Maps embed), then a closing CTA band
`Looking for Premium Quality Rice Products?` with an `Email Us Directly` button.

---

## TONE OF VOICE

Trust-building, not sales-heavy. Factual and understated — state what the company actually does
(direct sourcing, 8 tons/hour, quality checks) rather than making superlative claims. Short
sentences. No exclamation marks. Avoid marketing filler like "world-class" or "revolutionary".

## ACCESSIBILITY

Semantic HTML5 landmarks, alt text on all images, labelled form fields, visible focus states,
`aria-` attributes on the carousel and mobile menu, colour contrast meeting WCAG AA.

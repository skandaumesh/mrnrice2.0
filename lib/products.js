/**
 * Single source of truth for the MRN Gold range and company details.
 *
 * Content is limited to what MRN Agro Industries supplied. Deliberately NOT
 * stated anywhere here: ageing periods behind the "Double Old" / "Old" labels,
 * variety-specific cooking claims, health benefits, business hours, or named
 * customer quotations. See the publisher notes in PROMPT.md before adding any.
 */

export const products = [
  {
    slug: "mrn-gold-blue",
    no: "01",
    name: "MRN Gold Blue",
    variety: "Double Old Sona Masuri Raw Rice",
    category: "raw",
    categoryLabel: "Raw Rice",
    image: "/products/mrn-gold-blue.png",
    accent: "#2F5D8A",
    tagline: "Double Old Sona Masuri, raw",
    short: "Aged raw Sona Masuri for everyday household and kitchen use.",
    description:
      "Our Double Old Sona Masuri Raw Rice brings together a familiar rice variety and MRN Gold's focus on dependable quality. Carefully selected and processed, it is an option for households and food businesses looking for aged raw rice for their regular cooking needs.",
    features: ["Double Old rice selection", "Raw rice", "Quality-checked processing"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "Sona Masuri"],
      ["Rice type", "Raw rice"],
      ["Selection", "Double Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Hotels", "Retailers"]
  },
  {
    slug: "mrn-gold-grey",
    no: "02",
    name: "MRN Gold Grey",
    variety: "Double Old RNR Raw Rice",
    category: "raw",
    categoryLabel: "Raw Rice",
    image: "/products/mrn-gold-grey.png",
    accent: "#6B6F63",
    tagline: "Double Old RNR, raw",
    short: "Aged raw RNR rice in household packs and larger business packs.",
    description:
      "For customers who prefer RNR rice, MRN Gold Grey offers a Double Old raw rice option backed by our commitment to consistency. Available in convenient household packs and larger packs for business requirements, it gives buyers a choice that fits their preferred variety and purchase quantity.",
    features: ["Double Old rice selection", "RNR variety", "Packs for home and business use"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "RNR"],
      ["Rice type", "Raw rice"],
      ["Selection", "Double Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Retailers", "Wholesalers"]
  },
  {
    slug: "mrn-gold-black-bullet",
    no: "03",
    name: "MRN Gold Black Bullet",
    variety: "Double Old Lachkari Kolam Raw Rice",
    category: "raw",
    categoryLabel: "Raw Rice",
    image: "/products/mrn-gold-black-bullet.png",
    accent: "#2B2A26",
    tagline: "Double Old Lachkari Kolam, raw",
    short: "Aged raw Lachkari Kolam for customers who seek this variety.",
    description:
      "MRN Gold Black Bullet brings Double Old Lachkari Kolam Raw Rice to customers who specifically seek this variety. Carefully processed and packed, it extends our raw rice range while maintaining the same attention to quality that guides every MRN Gold product.",
    features: ["Double Old rice selection", "Lachkari Kolam variety", "Hygienic packaging"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "Lachkari Kolam"],
      ["Rice type", "Raw rice"],
      ["Selection", "Double Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Hotels", "Distributors"]
  },
  {
    slug: "mrn-gold-green",
    no: "04",
    name: "MRN Gold Green",
    variety: "Old Sona Masuri Steam Rice",
    category: "steam",
    categoryLabel: "Steam Rice",
    image: "/products/mrn-gold-green.png",
    accent: "#2E6B44",
    tagline: "Old Sona Masuri, steam",
    short: "Aged steam Sona Masuri for customers who prefer steam over raw rice.",
    description:
      "MRN Gold Green is our Old Sona Masuri Steam Rice offering for customers who prefer steam rice over raw rice. With pack sizes for households and businesses, it combines a familiar variety with the convenience of choosing the quantity that suits your needs.",
    features: ["Old rice selection", "Steam rice", "Household and commercial pack options"],
    note: "Available in 5 kg, 10 kg and 26 kg packs, with bulk packaging on request.",
    specs: [
      ["Variety", "Sona Masuri"],
      ["Rice type", "Steam rice"],
      ["Selection", "Old"],
      ["Pack sizes", "5 kg | 10 kg | 26 kg"]
    ],
    tags: ["Households", "Hotels", "Wholesalers"]
  }
];

/** Retail pack sizes offered across every variety, in kilograms. */
export const packSizes = [5, 10, 26];

/**
 * Home page "At a glance" ribbon. Same five approved facts, presented as
 * value/label pairs. Entries with `count` animate up via <Counter>; the rest
 * render `value` as-is.
 */
export const glance = [
  { count: 2003, plain: true, label: "Established in Raichur" },
  { count: 250, suffix: "+", label: "Customers across five states" },
  { count: 4, label: "MRN Gold rice varieties" },
  { value: "5 · 10 · 26", label: "Retail pack sizes (kg)" },
  { value: "Bulk", label: "Packaging available" }
];

export const reasons = [
  {
    no: "01",
    title: "Experience Since 2003",
    text: "With more than two decades in rice manufacturing, we bring long-standing experience to our products and customer relationships."
  },
  {
    no: "02",
    title: "Quality and Consistency at Our Core",
    text: "From careful paddy selection to finished rice checks, our work is guided by a commitment to dependable quality throughout the year."
  },
  {
    no: "03",
    title: "Modern Satake Processing Machinery",
    text: "We use Satake machinery from Japan, with a facility capable of processing 9 tonnes of paddy per hour to support our manufacturing operations."
  },
  {
    no: "04",
    title: "Quality Testing and Recognised Credentials",
    text: "Scanner-based checks and rice laboratory testing support our quality controls. Our FSSAI and AGMARK credentials reinforce our commitment to food safety and quality standards."
  },
  {
    no: "05",
    title: "A Choice of Aged Rice Varieties",
    text: "Our MRN Gold range includes three Double Old raw rice varieties and one Old steam rice variety, giving customers options to suit their preferences."
  },
  {
    no: "06",
    title: "Premium Quality at Fair Prices",
    text: "We aim to make premium-quality rice accessible through pricing aligned with the market, without losing sight of our commitment to consistency."
  },
  {
    no: "07",
    title: "A Growing Customer Network",
    text: "We serve 250+ customers across five states, supporting both household purchases and business supply needs with an emphasis on reliable service."
  },
  {
    no: "08",
    title: "Packaging for Different Needs",
    text: "Choose from 5 kg, 10 kg and 26 kg packs across all four varieties, with bulk packaging available for hotels, wholesalers and distributors."
  }
];

/**
 * The interactive quality explorer. `detail` is shown in the inspector panel
 * when a step is selected — keep it to what the company has confirmed.
 */
export const processSteps = [
  {
    title: "Paddy Selection",
    text: "Paddy is chosen with care before it enters the line, because finished rice can only be as good as what goes in.",
    metric: "Careful selection",
    detail:
      "Selection is the first quality gate. Attention at this stage is what allows us to hold the same standard across the year rather than only in peak season."
  },
  {
    title: "Satake Processing",
    text: "Processing runs on modern Satake machinery from Japan at our Raichur facility.",
    metric: "9 tonnes of paddy per hour",
    detail:
      "Our facility has a paddy processing capacity of 9 tonnes per hour. This figure is paddy input capacity, not finished rice output."
  },
  {
    title: "Scanner Checks",
    text: "Rice is passed through scanner-based checks as part of our quality controls.",
    metric: "Scanner-based inspection",
    detail:
      "Scanners support consistency between batches, so the rice reaching a household pack and a bulk order is held to the same standard."
  },
  {
    title: "Laboratory Testing",
    text: "Rice laboratory testing backs up what the line and the scanners report.",
    metric: "Rice laboratory testing",
    detail:
      "Laboratory testing is how we verify quality rather than assume it, and it underpins the consistency our repeat customers rely on."
  },
  {
    title: "Hygienic Packaging",
    text: "Finished rice is packed hygienically under our own MRN Gold brand.",
    metric: "5 kg, 10 kg and 26 kg packs",
    detail:
      "Every variety is packed in 5 kg, 10 kg and 26 kg sizes. Bulk packaging is available for hotels, wholesalers and distributors."
  },
  {
    title: "Supply and Delivery",
    text: "Packed rice goes out to households, hotels, retailers, wholesalers and distributors.",
    metric: "250+ customers, five states",
    detail:
      "We supply Telangana, Andhra Pradesh, Karnataka, Tamil Nadu and Maharashtra, with dependable supply treated as part of the product."
  }
];

/**
 * Themes drawn from feedback customers shared with our team. These are summaries,
 * not verified direct testimonials — no customer names or quotations are used.
 */
export const appreciation = [
  { title: "Taste and aroma", text: "Customers tell us the taste and aroma of MRN Gold rice stand out at their table." },
  { title: "Softness and grain quality", text: "Softness after cooking and the quality of the grain come up repeatedly in what customers share." },
  { title: "Consistent cooking results", text: "Rice that behaves the same way each time it is cooked is one of the things customers value most." },
  { title: "Practical packaging", text: "Pack sizes that suit a household kitchen as readily as a hotel store room." },
  { title: "Value for money", text: "Premium quality at prices aligned with the market, rather than a premium charged for its own sake." },
  { title: "Dependable delivery and supply", text: "Business customers point to supply they can plan around, order after order." }
];

/** Our values and commitments, as stated by the company. */
export const values = [
  { title: "Quality", text: "Give careful attention to paddy selection, processing, testing and packaging." },
  { title: "Consistency", text: "Work to maintain dependable rice quality throughout the year." },
  { title: "Honesty", text: "Build relationships through clear communication and fair dealing." },
  { title: "Fair pricing", text: "Make premium-quality rice accessible at competitive market rates." },
  { title: "Food safety", text: "Keep responsible handling and hygiene central to our operations." },
  { title: "Customer trust", text: "Support households and business customers with reliable service and supply." }
];

/** Who we serve — used by the enquiry forms and the products page. */
export const customerTypes = [
  "Household",
  "Hotel / Restaurant",
  "Retailer",
  "Wholesaler",
  "Distributor",
  "Other"
];

export const company = {
  name: "MRN Agro Industries",
  brand: "MRN Gold",
  founder: "Mr. Pawan Kumar",
  established: 2003,
  customers: "250+",

  address: {
    line1: "Survey No. 739, Opposite Venkatadri Weighbridge",
    line2: "Gadwal Road, Raichur",
    line3: "Karnataka – 584102, India"
  },
  city: "Raichur",
  state: "Karnataka",
  mapsUrl: "https://maps.app.goo.gl/UCGCtGDP1Jaq2jgm8?g_st=iw",
  /**
   * Keyless Google Maps embed. The query text and `ftid` are Google's own
   * canonical values for this listing, taken from resolving the share link
   * above, so the pin lands on the business itself rather than on an
   * approximate geocode of the postal address.
   */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("MRN Agro Industries, S.Y No, 739, Gadwal Rd, Raichur, Karnataka 584102") +
    "&ftid=0x3bc9d91b3fcb9fc9:0xbf689a4f175f1d72" +
    "&output=embed",

  email: "admin@mrnagro.com",
  phones: [
    { team: "Sales Team", number: "+91 72598 47655" },
    { team: "Accounts Team", number: "+91 63632 90896" }
  ],

  capacity: "9 tonnes of paddy per hour",
  machinery: "Satake machinery from Japan",
  credentials: ["FSSAI", "AGMARK"],
  statesServed: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra"],

  mission:
    "To produce premium-quality rice with consistent standards throughout the year, supported by careful processing, reliable supply, and fair pricing.",
  vision:
    "To become a trusted household rice brand across India, growing through quality, honesty, and lasting customer relationships."
};

/** `tel:` href for a displayed number. */
export const telHref = (number) => `tel:${number.replace(/[^\d+]/g, "")}`;

export const products = [
  {
    slug: "raw-rice",
    no: "01",
    name: "Raw Rice",
    tagline: "Natural texture, clean polish",
    image: "/products/raw.png",
    accent: "#2F5D8A",
    short: "Milled and polished without parboiling, with a clean, natural grain.",
    description:
      "Milled and polished without parboiling, our raw rice retains its natural texture and clean appearance. Selected paddy is graded before milling and processed on a calibrated line, so the grain profile stays consistent from one consignment to the next.",
    note: "Supplied in branded retail packs as well as bulk quantities for wholesale and distribution.",
    specs: [
      ["Type", "Raw milled rice"],
      ["Best For", "Households, retail, wholesale"],
      ["Packing", "Retail packs and bulk bags"],
      ["Availability", "Year-round"]
    ],
    tags: ["Households", "Retail", "Wholesale"]
  },
  {
    slug: "boiled-rice",
    no: "02",
    name: "Boiled Rice",
    tagline: "Firm grain, nutrients retained",
    image: "/products/boiled.png",
    accent: "#2E6B44",
    short: "Parboiled under controlled conditions for firm, separate grains.",
    description:
      "Parboiled under controlled conditions to lock in nutrients and deliver the firm, separate grain that high-volume kitchens and distributors depend on. Moisture and consistency are checked before a batch is approved for packing.",
    note: "A dependable choice where cooking performance has to stay identical across large orders.",
    specs: [
      ["Type", "Parboiled rice"],
      ["Best For", "Distributors, institutional kitchens, retail"],
      ["Packing", "Retail packs and bulk bags"],
      ["Availability", "Year-round"]
    ],
    tags: ["Distributors", "Institutional", "Retail"]
  },
  {
    slug: "rice-bran",
    no: "03",
    name: "Rice Bran",
    tagline: "Nutrient-dense, industry grade",
    image: "/products/bran.png",
    accent: "#8A9350",
    short: "Nutrient-rich by-product for oil extraction and feed manufacturers.",
    description:
      "The nutrient-dense outer layer recovered during milling, supplied to oil extraction units and feed manufacturers who need a steady, reliable grade. Because our paddy is sourced directly and milled in-house, bran quality stays consistent through the season.",
    note: "Dispatched in bulk, with volumes confirmed against the season's milling schedule.",
    specs: [
      ["Type", "Milling by-product"],
      ["Best For", "Oil extraction, cattle feed, industrial use"],
      ["Packing", "Bulk supply"],
      ["Availability", "Subject to milling volume"]
    ],
    tags: ["Oil Extraction", "Cattle Feed", "Industrial"]
  },
  {
    slug: "rice-husk",
    no: "04",
    name: "Rice Husk",
    tagline: "Clean biomass by-product",
    image: "/products/husk.png",
    accent: "#6B6F63",
    short: "Clean, well-separated husk supplied as biomass and raw material.",
    description:
      "A clean, well-separated by-product valued as biomass fuel and as an industrial raw material. Available in steady volumes through the season and dispatched in bulk to buyers across the region.",
    note: "Loading and dispatch scheduled around your collection windows.",
    specs: [
      ["Type", "Milling by-product"],
      ["Best For", "Biomass fuel, board mills, industrial use"],
      ["Packing", "Bulk supply"],
      ["Availability", "Subject to milling volume"]
    ],
    tags: ["Biomass Fuel", "Board Mills", "Industrial"]
  }
];

export const stats = [
  { value: 2016, plain: true, label: "Established", unit: "" },
  { value: 8, label: "Milling Capacity", unit: "tons / hour" },
  { value: 4, label: "Product Range", unit: "products" },
  { value: 100, label: "Direct Farm Sourcing", unit: "%" }
];

export const reasons = [
  { no: "01", title: "Trusted Since 2016", text: "Long-standing supply relationships built steadily across Karnataka." },
  { no: "02", title: "Direct Farm Sourcing", text: "Paddy procured straight from farmers across the Raichur district." },
  { no: "03", title: "Modern Milling Infrastructure", text: "A modern plant built for precision, throughput and grain integrity." },
  { no: "04", title: "Hygienic Quality Standards", text: "Clean handling and controlled processing at every stage of the line." },
  { no: "05", title: "8 Tons Per Hour Capacity", text: "Installed milling capacity that absorbs bulk and seasonal demand." },
  { no: "06", title: "Consistent Product Quality", text: "A repeatable grain profile our buyers can plan around, order after order." },
  { no: "07", title: "Timely Deliveries", text: "Dispatch schedules distributors and wholesalers can rely on." },
  { no: "08", title: "Customer-First Approach", text: "Requirements heard, answered and honoured, from enquiry to repeat order." }
];

export const processSteps = [
  { title: "Farmers", text: "Paddy sourced directly from growers across Raichur district, without intermediaries diluting the chain." },
  { title: "Paddy Selection", text: "Every incoming consignment is assessed and graded before it is allowed onto the line." },
  { title: "Modern Processing", text: "Milling calibrated to protect the grain structure, running at 8 tons per hour." },
  { title: "Quality Checks", text: "Purity, moisture and consistency verified before a batch is approved." },
  { title: "Packaging", text: "Sealed hygienically in branded packs built to hold freshness in transit." },
  { title: "Customer Delivery", text: "Dispatched on schedule to households, traders and industrial buyers." }
];

export const testimonials = [
  { quote: "Consistent quality and timely deliveries have made MRN Agro Industries a reliable business partner for us.", name: "Wholesale Partner", place: "Karnataka" },
  { quote: "Their commitment to maintaining product standards is evident in every order we receive.", name: "Distribution Partner", place: "South India" },
  { quote: "A trusted name that combines quality products with excellent customer service.", name: "Retail Buyer", place: "Raichur" }
];

export const company = {
  name: "MRN Agro Industries",
  city: "Raichur",
  state: "Karnataka",
  email: "info@mrnagro.in",
  phone: "+91 00000 00000",
  hours: "Monday to Saturday, 9:00 AM – 6:00 PM",
  established: 2016
};

/**
 * Photographs are freely-licensed images from Wikimedia Commons, used as
 * stand-ins until MRN Agro Industries supplies its own photography.
 * Attribution is required for these licences — see the credit line in the
 * footer and CREDITS.md. Replacing a file here updates every page that uses it.
 */
export const photos = {
  harvest: {
    src: "/images/harvest-raichur.jpg",
    alt: "A farmer harvesting paddy by hand in Raichur district, Karnataka",
    caption: "Paddy harvest, Raichur district",
    credit: "Nanditha Gogate, WELL Labs — CC BY-SA 4.0"
  },
  field: {
    src: "/images/paddy-field.jpg",
    alt: "Green paddy fields under an open sky",
    caption: "Standing paddy before harvest",
    credit: "Juntora — CC BY-SA 4.0"
  },
  farmers: {
    src: "/images/farmers.jpg",
    alt: "Farmers harvesting rice in a paddy field",
    caption: "The growers we buy from",
    credit: "McKay Savage — CC BY 2.0"
  },
  hand: {
    src: "/images/hand-grain.jpg",
    alt: "A hand resting against ripening rice grain in the field",
    caption: "Grain checked in the field",
    credit: "Erfanebrahimsait — CC BY-SA 4.0"
  },
  raw: {
    src: "/images/rice-raw.jpg",
    alt: "Uncooked long white rice grains",
    caption: "Milled rice, ready for packing",
    credit: "cookbookman17 — CC BY 2.0"
  },
  table: {
    src: "/images/rice-white.jpg",
    alt: "A bowl of cooked white rice on a table",
    caption: "Where every consignment ends up",
    credit: "Sum overseas — CC BY-SA 4.0"
  }
};

export const photoCredits = Object.values(photos).map((p) => p.credit);

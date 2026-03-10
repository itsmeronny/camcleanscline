export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  inclusions: string[];
  exclusions: string[];
  idealFor: string[];
  checklist: string[];
  faqs: { q: string; a: string }[];
  cta: {
    heading: string;
    bullets: string[];
    buttonText: string;
    buttonHref: string;
  };
};

const baseCTA = {
  heading: "Request a Cleaning Quote",
  bullets: [
    "Clear scope",
    "Structured checklist standards",
    "Email-based booking"
  ],
  buttonText: "Get a Quote",
  buttonHref: "/get-a-quote"
};

const services: Record<string, Service> = {

  "airbnb-cleaning": {
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    short: "Structured short-term rental turnover cleaning.",
    intro:
      "Airbnb cleaning focuses on presentation consistency, high-touch sanitisation, and rapid turnover between guest stays.",
    inclusions: [
      "Bathroom sanitisation",
      "Kitchen surface reset",
      "Floor vacuum and mop",
      "Bed reset (if linens provided)",
      "High-touch wipe-down"
    ],
    exclusions: [
      "Laundry processing",
      "Damage repair",
      "Deep carpet extraction"
    ],
    idealFor: [
      "Short-term rental hosts",
      "Serviced accommodation operators"
    ],
    checklist: [
      "Sanitise bathroom fixtures",
      "Clean mirrors and taps",
      "Wipe kitchen surfaces",
      "Vacuum entire property",
      "Mop hard floors"
    ],
    faqs: [
      { q: "Is same-day turnover possible?", a: "Subject to schedule and location availability." }
    ],
    cta: baseCTA
  },

  "end-of-tenancy-cleaning": {
    slug: "end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning",
    short: "Inspection-focused property reset aligned with landlord standards.",
    intro:
      "End of tenancy cleaning prioritises deposit-sensitive inspection areas and structured checklist alignment.",
    inclusions: [
      "Kitchen degrease",
      "Bathroom descaling",
      "Internal cupboards",
      "Skirting board wipe-down",
      "Floor vacuum and mop"
    ],
    exclusions: [
      "Exterior window cleaning",
      "Heavy lifting",
      "Structural repair"
    ],
    idealFor: [
      "Tenants moving out",
      "Landlords preparing new lets"
    ],
    checklist: [
      "Degrease hob",
      "Clean shower glass",
      "Wipe doors and frames",
      "Vacuum edges",
      "Mop floors"
    ],
    faqs: [
      { q: "Is deposit return guaranteed?", a: "Deposit outcomes depend on condition and inventory standards." }
    ],
    cta: baseCTA
  },

  "one-off-deep-cleaning": {
    slug: "one-off-deep-cleaning",
    name: "One Off Deep Cleaning",
    short: "Detailed deep clean targeting accumulated build-up.",
    intro:
      "Deep cleaning addresses neglected surfaces, heavy-use areas, and presentation resets beyond routine cleaning.",
    inclusions: [
      "Kitchen deep clean",
      "Bathroom scrub",
      "Internal door wipe",
      "Skirting detailing"
    ],
    exclusions: [
      "Carpet steam cleaning",
      "Exterior areas"
    ],
    idealFor: [
      "Spring resets",
      "Pre-sale preparation",
      "Post-renovation refresh"
    ],
    checklist: [
      "Degrease splashbacks",
      "Descale taps",
      "Vacuum upholstery surface",
      "Mop floors"
    ],
    faqs: [
      { q: "How long does a deep clean take?", a: "Depends on property size and condition." }
    ],
    cta: baseCTA
  },

  "after-builders-cleaning": {
    slug: "after-builders-cleaning",
    name: "After Builders Cleaning",
    short: "Post-construction cleaning aligned with contractor and developer handover standards.",
    intro:
      "After builders cleaning is a structured post-construction service designed to remove fine dust, plaster residue, adhesive traces, paint overspray and installation debris following renovation, extension or refurbishment work. The objective is a handover-ready finish suitable for inspection or occupation.",
    inclusions: [
      "Fine dust extraction from all surfaces",
      "Internal window and frame detailing",
      "Skirting and edge dust removal",
      "Light fitting and switch wipe-down",
      "Floor vacuum and mop",
      "High-level surface dust removal"
    ],
    exclusions: [
      "Large waste or rubble disposal",
      "Structural defect correction",
      "Tool or material removal"
    ],
    idealFor: [
      "Property developers",
      "Renovation contractors",
      "Landlords completing refurbishments",
      "Homeowners post-extension",
      "Commercial fit-out projects"
    ],
    checklist: [
      "Remove plaster and fine construction dust",
      "Clean internal glazing and frames",
      "Detail newly installed fixtures",
      "Wipe doors, frames and skirting",
      "Vacuum edges and corners",
      "Mop hard floors to presentation standard"
    ],
    faqs: [
      {
        q: "Is heavy debris removal included?",
        a: "Large waste and rubble must be cleared prior to cleaning."
      },
      {
        q: "Is this suitable for developer handover?",
        a: "Yes, the service is structured to support inspection and handover presentation standards."
      }
    ],
    cta: baseCTA
  },

  "carpet-rug-cleaning": {
    slug: "carpet-rug-cleaning",
    name: "Carpet & Rug Cleaning",
    short: "Surface-level carpet and rug refresh service.",
    intro:
      "Carpet and rug cleaning focuses on presentation improvement and surface refresh.",
    inclusions: [
      "Surface vacuum",
      "Spot treatment (light)",
      "Rug surface refresh"
    ],
    exclusions: [
      "Deep extraction unless separately arranged"
    ],
    idealFor: [
      "Property refresh",
      "Move-out preparation"
    ],
    checklist: [
      "Vacuum carpet",
      "Spot treat marks"
    ],
    faqs: [
      { q: "Do you provide steam cleaning?", a: "Steam extraction is available where separately arranged." }
    ],
    cta: baseCTA
  }

};

export default services;
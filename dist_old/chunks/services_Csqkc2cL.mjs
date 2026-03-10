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
const services = {
  "airbnb-cleaning": {
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    short: "Structured short-term rental turnover cleaning.",
    intro: "Airbnb cleaning focuses on presentation consistency, high-touch sanitisation, and rapid turnover between guest stays.",
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
    intro: "End of tenancy cleaning prioritises deposit-sensitive inspection areas and structured checklist alignment.",
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
    intro: "Deep cleaning addresses neglected surfaces, heavy-use areas, and presentation resets beyond routine cleaning.",
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
    intro: "After builders cleaning is a structured post-construction service designed to remove fine dust, plaster residue, adhesive traces, paint overspray and installation debris following renovation, extension or refurbishment work. The objective is a handover-ready finish suitable for inspection or occupation.",
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
    intro: "Carpet and rug cleaning focuses on presentation improvement and surface refresh.",
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
  },
  "oven-cleaning": {
    slug: "oven-cleaning",
    name: "Oven Cleaning",
    short: "Specialist oven degreasing and interior wipe-down.",
    intro: "Oven cleaning targets grease build-up and residue affecting presentation and inspection outcomes.",
    inclusions: [
      "Interior wipe-down",
      "Hob degrease",
      "Glass door clean"
    ],
    exclusions: [
      "Component replacement"
    ],
    idealFor: [
      "Tenancy changeover",
      "Heavy kitchen use"
    ],
    checklist: [
      "Degrease surfaces",
      "Clean glass panel"
    ],
    faqs: [
      { q: "Are racks cleaned?", a: "Yes, where accessible." }
    ],
    cta: baseCTA
  },
  "office-cleaning": {
    slug: "office-cleaning",
    name: "Office Cleaning",
    short: "Structured commercial office cleaning.",
    intro: "Office cleaning focuses on professional presentation and hygiene standards for working environments.",
    inclusions: [
      "Desk surface wipe",
      "Floor vacuum",
      "Bin emptying",
      "Kitchenette clean"
    ],
    exclusions: [
      "IT equipment dismantling"
    ],
    idealFor: [
      "Small businesses",
      "Shared workspaces"
    ],
    checklist: [
      "Wipe desks",
      "Vacuum floors",
      "Clean kitchen area"
    ],
    faqs: [
      { q: "Do you offer ongoing contracts?", a: "Yes, subject to agreement." }
    ],
    cta: baseCTA
  },
  "after-party-cleaning": {
    slug: "after-party-cleaning",
    name: "After Party Cleaning",
    short: "Rapid clean-up following events.",
    intro: "After party cleaning addresses waste removal, surface wipe-down, and floor restoration.",
    inclusions: [
      "Surface wipe-down",
      "Floor vacuum and mop",
      "Bin removal"
    ],
    exclusions: [
      "Damage repair"
    ],
    idealFor: [
      "Private events",
      "Rental property resets"
    ],
    checklist: [
      "Clear waste",
      "Clean kitchen",
      "Mop floors"
    ],
    faqs: [
      { q: "Is glass removal included?", a: "Yes, loose glass is safely removed." }
    ],
    cta: baseCTA
  },
  "appliances-cleaning": {
    slug: "appliances-cleaning",
    name: "Appliances Cleaning",
    short: "Internal and external appliance wipe-down.",
    intro: "Appliance cleaning focuses on kitchen and household units affecting inspection and presentation.",
    inclusions: [
      "Microwave wipe",
      "Fridge interior wipe",
      "External appliance clean"
    ],
    exclusions: [
      "Repair work"
    ],
    idealFor: [
      "Move-out preparation",
      "Kitchen refresh"
    ],
    checklist: [
      "Clean microwave",
      "Wipe fridge interior"
    ],
    faqs: [
      { q: "Is freezer defrost included?", a: "No, defrosting must be completed prior." }
    ],
    cta: baseCTA
  },
  "housekeeper-cleaner": {
    slug: "housekeeper-cleaner",
    name: "Housekeeper / Cleaner",
    short: "Routine domestic cleaning support.",
    intro: "Domestic housekeeping provides structured maintenance cleaning for occupied properties.",
    inclusions: [
      "Surface wipe-down",
      "Bathroom clean",
      "Kitchen clean",
      "Floor vacuum and mop"
    ],
    exclusions: [
      "Deep restoration cleaning"
    ],
    idealFor: [
      "Busy households",
      "Regular maintenance"
    ],
    checklist: [
      "Clean bathroom",
      "Wipe kitchen",
      "Vacuum floors"
    ],
    faqs: [
      { q: "Is this weekly?", a: "Frequency is arranged as required." }
    ],
    cta: baseCTA
  },
  "mattress-cleaning": {
    slug: "mattress-cleaning",
    name: "Mattress Cleaning",
    short: "Surface sanitisation mattress service.",
    intro: "Mattress cleaning improves hygiene and presentation standards.",
    inclusions: [
      "Surface vacuum",
      "Light sanitisation treatment"
    ],
    exclusions: [
      "Deep extraction unless arranged"
    ],
    idealFor: [
      "Allergy concerns",
      "Rental preparation"
    ],
    checklist: [
      "Vacuum mattress",
      "Apply sanitiser"
    ],
    faqs: [
      { q: "Does this remove stains?", a: "Surface stain reduction only." }
    ],
    cta: baseCTA
  },
  "sofa-upholstery-cleaning": {
    slug: "sofa-upholstery-cleaning",
    name: "Sofa & Upholstery Cleaning",
    short: "Surface upholstery refresh service.",
    intro: "Upholstery cleaning improves presentation and reduces surface build-up.",
    inclusions: [
      "Surface vacuum",
      "Light spot treatment"
    ],
    exclusions: [
      "Full deep extraction unless arranged"
    ],
    idealFor: [
      "Pre-sale staging",
      "Move-out preparation"
    ],
    checklist: [
      "Vacuum sofa",
      "Spot treat marks"
    ],
    faqs: [
      { q: "Are fabric types assessed?", a: "Yes, before treatment." }
    ],
    cta: baseCTA
  },
  "seniors-cleaning": {
    slug: "seniors-cleaning",
    name: "Seniors Cleaning",
    short: "Supportive cleaning for elderly residents.",
    intro: "Seniors cleaning provides structured, respectful cleaning support tailored for elderly residents.",
    inclusions: [
      "Bathroom clean",
      "Kitchen clean",
      "Floor vacuum and mop"
    ],
    exclusions: [
      "Medical care services"
    ],
    idealFor: [
      "Elderly homeowners",
      "Family-supported households"
    ],
    checklist: [
      "Clean bathroom",
      "Wipe kitchen surfaces",
      "Vacuum floors"
    ],
    faqs: [
      { q: "Are DBS checks required?", a: "Cleaner vetting policies apply where applicable." }
    ],
    cta: baseCTA
  }
};

export { services as s };

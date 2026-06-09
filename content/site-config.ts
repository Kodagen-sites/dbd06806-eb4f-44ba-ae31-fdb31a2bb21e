// ============================================================
// site-config.ts — single source of truth for all copy + brand
// PitchSide XR — VR sports entertainment / World Cup VR experiences
// ============================================================

export const siteConfig = {
  // -- Brand identity ---------------------------------------------
  company: {
    name: "PitchSide XR",
    tagline: "Live the World Cup in VR",
    description:
      "PitchSide XR drops football fans into the heart of the World Cup — pitchside seats, 360° replays, and roaring virtual fan zones streamed to any headset, anywhere on earth.",
    email: "hello@pitchsidexr.com",
    phone: "+1 (415) 555-0147",
    location: "Streaming worldwide",
  },

  brand: {
    primary: "#06B6D4",
    accent: "#67E8F9",
    bg: "#0A0E14",
  },

  typography: {
    display: "Space Grotesk",
    body: "Space Mono",
    mono: "Space Mono",
  },

  // -- SEO + meta + sitemap ---------------------------------------
  seo: {
    siteUrl: "https://pitchsidexr.com",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "PitchSide XR — Live the World Cup in VR",
    defaultDescription:
      "Pitchside seats, 360° replays, and roaring virtual fan zones — experience the World Cup in immersive VR from any headset, anywhere.",
    defaultOgImage: "https://pitchsidexr.com/og-default.png",
    twitterHandle: "@pitchsidexr",
    noindexPaths: ["/account", "/admin", "/auth", "/api"],
    googleSiteVerification: "",
    structuredData: {
      businessType: null as string | null,
      address: {
        streetAddress: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        addressCountry: "",
      },
      hours: [] as Array<{ days: string[]; opens: string; closes: string }>,
      priceRange: "$$",
      geo: null as { latitude: number; longitude: number } | null,
      rating: null as { ratingValue: number; reviewCount: number } | null,
      starRating: null as number | null,
      amenities: [] as string[],
      cuisine: [] as string[],
    },
  },

  // -- Social profiles (used in Organization JSON-LD sameAs) ------
  socials: {
    instagram: "https://instagram.com/pitchsidexr",
    twitter: "https://x.com/pitchsidexr",
    facebook: "",
    linkedin: "https://linkedin.com/company/pitchsidexr",
    youtube: "https://youtube.com/@pitchsidexr",
    tiktok: "https://tiktok.com/@pitchsidexr",
    whatsapp: "",
  },

  // -- Hero ------------------------------------------------------
  hero: {
    h1: [
      { text: "Step onto", accent: false },
      { text: "the pitch", accent: true },
      { text: "in VR", accent: false },
    ],
  },

  tagline: "Live the World Cup in VR",

  // -- Services / Experiences ------------------------------------
  servicesHeading: "Ways to experience the Cup",

  services: [
    {
      name: "Stadium Presence",
      slug: "stadium-presence",
      description:
        "Teleport into a sold-out stadium and watch the match from a front-row seat that puts you closer than any ticket ever could.",
      highlights: ["Front-row seats", "Live crowd audio", "Any fixture"],
    },
    {
      name: "360° Match Replay",
      slug: "match-replay",
      description:
        "Rewind any goal and orbit the action in full 360° — pause, scrub, and relive the moment from every impossible angle.",
      highlights: ["Volumetric capture", "Scrubbable timeline", "Every goal"],
    },
    {
      name: "Virtual Fan Zones",
      slug: "fan-zones",
      description:
        "Drop into roaring fan zones with supporters worldwide — chants, banners, and the electric buzz of matchday, together.",
      highlights: ["Live avatars", "Global chants", "Spatial audio"],
    },
    {
      name: "Pitchside POV",
      slug: "pitch-pov",
      description:
        "See the game the way the players do, from boot-level cameras that put you inside the run, the tackle, and the strike.",
      highlights: ["Boot-cam feeds", "Player tracking", "Real-time"],
    },
    {
      name: "Multiplayer Watch Parties",
      slug: "watch-parties",
      description:
        "Invite your crew into a private virtual suite, react in real time, and celebrate every goal shoulder to shoulder.",
      highlights: ["Private suites", "Voice chat", "Shared reactions"],
    },
    {
      name: "Legends Archive",
      slug: "legends-archive",
      description:
        "Walk through the greatest matches in history, remastered in immersive VR — relive the moments that defined the game.",
      highlights: ["Historic finals", "Remastered", "On demand"],
    },
  ] as Array<{
    name: string;
    slug: string;
    description: string;
    highlights?: string[];
  }>,

  rooms: [] as Array<any>,
  locations: [] as Array<any>,
  gallery: [] as Array<any>,

  // -- Why us ----------------------------------------------------
  whyUs: {
    heading: "Why fans choose PitchSide",
    items: [
      {
        title: "Closer than the front row",
        description:
          "Volumetric capture and broadcast-grade rigs put you inside the action — not watching it on a screen, but standing in it.",
      },
      {
        title: "Stream to any headset",
        description:
          "No console, no cables. PitchSide XR runs on standalone headsets and streams over 5G so the stadium follows you anywhere.",
      },
      {
        title: "Built for the crowd",
        description:
          "Football is nothing without the roar. We render thousands of live fans so every match feels packed, loud, and alive.",
      },
    ],
  },

  // -- Process ---------------------------------------------------
  process: [
    { step: 1, title: "Grab a headset", description: "Works on any standalone VR headset — download the PitchSide app and sign in." },
    { step: 2, title: "Pick your seat", description: "Choose a fixture and a vantage: pitchside, the stands, or a private fan zone." },
    { step: 3, title: "Kick off in VR", description: "Stream the match live in immersive 360°, or rewind any moment in full replay." },
  ],

  // -- About -----------------------------------------------------
  aboutHeading: "Football, the way it should be felt",
  aboutStory:
    "PitchSide XR was built by football obsessives and immersive-media engineers who were tired of watching the world's biggest tournament through a rectangle. We capture matches with volumetric rigs, render living crowds, and stream the whole stadium to your headset — so distance never decides who gets to be there.",
  manifesto: "Every fan deserves a front-row seat to the world's game.",
  values: [
    { title: "Presence over pixels", description: "We chase the feeling of being there, not just higher resolution." },
    { title: "Open to every fan", description: "Anywhere on earth, any headset — the stadium comes to you." },
    { title: "The crowd is sacred", description: "We render the roar because the roar is the game." },
  ],

  work: [] as Array<any>,

  stats: [
    { value: "64", label: "Matches in immersive VR" },
    { value: "120+", label: "Countries streaming" },
    { value: "360°", label: "Every angle, every goal" },
  ] as Array<{ value: string; label: string }>,

  features: [
    {
      title: "The whole stadium, on your head.",
      description:
        "Broadcast-grade volumetric capture and a living, roaring crowd render the entire matchday experience straight to your headset — no ticket, no travel, no compromise.",
    },
    { title: "Live crowd audio", description: "Spatialized chants and roars that move around you in real time." },
    { title: "Sub-second latency", description: "5G streaming keeps the action in sync with the real match." },
    { title: "Cross-headset", description: "One app across every major standalone VR platform." },
  ] as Array<{ title: string; description: string }>,

  sectionThemeWord: "Presence",

  narrative: [] as Array<any>,

  // -- Mixed-media config (for archetype G) ---------------------
  mixedMedia: {
    skipSecondaryVideo: true as boolean,
    accentEyebrow: "The Outcome",
    accentLine: "Every fan deserves a front-row seat to the world's game.",
  },

  // -- CTA -------------------------------------------------------
  cta: {
    primary: "Get early access",
    secondary: "Explore experiences",
  },

  ctaBlock: {
    heading: "Your seat is waiting.",
    description:
      "Join the early-access list and be courtside for the next World Cup — in VR, from wherever you are.",
  },

  trustBar: [
    "Works on all standalone headsets",
    "5G low-latency streaming",
    "360° volumetric capture",
    "Global early access",
  ] as string[],

  // -- Cinematic config ------------------------------------------
  scrollHero: {
    archetype: "G" as "A" | "B" | "C" | "D" | "E" | "F" | "G",
    styleId: "neon-control-room",
    assetMode: "live-generate" as "live-generate" | "prompt-only",
    imageUrl: "/frames/frame_0001.jpg",
    frameCount: 180,
    scrollDistance: 3,
  },

  // -- Header variant --------------------------------------------
  headerVariant: "pill-floating" as const,

  // -- Footer variant --------------------------------------------
  footerVariant: "FT3" as const,

  // -- Motion globals --------------------------------------------
  motion: {
    scrollProgress: true as boolean,
    cursorFollower: false as boolean,
    intensity: "high" as "low" | "medium" | "high",
  },
} as const;

export type SiteConfig = typeof siteConfig;

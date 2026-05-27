// DWELL Homes & Services — Site Data
// Pune-focused premium real estate advisory

export const BRAND = {
  name: "DWELL Homes & Services",
  tagline: "Trusted Property Advisory in Pune",
  subTagline:
    "Helping families, professionals, and investors across Pune discover residential and commercial properties with transparency, expertise, and personalized consultation.",
  phone: "+91 75729 05655",
  phoneRaw: "7572905655",
  whatsapp: "+91 75729 05655",
  whatsappRaw: "7572905655",
  email: "info@dwellhomes.in",
  address: "Baner Road, Pune 411045, Maharashtra",
  rating: 5.0,
  googleRating: "5.0",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Baner+Road,+Pune,+Maharashtra+411045&t=m&z=14&output=embed&iwloc=near",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Commercial", href: "#commercial" },
  { label: "Residential", href: "#residential" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_ITEMS = [
  "✔ 5.0 Rated Property Advisory",
  "✔ Residential & Commercial Expertise",
  "✔ Transparent Consultation",
  "✔ Trusted Across Pune",
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  source?: string;
  company?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    role: "First-time Homebuyers, Baner",
    quote:
      "DWELL completely transformed our home-buying journey. We were overwhelmed as first-timers, but their team patiently guided us through every step — from shortlisting to documentation. We found our dream 3 BHK in Baner within our budget. Truly transparent and genuinely caring!",
    rating: 5,
    avatar: "PR",
    source: "Google Review",
  },
  {
    id: 2,
    name: "Vikram Iyer",
    role: "IT Professional, Relocated from Bengaluru",
    quote:
      "Relocating to Pune for work was stressful until I connected with DWELL. They understood my priorities — commute time to Hinjewadi, school proximity, and budget — and presented perfectly matched options. Moved in within 6 weeks of my first call. Outstanding service!",
    rating: 5,
    avatar: "VI",
    source: "Google Review",
  },
  {
    id: 3,
    name: "Anjali Deshmukh",
    role: "Investor, Commercial Properties",
    quote:
      "I've worked with multiple property consultants in Pune but DWELL stands apart in their depth of market knowledge. Their advice on commercial spaces in Hinjewadi proved spot-on — rental yield has been excellent. They are my first call for any property decision.",
    rating: 5,
    avatar: "AD",
    source: "Google Review",
  },
  {
    id: 4,
    name: "Suresh & Meena Kulkarni",
    role: "Retired Couple, Kothrud Villa",
    quote:
      "We wanted to downsize thoughtfully and DWELL's space planning guidance was invaluable. They helped us see possibilities we hadn't considered and found us a beautiful villa that perfectly suits our lifestyle. Their warmth and patience made all the difference.",
    rating: 5,
    avatar: "SK",
    source: "Google Review",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Startup Founder, Office Space",
    quote:
      "Finding the right commercial space for my startup was critical. DWELL's consultant understood exactly what a growing business needs and found us an ideal space in Bavdhan that we could scale into. Professional, fast, and remarkably straightforward about pricing.",
    rating: 5,
    avatar: "NJ",
    source: "Google Review",
  },
  {
    id: 6,
    name: "Aditya & Swati Pawar",
    role: "Young Family, Wakad",
    quote:
      "We were juggling tight timelines and a young child when we needed to relocate. DWELL not only found us a wonderful apartment in Wakad within 3 weeks but also helped with school mapping in the area. That personal touch sets them apart from every broker we'd tried.",
    rating: 5,
    avatar: "AP",
    source: "Google Review",
  },
];

export interface PuneArea {
  id: string;
  name: string;
  insight: string;
  highlight: string;
  type: string;
}

export const PUNE_AREAS: PuneArea[] = [
  {
    id: "baner",
    name: "Baner",
    insight:
      "Premium residential hub with excellent connectivity to Hinjewadi IT Park. High demand from IT professionals and families.",
    highlight: "High Demand",
    type: "Residential + Commercial",
  },
  {
    id: "wakad",
    name: "Wakad",
    insight:
      "Fast-growing suburb offering quality apartments at competitive prices. Excellent expressway access and social infrastructure.",
    highlight: "Best Value",
    type: "Residential",
  },
  {
    id: "warje",
    name: "Warje",
    insight:
      "Emerging residential destination with serene environment and rising property values. Upcoming metro connectivity.",
    highlight: "High Growth",
    type: "Residential",
  },
  {
    id: "kothrud",
    name: "Kothrud",
    insight:
      "Pune's most prestigious residential address. Mature neighbourhood with top schools, hospitals, and premium lifestyle.",
    highlight: "Premium Address",
    type: "Residential + Villas",
  },
  {
    id: "hinjewadi",
    name: "Hinjewadi",
    insight:
      "Pune's IT capital with 3.5L+ tech workforce. Strongest commercial and residential demand from India's top IT companies.",
    highlight: "IT Corridor",
    type: "Commercial + Residential",
  },
  {
    id: "aundh",
    name: "Aundh",
    insight:
      "Vibrant commercial and residential blend. High-street retail, cafés, and premium apartments. Strong rental demand.",
    highlight: "Prime Location",
    type: "Commercial + Residential",
  },
  {
    id: "bavdhan",
    name: "Bavdhan",
    insight:
      "Strategic location connecting Baner, Kothrud, and Warje. Rapidly developing with affordable commercial spaces.",
    highlight: "Strategic Hub",
    type: "Commercial",
  },
];

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  cta?: string;
}

export const SERVICES: Service[] = [
  {
    id: "residential",
    name: "Residential Advisory",
    icon: "Home",
    description:
      "Expert guidance on apartments, villas, and homes across Pune's best neighbourhoods.",
  },
  {
    id: "commercial",
    name: "Commercial Leasing",
    icon: "Building2",
    description:
      "Premium office spaces, retail shops, and commercial properties for businesses of all sizes.",
  },
  {
    id: "investment",
    name: "Investment Consulting",
    icon: "TrendingUp",
    description:
      "Data-driven insights and strategic advice to maximise your property investment returns.",
  },
  {
    id: "spaceplanning",
    name: "Space Planning Guidance",
    icon: "Layout",
    description:
      "Professional space optimisation advice to help you make the most of your property.",
  },
  {
    id: "resale",
    name: "Resale & Rental",
    icon: "RefreshCw",
    description:
      "Transparent assistance for resale transactions and rental property management.",
  },
  {
    id: "consultation",
    name: "Free Consultation",
    icon: "MessageCircle",
    description:
      "Start with a free one-on-one consultation to understand your needs and map the right path.",
  },
];

export const WHY_DWELL = [
  {
    id: "advisory",
    title: "Trusted Property Advisory",
    description:
      "Unlike traditional brokers, we prioritise your long-term interests over quick transactions. Every recommendation is honest, data-backed, and personalised.",
    icon: "Shield",
    color: "teal",
  },
  {
    id: "expertise",
    title: "Residential & Commercial Expertise",
    description:
      "Deep market knowledge spanning Pune's best residential neighbourhoods and prime commercial corridors — from apartments to office spaces.",
    icon: "Award",
    color: "gold",
  },
  {
    id: "transparent",
    title: "Transparent Consultation",
    description:
      "No hidden costs, no pressure tactics. We provide clear, honest guidance so you make informed decisions with full confidence.",
    icon: "Eye",
    color: "emerald",
  },
  {
    id: "client",
    title: "Client-Centered Approach",
    description:
      "We listen first. Your lifestyle, budget, and future goals shape every recommendation we make — not our commission targets.",
    icon: "Heart",
    color: "teal",
  },
  {
    id: "matching",
    title: "Personalised Property Matching",
    description:
      "Advanced matching process that considers commute, schools, investment potential, and neighbourhood lifestyle — not just price and size.",
    icon: "Target",
    color: "gold",
  },
  {
    id: "spaceplanning",
    title: "Space Planning Guidance",
    description:
      "Expert advice on how to optimise your property layout for maximum comfort, functionality, and future resale value.",
    icon: "LayoutGrid",
    color: "emerald",
  },
];

export interface Property {
  id: number;
  title: string;
  type: string;
  category: "Residential" | "Commercial";
  location: string;
  area: string;
  bedrooms?: string;
  price: string;
  status: "Available" | "Featured" | "Sold Out";
  description: string;
  amenities: string[];
  imageUrl: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Skyline Residences — Baner",
    type: "2 & 3 BHK Apartments",
    category: "Residential",
    location: "Baner, Pune",
    area: "1,050 – 1,680 sq ft",
    bedrooms: "2–3 BHK",
    price: "₹82 Lakhs onwards",
    status: "Featured",
    description:
      "Premium gated community in the heart of Baner with lush landscaped gardens, modern clubhouse, and excellent connectivity to IT corridors. Spacious sun-drenched apartments with premium finishes.",
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Gym",
      "24/7 Security",
      "Power Backup",
      "Kids Play Area",
    ],
    imageUrl: "/assets/generated/dwell-gated-community.dim_800x560.jpg",
  },
  {
    id: 2,
    title: "Prestige Green Villas — Wakad",
    type: "Independent Villa",
    category: "Residential",
    location: "Wakad, Pune",
    area: "2,400 sq ft",
    bedrooms: "4 BHK",
    price: "₹1.85 Crores",
    status: "Available",
    description:
      "Elegant independent villas with private gardens and premium interiors in the sought-after Wakad locale. Ideal for families wanting space, privacy, and proximity to Hinjewadi IT Park.",
    amenities: [
      "Private Garden",
      "Covered Parking",
      "Home Automation",
      "Solar Panels",
      "CCTV",
    ],
    imageUrl: "/assets/generated/dwell-luxury-villa.dim_800x560.jpg",
  },
  {
    id: 3,
    title: "Boulevard Heights — Kothrud",
    type: "3 BHK Apartment",
    category: "Residential",
    location: "Kothrud, Pune",
    area: "1,450 sq ft",
    bedrooms: "3 BHK",
    price: "₹1.15 Crores",
    status: "Featured",
    description:
      "Thoughtfully designed 3 BHK apartments in Kothrud with panoramic city views. Walking distance to schools, hospitals, and civic amenities. Ideal for established families.",
    amenities: [
      "Terrace Garden",
      "Indoor Games",
      "Yoga Deck",
      "EV Charging",
      "Visitor Parking",
    ],
    imageUrl: "/assets/generated/dwell-residential-apt.dim_800x560.jpg",
  },
  {
    id: 4,
    title: "Serene Living — Aundh",
    type: "2 BHK Apartment",
    category: "Residential",
    location: "Aundh, Pune",
    area: "980 sq ft",
    bedrooms: "2 BHK",
    price: "₹78 Lakhs",
    status: "Available",
    description:
      "Modern 2 BHK apartments in prime Aundh location, perfect for IT professionals and young families. Quality construction, excellent ventilation, and convenient access to malls and business districts.",
    amenities: [
      "Gym",
      "Kids Pool",
      "Co-working Space",
      "Jogging Track",
      "Security",
    ],
    imageUrl: "/assets/generated/dwell-apartment-interior.dim_800x560.jpg",
  },
  {
    id: 5,
    title: "Trade Hub Commercial — Hinjewadi",
    type: "Office Space",
    category: "Commercial",
    location: "Hinjewadi, Pune",
    area: "800 – 5,000 sq ft",
    price: "₹55 – ₹65 / sq ft / mo",
    status: "Available",
    description:
      "Grade-A commercial office spaces in Pune's leading IT hub. Flexible configurations from startup suites to full-floor enterprise setups. Excellent ITES infrastructure and transport access.",
    amenities: [
      "Central AC",
      "High-Speed Internet",
      "Conference Rooms",
      "Cafeteria",
      "Parking",
      "24/7 Access",
    ],
    imageUrl: "/assets/generated/dwell-commercial-office.dim_800x560.jpg",
  },
  {
    id: 6,
    title: "Retail Plaza — Bavdhan",
    type: "Retail / Commercial",
    category: "Commercial",
    location: "Bavdhan, Pune",
    area: "450 – 2,200 sq ft",
    price: "₹1.20 Crores onwards",
    status: "Featured",
    description:
      "Premium retail and commercial units in the rapidly developing Bavdhan micro-market. High footfall catchment, ideal for F&B, showrooms, clinics, and services. Strong rental appreciation potential.",
    amenities: [
      "High Footfall",
      "Ample Parking",
      "Power Backup",
      "CCTV",
      "Loading Zone",
    ],
    imageUrl: "/assets/generated/dwell-commercial-retail.dim_800x560.jpg",
  },
];

// Legacy alias for older components that may import PROPERTIES
export const PROPERTIES = properties;

export interface Sector {
  id: string;
  name: string;
  description: string;
  stat: string;
  icon: string;
}

export const SECTORS: Sector[] = [
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Hotels, resorts, and experiential dining venues",
    stat: "50+ Projects",
    icon: "Hotel",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Premium retail spaces and high-street commercial",
    stat: "120+ Leases",
    icon: "ShoppingBag",
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Manufacturing, logistics, and industrial parks",
    stat: "35+ Deals",
    icon: "Factory",
  },
  {
    id: "warehousing",
    name: "Warehousing",
    description: "Modern storage and fulfillment infrastructure",
    stat: "80+ Units",
    icon: "Package",
  },
  {
    id: "franchises",
    name: "Franchises",
    description: "End-to-end franchise expansion and site selection",
    stat: "40+ Brands",
    icon: "Network",
  },
];

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "Deep-dive into your business model, expansion goals, and specific site requirements.",
  },
  {
    step: 2,
    title: "Opportunity Matching",
    description:
      "Curated property shortlist aligned to your strategy, with market data and viability analysis.",
  },
  {
    step: 3,
    title: "Site Evaluation",
    description:
      "On-ground assessment of shortlisted properties — footfall, infrastructure, and compliance checks.",
  },
  {
    step: 4,
    title: "Deal Structuring",
    description:
      "Negotiation, documentation, legal due diligence, and lease/purchase structuring.",
  },
  {
    step: 5,
    title: "Expansion Execution",
    description:
      "Handover coordination, fit-out guidance, and post-deal support to ensure your launch succeeds.",
  },
];

export interface MarketInsight {
  id: string;
  title: string;
  value: string;
  unit: string;
  description: string;
  trend: string;
}

export const MARKET_INSIGHTS: MarketInsight[] = [
  {
    id: "growth",
    title: "Growth Zones",
    value: "6",
    unit: "Active Corridors",
    description: "Emerging commercial micro-markets in Pune",
    trend: "+18% YoY",
  },
  {
    id: "retail",
    title: "Retail Demand",
    value: "340K",
    unit: "sq ft Vacant",
    description: "Available premium retail inventory across Pune",
    trend: "High Absorption",
  },
  {
    id: "franchise",
    title: "Franchise Opportunities",
    value: "25+",
    unit: "Brands Seeking",
    description: "National franchise brands actively seeking Pune locations",
    trend: "Growing",
  },
  {
    id: "industrial",
    title: "Industrial Expansion",
    value: "₹850Cr",
    unit: "Planned Investment",
    description: "Committed industrial investment in Pune region through 2026",
    trend: "+24% Growth",
  },
];

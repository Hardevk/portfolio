export interface PortfolioProject {
  id: string;
  title: string;
  category: 'figma' | 'aftereffect' | 'photoshop' | 'illustrator' | 'ai' | 'photo' | 'certifications';
  categoryLabel: string;
  image?: string;
  videoUrl?: string;
  youtubeId?: string;
  description: string;
  details?: string;
  tags: string[];
  externalUrl?: string;
  externalLabel?: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeUrl?: string;
  certificateUrl: string;
  verifyLabel: string;
  description: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Hardev Kamboe",
  title: "UX Designer & Digital Performance Marketer",
  university: "Wilfrid Laurier University",
  degree: "Bachelor of Design (BDes) in User Experience Design",
  location: "Burlington & Greater Toronto Area, Ontario, Canada",
  email: "kamboehardev@gmail.com",
  phone: "+1 289-838-5809",
  website: "www.kamboe.com",
  bio: "I work where design meets data. As a Digital Performance Marketing intern at TD Bank Group, I analyzed paid search, social, and display campaigns across the funnel, wrote weekly performance recaps, and turned App Store reviews and focus group feedback into UX recommendations. Before that, at Breeze Max Web, I designed Google Ads creative and website wireframes, and I've used Design Thinking and Figma to build intuitive user journeys for projects like ISOW, Fruit Hub, and Barkyard. I bring both skill sets to teams that care about how users experience a brand, and how that shows up in the numbers.",
  resumeUrl: "./assets/Hardev-Kamboe-Resume.pdf",
  sketchbookUrl: "./assets/Sketchbook.pdf",
  profileImg: "./assets/img/profile-img.jpg",
  heroImg: "./assets/img/hardev.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/hardev-kamboe/",
    figma: "https://www.figma.com/@hardev",
    email: "mailto:kamboehardev@gmail.com",
    phone: "tel:+12898385809"
  }
};

export const METRICS = [
  { value: "TD Bank", label: "Wealth Performance Marketing", highlight: "Growth Pod & App Store UX Insights" },
  { value: "20+", label: "Figma App Screens", highlight: "End-to-End Claude Design Workflow" },
  { value: "5", label: "Motion Graphic Reels", highlight: "Kinetic Typography & Compositing" },
  { value: "4", label: "Verified Certifications", highlight: "Google, Skillshop, Coursera & Udemy" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "td-bank",
    role: "Digital Performance Marketing Wealth Intern / Co-op",
    company: "TD Bank Group",
    period: "Summer Internship 2026",
    location: "Toronto, Canada",
    summary: "TD Easy Trade Investing | TD Marketing",
    highlights: [
      "Supported TD Easy Trade digital performance marketing campaigns across paid search, paid social, display, programmatic, and public site channels.",
      "Analyzed campaign performance across Awareness, Consideration, and Acquisition using KPIs including CTR, LPVs, CPLPV, app downloads, and account opens.",
      "Prepared weekly Growth Pod recaps summarizing channel performance, creative insights, blockers, stakeholder updates, and strategic next steps.",
      "Reviewed customer journey, app onboarding, and intern focus group feedback to identify UX friction points and improvement opportunities.",
      "Analyzed customer reviews from the App Store to identify recurring usability issues, pain points, and customer needs, translating findings into actionable UX recommendations.",
      "Contributed recommendations on audience strategy, budget allocation, retargeting, and creative testing to improve campaign efficiency."
    ],
    tags: ["Performance Marketing", "Funnel Analytics", "App Store UX", "Growth Pod", "KPI Optimization", "User Research"],
    featured: true
  },
  {
    id: "barkyard",
    role: "Barkyard — Dog Daycare & Grooming App",
    company: "AI-Assisted UX Case Study (Claude Design)",
    period: "Fall 2026",
    location: "Toronto, Canada",
    summary: "Complete end-to-end mobile design workflow from creative brief to high-fidelity prototype and developer handoff.",
    highlights: [
      "Took a fictional mobile app from initial brief to a ~20-screen high-fidelity Figma prototype.",
      "Leveraged an AI-assisted Claude Design workflow to accelerate ideation, user persona generation, and journey mapping.",
      "Designed full component systems, micro-interactions, responsive states, and developer-ready handoff specs.",
      "Earned the Udemy Claude AI UI/UX certification upon project completion."
    ],
    tags: ["Figma Prototype", "Claude AI Design", "User Personas", "Design Systems", "Handoff"],
    featured: true
  },
  {
    id: "fruit-hub",
    role: "Mobile App Design Case Study (Fruit Hub)",
    company: "Mobile UX & Filmmaking Project",
    period: "July 2025 - August 2025",
    location: "Ontario, Canada",
    summary: "Designed a comprehensive mobile user flow for a food delivery platform and completed special effects smartphone filmmaking.",
    highlights: [
      "Designed a complete set of user workflows for a fictional food delivery mobile app covering ordering, cart management, and status tracking.",
      "Conducted wireframing, high-fidelity UI layout, and interactive prototyping in Figma.",
      "Completed a short smartphone filmmaker course in special effects and mobile motion techniques."
    ],
    tags: ["Food Delivery UX", "Figma", "Interaction Design", "Motion FX", "Wireframing"]
  },
  {
    id: "self-published",
    role: "Self-Published Writer & Digital Creator",
    company: "Amazon Kindle Direct Publishing",
    period: "May 2024 - July 2024",
    location: "Remote",
    summary: "Author and digital designer of an original self-published E-book on Amazon.",
    highlights: [
      "Authored and published an original E-book on Amazon Kindle Direct Publishing.",
      "Designed layouts, typographic hierarchy, and book covers using Canva and graphic tools.",
      "Practiced creative generative AI image prompting on Ideogram and Midjourney for visual assets."
    ],
    tags: ["E-book Publishing", "Canva", "Midjourney", "Ideogram", "Creative Writing"]
  },
  {
    id: "breezemaxweb",
    role: "Digital Marketing & Design Intern",
    company: "Breeze Max Web",
    period: "May 2023 - July 2023",
    location: "Ontario, Canada",
    summary: "Full-service digital agency supporting diverse small-to-medium enterprise clients.",
    highlights: [
      "Created visually engaging Google Ads campaigns and display banners using Adobe Photoshop.",
      "Utilized Adobe Photoshop to create website wireframes representing layout and information architecture.",
      "Consulted with clients on branding and optimal visual design strategies.",
      "Translated client written briefs into high-converting visual concepts and campaign assets."
    ],
    tags: ["Google Ads", "Adobe Photoshop", "Wireframing", "Client Consultation", "Digital Banners"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Design (BDes) in User Experience Design",
    institution: "Wilfrid Laurier University",
    period: "2022 - Expected 2027",
    location: "Brantford, Ontario, Canada",
    description: "This comprehensive program emphasizes fostering design thinking, practical UX research methods, accessibility standards, user testing, and interactive prototyping skills for creating impactful user experiences."
  },
  {
    degree: "High School Diploma",
    institution: "MM Robinson High School",
    period: "2018 - 2022",
    location: "Burlington, Ontario, Canada",
    description: "High School Diploma Achieved with strong focus on visual arts, graphic communication, and multimedia technologies."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-prompting",
    title: "Google Prompting Essentials Professional Certification",
    issuer: "Google / Coursera",
    badgeUrl: "./assets/img/apple-touch-icon.png",
    certificateUrl: "https://coursera.org/share/08baa9ad009ada9348963743def5cdc5",
    verifyLabel: "Verify on Coursera",
    description: "Mastery of advanced prompt engineering techniques, iterative prompt optimization, structured LLM outputs, and generative AI workflow acceleration.",
    tags: ["Generative AI", "Prompt Engineering", "Google", "LLM Workflows"]
  },
  {
    id: "cert-analytics",
    title: "Google Analytics Certification",
    issuer: "Google Skillshop",
    badgeUrl: "./assets/img/apple-touch-icon.png",
    certificateUrl: "https://skillshop.credential.net/a37b1236-6403-436c-9a14-752fb74512bd#acc.mUhznirg",
    verifyLabel: "Verify on Skillshop",
    description: "Proficiency in Google Analytics 4 (GA4), custom event tracking, conversion funnel modeling, attribution, and digital audience segmentation.",
    tags: ["Google Analytics 4", "Funnel Analytics", "Attribution", "Audience Insights"]
  },
  {
    id: "cert-ads-apps",
    title: "Google Ads Apps Certification",
    issuer: "Google Skillshop",
    badgeUrl: "./assets/img/apple-touch-icon.png",
    certificateUrl: "https://skillshop.credential.net/2a0fb726-3ac8-45aa-a1d3-395fe5898c76#acc.yfkJAqaH",
    verifyLabel: "Verify on Skillshop",
    description: "Specialized certification in Google App Campaigns: driving mobile app installs, in-app actions, automated bidding strategies, and creative asset optimization.",
    tags: ["Google Ads", "App Campaigns", "User Acquisition", "Mobile Growth"]
  },
  {
    id: "cert-claude",
    title: "Claude AI UI/UX: Complete Workflow from Brief to Figma",
    issuer: "Udemy",
    badgeUrl: "./assets/img/portfolio/claude-ai-certificate.jpg",
    certificateUrl: "https://ude.my/UC-18ee007e-940c-4d7a-a057-7b2b9d6519ed",
    verifyLabel: "Verify on Udemy",
    description: "End-to-end application of Claude AI for rapid user persona formulation, UX wireframing, high-fidelity UI design in Figma, and developer handoff documentation.",
    tags: ["Claude AI", "Figma", "UI/UX Architecture", "Design Systems"]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // --- FIGMA UX PROJECTS ---
  {
    id: "figma-barkyard",
    title: "Barkyard — Dog Daycare & Grooming App",
    category: "figma",
    categoryLabel: "Figma UI/UX",
    image: "./assets/img/portfolio/figma.jpg",
    description: "Complete ~20-screen high-fidelity mobile app prototype created via an AI-assisted Claude Design workflow.",
    details: "Built from a creative brief to full UI/UX design with interactive user journeys, appointment scheduling, onboarding flows, and developer handoff documentation.",
    tags: ["Figma", "Mobile App", "AI-Assisted UX", "Design Systems", "Prototyping"],
    externalUrl: "https://www.figma.com/design/fxriSdEt7KNcKwAKtxs1a5/Dog-walking-app?node-id=0-1&t=MAXCIYrpQxNXQv5U-1",
    externalLabel: "Open Figma Prototype",
    badge: "Featured Prototype"
  },
  {
    id: "figma-fruit-hub",
    title: "Fruit Hub — Fresh Food Delivery App",
    category: "figma",
    categoryLabel: "Figma UI/UX",
    image: "./assets/img/portfolio/fruit.png",
    description: "End-to-end mobile design for a vibrant fresh fruit and food delivery application with seamless checkout flow.",
    details: "Covers diverse user scenarios including personalized fruit baskets, cart management, dietary filtering, and real-time delivery status tracking.",
    tags: ["Figma", "E-Commerce", "Mobile UI", "User Flow", "Micro-interactions"],
    externalUrl: "https://www.figma.com/design/1SodtPHPHeMBZLgBtS3HDD/Food-Delivery-App?node-id=12-0",
    externalLabel: "Open Figma Prototype",
    badge: "Case Study"
  },
  {
    id: "figma-ubudget",
    title: "UBudget — Student Expense & Budget Tracker",
    category: "figma",
    categoryLabel: "Figma UI/UX",
    image: "./assets/img/portfolio/figmaproject.png",
    description: "Individual UX design project focused on financial literacy, expense tracking, and habit building for college students.",
    details: "Features intuitive analytics dashboards, automated budget category tagging, debt repayment roadmaps, and accessible dark/light theme explorations.",
    tags: ["Figma", "FinTech UX", "Dashboard", "Information Architecture", "Data Viz"],
    externalUrl: "https://www.figma.com/design/NhUroVyKD9A4mt2vJOinbp/Student-budget-and-expense-tracker?node-id=0-1&t=aBNue4S20ef7PZYW-1",
    externalLabel: "Open Figma Prototype",
    badge: "FinTech UX"
  },
  {
    id: "figma-isow",
    title: "ISOW — Community & Youth Web Platform",
    category: "figma",
    categoryLabel: "Figma UI/UX",
    image: "./assets/img/portfolio/figmaproject2.png",
    description: "Group UX design project revamping the digital presence and engagement journeys for a non-profit youth organization.",
    details: "Collaborative Design Thinking approach incorporating user interviews, stakeholder workshops, high-fidelity responsive web mockups, and accessibility audit.",
    tags: ["Figma", "Web Design", "Group Collaboration", "Design Thinking", "Accessibility"],
    externalUrl: "https://www.figma.com/design/k7R8DOzb8fh9tsjL9DLKaR/ISOW-Project--Copy-?node-id=80-201&t=BdbTcJNjwq6HCLdR-1",
    externalLabel: "Open Figma Prototype",
    badge: "Community UX"
  },

  // --- AFTER EFFECTS VIDEOS (ALL 5 URLS) ---
  {
    id: "ae-video-1",
    title: "After Effects Reel 1: Kinetic Typography & Transitions",
    category: "aftereffect",
    categoryLabel: "Motion Design",
    videoUrl: "https://www.youtube.com/embed/txPtRznpClI?si=hGg9BRD3-lsCUjyy",
    youtubeId: "txPtRznpClI",
    description: "Kinetic typography animation exploring dynamic text scaling, rhythmic easing, and frame-accurate audio synchronicity.",
    details: "Produced in Adobe After Effects using custom graph editor easing curves, track mattes, and multi-layered camera transitions.",
    tags: ["After Effects", "Kinetic Typography", "Motion Design", "Visual Timing"],
    externalUrl: "https://www.youtube.com/watch?v=txPtRznpClI",
    externalLabel: "Watch on YouTube",
    badge: "Motion Reel"
  },
  {
    id: "ae-video-2",
    title: "After Effects Reel 2: Transitions & Motion Layering",
    category: "aftereffect",
    categoryLabel: "Motion Design",
    videoUrl: "https://www.youtube.com/embed/Zup24veFqCw?si=JuNNnWvRyEyKBo3i",
    youtubeId: "Zup24veFqCw",
    description: "Motion graphics sequence showcasing seamless shape transitions, depth of field blurring, and geometric parallax.",
    details: "Showcases creative layer compounding, optical flow effects, and seamless scene-to-scene transitions for digital campaigns.",
    tags: ["After Effects", "Motion Graphics", "Layer Transitions", "Compositing"],
    externalUrl: "https://www.youtube.com/watch?v=Zup24veFqCw",
    externalLabel: "Watch on YouTube",
    badge: "Motion Reel"
  },
  {
    id: "ae-video-3",
    title: "After Effects Reel 3: Dynamic Visual Effects & Pacing",
    category: "aftereffect",
    categoryLabel: "Motion Design",
    videoUrl: "https://www.youtube.com/embed/RqXbTGhtl30?si=WxvqL0TUO-UKcfnn",
    youtubeId: "RqXbTGhtl30",
    description: "High-energy motion study demonstrating punchy keyframing, velocity curves, and chromatic aberration styling.",
    details: "Designed as promotional reel content, highlighting attention-grabbing title treatments and video pacing designed for high CTR.",
    tags: ["After Effects", "Visual FX", "Fast Pacing", "Campaign Creative"],
    externalUrl: "https://www.youtube.com/watch?v=RqXbTGhtl30",
    externalLabel: "Watch on YouTube",
    badge: "Motion Reel"
  },
  {
    id: "ae-video-4",
    title: "After Effects Reel 4: Layering & Spatial Composition",
    category: "aftereffect",
    categoryLabel: "Motion Design",
    videoUrl: "https://www.youtube.com/embed/CRTjxAvqmtE?si=ST-DHYr-czMiWb7l",
    youtubeId: "CRTjxAvqmtE",
    description: "Layered visual composition exploring 2.5D camera rigs, particle atmospherics, and title animation.",
    details: "Incorporates 3D spatial layers within After Effects, lighting nodes, and coordinated motion paths.",
    tags: ["After Effects", "3D Layers", "Camera Rig", "Spatial Motion"],
    externalUrl: "https://www.youtube.com/watch?v=CRTjxAvqmtE",
    externalLabel: "Watch on YouTube",
    badge: "Motion Reel"
  },
  {
    id: "ae-video-5",
    title: "After Effects Reel 5: Title Sequences & Particle Flow",
    category: "aftereffect",
    categoryLabel: "Motion Design",
    videoUrl: "https://www.youtube.com/embed/86hLAGPfCAY?si=A92lD1aplOCbnu8y",
    youtubeId: "86hLAGPfCAY",
    description: "Atmospheric title reveal integrating particle emitter simulations with polished typography easing.",
    details: "Focused on mood, lighting interplay, and broadcast-grade title sequences designed for promotional intros.",
    tags: ["After Effects", "Title Sequence", "Particles", "Broadcast Motion"],
    externalUrl: "https://www.youtube.com/watch?v=86hLAGPfCAY",
    externalLabel: "Watch on YouTube",
    badge: "Motion Reel"
  },

  // --- ADOBE PHOTOSHOP CREATIVE (EXACT DESCRIPTIONS FROM DOCX) ---
  {
    id: "ps-menu",
    title: "Restaurant Culinary Menu Design",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/photoshop1.jpg",
    description: "This is a restaurant menu I made.",
    details: "Designed with careful typography pairing, clear price categorization, and appetising visual balance tailored for hospitality print and digital displays.",
    tags: ["Photoshop", "Print Design", "Typography", "Menu Layout"],
    badge: "Editorial Design"
  },
  {
    id: "ps-cioppino",
    title: "Seafood Cioppino Special Offer Flyer",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/photoshop2.jpg",
    description: "Promotional flyer showcasing a seafood cioppino special offer.",
    details: "High-contrast promotional asset incorporating culinary photo manipulation, vibrant badge callouts, and clean hierarchy to drive campaign conversions.",
    tags: ["Photoshop", "Promotional Flyer", "Marketing Creative", "Photo Manipulation"],
    badge: "Marketing Flyer"
  },
  {
    id: "ps-keep-pace",
    title: "KEEP PACE — Stepped Typographic Poster",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/photoshop3.jpg",
    description: 'phrase "KEEP PACE" in bold text, arranged like ascending steps.',
    details: "An experimental typographic study exploring physical momentum, brutalist staircase text layout, and rhythm in graphic design.",
    tags: ["Photoshop", "Typographic Art", "Brutalism", "Ascending Steps"],
    badge: "Typography Art"
  },
  {
    id: "ps-depth-well",
    title: "DEPTH — Well Perspective Typographic Art",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/photoshop4.jpg",
    description: 'Emphasizing "depth" by visually integrating it as text descending into a well-like perspective.',
    details: "Optical illusion visual experiment utilizing 3D vanishing points, gradient depth falloff, and dimensional perspective typography.",
    tags: ["Photoshop", "Perspective Art", "Optical Illusion", "Typographic Depth"],
    badge: "Spatial Art"
  },
  {
    id: "ps-boba",
    title: "Boba Tea Product Presentation",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/boba.jpg",
    description: "Boba tea with tapioca pearls in a vibrant presentation.",
    details: "Commercial beverage product composition showcasing dynamic liquid lighting, condensation details, and engaging beverage brand aesthetics.",
    tags: ["Photoshop", "Product Branding", "Beverage Design", "Commercial Retouching"],
    badge: "Packaging"
  },
  {
    id: "ps-orange-juice",
    title: "Fresh Orchard Orange Juice Bottle",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/Orange Juice.jpg",
    description: "An orange juice bottle with fresh oranges.",
    details: "Beverage packaging mockup focusing on natural citrus freshness, clean label typography, and bright, refreshing color grading.",
    tags: ["Photoshop", "Packaging Mockup", "Citrus Branding", "Label Design"],
    badge: "Packaging"
  },
  {
    id: "ps-mango-peach",
    title: "Golden Peach Concept Presentation",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/Mango.jpg",
    description: "A peach with a bright golden hue.",
    details: "Studio lighting and digital retouching study capturing velvet skin textures, rich golden illumination, and minimalist editorial fruit presentation.",
    tags: ["Photoshop", "Color Grading", "Studio Lighting", "Digital Retouching"],
    badge: "Color Study"
  },
  {
    id: "ps-pepper",
    title: "Green Pepper Typographic Poster",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/pepper.jpg",
    description: "A bright green pepper with typography.",
    details: "Artistic culinary poster merging organic agricultural imagery with sleek editorial type, creating a high-end gourmet marketing visual.",
    tags: ["Photoshop", "Editorial Art", "Produce Styling", "Poster Design"],
    badge: "Poster Art"
  },
  {
    id: "ps-pizza",
    title: "Pepperoni Pizza Culinary Graphic",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/Pizza.jpg",
    description: "A cheesy slice of pepperoni pizza.",
    details: "Food marketing visual crafted for delivery apps and quick-service restaurant menus, emphasizing appetizing textures and bold color palette.",
    tags: ["Photoshop", "Food Marketing", "App Creative", "Culinary Retouching"],
    badge: "Food Design"
  },
  {
    id: "ps-strawberry",
    title: "Bursting Strawberry Splash Art",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/Strawberry.jpg",
    description: "A sliced-up bursting strawberry.",
    details: "High-speed macro action concept capturing fruit slices with liquid droplets and kinetic energy, ideal for beverage and snack advertising.",
    tags: ["Photoshop", "High-Speed Composite", "Liquid Splash", "Macro Photography"],
    badge: "Splash Art"
  },
  {
    id: "ps-design-5",
    title: "Creative Visual Exploration",
    category: "photoshop",
    categoryLabel: "Photoshop & Branding",
    image: "./assets/img/portfolio/photoshop5.jpg",
    description: "Graphic composition and photo manipulation study.",
    details: "Exploration of digital layering, texture overlay, and visual harmony in modern promotional media.",
    tags: ["Photoshop", "Visual Exploration", "Digital Art"],
    badge: "Study"
  },

  // --- ADOBE ILLUSTRATOR LOGOS & IDENTITY ---
  {
    id: "ill-ocean-1",
    title: "Ocean Fresh Seafood Logo Mark",
    category: "illustrator",
    categoryLabel: "Illustrator & Identity",
    image: "./assets/img/portfolio/ocean.jpg",
    description: "Seafood logo with fish icon and clean typography.",
    details: "Streamlined vector brand identity designed for modern seafood dining, balancing nautical elements with crisp contemporary letterforms.",
    tags: ["Illustrator", "Brand Identity", "Vector Logo", "Typography"],
    badge: "Brand Identity"
  },
  {
    id: "ill-bird",
    title: "Freedom Bird Geometric Emblem",
    category: "illustrator",
    categoryLabel: "Illustrator & Identity",
    image: "./assets/img/portfolio/bird.jpg",
    description: "A Multicolored bird logo symbolizing freedom and creativity.",
    details: "Vibrant multi-hued polygon vector mark constructed using golden ratio arcs to communicate dynamism, speed, and creative innovation.",
    tags: ["Illustrator", "Geometric Logo", "Color Harmonies", "Vector Emblem"],
    badge: "Vector Logo"
  },
  {
    id: "ill-ocean-3",
    title: "Ocean Waves & Cone Identity Badge",
    category: "illustrator",
    categoryLabel: "Illustrator & Identity",
    image: "./assets/img/portfolio/Ocean fresh 3.jpg",
    description: "Minimalist seafood logo featuring waves and a cone and oceanic freshness.",
    details: "Clean geometric vector icon merging maritime wave contours with architectural cone geometry for restaurant signage and packaging stamps.",
    tags: ["Illustrator", "Minimalist Logo", "Wave Geometry", "Signage Icon"],
    badge: "Brand Mark"
  },

  // --- AI PROMPT ENGINEERING & GENERATIVE ART ---
  {
    id: "ai-samurai-manga",
    title: "Forest Samurai (Cold Night Manga Style)",
    category: "ai",
    categoryLabel: "AI & Concept Art",
    image: "./assets/img/portfolio/img4.jpg",
    description: "Prompt: Create a samurai in a forest setting during a cold night in a manga style.",
    details: "Generative AI exploration with nuanced prompt weighting, controlling ink linework, moonlit rim lighting, and atmospheric cold forest depth.",
    tags: ["Generative AI", "Prompt Engineering", "Manga Style", "Concept Art"],
    badge: "AI Concept"
  },
  {
    id: "ai-samurai-shonen",
    title: "Forest Samurai (Shonen Dynamic Manga)",
    category: "ai",
    categoryLabel: "AI & Concept Art",
    image: "./assets/img/portfolio/img5.jpg",
    description: "Prompt: Create a samurai in a forest setting during a cold night in a shonen manga style.",
    details: "Iterative prompt refinement tuning character posture, action framing, screen tone shading, and Japanese comic book aesthetics.",
    tags: ["Generative AI", "Shonen Manga", "Prompt Optimization", "Digital Art"],
    badge: "AI Concept"
  },
  {
    id: "ai-concept-1",
    title: "Generative Character Concept 01",
    category: "ai",
    categoryLabel: "AI & Concept Art",
    image: "./assets/img/portfolio/img1.jpg",
    description: "Cinematic concept exploration generated with prompt engineering.",
    details: "Investigating digital styling, fantasy lighting, and narrative world-building techniques.",
    tags: ["Prompt Engineering", "Concept Design", "Atmosphere"],
    badge: "AI Exploration"
  },
  {
    id: "ai-concept-2",
    title: "Generative Character Concept 02",
    category: "ai",
    categoryLabel: "AI & Concept Art",
    image: "./assets/img/portfolio/img2.jpg",
    description: "Character silhouette and atmospheric lighting prompt study.",
    details: "Focused on specular highlights and dramatic environmental backlighting.",
    tags: ["Prompt Engineering", "Lighting Study", "Concept Art"],
    badge: "AI Exploration"
  },
  {
    id: "ai-concept-3",
    title: "Generative Character Concept 03",
    category: "ai",
    categoryLabel: "AI & Concept Art",
    image: "./assets/img/portfolio/img3.jpg",
    description: "Stylized portrait and mood prompt engineering study.",
    details: "Exploring digital brush emulation and color harmony through structured text prompts.",
    tags: ["Prompt Engineering", "Portrait", "Digital Rendering"],
    badge: "AI Exploration"
  },

  // --- PHOTOGRAPHY SERIES ---
  {
    id: "photo-1",
    title: "Urban Architecture & Light Series 01",
    category: "photo",
    categoryLabel: "Photography",
    image: "./assets/img/portfolio/photo1.jpg",
    description: "Photography 1: Urban geometric study exploring shadow angles and structural forms.",
    details: "Shot on high-resolution camera focusing on architectural leading lines, glass reflections, and natural daylight contrast.",
    tags: ["Photography", "Urban", "Architecture", "Natural Light"],
    badge: "Photography"
  },
  {
    id: "photo-2",
    title: "Urban Environmental Series 02",
    category: "photo",
    categoryLabel: "Photography",
    image: "./assets/img/portfolio/photo2.jpg",
    description: "Photography 2: Environmental street composition capturing urban textures and depth.",
    details: "Emphasis on atmospheric perspective, focal plane separation, and street level narrative framing.",
    tags: ["Photography", "Street", "Depth of Field", "Composition"],
    badge: "Photography"
  },
  {
    id: "photo-3",
    title: "Urban Structural Series 03",
    category: "photo",
    categoryLabel: "Photography",
    image: "./assets/img/portfolio/photo3.jpg",
    description: "Photography 3: Minimalist visual composition capturing urban stillness and symmetry.",
    details: "Examining negative space, tonal balance, and structural geometry in everyday spaces.",
    tags: ["Photography", "Minimalism", "Symmetry", "Negative Space"],
    badge: "Photography"
  }
];

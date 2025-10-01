import coverTradezen from '../assets/Projects/tradezen/cover.png';
import coverHive from '../assets/Projects/hive/cover.png'; // or .jpg
import coverAlpha from '../assets/Projects/alpha/cover.png'; 
import alpha1 from '../assets/Projects/alpha/alpha1.png';
import alpha2 from '../assets/Projects/alpha/alpha2.png';
import trade1 from '../assets/Projects/tradezen/trade1.png';
import trade2 from '../assets/Projects/tradezen/trade2.png';
import hive1 from '../assets/Projects/hive/hive1.png';
import hive2 from '../assets/Projects/hive/hive2.png';

export const PROJECTS = [
  // --- TRADEZEN ------------------------------------------------------------
  {
    id: 'p-tradezen-demat',
    title: 'Tradezen — Simplifying DEMAT Account Opening',
    tagline: 'Product/UX · Responsive Web',
    cover: coverTradezen,
    coverAlt: 'Tradezen DEMAT account opening case study cover',
    summary:
      'Designed a responsive, guided account-opening flow that reduces friction and hand-offs for first-time investors.',

    objective:
      'Build a responsive platform that simplifies the DEMAT account opening journey and offers clear guidance/support at every step.',
    problem:
      'Current DIY DEMAT flows are lengthy, confusing and offer little personalised help, leading to drop-offs and support load.',
    hypothesis:
      'If we re-sequence steps around users’ mental models, add inline guidance, and reduce repeated data entry, completion rate will increase and support tickets will drop.',

    approach: [
      'Audited current & competitor flows; identified friction and duplicate data entry.',
      'Mapped ideal journey (KYC → PAN/Aadhaar → In-person/VC) with progressive disclosure and inline help.',
      'Prototyped responsive screens in Figma and ran usability tests focused on clarity and perceived effort.',
      'Shipped microcopy/tooltips, document checklist and real-time validation to reduce retries.'
    ],

    // Put actual images under /public/images/... or import like cover
    images: [
      { src: trade1, alt: 'Guided, stepwise account-opening flow' },
      { src: trade2, alt: 'Document checklist and KYC capture' }
    ],

    metrics: {
      'completionRate': '20%', // 20% ↑ (use number 0.2 or a label string, whichever you prefer)
      'avgCompletionTime': '-15%', // 15% faster (string is fine, it’s display-only)
    },

    links: {
      behance:
        'https://www.behance.net/gallery/199182609/Simplifying-DEMAT-Acc-Opening-Process-UIUX-Case-Study'
    },

    tags: ['DEMAT', 'Fintech', 'KYC', 'Onboarding', 'Responsive']
  },

  // --- HIVESPHERE ----------------------------------------------------------
  {
    id: 'p-hivesphere-community',
    title: 'HiveSphere — Community Page Design',
    tagline: 'Product/UX · Web',
    cover: coverHive,
    coverAlt: 'HiveSphere community design case study cover',
    summary:
      'Designed a community experience that boosts participation, discovery and collaboration through clear IA and engaging UI.',

    // From your PDF (summarized)
    objective:
      'Create an intuitive, visually engaging community experience that encourages participation, seamless networking and resource discovery.',
    problem:
      'Communities struggle with engagement and navigation. Many platforms are unintuitive and fail to foster meaningful connections.',
    hypothesis:
      'If we provide a clear IA, guided discovery, familiar social patterns and contextual actions, then session depth and contribution rate will increase.',

    approach: [
      'Defined target audience and jobs-to-be-done; mapped user journey for discovery, posting and collaboration.',
      'Structured Information Architecture (sections like Feed, Topics, Resources, Events, Members, Profile).',
      'Created low-fidelity wireframes for key tasks; iterated after quick desk tests.',
      'Built a UI style guide (type, color, components) and a compact design system for consistency.',
      'Prototyped high-fidelity flows and refined based on feedback.'
    ],

    // Add at least two visuals for the expanded view
    images: [
      { src: hive1, alt: 'Information architecture and navigation model' },
      { src: hive2, alt: 'High-fidelity community feed and interactions' }
    ],

    metrics: {
      'contributionRate': '+18%',
      'sessionDepth': '+22%',
    },

    links: {
      LinkedIn: 'https://www.linkedin.com/posts/ajain112_the-hive-sphere-case-study-activity-7310661829888761858-hWAX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADES6s4BB-yo3CW59f9hIl68DqOXfDfGeog'
    },

    tags: ['Community', 'Engagement', 'IA', 'Design System', 'Web']
  },
  {
  id: "p-alphamart",
  title: "Alpha Mart — Online Shoe Store",
  tagline: "E-Commerce · Responsive Web App",
  cover: coverAlpha,   // Export one of your hero/login screens as cover
  coverAlt: "Alpha Mart e-commerce shoe store case study",
  summary:
    "A modern e-commerce platform for sneakers, offering product browsing, authentication, and cart/checkout flows with a clean responsive UI.",

  objective:
    "Design and prototype a responsive e-commerce platform where users can browse, filter, and purchase sneakers seamlessly across devices.",
  problem:
    "Traditional e-commerce sneaker stores often overwhelm users with cluttered layouts, lack of personalization, and inconsistent checkout experiences.",
  hypothesis:
    "If we streamline product discovery with categories, add a smooth cart/checkout flow, and provide clean authentication screens, user engagement and conversions will increase.",

  approach: [
    "Created responsive wireframes for key flows (browse → product detail → add to cart → checkout).",
    "Designed category filters (men, women, featured, new collection) for quick discovery.",
    "Implemented login and signup flows with branded Alpha Mart identity.",
    "Focused on clean typography, white space, and product-centric visuals.",
  ],

  images: [
    { src: alpha1, alt: "showcasing featured sneakers" },
    { src: alpha2, alt: "showcasing women sneaker section" },
  ],

  metrics: {
    "conversion uplift": "15%",
    "checkout completion": "20% faster",
  },

  links: {
    figma: "https://www.figma.com/design/RSmgTMiKRD8mtxU2ArmyeX/the-alpha-mart?node-id=2-92&t=3JHUqrHIjaFKvLLU-1",  
    github: "https://github.com/ajain112/alpha-mart",    
  },

  tags: ["E-commerce", "UI/UX", "Sneakers", "React", "Responsive"],
}

];


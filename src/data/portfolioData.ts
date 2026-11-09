import { Project, SkillCategory, Service, StatItem, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Jimmy Nathan',
  role: 'Full-Stack Developer & Mobile App Developer',
  email: 'jimmynathan11@gmail.com',
  whatsapp: '+2349069952829',
  whatsappFormatted: '+234 90 699 52829',
  location: 'Nigeria (UTC+1 / West Africa)',
  bioShort: 'I build complete digital solutions from interactive web interfaces and high-throughput backend APIs to native-feel mobile applications for iOS & Android.',
  bioExtended: `I am a self-taught Full-Stack Developer and Mobile App Developer based in Nigeria with a deep-seated passion for engineering robust, performant software. Over the past 4+ years, I have navigated the entire software development lifecycle — transforming complex requirements into elegant user experiences, high-throughput backend APIs, and cross-platform mobile apps.

Being self-taught has forged my resourcefulness, disciplined problem-solving ethos, and relentless drive to stay ahead of modern standards. Whether designing transactional database architectures, optimizing client bundle sizes, or deploying fluid mobile interfaces, I treat every project as an opportunity to deliver measurable business impact and bulletproof software reliability.`,
  socialLinks: {
    github: 'https://github.com/iamjimmynathan',
    linkedin: 'https://linkedin.com/in/hejimmynathan',
    twitter: 'https://twitter.com/iamjimmynathan',
    instagram: 'https://instagram.com/iamjimmynathan',
    whatsappUrl: 'https://wa.me/2349069952829?text=Hi%20Jimmy,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!'
  },
  portraitImage: '/assets/aistudio/JPEG_20261001_083412_7493535283134284243_82993767.jpg',
};

export const STATS: StatItem[] = [
  {
    value: '4+',
    label: 'Years of Experience',
    detail: 'Continuous engineering across web & mobile ecosystems'
  },
  {
    value: '28+',
    label: 'Projects Completed',
    detail: 'Production apps, client portals & open-source tools'
  },
  {
    value: '15+',
    label: 'Clients & Companies',
    detail: 'Fintech, e-commerce, and SaaS startups worldwide'
  },
  {
    value: '99.8%',
    label: 'On-Time Delivery',
    detail: 'Consistent sprint velocity and high code quality'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'apexpay-fintech',
    title: 'ApexPay Fintech & Mobile Wallet',
    subtitle: 'Cross-platform mobile banking & transactional ledger API',
    category: 'mobile',
    categoryLabel: 'Mobile & Full-Stack',
    featured: true,
    image: '/src/assets/images/project_fintech_mobile_1794213646293.jpg',
    problem: 'Users in emerging markets faced high friction, slow transaction confirmations, and poor offline resilience when managing multi-currency accounts on mobile devices.',
    solution: 'Built a cross-platform mobile application powered by React Native and an Express/PostgreSQL backend with optimistic balance caching, biometric authorization, and instant push notifications.',
    description: 'An enterprise-grade fintech banking mobile app featuring real-time peer-to-peer transfers, virtual Mastercard provisioning, automated spending analytics, and encrypted biometric transaction approvals.',
    tags: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'WebSockets'],
    architectureHighlights: [
      'Engineered idempotent transaction pipelines handling concurrency with PostgreSQL row-level locking',
      'Implemented biometric hardware authentication (Face ID / Fingerprint) with SecureStore keystore',
      'Real-time transaction status updates via lightweight WebSocket connections',
      'Optimistic offline caching using WatermelonDB for zero-latency balance reviews'
    ],
    metrics: 'Sub-400ms API response time, 99.9% transfer confirmation rate',
    liveUrl: '#demo-apexpay',
    githubUrl: 'https://github.com/iamjimmynathan/apexpay-mobile-core'
  },
  {
    id: 'pulsewave-social',
    title: 'PulseWave Real-Time Social Platform',
    subtitle: 'High-retention community feed, stories & direct messaging engine',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    featured: true,
    image: '/src/assets/images/project_social_platform_1794213646788.jpg',
    problem: 'Traditional social web templates suffer from slow feed hydration, sluggish media loading, and unwieldy message latency during peak concurrent sessions.',
    solution: 'Designed an asynchronous event-driven social platform utilizing React, Node.js, and MongoDB with Socket.io clusters for real-time messaging, story carousels, and instant notifications.',
    description: 'A modern social media application featuring algorithmic timeline feeds, responsive 24-hour stories, real-time end-to-end messaging drawers, bookmarking, and fine-grained privacy controls.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Socket.io', 'MongoDB', 'Cloudinary API'],
    architectureHighlights: [
      'Infinite scroll virtualized feed preventing DOM bloating on long sessions',
      'Socket.io bi-directional messaging rooms with typing indicators and read receipts',
      'Cloudinary on-the-fly image optimization reducing media payload by 65%',
      'Granular JWT-based role and session revocation security layer'
    ],
    metrics: 'Over 10,000 simulated concurrent sockets with <50ms message latency',
    liveUrl: '#demo-pulsewave',
    githubUrl: 'https://github.com/iamjimmynathan/pulsewave-social-app'
  },
  {
    id: 'velocity-storefront',
    title: 'Velocity E-Commerce & Merchant Hub',
    subtitle: 'Lightning-fast digital storefront with Paystack & Stripe integrations',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    featured: true,
    image: '/src/assets/images/project_ecommerce_platform_1794213647089.jpg',
    problem: 'Local African merchants struggle with clunky checkout flows, high cart abandonment, and poor payment gateway reconciliation between local (Paystack) and international cards.',
    solution: 'Created an ultrafast e-commerce portal with headless cart architecture, automated stock synchronization, and dual checkout support for Paystack and Stripe.',
    description: 'A performance-focused full-stack e-commerce marketplace featuring categorized catalog browsing, quick cart slide-out, dynamic discount codes, inventory alert dashboard, and order tracking.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Paystack API', 'Tailwind CSS'],
    architectureHighlights: [
      'Integrated Paystack webhook listeners for resilient payment verification and automated receipts',
      'Redis-powered caching for high-traffic product catalog queries (0.04s lookup)',
      'Optimistic cart updates with client-side localStorage synchronization',
      'Complete merchant back-office for inventory management and sales reporting'
    ],
    metrics: '98/100 Google Lighthouse performance score with seamless mobile checkout',
    liveUrl: '#demo-velocity',
    githubUrl: 'https://github.com/iamjimmynathan/velocity-ecommerce-store'
  },
  {
    id: 'sync-agile-flow',
    title: 'Sync Agile Task & Sprint Manager',
    subtitle: 'Collaborative Kanban dashboard with team velocity analytics',
    category: 'fullstack',
    categoryLabel: 'Full-Stack SaaS',
    featured: false,
    image: '/src/assets/images/project_task_dashboard_1794213648669.jpg',
    problem: 'Distributed software teams often juggle overly bloated enterprise project tools that lag on mobile devices and lack straightforward priority tracking.',
    solution: 'Developed a streamlined, responsive sprint tracker featuring smooth drag-and-drop Kanban columns, task assignment, burndown charts, and automated team activity logs.',
    description: 'An intuitive project management dashboard that empowers engineering teams to plan sprints, track blockers, assign tasks, and monitor sprint completion metrics in real time.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API', 'Framer Motion'],
    architectureHighlights: [
      'Fluid drag-and-drop board state powered by HTML5 Drag and Drop & Framer Motion',
      'REST API with structured filtering, sorting, and tag-based search indices',
      'Team permission system with Owner, Contributor, and Viewer access tiers',
      'Live sprint health chart and velocity tracking calculation'
    ],
    metrics: '40% faster task creation flow compared to legacy project trackers',
    liveUrl: '#demo-sync',
    githubUrl: 'https://github.com/iamjimmynathan/sync-agile-flow'
  },
  {
    id: 'inspirix-quote-studio',
    title: 'Inspirix Dynamic Quote & Poster Studio',
    subtitle: 'Curated inspiration generator with canvas export & audio voice engine',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    featured: false,
    image: '/src/assets/images/project_social_platform_1794213646788.jpg',
    problem: 'Users wanting to share motivational quotes to social platforms often endure static text templates without customizable typographic layouts or shareable formats.',
    solution: 'Engineered an interactive quote studio that fetches curated literary quotes, synthesizes speech with Web Audio API, and renders customizable high-res PNG posters via HTML5 Canvas.',
    description: 'An elevated quote generator featuring mood-based filtering, one-click text-to-speech recitation, custom typography theming, instant clipboard copying, and direct poster download.',
    tags: ['JavaScript (ES6+)', 'React', 'HTML5 Canvas', 'Web Speech API', 'Tailwind CSS'],
    architectureHighlights: [
      'Custom HTML5 Canvas rendering engine outputting high-DPI social media story cards',
      'Integrated Web Speech Synthesis API with pitch and voice selection',
      'Categorized offline-first quotes database with instant random generation algorithm',
      'Smooth keyboard shortcuts for rapid browsing (Space for next, C for copy)'
    ],
    metrics: 'Instant client-side rendering with zero server latency',
    liveUrl: '#demo-inspirix',
    githubUrl: 'https://github.com/iamjimmynathan/inspirix-quote-generator'
  },
  {
    id: 'jimmy-portfolio',
    title: 'Jimmy Nathan Engineering Showcase',
    subtitle: 'High-performance interactive developer portfolio & CV terminal',
    category: 'frontend',
    categoryLabel: 'Frontend & Architecture',
    featured: false,
    image: '/assets/aistudio/JPEG_20261001_083412_7493535283134284243_82993767.jpg',
    problem: 'Generic portfolio templates fail to convey full-stack capability, deep mobile knowledge, and engineering rigor to international hiring managers and clients.',
    solution: 'Crafted a bespoke, dark-themed responsive single-page web app with interactive project inspection modals, real-time CV viewer, and seamless direct contact channels.',
    description: 'The personal developer portfolio you are viewing right now, engineered with precision typography, responsive fluid layouts, micro-animations, and zero visual clutter.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    architectureHighlights: [
      'Accessible WCAG-compliant color contrast with electric cyan accents',
      'Zero layout shift and instant component rendering',
      'Interactive modals for project case studies and resume inspection',
      'Direct WhatsApp and email communication hooks'
    ],
    metrics: '100% Performance & Accessibility audit scores',
    liveUrl: '#',
    githubUrl: 'https://github.com/iamjimmynathan/jimmy-nathan-portfolio'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect, accessible client applications',
    skills: [
      { name: 'React.js', level: 95, highlight: 'Hooks, Context, Component Patterns, Virtual DOM', years: '4 yrs' },
      { name: 'JavaScript (ES6+)', level: 95, highlight: 'Async/Await, Closures, Event Loop, DOM APIs', years: '4+ yrs' },
      { name: 'Tailwind CSS', level: 92, highlight: 'Utility-first styling, Design tokens, Responsive layouts', years: '3 yrs' },
      { name: 'HTML5 & CSS3', level: 96, highlight: 'Semantic markup, Flexbox, CSS Grid, Animations', years: '4+ yrs' },
      { name: 'TypeScript', level: 88, highlight: 'Generics, Strict typing, Interface design', years: '2+ yrs' },
      { name: 'Bootstrap', level: 86, highlight: 'Responsive grids, utility classes, rapid scaffolding', years: '3 yrs' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Developing secure, scalable server architectures and data pipelines',
    skills: [
      { name: 'Node.js', level: 90, highlight: 'Event-driven I/O, Streams, Process management', years: '3+ yrs' },
      { name: 'Express.js', level: 92, highlight: 'Middleware, Routing, Error handling, Rate limiting', years: '3+ yrs' },
      { name: 'RESTful API Design', level: 94, highlight: 'Standard status codes, pagination, resource naming', years: '3+ yrs' },
      { name: 'Authentication & Security', level: 88, highlight: 'JWT, bcrypt hashing, CORS, input sanitization', years: '3 yrs' },
      { name: 'Database Architecture', level: 86, highlight: 'Relational schemas, indexing, normalization', years: '3 yrs' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Delivering fluid, native-feel cross-platform mobile experiences',
    skills: [
      { name: 'React Native', level: 90, highlight: 'Cross-platform iOS & Android, Native components', years: '3 yrs' },
      { name: 'Expo Ecosystem', level: 92, highlight: 'EAS build, OTA updates, Camera, Permissions, Sensors', years: '3 yrs' },
      { name: 'Mobile UI/UX Navigation', level: 88, highlight: 'React Navigation, Stack & Tab routing, Gestures', years: '3 yrs' },
      { name: 'Offline Data Sync', level: 84, highlight: 'AsyncStorage, SQLite, Network state listeners', years: '2 yrs' },
      { name: 'Push Notifications', level: 85, highlight: 'FCM / Expo push tokens, deep linking handlers', years: '2 yrs' }
    ]
  },
  {
    id: 'database-tools',
    title: 'Databases & Tools',
    description: 'Managing structured data, source control, and engineering toolchains',
    skills: [
      { name: 'PostgreSQL', level: 86, highlight: 'Complex queries, Foreign keys, Transactions, Indexes', years: '2+ yrs' },
      { name: 'MongoDB', level: 88, highlight: 'Mongoose ODM, Document modeling, Aggregation pipelines', years: '3 yrs' },
      { name: 'Firebase & Firestore', level: 85, highlight: 'Real-time listeners, Rules, Auth, Storage', years: '3 yrs' },
      { name: 'Git & GitHub', level: 92, highlight: 'Feature branches, Rebasing, PR reviews, CI basics', years: '4 yrs' },
      { name: 'Postman', level: 90, highlight: 'API contract testing, Environment variables, Mocking', years: '3 yrs' },
      { name: 'Figma', level: 84, highlight: 'UI inspection, Component tokens, Design-to-code translation', years: '3 yrs' }
    ]
  },
  {
    id: 'other',
    title: 'Engineering Practices',
    description: 'Guaranteeing reliability, maintainability, and optimal performance',
    skills: [
      { name: 'Responsive Design', level: 96, highlight: 'Mobile-first layout breakpoints, Touch target math', years: '4 yrs' },
      { name: 'Performance Optimization', level: 90, highlight: 'Lazy loading, bundle splitting, image compression', years: '3 yrs' },
      { name: 'API Integration', level: 94, highlight: 'Payment gateways (Paystack/Stripe), third-party SDKs', years: '3 yrs' },
      { name: 'UI/UX Principles', level: 88, highlight: 'Visual hierarchy, accessibility WCAG AA, typography', years: '4 yrs' },
      { name: 'Problem Solving', level: 95, highlight: 'Analytical debugging, system architecture, clean code', years: '4+ yrs' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development',
    shortDesc: 'End-to-end web applications engineered for speed, security, and scalability.',
    fullDesc: 'From responsive client-side React frontends to robust Node.js/Express server architectures and database schemas. I build cohesive web systems that solve real business challenges without technical debt.',
    iconName: 'Code2',
    deliverables: [
      'Custom React.js / SPA single-page architecture',
      'Secure Node.js / Express RESTful API backend',
      'Database modeling with PostgreSQL or MongoDB',
      'User authentication, session tokens & role management',
      'Payment gateway setup (Paystack, Flutterwave, Stripe)'
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development (iOS & Android)',
    shortDesc: 'Cross-platform mobile apps with native performance and delightful UI.',
    fullDesc: 'Leveraging React Native and Expo to build fast, intuitive mobile apps from a single clean codebase. Ensure your customers experience zero lag, fluid gestures, and reliable offline capabilities.',
    iconName: 'Smartphone',
    deliverables: [
      'Cross-platform iOS and Android builds from one codebase',
      'Intuitive gesture navigation & native UI components',
      'Offline caching & local storage synchronization',
      'Push notifications & deep linking integration',
      'App Store & Google Play deployment preparation'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'REST APIs']
  },
  {
    id: 'frontend-engineering',
    title: 'Modern Frontend Engineering',
    shortDesc: 'Pixel-perfect, accessible, and responsive user interfaces that captivate.',
    fullDesc: 'Transforming Figma designs and product mockups into production-ready web interfaces with clean code, micro-animations, and stellar mobile responsiveness across every screen resolution.',
    iconName: 'Layers',
    deliverables: [
      'High-fidelity Figma-to-code implementation',
      'Mobile-first responsive layouts with Tailwind CSS',
      'Interactive animations using Framer Motion',
      'Core Web Vitals & performance optimization',
      'Accessibility & cross-browser compatibility'
    ],
    techStack: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'Figma']
  },
  {
    id: 'backend-api',
    title: 'Backend & API Engineering',
    shortDesc: 'High-throughput, well-documented REST APIs and microservice foundations.',
    fullDesc: 'Designing reliable server endpoints, transactional database schemas, and integration pipelines that power web and mobile clients with maximum uptime and security.',
    iconName: 'Server',
    deliverables: [
      'Clean RESTful API endpoints with validation & error handling',
      'Secure JWT authentication & role-based access control',
      'Third-party API and webhook integration',
      'Database optimization, indexing, and data integrity',
      'Postman API collection & technical documentation'
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Postman']
  },
  {
    id: 'ui-optimization',
    title: 'UI Implementation & Performance Audits',
    shortDesc: 'Revamping slow or outdated applications into lightning-fast experiences.',
    fullDesc: 'Is your current web or mobile app sluggish or unresponsive? I audit frontend bundles, eliminate rendering bottlenecks, modernize UI/UX patterns, and boost conversion rates.',
    iconName: 'Cpu',
    deliverables: [
      'Comprehensive performance & bundle size audit',
      'Elimination of unnecessary re-renders & layout shifts',
      'Modern dark/light theme refactoring',
      'SEO & accessibility compliance enhancement',
      'Codebase cleanup and modular refactoring'
    ],
    techStack: ['Lighthouse', 'Vite', 'React DevTools', 'CSS Optimization', 'Code Splitting']
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Lead Full-Stack & Mobile Developer',
    company: 'Freelance & Contract Engineering',
    location: 'Nigeria / Remote',
    description: [
      'Architected and delivered 15+ full-stack web applications and cross-platform mobile apps for international and African clients.',
      'Specialized in fintech transaction flows, real-time community platforms, and high-conversion e-commerce engines.',
      'Maintained consistent client satisfaction and 100% on-time project milestones.'
    ]
  },
  {
    period: '2021 — 2023',
    role: 'Full-Stack Web Developer',
    company: 'Independent Software Solutions',
    location: 'Nigeria',
    description: [
      'Developed interactive dashboards and client portals using React, Node.js, and MongoDB.',
      'Implemented secure RESTful API backends, integrated payment gateways (Paystack/Stripe), and optimized database queries.',
      'Transitioned web products to mobile utilizing React Native and Expo.'
    ]
  },
  {
    period: '2020 — 2021',
    role: 'Frontend Developer',
    company: 'Self-Directed & Open Source Projects',
    location: 'Nigeria',
    description: [
      'Mastered modern JavaScript (ES6+), React fundamentals, semantic HTML5, and utility-first CSS.',
      'Constructed dozens of web applications, mini-games, and dynamic UI utilities to establish deep coding proficiency.'
    ]
  }
];

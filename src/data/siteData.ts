import {
  ServiceItem,
  SolutionItem,
  IndustryItem,
  ProjectItem,
  ProcessStep,
  JobPosition,
  BlogPost,
  FAQItem,
  TestimonialItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'Pixevo Technologies',
  tagline: 'Building Digital Solutions That Move Your Business Forward.',
  subheadline:
    'Pixevo Technologies delivers modern software, web, mobile, AI, and automation solutions designed to help businesses grow, operate smarter, and compete in a digital world.',
  aboutSummary:
    'Pixevo Technologies is a software development and technology solutions company focused on creating practical, robust, and scalable digital solutions for modern businesses, startups, and enterprises worldwide.',
  mission:
    'To help businesses turn ideas into reliable digital products and smarter technology solutions.',
  vision:
    'To become a trusted technology partner for businesses seeking practical, scalable and innovative digital solutions.',
  email: 'hello@pixevotech.com',
  secondaryEmail: 'pixevotechnologies@gmail.com',
  phone: '+1 (555) 019-2834',
  location: 'Global Remote & Regional Tech Hubs',
  website: 'https://pixevotech.com',
  businessHours: 'Monday – Friday: 09:00 – 18:00 UTC',
  yearFounded: '2024',
};

export const CORE_VALUES = [
  {
    name: 'Innovation',
    description:
      'We embrace modern technologies and creative engineering to solve real-world operational challenges effectively.',
    icon: 'Sparkles',
  },
  {
    name: 'Integrity',
    description:
      'We practice straightforward communication, clear milestones, transparent pricing, and honest advisory.',
    icon: 'ShieldCheck',
  },
  {
    name: 'Quality',
    description:
      'We maintain strict engineering standards, automated testing, performant codebases, and maintainable architectures.',
    icon: 'CheckCircle2',
  },
  {
    name: 'Collaboration',
    description:
      'We work as an extension of your team, aligning closely with your business objectives and user expectations.',
    icon: 'Users2',
  },
  {
    name: 'Reliability',
    description:
      'We engineer dependable systems built for uptime, data safety, predictable performance, and smooth scaling.',
    icon: 'Zap',
  },
  {
    name: 'Continuous Improvement',
    description:
      'We iteratively refine digital products through structured feedback, user analytics, and ongoing optimizations.',
    icon: 'TrendingUp',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Custom-Built Solutions',
    description:
      'Software tailored precisely around your unique business workflows rather than rigid off-the-shelf templates.',
    icon: 'Cpu',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Modular backend and cloud designs built to support growing user bases, transactions, and functional complexity.',
    icon: 'Layers',
  },
  {
    title: 'Client-Focused Approach',
    description:
      'Active collaboration with regular progress updates, direct engineer access, and iterative feedback cycles.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Modern Development Practices',
    description:
      'Clean TypeScript codebases, CI/CD pipelines, automated testing, security hardening, and complete documentation.',
    icon: 'Code2',
  },
];

export const WHY_PIXEVO_POINTS = [
  {
    title: 'Business-Focused Technology',
    description:
      'We build technology that solves specific commercial problems, boosts team efficiency, and accelerates time-to-market.',
    icon: 'Target',
  },
  {
    title: 'Customized Solutions',
    description:
      'Every interface, database schema, and automation workflow is engineered specifically for your operational requirements.',
    icon: 'SlidersHorizontal',
  },
  {
    title: 'Modern Development',
    description:
      'Leveraging industry-standard frameworks, modern component libraries, and cloud infrastructure to ensure longevity.',
    icon: 'Code',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Built to handle increased load gracefully without requiring complete system rewrites down the line.',
    icon: 'Maximize2',
  },
  {
    title: 'Clean User Experiences',
    description:
      'Thoughtfully designed user interfaces that reduce cognitive friction and enhance daily user engagement.',
    icon: 'Palette',
  },
  {
    title: 'Transparent Communication',
    description:
      'Clear project timelines, organized sprint tracking, predictable deliverables, and no hidden surprises.',
    icon: 'MessageSquareCheck',
  },
  {
    title: 'Long-Term Support',
    description:
      'Dedicated post-launch warranty, ongoing maintenance options, and incremental feature updates as your business evolves.',
    icon: 'Clock',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortDesc: 'Tailored software solutions designed around specific business requirements.',
    fullDesc:
      'We engineer bespoke software systems that solve nuanced operational bottlenecks, eliminate manual friction, and unify disparate business functions into cohesive digital platforms.',
    iconName: 'Code2',
    features: [
      'Bespoke business logic & workflow automation',
      'Scalable microservices and modular monoliths',
      'Legacy software modernization and refactoring',
      'Role-based permissions & secure enterprise auth',
    ],
    technologies: ['TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Complete production-ready source code repository',
      'System architecture blueprint & API schema docs',
      'Comprehensive automated test suite',
      'Deployment scripts & environment configuration',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Fast, responsive and scalable websites and web applications.',
    fullDesc:
      'From responsive corporate web portals to high-performance SaaS web applications, we build fast, SEO-optimized, and resilient web platforms with modern frontend frameworks.',
    iconName: 'Globe',
    features: [
      'Single Page Applications (SPAs) & Server-Side Rendering',
      'Progressive Web Apps (PWAs) with offline capabilities',
      'Responsive design across mobile, tablet, and desktop',
      'Core Web Vitals and SEO optimization',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Vite', 'GraphQL'],
    deliverables: [
      'Fully responsive, interactive web application',
      'Cross-browser and multi-device tested builds',
      'Integrated CMS or dynamic administration backend',
      'Performance audit report & SEO baseline setup',
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Modern mobile applications designed for Android and iOS.',
    fullDesc:
      'We develop high-performance native and cross-platform mobile apps that deliver fluid user experiences, instant responsiveness, and seamless offline data synchronization.',
    iconName: 'Smartphone',
    features: [
      'Cross-platform iOS & Android development',
      'Native device hardware integration (Camera, GPS, Biometrics)',
      'Push notification orchestration & background workers',
      'Offline-first data caching and real-time syncing',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    deliverables: [
      'App Store and Google Play store-ready submission packages',
      'Compiled APKs / TestFlight testing builds',
      'Push notification infrastructure integration',
      'Mobile analytics and crash reporting setup',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    shortDesc: 'AI-powered solutions and workflow automation that improve productivity.',
    fullDesc:
      'Harness modern generative models, intelligent document processing, and robotic workflow automations to reduce repetitive manual overhead and elevate customer engagement.',
    iconName: 'Bot',
    features: [
      'Custom LLM integration & conversational assistants',
      'Automated document extraction and data parsing',
      'Automated email and multi-channel notification pipelines',
      'Predictive analytics and smart business rule engines',
    ],
    technologies: ['Gemini API', 'OpenAI', 'LangChain', 'Python', 'FastAPI', 'Zapier/n8n'],
    deliverables: [
      'Fine-tuned or prompt-engineered AI assistant pipeline',
      'Automated webhook & queue processing workers',
      'Admin control panel for prompt and model monitoring',
      'Safety guardrails and token usage monitoring',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'Simple, intuitive and conversion-focused digital experiences.',
    fullDesc:
      'We combine human-centered user research, accessible visual design systems, and rapid interactive prototyping to create digital interfaces that are enjoyable and easy to use.',
    iconName: 'Layout',
    features: [
      'User journey mapping & interactive wireframing',
      'High-fidelity Figma design systems & component libraries',
      'Usability testing & conversion rate optimization',
      'WCAG 2.1 AA accessibility compliance',
    ],
    technologies: ['Figma', 'FigJam', 'Design Tokens', 'Tailwind', 'Motion'],
    deliverables: [
      'Complete interactive Figma design files & style guide',
      'Ready-to-code component specs for developers',
      'Interactive clickable prototypes for user validation',
      'Exported SVG/Vector asset packs and icon sets',
    ],
  },
  {
    id: 'cloud-api-integration',
    title: 'Cloud & API Integration',
    shortDesc: 'Secure integrations and cloud-based solutions connecting business systems.',
    fullDesc:
      'Connect payment gateways, CRM databases, marketing automation, ERPs, and cloud storage into a unified ecosystem with secure, high-throughput REST and GraphQL APIs.',
    iconName: 'Cloud',
    features: [
      'Custom RESTful & GraphQL API development',
      'Third-party connector pipelines (Stripe, Twilio, HubSpot, etc.)',
      'Cloud infrastructure setup (AWS, GCP, Azure, Cloud Run)',
      'CI/CD automated deployment pipelines & monitoring',
    ],
    technologies: ['Google Cloud', 'AWS', 'Docker', 'Kubernetes', 'REST/GraphQL', 'Redis'],
    deliverables: [
      'Interactive OpenAPI/Swagger documentation portal',
      'Secure webhook listeners & retry handling mechanisms',
      'Terraform / Container infrastructure configs',
      'Live server health telemetry & alerting setup',
    ],
  },
  {
    id: 'business-software',
    title: 'Business Software Solutions',
    shortDesc: 'Comprehensive internal systems, enterprise dashboards, and operational tools.',
    fullDesc:
      'We build purpose-engineered ERP, inventory management, client management, and reporting systems that streamline day-to-day operations and provide executives with real-time clarity.',
    iconName: 'Briefcase',
    features: [
      'Centralized operational dashboards and KPI visualizers',
      'Inventory, order, and billing tracking systems',
      'Multi-tier employee approval workflows',
      'Audit logging and compliance-ready data storage',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    deliverables: [
      'End-to-end enterprise web dashboard',
      'Configurable user roles, permissions, and audit logs',
      'Data export engines (CSV, PDF, Excel)',
      'User onboarding and administrator manuals',
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDesc: 'Fast, modern, and conversion-optimized websites for high brand credibility.',
    fullDesc:
      'Elevate your brand presence with lightning-fast, beautifully responsive websites crafted with clean semantic code, high-converting layouts, and seamless CMS integration.',
    iconName: 'Monitor',
    features: [
      'High-converting marketing and product landing pages',
      'Headless CMS integration for effortless content editing',
      'Technical SEO, Schema markup, and OpenGraph optimization',
      'Ultra-fast load times with near-instant rendering',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Strapi/Sanity'],
    deliverables: [
      'Custom website build deployed on fast global CDN',
      'Intuitive content editor access for marketing teams',
      'Mobile-optimized layouts across all resolutions',
      'Analytics, Google Tag Manager & pixel integrations',
    ],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDesc: 'Strategic modernization of legacy processes into agile digital workflows.',
    fullDesc:
      'Transition away from paper-based, spreadsheet-heavy, or outdated legacy systems. We audit your existing processes and architect modern digital workflows that scale smoothly.',
    iconName: 'RefreshCw',
    features: [
      'Technical architecture audit and digital readiness roadmap',
      'Process automation and legacy data migration',
      'Phased rollout plans minimizing business downtime',
      'Team training and change management support',
    ],
    technologies: ['Cloud Migration', 'API Gateways', 'Data Pipelines', 'ETL Tools'],
    deliverables: [
      'Digital Transformation Strategic Roadmap',
      'Data migration scripts with integrity verification',
      'Modernized software applications and services',
      'Technical documentation and staff training sessions',
    ],
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Technical Support',
    shortDesc: 'Expert technical advisory, code audits, and ongoing support services.',
    fullDesc:
      'Get clear, pragmatic technical guidance on technology stack selection, system architecture, security auditing, and SLA-backed maintenance to keep your systems running smoothly.',
    iconName: 'Headphones',
    features: [
      'Architecture design reviews & technical feasibility studies',
      'Security audits & code quality assessments',
      'DevOps, server maintenance, and automated backup strategies',
      'Dedicated SLA support and urgent incident resolution',
    ],
    technologies: ['Security Audits', 'Cloud Monitoring', 'CI/CD Optimization', 'Code Reviews'],
    deliverables: [
      'Comprehensive technical audit reports & recommendations',
      'Architecture decision records (ADRs)',
      'Service Level Agreement (SLA) maintenance schedules',
      'Ongoing monitoring, security patching, and backup management',
    ],
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'business-management',
    title: 'Business Management Systems',
    category: 'Enterprise Operations',
    shortDesc: 'Centralized platforms unifying project tracking, resource allocation, and operational tasks.',
    fullDesc:
      'Custom-engineered internal tools that replace fragmented spreadsheets and disconnected tools with a unified single source of truth for business operations.',
    iconName: 'KanbanSquare',
    businessImpact: [
      'Eliminates duplicate manual data entry across departments',
      'Provides real-time visibility into project timelines and milestones',
      'Standardizes operational SOPs across distributed teams',
    ],
    keyModules: ['Task & Project Tracking', 'Resource Allocation', 'Document Vault', 'Role-Based Access'],
    idealFor: 'Growing companies and service agencies managing complex multi-team operations.',
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    category: 'Sales & Customer Relations',
    shortDesc: 'Custom customer relationship management systems tailored to your exact sales pipeline.',
    fullDesc:
      'Manage client relationships, track sales opportunities, record interaction histories, and automate follow-ups with a CRM that fits your team’s exact sales methodology.',
    iconName: 'UserCheck',
    businessImpact: [
      'Reduces sales lead drop-off with timely automated reminders',
      'Gives sales leaders clear forecasting and stage metrics',
      'Centralizes customer conversation history and contracts',
    ],
    keyModules: ['Deal Pipeline Kanban', 'Contact & Account Directory', 'Activity Logging', 'Email Sync'],
    idealFor: 'B2B companies, consultancies, and sales teams needing custom deal flows.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    category: 'Productivity & Efficiency',
    shortDesc: 'Automate repetitive tasks, data synchronization, and multi-step approval workflows.',
    fullDesc:
      'Connect disparate software platforms and trigger automated actions based on real-time business events, saving hundreds of manual hours each month.',
    iconName: 'GitMerge',
    businessImpact: [
      'Cuts down manual data processing time by up to 80%',
      'Minimizes human error in order processing and notifications',
      'Ensures consistent execution of multi-step business logic',
    ],
    keyModules: ['Event-Driven Triggers', 'Multi-System Data Sync', 'Conditional Approval Chains', 'Error Handlers'],
    idealFor: 'Logistics, e-commerce, and administrative teams seeking operational speed.',
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-commerce Platforms',
    category: 'Digital Commerce',
    shortDesc: 'Custom online store and checkout experiences built for speed, security, and conversion.',
    fullDesc:
      'Bespoke B2B and B2C commerce platforms featuring flexible product catalogs, multi-currency support, custom pricing rules, and seamless payment gateway integrations.',
    iconName: 'ShoppingCart',
    businessImpact: [
      'Accelerates page load and checkout speed to maximize conversions',
      'Enables complex custom pricing tiers and wholesale order workflows',
      'Integrates seamlessly with existing inventory and accounting tools',
    ],
    keyModules: ['Custom Catalog Engine', 'Multi-Gateway Checkout', 'Order & Return Tracking', 'Inventory Sync'],
    idealFor: 'Direct-to-consumer brands, wholesalers, and niche marketplaces.',
  },
  {
    id: 'internal-applications',
    title: 'Internal Business Applications',
    category: 'Productivity & Ops',
    shortDesc: 'Secure employee portals, field technician tools, and operational utility apps.',
    fullDesc:
      'Custom web and mobile applications built specifically for your internal staff, enabling faster data collection, incident logging, and cross-departmental coordination.',
    iconName: 'FolderKanban',
    businessImpact: [
      'Empowers frontline and field staff with easy mobile tools',
      'Ensures immediate data sync between field operations and headquarters',
      'Enforces data validation and compliance at the point of capture',
    ],
    keyModules: ['Mobile-Friendly Forms', 'Offline Field Mode', 'Incident & Ticket Logging', 'Executive Summaries'],
    idealFor: 'Construction, field services, property management, and healthcare teams.',
  },
  {
    id: 'customer-portals',
    title: 'Customer Portals',
    category: 'Client Experience',
    shortDesc: 'Self-service client dashboards for invoicing, project updates, and support requests.',
    fullDesc:
      'Give your clients a polished, branded digital portal where they can check project status, approve deliverables, download invoices, and communicate directly with your team.',
    iconName: 'ShieldCheck',
    businessImpact: [
      'Dramatically reduces routine status inquiry emails and phone calls',
      'Improves client satisfaction with transparent self-service access',
      'Accelerates invoice settlement with direct embedded payments',
    ],
    keyModules: ['Client Dashboard', 'Secure File Sharing', 'Invoice & Payment Hub', 'Support Ticket Center'],
    idealFor: 'Service agencies, financial advisors, legal practices, and software providers.',
  },
  {
    id: 'ai-assistants',
    title: 'AI Assistants & Smart Tools',
    category: 'Artificial Intelligence',
    shortDesc: 'Domain-specific conversational bots and intelligent data assistants.',
    fullDesc:
      'Custom AI tools trained on your internal documentation, knowledge bases, and product catalogs to provide instantaneous answers to customers and team members.',
    iconName: 'Sparkles',
    businessImpact: [
      'Provides 24/7 immediate assistance for common customer inquiries',
      'Speeds up internal knowledge discovery across complex documentation',
      'Frees human support agents to focus on complex, high-value inquiries',
    ],
    keyModules: ['Retrieval Augmented Generation (RAG)', 'Context Guardrails', 'Multi-Language Support', 'Human Handoff'],
    idealFor: 'Customer support teams, SaaS companies, and knowledge-intensive businesses.',
  },
  {
    id: 'data-reporting',
    title: 'Data & Reporting Solutions',
    category: 'Business Intelligence',
    shortDesc: 'Interactive analytics dashboards transforming raw data into actionable decision metrics.',
    fullDesc:
      'Consolidate data from databases, ad networks, payment processors, and CRMs into clean, interactive executive dashboards with automated reporting schedules.',
    iconName: 'BarChart3',
    businessImpact: [
      'Empowers leadership with real-time, accurate business metrics',
      'Identifies revenue leaks and operational bottlenecks rapidly',
      'Automates scheduled weekly and monthly executive email digests',
    ],
    keyModules: ['Real-Time KPI Widgets', 'Multi-Source Data Aggregation', 'Exportable PDF Reports', 'Trend Forecasting'],
    idealFor: 'Executive leadership, finance departments, and marketing directors.',
  },
  {
    id: 'api-integrations',
    title: 'API Integrations & Connectors',
    category: 'Systems Connectivity',
    shortDesc: 'Robust middle-tier APIs bridging legacy software with modern cloud services.',
    fullDesc:
      'Custom middleware and microservices that reliably shuttle data between payment processors, third-party logistics, ERP databases, and third-party partner systems.',
    iconName: 'Network',
    businessImpact: [
      'Eliminates data silos across disparate company software',
      'Ensures real-time bidirectional synchronization with zero data loss',
      'Enables quick integration of new tools without altering core databases',
    ],
    keyModules: ['API Gateway & Rate Limiting', 'Webhook Queues', 'Transformation Middleware', 'Audit Logging'],
    idealFor: 'Businesses integrating payment gateways, logistics partners, and enterprise ERPs.',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'construction',
    name: 'Construction',
    iconName: 'Hammer',
    summary:
      'Digital solutions for project scheduling, subcontractor management, jobsite daily logs, and equipment tracking.',
    challenges: [
      'Disconnected jobsite and office communication',
      'Delayed equipment and materials tracking',
      'Paper-based daily reports and safety checklists',
    ],
    solutionsProvided: [
      'Mobile field logging & photo inspection tools',
      'Subcontractor scheduling and task boards',
      'Material inventory & equipment tracking apps',
    ],
    keyBenefits: ['Accelerates project reporting', 'Reduces costly jobsite miscommunications'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    iconName: 'Building2',
    summary:
      'Property management platforms, tenant portals, digital lease signing, and interactive listing portals.',
    challenges: [
      'Manual maintenance request tracking and dispatching',
      'Scattered tenant communications and payment records',
      'Slow lease paperwork and documentation turnover',
    ],
    solutionsProvided: [
      'Tenant self-service portals with rent payment gateways',
      'Automated maintenance dispatching and tracking',
      'High-performance property search & virtual tour platforms',
    ],
    keyBenefits: ['Improves tenant satisfaction', 'Automates recurring rental workflows'],
  },
  {
    id: 'retail',
    name: 'Retail',
    iconName: 'Store',
    summary:
      'Modern point-of-sale integrations, inventory synchronizers across physical and digital storefronts.',
    challenges: [
      'Inventory count discrepancies between store and warehouse',
      'Lack of unified customer loyalty tracking',
      'Slow manual checkout and return processing',
    ],
    solutionsProvided: [
      'Omnichannel inventory synchronization engines',
      'Custom customer loyalty & rewards applications',
      'Fast tablet-based POS and digital receipt systems',
    ],
    keyBenefits: ['Prevents stockouts', 'Unifies customer shopping history across touchpoints'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    iconName: 'ShoppingBag',
    summary:
      'High-converting online store architectures, headless checkout flows, and automated fulfillment integrations.',
    challenges: [
      'High shopping cart abandonment rates',
      'Complex shipping calculations and multi-carrier integrations',
      'Slow website loading speeds impacting conversion rates',
    ],
    solutionsProvided: [
      'Ultra-fast headless commerce storefronts',
      'Automated multi-carrier shipping rate calculators',
      'One-click checkout and localized payment methods',
    ],
    keyBenefits: ['Increases conversion rates', 'Streamlines international order handling'],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    iconName: 'GraduationCap',
    summary:
      'Learning management systems (LMS), student progress trackers, virtual classrooms, and interactive assessments.',
    challenges: [
      'Clunky legacy LMS interfaces frustrating students and teachers',
      'Difficulty in tracking granular student skill progression',
      'Fragmented parent-teacher communication channels',
    ],
    solutionsProvided: [
      'Intuitive custom learning portals and video modules',
      'Interactive quiz engines with instant grade tracking',
      'Secure parent communication and attendance portals',
    ],
    keyBenefits: ['Boosts student engagement', 'Simplifies administrative grading burdens'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    iconName: 'Activity',
    summary:
      'HIPAA-conscious appointment booking, secure patient communication portals, and clinical operational workflows.',
    challenges: [
      'High patient no-show rates for scheduled consultations',
      'Secure handling of private medical documentation',
      'Administrative overhead in appointment intake',
    ],
    solutionsProvided: [
      'Self-service appointment scheduling with automated SMS reminders',
      'Secure, encrypted patient document and records portals',
      'Staff shift management and clinic queue tracking',
    ],
    keyBenefits: ['Reduces missed appointments', 'Enhances patient intake convenience'],
  },
  {
    id: 'finance',
    name: 'Finance & FinTech',
    iconName: 'Landmark',
    summary:
      'Secure financial dashboards, expense approval systems, automated invoicing, and reconciliation tools.',
    challenges: [
      'Strict regulatory compliance and data encryption requirements',
      'Time-consuming manual month-end financial reconciliation',
      'Complex multi-currency transaction processing',
    ],
    solutionsProvided: [
      'End-to-end encrypted financial data dashboards',
      'Automated payment gateway reconciliation pipelines',
      'Role-based multi-signoff expense approval apps',
    ],
    keyBenefits: ['Accelerates financial close cycles', 'Guarantees audit-trail compliance'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    iconName: 'Truck',
    summary:
      'Fleet tracking dashboards, warehouse inventory management, proof-of-delivery apps, and dispatch scheduling.',
    challenges: [
      'Lack of real-time visibility into driver and cargo locations',
      'Manual dispatch assignment causing route inefficiencies',
      'Delayed paper-based proof of delivery collection',
    ],
    solutionsProvided: [
      'Live GPS fleet and shipment tracking maps',
      'Mobile driver apps with digital signature & photo capture',
      'Automated route optimization and order dispatching',
    ],
    keyBenefits: ['Cuts delivery delays', 'Provides customers with live package tracking'],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    iconName: 'Briefcase',
    summary:
      'Time tracking, client billing, document generation, and secure collaboration portals for consultancies and firms.',
    challenges: [
      'Unbilled billable hours lost due to poor tracking',
      'Scattered client communications across email threads',
      'Manual generation of repetitive legal or consulting proposals',
    ],
    solutionsProvided: [
      'Integrated project timer and timesheet approval systems',
      'Branded client collaboration and deliverable portals',
      'Automated proposal and contract generation tools',
    ],
    keyBenefits: ['Captures all billable work', 'Presents a premium client-facing experience'],
  },
  {
    id: 'startups',
    name: 'Startups & Ventures',
    iconName: 'Rocket',
    summary:
      'Rapid MVP development, scalable cloud backends, and agile product iteration to validate market fit swiftly.',
    challenges: [
      'Urgent need to launch an MVP before funding runways shorten',
      'Balancing speed-to-market with scalable code quality',
      'Adapting rapidly to early user feedback and feature pivots',
    ],
    solutionsProvided: [
      'High-velocity 4-8 week MVP build programs',
      'Scalable TypeScript / Serverless architectures',
      'Product analytics instrumentation for immediate user insights',
    ],
    keyBenefits: ['Launches functional MVPs rapidly', 'Establishes a solid foundation for future scaling'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understand the business, goals and requirements.',
    description:
      'We conduct structured discovery sessions to understand your business model, target users, technical constraints, and key success metrics before writing a single line of code.',
    deliverables: [
      'Project Requirements Document (PRD)',
      'Feature priority matrix (MoSCoW)',
      'High-level technical architecture proposal',
      'Project timeline & milestone estimates',
    ],
    durationEstimate: '1 – 2 Weeks',
    keyActivities: [
      'Stakeholder interviews & user persona mapping',
      'Technical constraint & integration audit',
      'Scope definition & milestone planning',
    ],
  },
  {
    number: '02',
    title: 'Plan',
    tagline: 'Define the solution, technology and project roadmap.',
    description:
      'We map out the database schema, API contracts, third-party integrations, and sprint roadmaps to ensure predictability and seamless collaboration throughout development.',
    deliverables: [
      'Database entity-relationship diagram (ERD)',
      'REST/GraphQL API specification draft',
      'Sprint backlog & agile development roadmap',
      'Security, compliance & backup strategy',
    ],
    durationEstimate: '1 – 2 Weeks',
    keyActivities: [
      'Technology stack selection & benchmarking',
      'Cloud environment architecture setup',
      'Sprint schedule & deliverable alignment',
    ],
  },
  {
    number: '03',
    title: 'Design',
    tagline: 'Create the user experience and interface.',
    description:
      'Our UI/UX designers create intuitive user journeys, wireframes, and interactive Figma prototypes, refining the user experience through collaborative feedback.',
    deliverables: [
      'Interactive Figma prototypes',
      'Component design system & typography guide',
      'Mobile & responsive layout specifications',
      'Usability review summary',
    ],
    durationEstimate: '2 – 3 Weeks',
    keyActivities: [
      'Wireframe creation & user flow validation',
      'High-fidelity visual design & UI polish',
      'Interactive prototype walkthroughs with client',
    ],
  },
  {
    number: '04',
    title: 'Develop',
    tagline: 'Build, test and integrate the solution.',
    description:
      'Our engineering team writes clean, modular TypeScript code following best practices, implementing features in two-week agile sprints with continuous testing.',
    deliverables: [
      'Clean, documented codebase in Git repository',
      'Bi-weekly staging environment builds for review',
      'Automated unit, integration, and E2E tests',
      'API connectors and database migrations',
    ],
    durationEstimate: '4 – 12 Weeks (Scope Dependent)',
    keyActivities: [
      'Frontend and backend sprint development',
      'Continuous Integration & Continuous Deployment (CI/CD)',
      'Quality assurance, cross-browser & performance testing',
    ],
  },
  {
    number: '05',
    title: 'Launch & Support',
    tagline: 'Deploy the product and provide ongoing improvements and support.',
    description:
      'We execute a smooth production release with zero downtime, configure live monitoring, provide staff training, and deliver dedicated warranty and ongoing maintenance.',
    deliverables: [
      'Production deployment on secured cloud infrastructure',
      'Domain, SSL, and DNS configuration',
      'Live server monitoring & error alerting',
      'Full technical documentation & handover session',
    ],
    durationEstimate: 'Ongoing Post-Launch',
    keyActivities: [
      'Production rollout & smoke testing',
      'Knowledge transfer & administrative walkthrough',
      'Post-launch SLA support, backups & security updates',
    ],
  },
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'demo-business-dashboard',
    name: 'Enterprise Operations Hub',
    category: 'Enterprise Software',
    badge: 'Demo Project',
    shortDesc:
      'A centralized business operations platform unifying project management, team task allocation, and real-time revenue analytics.',
    fullOverview:
      'This demo project showcases a robust internal business management system designed for multi-department organizations. It features live Gantt scheduling, role-based access control, and automated daily executive summaries.',
    challenge:
      'Organizations often struggle with fragmented tools where project status, timesheets, and invoice tracking live in separate disconnected spreadsheets.',
    solution:
      'Engineered a unified single-pane dashboard with real-time WebSocket state synchronization, automated invoice generation, and custom approval workflows.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    features: [
      'Interactive Kanban & Gantt project tracking',
      'Role-based permission matrix (Admin, Manager, Member)',
      'Automated weekly email summary digests',
      'Exportable financial & utilization reports (PDF, CSV)',
    ],
    architecture: {
      frontend: 'React 18 + Tailwind CSS + Lucide Icons',
      backend: 'Express TypeScript REST API + Prisma ORM',
      database: 'PostgreSQL with connection pooling',
      cloud: 'Docker container on Cloud Run + Redis caching',
    },
    metrics: [
      { label: 'Architecture Type', value: 'Modular Microservices' },
      { label: 'Target Users', value: '50 - 500 Team Members' },
      { label: 'Data Sync Latency', value: '< 100ms Live Updates' },
    ],
  },
  {
    id: 'concept-ecommerce-platform',
    name: 'Aura Commerce Platform',
    category: 'E-commerce',
    badge: 'Concept',
    shortDesc:
      'A high-performance headless e-commerce concept featuring instant sub-second page loads and custom multi-currency checkout.',
    fullOverview:
      'A modern concept for digital retail brands seeking superior load times and bespoke shopping experiences without the bloat of traditional monolithic e-commerce platforms.',
    challenge:
      'Slow mobile page speeds and multi-step checkout friction often result in high bounce rates and abandoned shopping carts in traditional stores.',
    solution:
      'Built a headless storefront utilizing Next.js static generation with edge caching, localized payment processing via Stripe, and instant inventory sync.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'GraphQL', 'Vercel'],
    features: [
      'Instant sub-second page transitions & edge caching',
      'Multi-currency price localization and tax calculation',
      'Dynamic filterable product search with zero layout shift',
      'Integrated customer review and loyalty reward points',
    ],
    architecture: {
      frontend: 'Next.js App Router with Server Components',
      backend: 'GraphQL API layer with edge functions',
      database: 'Distributed NoSQL for product catalogs',
      cloud: 'Global Edge CDN + Stripe Webhooks',
    },
    metrics: [
      { label: 'Target Page Speed', value: '98+ Google Lighthouse' },
      { label: 'Checkout Steps', value: 'Optimized 2-Step Flow' },
      { label: 'Localization', value: '15+ Global Currencies' },
    ],
  },
  {
    id: 'concept-ai-assistant',
    name: 'SmartAssist Knowledge Bot',
    category: 'AI & Automation',
    badge: 'Concept',
    shortDesc:
      'An intelligent AI customer support assistant powered by retrieval-augmented generation (RAG) on company knowledge bases.',
    fullOverview:
      'Designed to help customer service teams handle routine inquiries 24/7 by providing accurate, grounded answers derived strictly from verified company documentation.',
    challenge:
      'Customer support teams spend significant time answering repetitive questions, leading to high wait times for complex client inquiries.',
    solution:
      'Constructed a specialized RAG pipeline that vectorizes company SOPs, user manuals, and policies to answer questions with verifiable citation links.',
    technologies: ['Gemini API', 'Python', 'FastAPI', 'Vector Database', 'React', 'Tailwind'],
    features: [
      'Domain-specific grounded Q&A with strict safety filters',
      'Automated semantic search across company PDF/Markdown docs',
      'Seamless human agent takeover upon negative sentiment',
      'Live admin dashboard tracking resolution rates and popular queries',
    ],
    architecture: {
      frontend: 'Embeddable React Web Widget + Admin Portal',
      backend: 'Python FastAPI service with asynchronous queues',
      database: 'Qdrant / Pinecone Vector Store + PostgreSQL',
      cloud: 'Google Cloud Run + Secret Manager',
    },
    metrics: [
      { label: 'Response Time', value: '< 1.2s Average Latency' },
      { label: 'Grounded Accuracy', value: 'Citation Backed' },
      { label: 'Availability', value: '24/7 Automated Service' },
    ],
  },
  {
    id: 'demo-fleet-tracker',
    name: 'LogiTrack Dispatch Suite',
    category: 'Web Application',
    badge: 'Demo Project',
    shortDesc:
      'A real-time logistics and delivery management suite with live driver GPS tracking, route scheduling, and digital proof of delivery.',
    fullOverview:
      'A showcase logistics software application designed for courier and delivery businesses. Enables dispatchers to monitor active routes and drivers to capture customer signatures on mobile.',
    challenge:
      'Difficulty tracking driver progress in real time resulted in inaccurate customer ETAs and delays in obtaining signed delivery confirmations.',
    solution:
      'Engineered a dispatch portal with live interactive mapping, automatic route optimization algorithms, and a mobile-friendly driver web app with camera capture.',
    technologies: ['React', 'Leaflet/Mapbox', 'Node.js', 'Socket.io', 'Tailwind CSS', 'PostgreSQL'],
    features: [
      'Live GPS driver map with status markers (Idle, En Route, Delivered)',
      'Automated drag-and-drop route assignment planner',
      'Mobile proof-of-delivery with digital signature & photo upload',
      'Automated SMS delivery ETA alerts for end customers',
    ],
    architecture: {
      frontend: 'React + Canvas/Mapbox GL + WebSockets',
      backend: 'Node.js event emitter server with geofencing',
      database: 'PostgreSQL with PostGIS geospatial queries',
      cloud: 'Cloud Run with automated Redis Pub/Sub',
    },
    metrics: [
      { label: 'Update Frequency', value: 'Every 5 Seconds' },
      { label: 'Geofence Accuracy', value: '< 20 Meters' },
      { label: 'Platform Support', value: 'Web + Mobile Web' },
    ],
  },
  {
    id: 'concept-patient-portal',
    name: 'CareSync Patient Hub',
    category: 'Mobile App',
    badge: 'Concept',
    shortDesc:
      'A clean, accessible healthcare portal concept for patient appointment scheduling, lab report access, and telemedicine messaging.',
    fullOverview:
      'An intuitive healthcare mobile concept created to eliminate phone wait times and empower patients to securely view their lab results and chat with clinical staff.',
    challenge:
      'High administrative overhead in medical clinics due to manual phone intake and fragmented communication of test results.',
    solution:
      'Designed a secure, HIPAA-compliant patient mobile experience with biometric login, direct calendar appointment booking, and encrypted message threads.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Encrypted S3', 'Figma'],
    features: [
      'Biometric Face ID / Fingerprint authentication',
      'Self-service doctor appointment booking with reminder alerts',
      'Secure PDF lab test result viewer with download options',
      'Direct asynchronous doctor-patient messaging channel',
    ],
    architecture: {
      frontend: 'React Native (iOS & Android) + Tailwind',
      backend: 'Express.js microservices with AES-256 encryption',
      database: 'HIPAA-compliant encrypted PostgreSQL storage',
      cloud: 'AWS GovCloud / Google Cloud Healthcare API',
    },
    metrics: [
      { label: 'Encryption Level', value: 'End-to-End AES-256' },
      { label: 'Compliance Blueprint', value: 'HIPAA & GDPR Ready' },
      { label: 'Supported Platforms', value: 'iOS & Android Native' },
    ],
  },
  {
    id: 'concept-fintech-analytics',
    name: 'VentureMetrics Suite',
    category: 'Enterprise Software',
    badge: 'Concept',
    shortDesc:
      'A financial modeling and cash-flow runway visualization platform for startups and venture-backed companies.',
    fullOverview:
      'Designed to give founders and finance leads instant visibility into burn rates, revenue cohorts, ARR growth, and scenario-based forecasting.',
    challenge:
      'Founders often rely on complex, brittle spreadsheets to calculate runway and forecast future hiring expenses.',
    solution:
      'Created an interactive financial modeling suite that connects directly to accounting APIs (Stripe, QuickBooks) to project scenarios automatically.',
    technologies: ['React', 'TypeScript', 'D3.js', 'FastAPI', 'Tailwind CSS', 'PostgreSQL'],
    features: [
      'Interactive runway burn scenario simulator (Hire, Freeze, Expand)',
      'Automated cohort retention and Net Revenue Retention (NRR) charts',
      'Multi-currency revenue reconciliation and tax reserve tracker',
      'One-click investor update deck generator (PDF/Shareable link)',
    ],
    architecture: {
      frontend: 'React + D3.js interactive canvas visualizers',
      backend: 'Python FastAPI analytical computation engine',
      database: 'PostgreSQL time-series partitioned tables',
      cloud: 'Containerized deployment on GCP with Cloud CDN',
    },
    metrics: [
      { label: 'Chart Rendering', value: '60 FPS D3.js Visuals' },
      { label: 'Calculation Engine', value: 'Vectorized NumPy Core' },
      { label: 'Export Options', value: 'PDF, CSV, Interactive Link' },
    ],
  },
];

export const TECH_STACK_CATEGORIES = [
  {
    name: 'Frontend',
    description: 'Modern, performant, and responsive interface technologies.',
    technologies: [
      { name: 'React', level: 'Core', desc: 'Component-driven UI development' },
      { name: 'TypeScript', level: 'Standard', desc: 'Type-safe scalable JavaScript' },
      { name: 'Next.js', level: 'Framework', desc: 'Server-side rendering & static generation' },
      { name: 'Tailwind CSS', level: 'Styling', desc: 'Utility-first modern design system' },
      { name: 'Vue.js', level: 'Alternative', desc: 'Progressive JavaScript framework' },
      { name: 'Vite', level: 'Build Tool', desc: 'Lightning-fast module bundling' },
    ],
  },
  {
    name: 'Backend & APIs',
    description: 'Secure, reliable server architectures and API gateways.',
    technologies: [
      { name: 'Node.js & Express', level: 'Core', desc: 'High-throughput asynchronous backend' },
      { name: 'Python & FastAPI', level: 'Core', desc: 'High-performance API & AI integration' },
      { name: 'Go (Golang)', level: 'Specialized', desc: 'Low-latency concurrency services' },
      { name: 'REST & GraphQL', level: 'Protocols', desc: 'Predictable and flexible data contracts' },
      { name: 'WebSockets', level: 'Realtime', desc: 'Bidirectional low-latency events' },
    ],
  },
  {
    name: 'Mobile Development',
    description: 'Cross-platform and native mobile solutions.',
    technologies: [
      { name: 'React Native', level: 'Core', desc: 'Cross-platform native iOS & Android' },
      { name: 'Flutter', level: 'Alternative', desc: 'Google UI toolkit for multi-platform' },
      { name: 'Swift / Kotlin', level: 'Native', desc: 'Dedicated platform-specific modules' },
      { name: 'Expo', level: 'Ecosystem', desc: 'Rapid mobile prototyping & deployment' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    description: 'Scalable, containerized cloud platforms with high uptime.',
    technologies: [
      { name: 'Google Cloud (GCP)', level: 'Platform', desc: 'Cloud Run, Cloud SQL, Storage' },
      { name: 'Amazon Web Services (AWS)', level: 'Platform', desc: 'EC2, ECS, S3, RDS, Lambda' },
      { name: 'Docker', level: 'Container', desc: 'Reproducible environment isolation' },
      { name: 'CI / CD', level: 'DevOps', desc: 'GitHub Actions automated testing & deploy' },
      { name: 'Redis', level: 'Caching', desc: 'In-memory fast state & session cache' },
    ],
  },
  {
    name: 'AI & Automation',
    description: 'Practical artificial intelligence and workflow orchestration.',
    technologies: [
      { name: 'Gemini API', level: 'Model', desc: 'Multimodal AI and advanced reasoning' },
      { name: 'OpenAI API', level: 'Model', desc: 'Language models and smart embeddings' },
      { name: 'LangChain', level: 'Framework', desc: 'Chained LLM workflows & RAG pipelines' },
      { name: 'n8n / Webhooks', level: 'Automation', desc: 'Event-driven cross-system automations' },
    ],
  },
];

export const CAREERS_DATA: JobPosition[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer (React & Node.js)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Global Remote',
    experienceLevel: 'Senior',
    description:
      'We are looking for an experienced Full-Stack Engineer to architect and build modern web applications, scalable REST/GraphQL APIs, and cloud-native services for our diverse portfolio of client projects.',
    responsibilities: [
      'Architect robust web applications using React, TypeScript, Node.js, and PostgreSQL',
      'Design clean API contracts, database schemas, and microservice components',
      'Collaborate directly with UI/UX designers and technical leads to translate requirements into polished software',
      'Conduct code reviews, enforce coding standards, and mentor junior engineers',
      'Optimize frontend bundle sizes, Core Web Vitals, and backend query performance',
    ],
    requirements: [
      '4+ years of professional experience building web applications in production',
      'Strong expertise in TypeScript, React, Node.js (Express/NestJS), and SQL databases',
      'Solid understanding of Git workflows, CI/CD pipelines, and Docker containerization',
      'Clear written and verbal English communication skills for remote teamwork',
    ],
    benefits: [
      '100% remote work flexibility with flexible working hours',
      'Competitive compensation package based on experience',
      'Annual budget for learning courses, conferences, and technical books',
      'Generous paid time off and holiday allowance',
    ],
  },
  {
    id: 'mobile-app-developer',
    title: 'Mobile App Developer (React Native / Flutter)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Global Remote',
    experienceLevel: 'Mid-Level',
    description:
      'Join our mobile engineering team to create fluid, reliable, and offline-capable mobile applications for iOS and Android across healthcare, e-commerce, and logistics domains.',
    responsibilities: [
      'Develop high-performance mobile applications with React Native / Flutter',
      'Integrate device hardware APIs (Camera, Geolocation, Push Notifications, Biometrics)',
      'Ensure smooth 60fps animations, intuitive gestures, and offline-first caching',
      'Manage App Store and Google Play deployment pipelines and testing tracks',
    ],
    requirements: [
      '2+ years of dedicated mobile development experience in React Native or Flutter',
      'Proven track record of published apps on the Apple App Store or Google Play Store',
      'Familiarity with state management libraries (Zustand, Redux, or React Context)',
      'Understanding of native iOS and Android build toolchains (Xcode, Android Studio)',
    ],
    benefits: [
      'Remote-first culture with asynchronous team collaboration',
      'Hardware and home office setup allowance',
      'Collaborative environment with modern development tools',
      'Paid time off and health wellness stipend',
    ],
  },
  {
    id: 'ui-ux-product-designer',
    title: 'UI/UX Product Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Global Remote',
    experienceLevel: 'Mid-Level',
    description:
      'We are seeking a talented UI/UX Product Designer to design intuitive, aesthetically refined, and accessible user experiences for web and mobile software products.',
    responsibilities: [
      'Create high-fidelity wireframes, design systems, and interactive clickable Figma prototypes',
      'Conduct user research, synthesize usability feedback, and optimize conversion flows',
      'Establish consistent design tokens, typography scales, and accessible color palettes',
      'Collaborate closely with frontend engineers to ensure design fidelity in code',
    ],
    requirements: [
      '3+ years of experience designing SaaS, mobile, or enterprise web interfaces',
      'A strong portfolio demonstrating systematic design thinking and clean visual aesthetics',
      'Advanced mastery of Figma (Auto Layout, Components, Variants, Variables)',
      'Solid understanding of frontend constraints (Tailwind, HTML/CSS, responsive breakpoints)',
    ],
    benefits: [
      'Work on varied, challenging software projects across diverse industries',
      'Flexible remote schedule with high autonomy',
      'Paid Figma, design resource, and font library subscriptions',
      'Annual team retreats and continuous professional growth support',
    ],
  },
  {
    id: 'software-engineering-intern',
    title: 'Software Engineering Intern (Web & Cloud)',
    department: 'Engineering',
    type: 'Internship',
    location: 'Remote',
    experienceLevel: 'Entry / Intern',
    description:
      'An exciting opportunity for enthusiastic computer science students or recent graduates to gain hands-on experience building real-world software applications under senior mentorship.',
    responsibilities: [
      'Assist senior engineers in developing frontend components and backend endpoints',
      'Write automated unit and integration tests to ensure software reliability',
      'Participate in sprint planning, daily stand-ups, and code review sessions',
      'Document APIs and maintain internal developer guides',
    ],
    requirements: [
      'Foundational understanding of JavaScript/TypeScript, React, or Python',
      'Basic familiarity with Git version control and HTML/CSS fundamentals',
      'Eager curiosity to learn modern software engineering best practices',
      'Self-motivated problem solver with good communication skills',
    ],
    benefits: [
      'Paid 3-6 month internship with potential for full-time conversion',
      'Direct 1-on-1 mentorship from experienced senior software engineers',
      'Real-world portfolio projects and production deployment experience',
      'Flexible hours accommodating academic schedules',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'choosing-tech-stack-2026',
    title: 'How to Choose the Right Tech Stack for Your Business in 2026',
    slug: 'choosing-tech-stack-2026',
    category: 'Software Development',
    readTime: '6 min read',
    publishedDate: 'August 14, 2026',
    author: {
      name: 'Pixevo Engineering Team',
      role: 'Technical Architecture Lead',
    },
    excerpt:
      'A pragmatic guide for founders and business leaders on selecting between modern frameworks, databases, and cloud services without falling into premature optimization traps.',
    content: [
      'Selecting the foundational technology stack for a new digital product is one of the most critical decisions an organization makes. The wrong choice can lead to sluggish development cycles, talent hiring hurdles, and expensive future rewrites.',
      'When evaluating technologies, businesses should focus on three foundational criteria: developer ecosystem maturity, performance under expected load, and alignment with your team’s internal capabilities.',
      'For the vast majority of web applications today, TypeScript across both the frontend (React/Next.js) and backend (Node.js/Express or NestJS) provides an exceptional balance of type safety, code reusability, and rapid developer velocity.',
      'Key recommendation: Avoid over-engineering microservices on day one. A well-architected modular monolith using PostgreSQL and Docker will comfortably support your growth from zero to tens of thousands of active users with minimal infrastructure complexity.',
    ],
    keyTakeaways: [
      'Prioritize developer ecosystem maturity and hiring accessibility over bleeding-edge hype.',
      'Unify frontend and backend language stacks (like TypeScript) to share types and speed up delivery.',
      'Start with a clean modular monolith before splitting into microservices prematurely.',
    ],
    tags: ['Tech Stack', 'TypeScript', 'Software Architecture', 'Web Development'],
  },
  {
    id: 'ai-automation-for-smes',
    title: 'Practical AI & Automation Strategies for Small and Medium Businesses',
    slug: 'ai-automation-for-smes',
    category: 'AI',
    readTime: '5 min read',
    publishedDate: 'July 29, 2026',
    author: {
      name: 'Pixevo AI Solutions',
      role: 'Applied AI Specialist',
    },
    excerpt:
      'Explore how small and medium businesses can deploy cost-effective AI workflows to automate document handling, customer support, and operational reports today.',
    content: [
      'Artificial intelligence is no longer restricted to multi-billion-dollar enterprises. Modern APIs and pre-trained foundation models have made it possible for small and medium businesses to automate complex manual workflows with modest budgets.',
      'The most impactful entry point for SMEs is intelligent document processing: automatically extracting invoice data, parsing customer emails into CRM tickets, and generating instant executive summaries from raw spreadsheets.',
      'When implementing AI, the secret to high adoption is human-in-the-loop workflows. Rather than attempting 100% full automation immediately, design systems where the AI prepares 90% of the draft or data, leaving the final sign-off to a team member.',
    ],
    keyTakeaways: [
      'Focus AI adoption on high-volume, repetitive manual tasks like document parsing and data extraction.',
      'Implement human-in-the-loop validation to ensure quality and maintain customer trust.',
      'Measure return on investment in hours saved per employee each month.',
    ],
    tags: ['AI', 'Automation', 'Business Productivity', 'LLM Integration'],
  },
  {
    id: 'native-vs-cross-platform-mobile',
    title: 'React Native vs. Native Apps: Making the Strategic Mobile Decision',
    slug: 'native-vs-cross-platform-mobile',
    category: 'Mobile Apps',
    readTime: '7 min read',
    publishedDate: 'July 11, 2026',
    author: {
      name: 'Pixevo Mobile Team',
      role: 'Senior Mobile Engineer',
    },
    excerpt:
      'A side-by-side comparison of cross-platform frameworks versus pure native development for startups and established companies.',
    content: [
      'Building a mobile app for both iOS and Android traditionally required two completely independent engineering teams: one for Swift and another for Kotlin. Cross-platform frameworks like React Native and Flutter have completely transformed this dynamic.',
      'With modern React Native architectures (such as the new Fabric renderer and TurboModules), cross-platform apps achieve near-identical rendering performance and 60fps gesture responsiveness compared to pure native builds.',
      'Unless your mobile product requires heavy 3D game engines or low-level Bluetooth kernel drivers, cross-platform development typically reduces time-to-market and ongoing maintenance costs by 40-50%.',
    ],
    keyTakeaways: [
      'Cross-platform saves 40-50% in initial development and ongoing maintenance overhead.',
      'Modern React Native and Flutter frameworks deliver native-grade 60fps animations and gesture response.',
      'Native Swift/Kotlin is primarily necessary for specialized device driver integrations or intensive 3D rendering.',
    ],
    tags: ['Mobile Development', 'React Native', 'iOS', 'Android', 'App Architecture'],
  },
  {
    id: 'security-essentials-custom-software',
    title: 'Cybersecurity Essentials Every Custom Business Application Needs',
    slug: 'security-essentials-custom-software',
    category: 'Cybersecurity',
    readTime: '6 min read',
    publishedDate: 'June 24, 2026',
    author: {
      name: 'Pixevo Security Desk',
      role: 'Cloud & Security Architect',
    },
    excerpt:
      'Key security practices for custom web applications: authentication hardening, data encryption, API rate limiting, and vulnerability auditing.',
    content: [
      'Security should never be an afterthought bolted on right before launch. In today’s interconnected digital landscape, building secure software requires embedding defensive practices throughout the entire development lifecycle.',
      'Key essentials include: enforcing strict role-based access control (RBAC), implementing rate limiting on all public API endpoints to prevent brute-force attacks, encrypting sensitive database columns at rest, and maintaining automated vulnerability scanning in your CI/CD pipeline.',
      'By adhering to these baseline principles, organizations protect their brand reputation, satisfy customer data privacy regulations (like GDPR and CCPA), and build long-term trust.',
    ],
    keyTakeaways: [
      'Embed security controls into the development cycle from sprint one, not right before release.',
      'Always implement API rate limiting, multi-factor authentication, and input sanitation.',
      'Maintain automated dependency security scanning in CI/CD pipelines.',
    ],
    tags: ['Security', 'Cloud Infrastructure', 'Data Privacy', 'Best Practices'],
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical custom software or web development project take?',
    answer:
      'Project timelines vary based on scope and complexity. A focused MVP or custom web portal typically takes 4 to 8 weeks, while complex enterprise platforms or multi-platform mobile apps generally range from 8 to 16 weeks. We provide a detailed milestone roadmap with clear sprint deliverables during our initial planning phase.',
    category: 'Development',
  },
  {
    id: 'faq-2',
    question: 'Who owns the intellectual property (IP) and source code of the project?',
    answer:
      'You own 100% of the intellectual property, code repository, database schemas, and digital assets upon completion of payment. We provide full repository access from day one, and you are never locked in.',
    category: 'Security & IP',
  },
  {
    id: 'faq-3',
    question: 'How do we communicate and track progress during development?',
    answer:
      'We believe in complete transparency. We conduct bi-weekly sprint reviews, provide you with access to private staging preview links, and maintain communication via your preferred channels (Slack, Microsoft Teams, or email) alongside structured milestone trackers.',
    category: 'General',
  },
  {
    id: 'faq-4',
    question: 'Do you provide maintenance and technical support after launch?',
    answer:
      'Yes. Every project includes a standard 30-day post-launch warranty period to resolve any unforeseen issues. Beyond launch, we offer flexible ongoing maintenance plans covering security patches, cloud server monitoring, database backups, and iterative feature enhancements.',
    category: 'Pricing & Support',
  },
  {
    id: 'faq-5',
    question: 'Can you work with our existing codebase or internal development team?',
    answer:
      'Absolutely. We regularly collaborate with existing internal engineering teams, perform code audits, modernize legacy components, or augment development capacity to accelerate your feature roadmap.',
    category: 'General',
  },
  {
    id: 'faq-6',
    question: 'What engagement and pricing models do you offer?',
    answer:
      'We offer flexible engagement models tailored to your project requirements: Fixed-Scope Projects for clearly defined deliverables, Dedicated Team / Sprint Retainers for evolving agile products, and Technical Consulting & Support on an hourly or monthly SLA basis.',
    category: 'Pricing & Support',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    name: 'Fixed-Scope Project',
    tagline: 'Ideal for clearly defined project requirements and fixed budgets.',
    features: [
      'Predetermined project scope & milestone deliverables',
      'Fixed cost and guaranteed timeline schedule',
      'Comprehensive discovery and planning upfront',
      '30-day post-launch warranty included',
    ],
    recommendedFor: 'Startups building an MVP, website redesigns, or specific software tool builds.',
  },
  {
    name: 'Dedicated Agile Team',
    tagline: 'Ideal for evolving products requiring continuous development.',
    features: [
      'Dedicated full-stack engineers and UI/UX designers',
      'Two-week agile sprints with flexible scope adjustments',
      'Direct team communication and daily stand-ups',
      'Scale team size up or down as needs evolve',
    ],
    recommendedFor: 'Growing companies, SaaS scale-ups, and long-term product iteration.',
  },
  {
    name: 'Consulting & Maintenance SLA',
    tagline: 'Ideal for technical advisory, code audits, and ongoing support.',
    features: [
      'Scheduled security patching & dependency upgrades',
      'Server health monitoring & automated database backups',
      'Priority SLA response times for urgent incidents',
      'Strategic architectural and technology advisory',
    ],
    recommendedFor: 'Businesses with existing applications needing dependable technical stewardship.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      'Pixevo Technologies delivered a clean, scalable custom dashboard and integrated our legacy inventory database seamlessly. Their engineering velocity, clear milestones, and strict attention to architecture helped us launch weeks ahead of schedule.',
    clientName: 'Sarah Jenkins',
    title: 'Chief Technology Officer',
    company: 'Apex Logistics & Supply Chain',
    projectScope: 'Custom Enterprise Portal & Cloud Migration',
    rating: 5,
    avatarInitials: 'SJ',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with the Pixevo team felt like having an elite in-house engineering department. They architected our cross-platform mobile application with fluid UX, rock-solid security, and automated CI/CD releases.',
    clientName: 'Marcus Vance',
    title: 'VP of Product Innovation',
    company: 'Kinetix Health & Wellness',
    projectScope: 'Cross-Platform iOS & Android Application',
    rating: 5,
    avatarInitials: 'MV',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-3',
    quote:
      'The AI automation pipeline Pixevo designed eliminated dozens of manual processing hours for our underwriting team. Their communication was transparent, responsive, and deeply grounded in real engineering best practices.',
    clientName: 'Elena Rostova',
    title: 'Head of Digital Operations',
    company: 'Crestview Financial Solutions',
    projectScope: 'Intelligent Document & AI Workflow Automation',
    rating: 5,
    avatarInitials: 'ER',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-4',
    quote:
      'From technical discovery through production deployment, Pixevo demonstrated exceptional craftsmanship. The web application is blazing fast, accessible, and structured for seamless scaling.',
    clientName: 'David Chen',
    title: 'Founder & Managing Director',
    company: 'NovaCore Technologies',
    projectScope: 'SaaS Platform Development & UI/UX Design',
    rating: 5,
    avatarInitials: 'DC',
    isPlaceholder: true,
  },
];

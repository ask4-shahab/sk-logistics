export const SITE = {
  phone: "966562950244",
  email: "kwsar@sklogistic.com",
  web: "sklogistic.com",
  address: "An Nahda, Riyadh- 13222, KSA",
};

export const ICONS = {
  truck:
    "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2 M15 18H9 M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.5 8H14 M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0 M15 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0",
  factory:
    "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z M17 18h1 M12 18h1 M7 18h1",
  hat: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5 M14 6a6 6 0 0 1 6 6v3 M4 15v-3a6 6 0 0 1 6-6 M3 15h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",
  store:
    "M3 9l1.5-5h15L21 9 M3 9v11h18V9 M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3 M9 20v-5h6v5",
  utensils:
    "M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3z M18 15v7",
  briefcase:
    "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16 M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
  filecheck:
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 15l2 2 4-4",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 7l-10 6L2 7",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20",
} as const;

export type IconName = keyof typeof ICONS;

export type Division = {
  key: string;
  icon: IconName;
  name: string;
  img: string;
  pos: string;
  tag: string;
  short: string;
  d1: string;
  d2: string;
  roles: string[];
};

export const DIVISIONS: Division[] = [
  {
    key: "logistics",
    icon: "truck",
    name: "Logistics Division",
    img: "/img/div-logistics.jpg",
    pos: "50% 50%",
    tag: "Streamlining Supply Chains Efficiently",
    short: "Warehouse staff, forklift operators, loaders, pickers and drivers.",
    d1: "Our Logistics Division focuses on optimizing supply chains through experienced personnel, ensuring timely deliveries and effective solutions that enhance operational efficiency across various sectors.",
    d2: "Warehouse staff, forklift operators, loaders, pickers, and drivers ensuring seamless supply chain continuity.",
    roles: ["Warehouse Supervisors", "Pickers & Packers", "Forklift Operators", "Loaders & Helpers", "Light Vehicle Drivers", "Heavy Vehicle Drivers"],
  },
  {
    key: "industrial",
    icon: "factory",
    name: "Industrial Division",
    img: "/img/div-industrial.jpg",
    pos: "50% 50%",
    tag: "Powering Manufacturing and Production",
    short: "Certified technicians, operators and maintenance specialists.",
    d1: "Our Industrial Division excels in providing compliance and efficient manpower solutions, ensuring robust operations that support diverse manufacturing processes while adhering to the highest safety standards.",
    d2: "Certified technicians, operators, and maintenance specialists supporting factories, plants, and industrial facilities.",
    roles: ["Technicians", "Operators", "Maintenance Specialists", "Welders & Fabricators", "General Laborers"],
  },
  {
    key: "construction",
    icon: "hat",
    name: "Construction Division",
    img: "/img/div-construction.jpg",
    pos: "50% 50%",
    tag: "Building the Future of KSA",
    short: "Skilled trades, supervisors and labor teams for mega-developments.",
    d1: "Our skilled workforce excels in project management, delivering high-quality construction services tailored to meet the evolving demands of Saudi Vision 2030 and national infrastructure projects.",
    d2: "Skilled trades, supervisors, and labor teams deployed for civil, structural, and mega-development projects.",
    roles: ["Site Supervisors", "Civil Engineers", "Carpenters & Steel Fixers", "Electricians & Plumbers", "Welders & Fabricators", "General Laborers"],
  },
  {
    key: "retail",
    icon: "store",
    name: "Retail Division",
    img: "/img/div-retail.jpg",
    pos: "50% 40%",
    tag: "Delivering Excellence in Service",
    short: "Sales associates, cashiers and merchandisers for malls and outlets.",
    d1: "Our Retail Division specializes in delivering agile, customer-focused manpower solutions tailored for dynamic retail environments. From high-end malls to fast-moving markets and dark stores, we ensure seamless operations and exceptional customer experiences.",
    d2: "We provide trained and presentable personnel who represent your brand on the frontlines while maintaining efficiency behind the scenes.",
    roles: ["Floor Managers", "Sales Promoters", "Cashiers", "Merchandisers", "Stock Controllers", "Inventory Clerks"],
  },
  {
    key: "hospitality",
    icon: "utensils",
    name: "Hospitality Division",
    img: "/img/div-hospitality.jpg",
    pos: "50% 40%",
    tag: "Delivering Excellence in Service",
    short: "Hospitality staff, cleaners and facility support for hotels.",
    d1: "Our trained professionals ensure guest satisfaction by providing exceptional service tailored to diverse client needs, enhancing the overall experience in the hospitality sector across Saudi Arabia.",
    d2: "Hospitality staff, cleaners, maintenance teams, and facility support personnel for hotels and managed properties.",
    roles: ["Hospitality Staff", "Cleaners", "Maintenance Teams", "Facility Support"],
  },
  {
    key: "corporate",
    icon: "briefcase",
    name: "Corporate Division",
    img: "/img/handshake.jpg",
    pos: "50% 50%",
    tag: "Administrative support for business environments",
    short: "Administrative professionals, accountants and front-desk officers.",
    d1: "Administrative professionals, accountants, front-desk officers, and operational coordinators for business environments.",
    d2: "Each placement follows our compliance and supervision frameworks, aligned with Saudi labor regulations.",
    roles: ["Administrative Assistants", "Accountants", "HR Coordinators", "Document Controllers", "Data Entry Clerks", "Office Support Staff"],
  },
];

export const getDivision = (key: string) => DIVISIONS.find((d) => d.key === key);

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Divisions" },
  { href: "/workforce", label: "Workforce" },
  { href: "/process", label: "Process" },
  { href: "/clients", label: "Clients" },
];

export const LOGOS = [
  "amazon", "keemart", "noon", "ninja", "skysales", "lulu", "dnata", "spm", "nesma", "alfanar", "riyadh-airports",
  "abusarhad", "binquraya", "nitaq", "pif", "kafd", "moi", "rawec", "fedex", "sports-blvd", "ihcc", "binladin",
].map((n) => `/img/logo-${n}.jpg`);

export const DRIVES = [
  { v: "2,500+", l: "Deployments", icon: "filecheck" as IconName, t: "Successfully mobilized manpower across infrastructure, construction, logistics, industrial, retail, and facility management projects throughout the Kingdom." },
  { v: "30+", l: "Active Clients", icon: "users" as IconName, t: "Established long-term partnerships with government entities, Tier-1 contractors, industrial groups, and private sector operators." },
  { v: "1,200+", l: "Active Manpower", icon: "hat" as IconName, t: "Maintaining a scalable workforce pool of skilled, semi-skilled, and general labor across multiple trades and industries." },
  { v: "3", l: "Strategic Operating Regions", icon: "pin" as IconName, t: "Structured deployment coverage across key regions in Saudi Arabia, enabling rapid mobilization and operational continuity." },
];

export const OPS = [
  { n: "01", t: "Workforce Demand", d: "We supply workers based on precise client requirements, ensuring the right skills, experience, and trade for each project without delays." },
  { n: "02", t: "Responsibility & Compliance", d: "All manpower supply follows Saudi labor regulations, including iqama management, contracts, insurance, and legal compliance for smooth operations." },
  { n: "03", t: "Relations", d: "We maintain strong communication with clients to understand project needs, workforce performance, and ensure continuous service improvement." },
  { n: "04", t: "Skilled & Trained Labor", d: "Our workforce includes trained professionals in construction, maintenance, industrial services, hospitality, and facility management sectors." },
  { n: "05", t: "Operational Efficiency", d: "We provide fast deployment, replacement support, and flexible manpower scaling to keep client projects running on schedule." },
  { n: "06", t: "Strategic Workforce Planning", d: "Our approach focuses on long-term manpower solutions that reduce costs, improve productivity, and enhance workforce stability." },
];

export const WHY = [
  { t: "Workforce", d: "Dedicated team of over 2,000 workers available.", img: "/img/why-workforce.jpg" },
  { t: "Multi-Sector", d: "Expertise across construction, industrial, and logistics sectors.", img: "/img/why-sector.jpg" },
  { t: "Fast Mobilization", d: "Rapid deployment of workforce when needed most.", img: "/img/why-mobilize.jpg" },
  { t: "Compliance", d: "Strict adherence to safety and legal standards.", img: "/img/why-compliance.jpg" },
  { t: "Client Satisfaction", d: "Committed to exceeding client expectations consistently.", img: "/img/why-client.jpg" },
  { t: "Safety", d: "Prioritizing a safe working environment for all.", img: "/img/why-safety.jpg" },
];

export const MISSION = [
  "To provide high-quality, skilled, and project-ready manpower that meets the operational needs of diverse industries across Saudi Arabia.",
  "To ensure seamless workforce deployment, continuous supervision, and strict compliance with Saudi labor laws and safety standards.",
  "To maintain consistent workforce performance through structured management, training, and operational monitoring systems.",
  "To build long-term partnerships by delivering dependable manpower services that enhance productivity, minimize risks, and ensure project continuity.",
];

export const WORKFORCE = [
  { name: "Retail & Mall Staff", roles: ["Floor Managers", "Sales Promoters", "Cleaner/janitor", "Stock Controllers", "Security Personnel", "Mall Operations Staff"] },
  { name: "Warehouse / Logistics", roles: ["Warehouse Supervisors", "Pickers & Packers", "Forklift Operators", "Loaders & Helpers", "Light Vehicle Drivers", "Heavy Vehicle Drivers"] },
  { name: "Stores / E-commerce", roles: ["Sales Associates", "Cashiers", "Store Helpers", "Merchandisers", "Customer Service Assistants", "Inventory Clerks"] },
  { name: "Medical", roles: ["Registered Nurses", "Nurse Assistants", "Lab Technicians", "Medical Receptionists", "Patient Care Assistants", "Cleaners & Support Staff"] },
  { name: "Construction / Technical", roles: ["Site Supervisors", "Civil Engineers", "Carpenters & Steel Fixers", "Electricians & Plumbers", "Welders & Fabricators", "General Laborers"] },
  { name: "Corporate", roles: ["Administrative Assistants", "Accountants", "HR Coordinators", "Document Controllers", "Data Entry Clerks", "Office Support Staff"] },
];

export const STEPS = [
  { n: "01", t: "Quotation", a: "Start by submitting a request for a quotation, contacting us directly via phone or email.", b: "Our Response: We will promptly provide a detailed quotation that includes the charges for our labor supply services. This quotation is tailored to your specific needs, considering the type of labor, duration, and any specialized skills required." },
  { n: "02", t: "Custom Company Plan", a: "Collaboration: Once you review and are satisfied with the quotation, we will work together to develop a customized labor plan. This plan will detail the number of labors needed, their specific skill sets, and the schedule for deployment.", b: "Confirmation: We ensure that the plan aligns perfectly with your operational needs and timelines." },
  { n: "03", t: "Staff Deployment", a: "Timely Deployment: We ensure the timely deployment of labor to your warehouse according to the agreed schedule.", b: "Seamless Integration: Our labors are trained to integrate seamlessly into your existing operations, ensuring minimal disruption and maximum productivity." },
  { n: "04", t: "Ongoing Support / Management", a: "Continuous Monitoring: Our management team continuously monitors the performance and attendance of our workers to maintain high standards of service.", b: "Client Feedback: Regular feedback sessions are conducted with you to ensure your satisfaction and to make any necessary adjustments to the labor force." },
];

export const CASES = [
  { name: "Ninja", logo: "/img/logo-ninja.jpg", t: "Supported operations across 118+ darks stores throughout KSA, including major cities and remote locations. Providing critical roles such as pickers, baristas, and put away staff ensuring smooth order processing and high-speed delivery operations." },
  { name: "Keemart", logo: "/img/logo-keemart.jpg", t: "Provided workforce and operational support for Keemart locations across Saudi Arabia with reliable and efficient service." },
  { name: "Amazon", logo: "/img/logo-amazon.jpg", t: "Supported warehouse operations with trained manpower while maintaining high operational standards and quality compliance. Followed all Saudi municipal regulations and best practices which boosted their workflow without any interruptions." },
];

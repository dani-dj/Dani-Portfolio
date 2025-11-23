import { ExperienceItem, SkillCategory, Project, BlogPost, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Daniel N",
  title: "SAP Senior Developer & Architect",
  tagline: "Bridging the gap between ABAP core and the Cloud future.",
  about: [
    "I am a passionate SAP Developer with over 5 years of experience in the SAP ecosystem. My journey began with classical ABAP and has evolved into cloud-native development on SAP BTP. I specialize in building robust, scalable enterprise applications using SAP RAP, CAP, and Fiori Elements. I believe in clean code, modern UI/UX, and the power of automation to transform business processes.",
    "Worked as a technical consultant in various implementation projects from different industries. I specialize in SAP ABAP development, which involves designing, developing and implementing custom solutions to various SAP modules such as MM, SD, GTS and FI that enhance business processes.",
    "Have working knowledge and experience with ABAP programming on Core ABAP, RESTful ABAP programming model (RAP), CDS, AMDP, table functions, OOABAP, SQL, and data modeling. Worked on various ABAP and HANA concepts such as ABAP Dictionary, Classical, Interactive and ALV reports, BTP cloud OData based Adobe forms and Smartforms, CDS/AMDP and Table Functions, RAP developments (Fiori elements, Managed and Unmanaged Scenario), Interfaces, OData Developments, SAP Enhancement Framework (BADI, User Exits), BAPI, Standard API Extension, Object oriented ABAP, ALE/IDOCs, BDC, Module Pool programming, ABAP on cloud and clean core strategy, RF developments, BRF+ Framework and Email Templates."
  ],
  email: "danieln8520@gmail.com",
  location: "Chennai, India"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp2',
    role: 'Senior Consultant',
    company: 'PricewaterhouseCoopers (PwC), Bengaluru, India',
    period: '2024 - Present',
    description: 'Specializing in designing, developing and implementing custom solutions for various SAP Modules. Proven track record of delivering high-quality solutions that enhance business processes and drive organizational efficiency',
    technologies: ['ABAP on HANA', 'OData V2', 'SAP Gateway', 'CDS Views', 'BOPF'],
    type: 'work',
    logoUrl: 'https://www.bworldonline.com/wp-content/uploads/2025/05/pwc-logo.jpg'
  },
  {
    id: 'exp3',
    role: 'Associate Consultant',
    company: 'PricewaterhouseCoopers (PwC), Bengaluru, India',
    period: '2021 - 2024',
    description: 'Specializing in designing, developing and implementing custom solutions for various SAP Modules. Proven track record of delivering high-quality solutions that enhance business processes and drive organizational efficiency',
    technologies: ['ABAP Classical', 'Smartforms', 'ALV', 'LSMW'],
    type: 'work',
    logoUrl: 'https://www.bworldonline.com/wp-content/uploads/2025/05/pwc-logo.jpg'
  },
  {
    id: 'edu1',
    role: 'M.B.A - Business Analytics',
    company: 'SRM Institute of Science and Technology',
    period: '2024 - 2025',
    description: 'Specialization in Business Analytics with a focus on data-driven decision-making, predictive modeling, and strategic business intelligence.',
    technologies: ['Management', 'Analytics'],
    type: 'education',
    logoUrl: 'https://promilo-prod.s3.ap-south-1.amazonaws.com/campaign/8a2080849a48a9ed019a49afbb070606/campaign_image/blob'
  },
  {
    id: 'edu2',
    role: 'B.Tech - Information Technology',
    company: 'Sathyabama Institute of Science and Technology',
    period: '2017 - 2021',
    description: 'Core curriculum focusing on algorithms, data structures, and business information systems.',
    technologies: ['Programming', 'Data Structures', 'Web Dev'],
    type: 'education',
    logoUrl: 'https://media.licdn.com/dms/image/v2/D5622AQFHFCp4_1zDHA/feedshare-shrink_800/B56ZboaJ.7H4Ag-/0/1747655898826?e=2147483647&v=beta&t=iQ6Lw76l9Jyl94kvnrPPmeoWJCGb7LVDXXPwx5APoZw'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "SKILLS",
    skills: [
      "Core ABAP",
      "Enhancements",
      "Interfaces",
      "BDC Programming",
      "BADI",
      "ALE IDOC",
      "ABAP on HANA",
      "Adobe Forms",
      "OData V2 & V4",
      "OO ABAP",
      "API Development",
      "BAPI",
      "ABAP on Cloud",
      "CDS/AMDP",
      "Clean Core",
      "SAP RF",
      "BRF+ Framework",
      "Cloud Forms",
      "Fiori elements",
      "RAP Model",
      "Conversion",
      "SQL",
      "Reports"
    ]
  },
  {
    category: "TOOLS",
    skills: [
      "ABAP Development Tools (ADT)",
      "SAP GUI",
      "SAP Gateway"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'S/4HANA Clean Core Migration',
    role: 'Lead Architect',
    description: 'Designed the strategy to move 500+ custom objects to a "Clean Core" approach using SAP BTP side-by-side extensibility and key user extensibility tools.',
    techStack: ['SAP BTP', 'Steampunk', 'Code Inspector'],
    imageUrl: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 'p2',
    title: 'Supplier Portal Fiori App',
    role: 'Full Stack Developer',
    description: 'Built a custom responsive Fiori application for external suppliers to track invoices and submit disputes in real-time, integrated with S/4HANA via OData.',
    techStack: ['SAPUI5', 'OData V4', 'RAP', 'CDS'],
    imageUrl: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: 'p3',
    title: 'Automated Code Review Bot',
    role: 'Developer',
    description: 'Created a CI/CD pipeline integration that automatically scans ABAP commits using ATC and posts results to Microsoft Teams.',
    techStack: ['Jenkins', 'Python', 'SAP ATC', 'Webhooks'],
    imageUrl: 'https://picsum.photos/600/400?random=3'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Understanding SAP RAP: Unmanaged vs Managed',
    excerpt: 'A deep dive into the two main flavors of the RESTful ABAP Programming model and when to use which.',
    date: 'Oct 12, 2023',
    readTime: '8 min read',
    tags: ['RAP', 'ABAP', 'Architecture']
  },
  {
    id: 'b2',
    title: 'Why I switched from Web IDE to BAS',
    excerpt: 'The transition to Business Application Studio was rocky at first, but here is why I can never go back.',
    date: 'Sep 28, 2023',
    readTime: '5 min read',
    tags: ['Tools', 'BTP', 'DevX']
  },
  {
    id: 'b3',
    title: 'Building your first CAP Application',
    excerpt: 'A step-by-step tutorial on creating a simple bookstore app using the Cloud Application Programming model.',
    date: 'Aug 15, 2023',
    readTime: '12 min read',
    tags: ['CAP', 'Node.js', 'Cloud']
  }
];
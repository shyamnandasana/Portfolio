export interface Project {
  id: string;
  name: string;
  technology: string[];
  description: string;
  features: string[];
  githubUrl: string;
  screenshot: string;
  category: string;
  architectureDetails?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  semester: string;
  degree: string;
  university: string;
  primaryBackend: string;
  shortBio: string;
  aboutContent: string[];
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
}

export const personalInfo: PersonalInfo = {
  name: "Shyam Nandasana",
  title: "Full Stack Developer | .NET Developer",
  tagline: "Computer Science Engineering student passionate about software development and building web applications using .NET technologies.",
  semester: "7th Semester",
  degree: "B.Tech in Computer Science Engineering",
  university: "Darshan University, Rajkot",
  primaryBackend: "C# & ASP.NET Core",
  email: "shyamnandasana@gmail.com",
  phone: "+91 93164 56706",
  location: "Jamnagar",
  githubUrl: "https://github.com/ShyamNandasana",
  linkedinUrl: "https://www.linkedin.com/in/shyam-nandasana/",
  resumePath: "/resume/Shyam_Nandasana_Resume.pdf",
  shortBio: "I'm a Computer Science Engineering student passionate about software development and building web applications using .NET technologies.",
  aboutContent: [
    "I am a Full Stack Developer skilled in ASP.NET Core with a strong track record of building real-world applications — from quiz platforms to project management systems.",
    "I am a collaborative team player who writes clean, maintainable code and picks up new technologies fast.",
    "My core focus and interest lie in software development and full-stack web applications, with a primary backend foundation in C#, ASP.NET Core MVC, and Web API.",
    "I have practical experience integrating relational databases with SQL Server, Entity Framework Core, ADO.NET, and Stored Procedures.",
    "My short-term goal is to start my career as a dedicated Software / .NET Developer where I can contribute to real-world projects, learn from senior engineers, and deliver reliable code."
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & API",
    description: "Core server-side engineering and API design focus",
    skills: [
      { name: "C#", highlight: true },
      { name: "Java" },
      { name: "Python" },
      { name: "ASP.NET Core", highlight: true },
      { name: "ASP.NET MVC" },
      { name: "ASP.NET Core Web API", highlight: true },
      { name: "REST API Integration" }
    ]
  },
  {
    title: "Database",
    description: "Relational database design, ORM, and query execution",
    skills: [
      { name: "SQL Server", highlight: true },
      { name: "Entity Framework Core", highlight: true },
      { name: "ADO.NET" },
      { name: "Stored Procedures" }
    ]
  },
  {
    title: "Frontend",
    description: "Responsive user interface and web template development",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Razor Views" },
      { name: "Next.js", highlight: true }
    ]
  },
  {
    title: "Strengths & Interests",
    description: "Soft skills and personal interests",
    skills: [
      { name: "Teamwork & Collaboration", highlight: true },
      { name: "Continuous Learning", highlight: true },
      { name: "Web Development" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "e-commerce-web-app",
    name: "E-Commerce Web Application",
    technology: [
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      "SQL Server"
    ],
    description: "A scalable E-Commerce platform featuring shopping cart and wishlist management, coupon validation, real-time order notifications, transaction-safe order processing with inventory management, simulated payment processing, along with end-to-end return and refund management.",
    features: [
      "Shopping cart & wishlist management",
      "Coupon validation",
      "Real-time order notifications",
      "Transaction-safe order processing with inventory management",
      "Simulated payment processing (COD)",
      "End-to-end return and refund management"
    ],
    githubUrl: "https://github.com/shyamnandasana/Ecommerce-Website",
    screenshot: "/projects/ecommerce-preview.svg",
    category: "Full Stack / .NET",
    architectureDetails: "Developed using ASP.NET Core MVC, ASP.NET Core Web API, and SQL Server."
  },
  {
    id: "quiz-management-system",
    name: "Quiz Management System",
    technology: [
      "ASP.NET Core MVC",
      "ADO.NET",
      "Stored Procedures"
    ],
    description: "An ASP.NET Core MVC web application to manage users, quizzes, questions, and quiz-wise question mappings, utilizing ADO.NET and stored procedures for secure, session-driven database operations.",
    features: [
      "User and admin management",
      "Quiz CRUD",
      "Question CRUD",
      "Quiz-question mapping",
      "Session-driven database operations",
      "Stored procedures for secure queries"
    ],
    githubUrl: "https://github.com/shyamnandasana/Quiz-Management-System",
    screenshot: "/projects/quiz-preview.svg",
    category: "Web Application",
    architectureDetails: "Utilizes ADO.NET and stored procedures for secure, session-driven database operations."
  },
  {
    id: "student-project-management",
    name: "Student Project Management System",
    technology: [
      "Next.js",
      "PostgreSQL",
      "Prisma"
    ],
    description: "A multi-role project management platform to streamline milestone tracking, meeting schedules, and document submissions.",
    features: [
      "Multi-role functionality",
      "Milestone tracking",
      "Meeting schedules management",
      "Document submissions",
      "PostgreSQL integration via Prisma ORM"
    ],
    githubUrl: "https://github.com/shyamnandasana/SPMS",
    screenshot: "/projects/spms-preview.svg",
    category: "Full Stack",
    architectureDetails: "Developed using Next.js, PostgreSQL, and Prisma to streamline academic project tracking."
  }
];

export const educationInfo = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Darshan University, Rajkot",
  status: "Expected 2027",
  description: "Pursuing Bachelor of Technology in CSE. Current CGPA: 7.82. Also completed 12th (GSHSEB) with 65% in 2023 at B.M. Patel Science School, Dhrol, and 10th (GSEB) with 92% in 2021 at The Patel Education System, Dhrol."
};

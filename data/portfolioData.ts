export interface TechnicalHighlight {
  title: string;
  badge?: string;
  description: string;
  keyDetails?: string[];
}

export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  technology: string[];
  description: string;
  features: string[];
  githubUrl: string;
  screenshot: string;
  category: string;
  architectureDetails?: string;
  technicalHighlights?: TechnicalHighlight[];
  roleContribution?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
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
      { name: "REST API Integration" },
      { name: "Brevo (Email/OTP)" }
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
    name: "ShopSphere E-Commerce Platform",
    subtitle: ".NET 8 MVC + Web API Dual-Tier Architecture",
    technology: [
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      ".NET 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "SignalR",
      "Razorpay",
      "Brevo (Email/OTP)",
      "JWT & Cookie Auth",
      "QuestPDF",
      "BCrypt",
      "Leaflet & OpenStreetMap"
    ],
    description: "An enterprise-grade dual-tier e-commerce platform built with ASP.NET Core MVC and ASP.NET Core Web API. Designed with a decoupled architecture featuring real-time SignalR push notifications, cryptographic Razorpay payment verification, Brevo (Sendinblue) transactional email & OTP authentication, concurrency-safe inventory management, in-memory PDF tax invoicing, and dual JWT/Cookie authentication.",
    architectureDetails: "Clean dual-tier architecture: ASP.NET Core MVC presentation layer communicates with an independent, headless ASP.NET Core Web API over HTTP with JWT Bearer tokens. Data persistence is managed via SQL Server and Entity Framework Core 8 with atomic transaction management.",
    roleContribution: "Engineered end-to-end full-stack development: architected the RESTful Web API, configured EF Core 8 with SQL Server, implemented JWT security, integrated the Razorpay payment gateway with HMAC verification, integrated Brevo (Sendinblue) for login and registration OTP delivery, created an in-memory QuestPDF tax invoice generator, and implemented responsive MVC Razor views with non-blocking SignalR and AJAX interactions.",
    technicalHighlights: [
      {
        title: "SignalR Real-Time Event System",
        badge: "WebSockets",
        description: "Lightweight server-to-client push over persistent WebSockets with targeted SignalR groups for instant notifications without client polling.",
        keyDetails: [
          "AdminChannel room receives live 'NewOrderPlaced' alerts upon checkout",
          "Order_{orderId} room pushes live status changes (Processing → Shipped → Delivered)",
          "Injected IHubContext<OrderHub> into MVC controllers with auto-reconnect on frontend"
        ]
      },
      {
        title: "Brevo API for Login & OTP Verification",
        badge: "Email / OTP",
        description: "Transactional email engine leveraging Brevo (Sendinblue) to dispatch secure, time-sensitive OTP verification codes for account login, registration, and password recovery.",
        keyDetails: [
          "Asynchronous OTP generation and transactional email dispatch via Brevo REST API / SMTP",
          "Seamless AJAX-driven OTP delivery and validation without clearing form inputs",
          "Secure time-based expiration and rate limiting for authentication integrity"
        ]
      },
      {
        title: "Razorpay Gateway & HMAC Verification",
        badge: "Payments",
        description: "Three-stage secure payment lifecycle with cryptographic server-side validation to prevent client-side data tampering.",
        keyDetails: [
          "Server-side order creation in paise (amount * 100) returning razorpay_order_id",
          "Server-side HMAC-SHA256 signature verification comparing hash with Razorpay secret",
          "Automated return and refund lifecycle management via PaymentService"
        ]
      },
      {
        title: "Dual Authentication Architecture",
        badge: "Security",
        description: "Hybrid authentication model separating stateless Web API security from stateful MVC browser sessions.",
        keyDetails: [
          "Stateless Web API secured with JWT Bearer tokens and SymmetricSecurityKey",
          "MVC presentation layer uses CookieAuthenticationDefaults and session storage",
          "ApiService attaches Bearer tokens to all outgoing backend HTTP requests",
          "Passwords hashed using BCrypt.Net with adaptive salt and work factor of 11"
        ]
      },
      {
        title: "Order Placement Concurrency & Stock Safety",
        badge: "EF Core 8",
        description: "Atomic database transactions and concurrency controls to prevent overselling during simultaneous checkout attempts.",
        keyDetails: [
          "Atomic validation, stock deduction, and cart cleanup in a single transaction",
          "Automatic restocking of product inventory upon order cancellation",
          "RowVersion concurrency handling to eliminate race conditions"
        ]
      },
      {
        title: "In-Memory PDF (QuestPDF) & CSV Reports",
        badge: "QuestPDF",
        description: "High-performance in-memory file streaming without creating temporary files on the server disk.",
        keyDetails: [
          "QuestPDF fluent layout generates deterministic A4 tax invoices directly into byte[]",
          "Eliminates server disk I/O bottlenecks and avoids disk storage cleanup routines",
          "RFC-4180 compliant sales CSV exports using System.Text.StringBuilder"
        ]
      },
      {
        title: "AJAX UI & Interactive Map Geocoding",
        badge: "Async UI",
        description: "Smooth, flicker-free user experience across shopping and address management workflows.",
        keyDetails: [
          "Non-blocking 'Add to Cart' and OTP requests using fetch with 'X-Requested-With' headers",
          "Leaflet.js interactive map with OpenStreetMap Nominatim forward & reverse geocoding",
          "Financial calculation engine using exact 128-bit decimal precision for coupons and discounts"
        ]
      }
    ],
    features: [
      "Dual-tier decoupled architecture (MVC presentation + RESTful Web API)",
      "Brevo (Sendinblue) API integration for login, registration & password recovery OTPs",
      "Real-time order & payment alerts via SignalR groups (AdminChannel & Order tracking)",
      "Razorpay payment gateway with server-side HMAC-SHA256 signature verification",
      "Stateless JWT Bearer API auth + Stateful MVC Cookie sessions & BCrypt hashing",
      "Transaction-safe inventory management & atomic stock updates",
      "In-memory tax invoice PDF generation via QuestPDF (zero disk I/O)",
      "Interactive Leaflet.js map with OpenStreetMap Nominatim reverse geocoding",
      "Financial precision coupon validation engine using decimal types",
      "AJAX cart operations, wishlist management, and async OTP verification",
      "Admin sales dashboard with RFC-4180 compliant CSV exports"
    ],
    githubUrl: "https://github.com/shyamnandasana/Ecommerce-Website",
    screenshot: "/projects/ecommerce-preview.svg",
    category: "Full Stack / .NET"
  },
  {
    id: "quiz-management-system",
    name: "Quiz Management System",
    subtitle: "Session-Driven Assessment Platform",
    technology: [
      "ASP.NET Core MVC",
      "ADO.NET",
      "Stored Procedures",
      "SQL Server"
    ],
    description: "An ASP.NET Core MVC web application to manage users, quizzes, questions, and quiz-wise question mappings, utilizing ADO.NET and stored procedures for secure, session-driven database operations.",
    features: [
      "User and admin management",
      "Quiz CRUD & Question CRUD",
      "Dynamic Quiz-question mapping",
      "Session-driven database operations",
      "Parameterized stored procedures for secure queries"
    ],
    githubUrl: "https://github.com/shyamnandasana/Quiz-Management-System",
    screenshot: "/projects/quiz-preview.svg",
    category: "Web Application",
    architectureDetails: "Utilizes ADO.NET and stored procedures for secure, session-driven database operations with SQL Server.",
    roleContribution: "Developed the ASP.NET Core MVC web application, structured the SQL Server database with stored procedures, and implemented session-based quiz administration and student testing workflows.",
    technicalHighlights: [
      {
        title: "ADO.NET & Stored Procedures",
        badge: "Database",
        description: "Direct SQL execution using parameterized stored procedures in ADO.NET for high execution speed and protection against SQL injection.",
        keyDetails: [
          "Parameterized queries ensuring robust security against SQL injection",
          "Optimized data retrieval via SqlDataReader for low-latency question loading",
          "Transactional quiz-question relational mapping operations"
        ]
      },
      {
        title: "Session State & Role Management",
        badge: "Security",
        description: "Role-based access control separating administrator quiz management from student exam sessions.",
        keyDetails: [
          "Secure session management tracking active quiz attempts and user state",
          "Dynamic question randomized retrieval and score calculations",
          "Comprehensive CRUD interface for quizzes, questions, and users"
        ]
      }
    ]
  },
  {
    id: "student-project-management",
    name: "Student Project Management System (SPMS)",
    subtitle: "Next.js App Router, PostgreSQL & Prisma ORM",
    technology: [
      "Next.js (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "JWT (jose)",
      "HttpOnly Cookies",
      "Edge Middleware",
      "bcryptjs",
      "Server Actions",
      "Tailwind CSS"
    ],
    description: "A comprehensive institutional platform engineered to streamline academic project administration, supervision, and tracking across engineering departments. Features specialized, role-protected workspaces for Administrators, Faculty Guides, and Student teams with automated guide allocations, milestone evaluations, meeting attendance logging, and an immutable institutional audit trail.",
    architectureDetails: "Built on Next.js App Router featuring Server-Side Rendering (SSR), Server Actions, and REST Route Handlers backed by PostgreSQL via Prisma ORM. Route security and Role-Based Access Control (RBAC) are strictly enforced at the network edge via Next.js Edge Middleware using tamper-proof HttpOnly JWT cookies.",
    roleContribution: "Engineered the end-to-end full-stack solution: modeled the normalized PostgreSQL relational database schema with Prisma ORM, built Edge Middleware with JWT cookie authentication and bcryptjs security, developed Next.js Server Actions for student and faculty mutations, and implemented three dedicated, role-specific dashboard suites.",
    technicalHighlights: [
      {
        title: "Edge Middleware & RBAC Security",
        badge: "Authentication",
        description: "Edge Middleware (middleware.ts) enforcing route protection, JWT token verification with jose, and role-based redirects across Admin, Faculty, and Student workspaces.",
        keyDetails: [
          "Secure session management using HttpOnly JWT cookies with Edge-compatible verification",
          "Automatic redirect guards preventing cross-role access (e.g. students accessing /admin)",
          "bcryptjs salted credential hashing for authentication storage"
        ]
      },
      {
        title: "Relational PostgreSQL Schema & Prisma ORM",
        badge: "Database",
        description: "Type-safe relational schema with strict foreign keys modeling multi-tier academic entities from user profiles to project groups, milestones, and grades.",
        keyDetails: [
          "Normalized schema linking Users, StudentProfile, FacultyProfile, and ProjectGroups",
          "Automated Prisma migrations and optimized relational queries using singleton PrismaClient",
          "Cascade relationships connecting Projects to Milestones, Meetings, Documents, and Grades"
        ]
      },
      {
        title: "Multi-Role Workspaces & Academic Workflows",
        badge: "Full Stack",
        description: "Three purpose-built dashboard environments tailored to the distinct operational needs of institutional stakeholders.",
        keyDetails: [
          "Admin: Master data (academic years, departments), automated guide allocation & college reports",
          "Faculty: Proposal approvals, review meeting scheduler, attendance logging & student grading",
          "Student: Group formation, proposal submission, task boards, and milestone deliverable uploads"
        ]
      },
      {
        title: "Meeting & Milestone Attendance Tracking",
        badge: "Workflows",
        description: "End-to-end project review lifecycle management tracking deadlines, deliverables, and student evaluation.",
        keyDetails: [
          "Milestone status tracking (Proposed, Approved, In Progress, Completed)",
          "Scheduled project review meetings with per-student attendance logging (MeetingAttendance)",
          "Centralized document repository for synopses, presentations, and final reports"
        ]
      },
      {
        title: "Server Actions & Immutable Audit Logging",
        badge: "Next.js Core",
        description: "Fast server-side mutation logic using Next.js Server Actions combined with automated institutional audit trails.",
        keyDetails: [
          "Server actions (faculty.ts, student.ts) handling grading, attendance, and task assignments",
          "Centralized audit trail (lib/activity.ts) logging every proposal, approval, and meeting note into ActivityLog",
          "REST API route handlers supporting file uploads, search, and CSV/Excel reporting"
        ]
      }
    ],
    features: [
      "Three distinct role dashboards: Admin/Coordinator, Faculty/Guide, and Student",
      "Next.js Edge Middleware for route protection and RBAC with HttpOnly JWT cookies",
      "Relational PostgreSQL schema with Prisma ORM (Users, Groups, Milestones, Meetings)",
      "Automated and manual faculty guide allocation engine",
      "Milestone submission tracking with status deadlines & document uploads",
      "Faculty review meeting scheduler with per-student attendance logging",
      "Student team formation, member invitations, and task board management",
      "Immutable institutional audit trail logging all actions via ActivityLog",
      "Departmental statistics, global search, and Excel/CSV report generation",
      "Bcryptjs salted hashing for credential storage and profile management"
    ],
    githubUrl: "https://github.com/shyamnandasana/Student-Project-Management-System",
    screenshot: "/projects/spms-preview.svg",
    category: "Full Stack"
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech – Computer Science & Engineering",
    field: "Computer Science & Engineering",
    institution: "Darshan University",
    location: "Rajkot, Gujarat",
    period: "2023 – 2027",
    score: "7.82 CGPA",
    scoreLabel: "Current CGPA",
    status: "Pursuing (7th Semester)",
    isCurrent: true,
    description: "Pursuing Bachelor of Technology with hands-on focus in .NET Core, C#, ASP.NET MVC, Web API, SQL Server relational database engineering, and modern full-stack web applications.",
    highlights: [
      "Core Specialization: C#, ASP.NET Core, EF Core, SQL Server",
      "7th Semester Active Engineering Student",
      "Practical project implementations in E-Commerce, Quizzing, and Academic Portals"
    ]
  },
  {
    id: "12th-science",
    degree: "Higher Secondary Certificate (12th Science – GSHSEB)",
    field: "Science Stream (Group A – Mathematics)",
    institution: "B.M. Patel Science School",
    location: "Dhrol, Gujarat",
    period: "2022 – 2023",
    score: "65%",
    scoreLabel: "Boa  rd Result",
    status: "Completed",
    description: "Completed Higher Secondary education under the Gujarat Secondary and Higher Secondary Education Board (GSHSEB) with major focus in Mathematics, Physics, and Chemistry.",
    highlights: [
      "Science Stream (Mathematics group)",
      "Strong analytical and problem-solving foundation"
    ]
  },
  {
    id: "10th-board",
    degree: "Secondary School Certificate (10th Board – GSEB)",
    field: "General Education",
    institution: "The Patel Education System",
    location: "Dhrol, Gujarat",
    period: "2020 – 2021",
    score: "92%",
    scoreLabel: "Academic Distinction",
    status: "Completed with Distinction",
    description: "Graduated secondary school education with distinction under Gujarat Secondary Education Board (GSEB), securing 92% marks.",
    highlights: [
      "Secured 92% Academic Distinction",
      "Top-tier mathematics and science performance"
    ]
  }
];

export const educationInfo = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Darshan University, Rajkot",
  status: "2023-2027",
  description: "Pursuing Bachelor of Technology in CSE. Current CGPA: 7.82. Also completed 12th (GSHSEB) with 65% in 2023 at B.M. Patel Science School, Dhrol, and 10th (GSEB) with 92% in 2021 at The Patel Education System, Dhrol."
};

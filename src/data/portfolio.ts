export const portfolioData = {
  name: "Muhammed Hashir Musthafa",
  title: "Software Developer",
  roles: ["Software", "Full Stack", "Web", "Frontend", "Backend"],
  bio: "Passionate Software Developer experience in building scalable web applications. I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code architecture.",
  email: "ihashirmusthafa@gmail.com",
  linkedin: "https://linkedin.com/in/muhammed-hashir-musthafa",
  github: "https://github.com/muhammed-hashir-musthafa",

  stats: {
    experience: 2,
    projects: 10,
    technologies: 21,
  },

  skills: [
    { name: "HTML", level: 100, category: "Frontend"},
    { name: "CSS", level: 100, category: "Frontend"},
    { name: "JavaScript", level: 100, category: "Frontend"},
    { name: "React.js", level: 100, category: "Frontend"},
    { name: "Next.js", level: 100, category: "Frontend"},
    { name: "TypeScript", level: 100, category: "Frontend"},
    { name: "Tailwind CSS", level: 100, category: "Frontend"},
    { name: "Material UI", level: 100, category: "Frontend"},
    { name: "ShadCN", level: 100, category: "Frontend"},
    { name: "Node.js", level: 100, category: "Backend"},
    { name: "Express.js", level: 100, category: "Backend"},
    { name: "Python", level: 100, category: "Backend"},
    { name: "C#", level: 100, category: "Backend" },
    { name: ".NET", level: 100, category: "Backend"},
    { name: "WebSockets", level: 100, category: "Backend"},
    { name: "PostgreSQL", level: 100, category: "Database"},
    { name: "MySQL", level: 100, category: "Database"},
    { name: "MongoDB", level: 100, category: "Database"},
    { name: "Redis", level: 100, category: "Database"},
    { name: "Docker", level: 100, category: "DevOps & Tools"},
    { name: "AWS", level: 100, category: "DevOps & Tools"},
    { name: "GitHub", level: 100, category: "DevOps & Tools"},
    { name: "Postman", level: 100, category: "DevOps & Tools"},
    { name: "Jest", level: 100, category: "DevOps & Tools"},
    { name: "CI/CD", level: 100, category: "DevOps & Tools"},
  ],

  experience: [
    {
      company: "Lampros Virtual Build Mart Pvt. Ltd.",
      role: "Full Stack Developer",
      duration: "Feb 2025 - Present",
      description:
        "Leading development of enterprise SaaS platform serving 10K+ users",
      achievements: [
        "Architected microservices infrastructure reducing latency by 40%",
        "Implemented real-time collaboration features using WebSockets",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Bridgeon Solution LLP",
      role: "MERN Full Stack Developer",
      duration: "Mar 2024 - Feb 2025",
      description: "Built and scaled MVP to production with 50K+ active users",
      achievements: [
        "Developed RESTful APIs handling 1M+ requests daily",
        "Optimized database queries improving performance by 60%",
        "Integrated payment systems and third-party APIs",
      ],
    },
  ],

  projects: [
    {
      title: "Ijara Hub - Property & Vehicle Rental Management System",
      description:
        "A full-stack rental marketplace for property and vehicle rentals in the UAE, connecting owners and renters through a secure and scalable platform",
      image: "/ijara-hub.png",
      tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Socket.io", "AWS (EC2, S3)", "Docker", "GitHub Actions", "JWT", "OAuth 2.0", "AI Chatbot"],
      github: "https://github.com/muhammed-hashir-musthafa/ijara-hub",
      demo: "https://ijara-hub.vercel.app",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack marketplace with payment integration and inventory management",
      image: "/projects/ecommerce.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com/alexmorgan/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates",
      image: "/projects/taskmanager.jpg",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Docker"],
      github: "https://github.com/alexmorgan/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      featured: true,
    },
    {
      title: "Social Media Aggregator",
      description:
        "Unified dashboard for managing multiple social media accounts",
      image: "/projects/social.jpg",
      tech: ["React", "Express", "MongoDB", "OAuth", "Redis"],
      github: "https://github.com/alexmorgan/social-aggregator",
      demo: "https://social-demo.vercel.app",
      featured: false,
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with location-based forecasts",
      image: "/projects/weather.jpg",
      tech: ["Next.js", "TypeScript", "OpenWeather API", "Tailwind"],
      github: "https://github.com/alexmorgan/weather-app",
      demo: "https://weather-demo.vercel.app",
      featured: false,
    },
    {
      title: "Cure Track - Health Care Management System",
      description: "SaaS tool for managing healthcare operations and patient records",
      image: "/cure-track.png",
      tech: ["Next.js", "React Query", "Zustand", "Tailwind CSS", "TypeScript", "Express.js", "MongoDB", "Razorpay"],
      github: "https://github.com/muhammed-hashir-musthafa/CureTrack-Client",
      // demo: "https://portfoliogen.vercel.app",
      featured: false,
    },
  ],

  services: [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies",
      icon: "Globe",
      features: [
        "Responsive Web Design",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
      ],
    },
    {
      title: "Application Development",
      description:
        "Full-stack web applications with robust backend systems",
      icon: "Code",
      features: [
        "Custom Web Applications",
        "Enterprise Software Solutions",
        "SaaS Platform Development",
      ],
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs",
      icon: "Laptop",
      features: [
        "ERP Systems",
        "CRM Solutions",
        "Inventory Management Software",
        "Booking & Reservation Systems",
      ],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete online store development with payment integration",
      icon: "ShoppingCart",
      features: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management Systems",
      ],
    },
    {
      title: "Portfolio Websites",
      description:
        "Stunning portfolio websites to showcase your work professionally",
      icon: "Briefcase",
      features: [
        "Personal Portfolio Sites",
        "Creative Agency Portfolios",
        "Photography Portfolios",
      ],
    },
    {
      title: "Business Websites",
      description:
        "Professional business websites to establish your online presence",
      icon: "Building2",
      features: [
        "Corporate Websites",
        "Landing Pages",
        "Business Management Portals",
      ],
    },
    {
      title: "API Development",
      description:
        "Scalable RESTful and GraphQL APIs with comprehensive documentation",
      icon: "Server",
      features: [
        "RESTful API Development",
        "Third-party API Integration",
        "GraphQL API Development",
      ],
    },
  ],
};

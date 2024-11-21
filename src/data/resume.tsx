import { Icons } from "@/components/icons";
import { Certificate } from "crypto";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Daniel Seta",
  initials: "DV",
  url: "https://dillion.io",
  location: "Lusaka, Zambia",
  locationLink: "https://maps.app.goo.gl/qxEBiWX9u5AwNfUp7",
  description:
    "I'm a digital dreamer, turning pixels into magic! As a UI/UX designer. And as an aspiring frontend developer, I'm excited to bring those designs to life with clean code. Let's build something awesome together!.",
  summary:
    "My journey began with a fascination for graphics and UI/UX design, where I honed my skills in creating visually appealing and user-friendly interfaces. As my interests evolved, I ventured into the realm of frontend development, eager to bring my designs to life through code. I'm excited about the opportunities to collaborate with talented teams and contribute to innovative projects.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Ui/Ux",
    "Graphics Design",
    "Photography",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "danielseta37@gmail.com",
    tel: "+260 097 328 7008",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Danielseta",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-seta-4449b12a3",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "Threads",
        url: "https://www.threads.net/@ui.daniel_seth",
        icon: Icons.x,

        navbar: true,
      
      },
      email: {
        name: "Send Email",
        url: "https://www.danielseta37@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "imbra",
      href: "https://imbra.co.zm/",
      badges: [],
      location: "Lusaka, Zambia",
      title: "Ui/Ux Designer",
      logoUrl: "/imbr.png",
      start: "September 2024",
      end: "Present",
      description:
        "As a dedicated UI/UX Designer with a growing interest in frontend development, I'm passionate about creating user-centered digital experiences that are both visually appealing and highly functional. I'm skilled in Figma, Adobe XD, HTML, CSS, JavaScript and eager to apply my knowledge and skills to contribute to IMBRA's innovative projects. I'm excited about the opportunity to collaborate with a talented team and learn from experienced professionals.",
    },
    {
      company: "InterWebb",
      badges: [],
      href: "https://www.inter-webb.com/",
      location: "Lusaka, Zambia",
      title: "Ui/Ux Designer / Junior Frontend Dev",
      logoUrl: "/inter.png",
      start: "January 2023",
      end: "Present",
    },
    {
      company: "Forte Digital Solution",
      href: "",
      badges: [],
      location: "Lusaka, Zambia",
      title: "Frontend Developer",
      logoUrl: "/forte.png",
      start: "Aug 2024",
      end: "Aug 2024",
    },
    {
      company: "JBSims Consultancy",
      href: "https://www.jbsimsconsultancy.com",
      badges: [],
      location: "Lusaka, Zambia",
      title: "IT intern",
      logoUrl: "/jb.png",
      start: "May 2024",
      end: "Aug 2024",
      },
    {
      company: "JBSims Consultancy",
      href: "https://www.jbsimsconsultancy.com",
      badges: [],
      location: "Lusaka, Zambia",
      title: "IT intern",
      logoUrl: "/jb.png",
      start: "May 2023",
      end: "Aug 2023",
      },
    {
      company: "Zuha Africa Youth Organisation",
      href: "",
      badges: [],
      location: "Mongu, Zambia",
      title: "Graphics Designer",
      logoUrl: "/zuha.png",
      start: "January 2019",
      end: "Present",
    },
    {
      company: "RDG Collective",
      href: "https://rdg-home.com/",
      badges: [],
      location: "Lusaka, Zambia",
      title: "Sales Attendant",
      logoUrl: "/rdg (2).png",
      start: "May 2020",
      end: "September  2020",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "St John's Scondary School",
      href: "",
      Certificate: "Grade 12 (8B-12B)",
      logoUrl: "/buildspace.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "Rocview University",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree in ICT",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;

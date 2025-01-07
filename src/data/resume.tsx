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
    "I'm a UI/UX designer and aspiring frontend developer. Let's create amazing digital experiences together!.",
  summary:
    "Fascinated by graphics and UI/UX design, I honed my skills in creating visually appealing and user-friendly interfaces. Eager to bring my designs to life, I ventured into frontend development. Excited to collaborate on innovative projects.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Ui/Ux",
    "Graphics Design",
    "Photography",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      company: "InterWebb",
      badges: [],
      href: "https://www.inter-webb.com/",
      location: "Lusaka, Zambia",
      title: "Ui/Ux Designer / Junior Frontend Dev",
      logoUrl: "/inter.png",
      start: "January 2023",
      end: "Present",
      description: "",
    },
    {
      company: "imbra",
      href: "https://imbra.co.zm/",
      badges: [],
      location: "Lusaka, Zambia",
      title: "Ui/Ux Designer",
      logoUrl: "/imbr.png",
      start: "September 2024",
      end: "December 2024",
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
      description: "",
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
      description: "",
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
      degree: "Certiicate Grade 12 (8B-12B)",
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
} as const;

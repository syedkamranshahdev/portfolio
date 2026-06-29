export const siteConfig = {
  name: "Syed Kamran Shah",
  shortName: "Kamran",
  role: "AI Full-Stack Developer",
  email: "kami.webdev7@gmail.com",
  description:
    "AI full-stack developer building SaaS products, client portals, RAG applications, and business automation systems.",
  location: "Available for remote collaboration",
  availability: "Available for select projects",
  portrait: "/syed-kamran-shah.jpg",
  resume: "/syed-kamran-shah-resume.pdf",
  socials: {
    github: "https://github.com/syedkamranshahdev",
    linkedin: "https://www.linkedin.com/in/syed-kamran-shah-19737a382/",
    email: "mailto:kami.webdev7@gmail.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const videoWalkthroughs = [
  {
    title: "AI Video Assistant",
    description: "A product walkthrough covering transcription, structured insights, and transcript-grounded chat.",
    duration: "~2 min",
    src: "https://res.cloudinary.com/did4wfpal/video/upload/v1782713614/0628_quxwzy.mp4",
    poster: "https://res.cloudinary.com/did4wfpal/video/upload/so_0,f_jpg/v1782713614/0628_quxwzy.jpg",
    available: true,
  },
  {
    title: "Capacity Lab OS",
    description: "A product walkthrough of the onboarding, member experience, connected-signal analytics, and wellness workflows.",
    duration: "~2 min",
    src: "https://res.cloudinary.com/did4wfpal/video/upload/v1782714890/0628_1_1_1_1_okfwp8.mp4",
    poster: "https://res.cloudinary.com/did4wfpal/video/upload/so_0,f_jpg/v1782714890/0628_1_1_1_1_okfwp8.jpg",
    available: true,
  },
] as const;

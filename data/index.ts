import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "About Me",
description: "I'm Parth Jain, a passionate full-stack developer and tech enthusiast. I specialize in building modern web applications with React, Next.js, and TypeScript. With a keen eye for clean code and user experience, I create innovative solutions that make an impact. I'm driven by continuous learning and collaborating with amazing teams.",
    title2: "Education",
    description2: "Passionate developer & open-source contributor",
    description3: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Full Stack Developer",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Technical Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

 
] as const;

export const projects = [
  {
    id: 1,
    title: "TanyaAi - Mobile App",
    des: "An AI-powered mobile app for answering questions, providing insights, and assisting with various tasks.",
    img: "/tanyaai.png",
    iconLists: ["/java.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 2,
    title: "Student Graduation Web",
    des: "A student graduation web displays graduation details, student achievements, event schedules, and certificates.",
    img: "/lulus.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 3,
    title: "Semarang City FLS3N Submission and Evaluation Portal",
    des: "A platform for submitting and evaluating student works in the FLS3N (National Student Art Festival and Competition)",
    img: "/fls.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 4,
    title: "Financial Record System for Coffee Shop",
    des: "A system for tracking a coffee shop's income, expenses, and transactions.",
    img: "/cof.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 5,
    title: "Coffeeshop Landing Page",
    des: "A coffeeshop landing page introduces the brand, showcases the menu, promotions, location, and simplifies ordering.",
    img: "/gcc.png",
    iconLists: ["/tailwind.svg", "/php.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 6,
    title: "Portofolio Design Graphic",
    des: "A showcase of design works, creativity, and skills to highlight expertise and experience.",
    img: "/graphic.png",
    iconLists: ["/illustrator.svg", "/photoshop.svg"],
    link: "",
    sourceCode: "",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Photosop",
    img: "/photoshop.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "illustrator",
    img: "/illustrator.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Laravel",
    img: "/laravel.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Sql",
    img: "/mysql.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Ts",
    img: "/three.svg",
    nameImg: "/dockerName.svg",
  },

  {
    id: 6,
    name: "three",
    img: "/brandtypescript.svg",
    nameImg: "/dockerName.svg",
  },

  {
    id: 7,
    name: "next",
    img: "/nextjs.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "next",
    img: "/blender.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "next",
    img: "/php.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "next",
    img: "/java.svg",
    nameImg: "/dockerName.svg",
  },
] as const;


export const socialMedia = [
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "",
  },
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ParthJain02",
  },
  {
    name: "Behance",
    img: "/behance.svg",
    link: "",
  },

] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;

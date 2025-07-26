import { TechM_logo_ } from "../assets/images";
import {
  contact,
  css,
  pdf,
  python,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  typescript,
  Cpp,
  java,
  openai,
  cloud,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
},
{
  imageUrl: Cpp,
  name: "C++",
  type: "Backend",
},
    {
    imageUrl: openai,
    name: "Open-AI",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: cloud,
    name: "Cloud",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tech Mahindra",
    icon: TechM_logo_,
    iconBg: "#accbe1",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using flask framework and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Shivam67653",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shivam-shresth-5b825a1b4/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI LLAMA_chatbot",
    description:
      "App that leverages AI to automatically generate concise & informative chats similar to Chat-GPT or any other AI and uses LLAMA model to operate.",
    link: "https://github.com/Shivam67653/LLAMA_chatbot",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Red Store",
    description:
      "Front-end application built for online shopping and is similar to large scale e-shopping apps",
    link: "https://github.com/Shivam67653/Shivam_RedStore",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Plant-leaf-disease-prediction",
    description:
      "Built a complete code for tomato and potato leaf disease detection using classic CNN models and Transfer Learning Techniques. The maximum accuracy for tomato leaf disease prediction has been found to be 97.08% whereas for potato leaf disease prediction, it was found to be 96.67%.",
    link: "https://github.com/Shivam67653/Plant_Leaf_Disease_Prediction",
  },
  {
    iconUrl: pdf,
    theme: "btn-back-black",
    name: "Pdf-Chat AI",
    description:
      "An Application using Springboot , AstraDB and LangChain4J where the application will search for user queries in from the pdf using GPT-3/GPT-4.",
    link: "https://github.com/Shivam67653/pdf-chatAI",
  },
];

import {
  frontendDeveloper,
  backendDeveloper,
  database,
  ui,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  expressjs,
  tailwind,
  bootstrap,
  mui,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  jest,
  nextjs,
  westernDigital,
  frontierTech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skill",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontendDeveloper,
  },
  {
    title: "Backend Developer",
    icon: backendDeveloper,
  },
  {
    title: "Database",
    icon: database,
  },
  {
    title: "UX/UI",
    icon: ui,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MUI",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Western Digital",
    icon: westernDigital,
    iconBg: "#383E56",
    date: "April 2018 - Curent",
    points: [
      "Designed and implemented maintenance system for technicians to manage cells in the tester machine.",
      "Developed real-time dashboard web application, allowing engineers and technicians to monitor the abnormal status of tester machines.",
      "Mentored 2 new junior front-end developers and 2 internship students on team in expanding JavaScript, React and Git skillset.",
      "Developed configuration system to allow the software team to configure all software components the tester machine.",
      "Designed and implemented a help desk system for issue and incident tracking.",
      "Worked with Automation Development team to implement a real-time dashboard to track conveyor, robot arm, and AGV statuses.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Frontier Tech",
    icon: frontierTech,
    iconBg: "#E6DEDD",
    date: "May 2017 - April 2018",
    points: [
      "Developed Rest API for communicating between Mobile Application and MongoDB.",
      "Developed Housing Research (NHA) Web application for searching research papers.",
    ],
  },
];

export { services, technologies, experiences };

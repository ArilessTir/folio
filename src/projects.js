import breast from "./assets/breast.jpg";
import titanic from "./assets/titanic.jpg";
import airplane from "./assets/airplane.jpg";
import churn from "./assets/client.jpg";
import codia from "./assets/Codia.png";
export const projects = [
  {
    id: 0,
    name: "Codia",
    description: `Web application where you can find articles,
    exercices and courses (MVP)`,
    techno: ["Python", "Reactjs", "Firebase", "Tailwind", "Gsap"],
    link: "https://codia.netlify.app/",
    image: codia,
  },
  {
    id: 1,
    name: "Breats Cancer",
    description: "An end to end ML project, for breast cancer prediction",
    techno: ["Python", "SKlearn", "MlFlow", "React", "FastAPI", "Docker"],
    link: "https://github.com/ArilessTir/breast-pred",
    image: breast,
  },
  {
    id: 2,
    name: "Titanic",
    description: "An end to end ML project, with the famous titanic dataset",
    techno: ["Python", "SKlearn", "Flask", "Postgresql", "Docker"],
    link: "https://github.com/ArilessTir/titanic-app",
    image: titanic,
  },
  {
    id: 3,
    name: "Churn",
    description: "An end to end ML project for churn prediction",
    techno: ["Python", "FastApi", "Sklearn", "Postgresql", "Docker"],
    link: "https://github.com/ArilessTir/churn",
    image: churn,
  },
  {
    id: 4,
    name: "Airplane Delay ",
    description:
      "The goal of this project is to build ml pipeline and track experimentation on AWS ",
    techno: ["Python", "Sklearn", "Mflow", "AWS", "Postrgres", "S3"],
    link: "https://github.com/ArilessTir/airlines-delay",
    image: airplane,
  },
];

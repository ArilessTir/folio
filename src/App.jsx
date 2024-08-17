import React, { useEffect } from "react";
import gsap from "gsap";
import { CSSRulePlugin, ScrollTrigger } from "gsap/all";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card/card";
import face from "./assets/ariless.jpg";
import { projects } from "./projects";

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    console.log(projects);
    let titleSpan = CSSRulePlugin.getRule(".title__item:after");

    const workTl = gsap.timeline();

    gsap.to(titleSpan, {
      cssRule: {
        scaleX: 0,
        transformOrigin: "left",
      },
      duration: 1,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="Header">
        <div className="header__title">
          <h1 className="title__item"> Hi , I am Ariless </h1>
          <h1 className="title__item"> ML Engineer </h1>
        </div>

        <div className="header__bottom">
          <div className="bottom__scroll">
            <span className="scroll__txt"> scroll</span>
            <div className="scroll__line"></div>
          </div>
          <span className="bottom__location"> Lille, France</span>
        </div>
      </header>

      <section className="Work">
        <h1 className="work__title">WORK</h1>
        <div className="work__flex">
          {projects.map((project) => {
            return <Card id="Card" key={project.id} data={project} />;
          })}
        </div>
      </section>

      <section className="About">
        <h1 className="about__title"> ABOUT </h1>
        <div className="about__image">
          <img src={face} alt="" />
        </div>
        <p className="about__desc">
          My journey in computer science and data began in 2015 when I pursued studies in statistics and computer science at l'Université de Lille. 
          During this time, I gained practical experience working as a Data Analyst at La Poste through a two-year work-study contract. 
          I continued my education with a master's degree in computer science at L'Université Catholique de Lille, complemented by a work-study role at Cerfrance as a Data Scientist, where I had the opportunity to build and deploy machine learning projects.
          After completing my studies, I joined CGI as a Data Engineer, where I worked on data projects for a retail client near Lille.
          Recently, I transitioned to a new role as a Machine Learning Engineer at BNP Paribas in Lisbon, where I continue to deepen my expertise in Machine Learning and MLOps techniques.
          I am passionate about Machine Learning and MLOps, and I am actively seeking new opportunities or missions in these areas. If you believe we could be a good match, please don't hesitate to reach out. 😊
        </p>
      </section>

      <section className="Contact">
        <a className="link_item" href="https://github.com/ArilessTir" target="_blank">
          GITHUB
        </a>
        <a className="link_item" href="mailto: ariless.tir@gmail.com">
          EMAIL
        </a>
        <a
          className="link_item"
          href="https://www.linkedin.com/in/ariless-tir-360b6a164/"
          target="_blank"
        >
          LINKEDIN
        </a>
      </section>
    </div>
  );
}

export default App;

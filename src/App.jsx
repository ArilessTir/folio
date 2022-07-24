import React, { useEffect } from "react";
import gsap from "gsap";
import { CSSRulePlugin, ScrollTrigger } from "gsap/all";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card/card";
import face from "./assets/face.jpg";
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
          <h1 className="title__item"> Data scientist</h1>
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
          My journey in computer science and data started in 2015, where I
          studied statistics and computer science at the university of Lille. In
          parallel I worked two years in work-study contracts for La Poste as a
          data analyst. Then I continued my education in master computer science
          at the Catholic University of Lille, with a contract in work-study
          contracts at Cerfrance as a Data Scientist, where I could work on
          machine learning projects. Today I work for CGI as a Data Engineer for
          a retail client, near Lille. So if you think we can match feel free
          ton contact me.
        </p>
      </section>

      <section className="Contact">
        <a className="link_item" href="https://github.com/">
          GITHUB
        </a>
        <a className="link_item" href="mailto: ariless.tir@gmail.com">
          EMAIL
        </a>
        <a
          className="link_item"
          href="https://www.linkedin.com/in/ariless-tir-360b6a164/"
        >
          LINKEDIN
        </a>
      </section>
    </div>
  );
}

export default App;

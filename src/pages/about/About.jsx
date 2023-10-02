import React from "react";
import Info from "../../Components/Info";
import Stats from "../../Components/Stats";
import { resume } from "../../data";
import Resume from "../../Components/Resume"
import "./About.css";

function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About<span>Me</span>
        </h2>
      </section>

      <div className="about__container grid">
        <div className="about__info">
          <h3 className="section__subtitle">Persona Infos</h3>
          <ul className="info__list grid">
            <Info />
          </ul>
          {/* <a href="" className="button">Download CV</a> */}
        </div>
        <div className="stats grid">
          <Stats />
        </div>
      </div>

      <div className="seprator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Education</h3>
        <div className="resume__container grid">
          <div className="resume__data">
          {resume.map((val)=>{
            if(val.category==='experience'){
              return <Resume key = {val.id} {...val}/>;
            }
          })}

          </div>
          <div className="resume__data">
          {resume.map((val)=>{
            if(val.category==='education'){
              return <Resume key = {val.id} {...val}/>;
            }
          })}

          </div>


        </div>
      </section>
    </main>
  );
}

export default About;

import React from "react";
import girlskill from "../images/girl-skill.svg";
import react from "../images/reactjs.png";
import nextjs from "../images/nextjs.png";
import angular from "../images/angular.png";
import redux from "../images/Redux.png";

import "../styles/Skills.css";
export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript"],
      icons: "javascript",
    },
    {
      category: "Front-end Technologies",
      skills: ["React", "Redux", "Angular", "Next"],
      icons: "data_object",
      images: [react, nextjs, redux, angular],
    },
    {
      category: "Web Technologies",
      skills: ["HTML/CSS", "Tailwind", "Bootstrap", "Material UI"],
      icons: "css",
    },
    {
      category: "Version Control",
      skills: ["Git", "Github", "Gitlab"],
      icons: "terminal",
    },
    {
      category: "Data Visualization/BI",
      skills: ["Apache Superset", "Preset"],
      icons: "all_inclusive",
    },
    {
      category: "Testing",
      skills: ["Cypress", "TestRails", "E2E TEsting", "Regression Testing"],
      icons: "bug_report",
    },
  ];

  return (
    <div className=" skills">
      <div className=" relative container flex justify-between skill-temp m-auto items-center">
        <div className="">
          <h2 className="text-4xl font-semibold">My Skills</h2>
          <div className="mt-8 relative">
            <div className="grid grid-cols-3 gap-16 text-center">
              {skills.map((ele) => {
                return (
                  <div>
                    <div>
                      <p className="category text-left">{ele.category}</p>
                      <ul className="skill-list">
                        {ele.skills.map((skill) => {
                          return (
                            <li>
                              <span class="material-symbols-outlined text-md">
                                {ele.icons}
                              </span>
                              <span className="text-sm">{skill}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rot absolute react-div">
              <img className="react-img" src={react} alt="react" />
            </div>
            <div className="rot absolute next-div">
              <img className="next-img" src={nextjs} alt="react" />
            </div>
            <div className="rot absolute ang-div">
              <img className="ang-img" src={angular} alt="react" />
            </div>
            <div className="rot absolute red-div">
              <img className="red-img" src={redux} alt="react" />
            </div>
            <div className="rot absolute js-div">
              <span class="material-symbols-outlined icon-skill">
                javascript
              </span>
            </div>
            <div className="rot absolute code-div">
              <span class="material-symbols-outlined">code</span>
            </div>
          </div>
        </div>
        <div>
          <img className="skills-img" src={girlskill} alt="skills" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import lpgController from '../assets/images/lpg-controller.png';
import fertilizerAgent from '../assets/images/fertilizer-agent.png';
import '../assets/styles/Project.scss';

const projects = [
  ["Fertilizer AI Agent","Developed an AI-based assistant to provide intelligent fertilizer recommendations based on crop and soil requirements.",fertilizerAgent,"#"],
  ["Microcontroller-Based Automatic LPG Controller","Developed a microcontroller-based LPG gas leakage detection and alert system to improve safety and help prevent accidents.",lpgController,"#"]
];

function Project() {
  return <div className="projects-container" id="projects"><h1>Personal Projects</h1><div className="projects-grid">
    {projects.map((p,i)=><div className="project" key={i}>
      <a href={p[3] as string} aria-label={`${p[0]} project image`}><img src={p[2] as string} className="zoom" alt={`${p[0]} project`} width="100%"/></a>
      <h2>{p[0] as string}</h2><p>{p[1] as string}</p>
    </div>)}
  </div></div>;
}
export default Project;

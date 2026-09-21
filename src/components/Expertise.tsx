import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faCode, faAward } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const coreSkills = ["Java","SQL","C++","MATLAB","Simulink","Electrical Engineering","Power Systems","Electrical Machines","Power Electronics","Protection & Switchgear","Transformers","Digital Electronics","8051 Microcontroller"];
const projectSkills = ["Fertilizer AI Agent","Microcontroller-Based Automatic LPG Controller","AI / Machine Learning","Embedded Systems","IoT","MQ-2 Gas Sensor"];
const certifications = ["Python Foundation — Infosys (2024)","Principles of Generative AI — Infosys","CSC Summer Class","Tamil","English"];

function Expertise() {
  const groups = [
    {icon: faCode, title:"Technical Skills", text:"Programming and software skills from the resume, along with core electrical engineering knowledge.", labels: coreSkills},
    {icon: faMicrochip, title:"Projects & Engineering", text:"Hands-on work combining electrical engineering, embedded systems, AI and practical problem solving.", labels: projectSkills},
    {icon: faAward, title:"Certifications & More", text:"Completed certification courses and additional activities highlighted in the resume.", labels: certifications}
  ];
  return <div className="container" id="expertise"><div className="skills-container"><h1>Expertise</h1><div className="skills-grid">
    {groups.map((g,i)=><div className="skill" key={i}><FontAwesomeIcon icon={g.icon} size="3x"/><h3>{g.title}</h3><p>{g.text}</p><div className="flex-chips"><span className="chip-title">Details:</span>{g.labels.map((x,j)=><Chip key={j} className="chip" label={x}/>)}</div></div>)}
  </div></div></div>;
}
export default Expertise;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCertificate, faTrophy, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const items = [
    ["2025","Industrial Intern","Tamil Nadu Newsprint and Papers Limited (TNPL), Pugalur","Worked across the Paper Machine, Pulp Mill, Soda Recovery and Energy departments. Gained hands-on exposure to transformer working principles, current generation through rotor rotation, and boiler operations.",faBriefcase],
    ["2023 - 2027","B.E. Electrical & Electronics Engineering","V.S.B Engineering College, Karur","CGPA: 7.63",faGraduationCap],
    ["2022 - 2023","HSC","SRV Matric Hr. Sec. School","Percentage: 78%",faGraduationCap],
    ["2024","Certification","Python Foundation — Infosys","Certification course completed.",faCertificate],
    ["","Certification","Principles of Generative AI — Infosys","Certification course completed.",faCertificate],
    ["","Certification","CSC Summer Class","Course completed.",faCertificate],
    ["","Paper Publication","IEEE Xplore","Microcontroller-Based Automatic LPG Controller",faFileLines],
    ["","Achievements","Sports & Hackathon","District-Level Runner-up in Handball; Zonal-Level Runner-up in Discus Throw; represented the EEE Department Handball Team and secured Runner-up in the college-level sports competition; participated in the KPR College Hackathon.",faTrophy]
  ];
  return <div id="history"><div className="items-container"><h1>Career History</h1><VerticalTimeline>
    {items.map((x,i)=><VerticalTimelineElement key={i} className="vertical-timeline-element--work" date={x[0] as string} iconStyle={{background:'#5000ca',color:'rgb(39,40,34)'}} icon={<FontAwesomeIcon icon={x[4] as any}/>}>
      <h3 className="vertical-timeline-element-title">{x[1] as string}</h3><h4 className="vertical-timeline-element-subtitle">{x[2] as string}</h4><p>{x[3] as string}</p>
    </VerticalTimelineElement>)}
  </VerticalTimeline></div></div>;
}
export default Timeline;

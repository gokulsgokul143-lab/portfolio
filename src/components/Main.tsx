import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="S. Gokul profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
          <h1>S. Gokul</h1>
          <p>Electrical &amp; Electronics Engineering Student</p>
          <p className="objective-text">To obtain an entry-level position in a reputable organization where I can apply my technical knowledge, enhance my skills, and contribute to organizational growth.</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;

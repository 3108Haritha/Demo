import React from 'react';
import './About.css'; // Assuming the styles are in this CSS file
import Haritha from './resume.jpeg'
function About() {
  return (
    <div className="resume-container">
      {/* Left Side */}
      <div className="left-section">
        <img
          src={Haritha}
          alt="Profile"
          className="profile-image"
        />
        <div className="personal-details">
          <h2>HARITHA S</h2>
          <p>Email: harithas.22ece@kongu.edu</p>
          <p>Phone: 9500094527</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-section">
      <h2>Carrier Objective</h2>
        <p>
         To be committed and efficient in my work and to enhance the growth of the organization by improving and applying my competancy at work.
        </p>
        <h2>Academic Profile</h2>
          <li>
            Pursuing 3rd year in BE Electronics and Communication Engineering at Kongu Engineering College.
          </li>
          <li>
            Completed HSC at Vellalar Matric Higher secondary school with 90.6%
            Completed SSLC at Ssri Valliappa Vidhyalayam Matric Higher secondary school with 99.2%

          </li>

          <h2>Papers presented</h2>
          <li>Presented a paper entitled <b>Blue Brain Technology</b> at the national level technical symposium held at Shri Ramakrishna Institute of Technology conducted on 11/11/2023.</li>
          <li>Presented a paper entitled <b>E-nose for odor detection</b> at Exodia-2023 held at Kongu Engineering College.</li>
          
          <h2>Project Presented</h2>
         <p>Exhibited a project titled <b>Voice controlled wheel chair</b> at the open house Exhibition held at Kongu Engineering College.</p>
      
         <h2>Skills</h2>
          <li>C</li>
          <li>Java</li>
          <li>Python</li>
      </div>
    </div>
  );
}

export default About;

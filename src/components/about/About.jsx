import React from 'react'
import './about.css'
//import ME from '../../assets/new.JPG'
import ME from '../../assets/me1.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Years Working</small>
            </article>

         

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          As a Business Analyst with 3 years of experience, I have contributed to projects across diverse domains such as fleet management, healthcare, and enterprise solutions. My expertise lies in gathering and analyzing business requirements, facilitating cross-functional collaboration, and ensuring seamless integration between business objectives and technical solutions.
          <br></br>During my time working on the Avis Fleet Management platform, I played a pivotal role in translating business needs into functional requirements, working closely with stakeholders to enhance operational efficiency and user experience. I was responsible for documenting user stories, process flows, and system requirements, ensuring alignment between business expectations and technical implementation.
          <br></br> At Zensar Technologies, I collaborated with cross-functional teams to develop API-driven solutions and optimize database operations, leveraging my knowledge of SQL, PL/SQL, and data visualization tools. I worked extensively with Jira and Agile methodologies, leading sprint planning, backlog refinement, and defect tracking to streamline project execution.
          <br></br> Proficient in business process modeling, SQL, data analysis, and Agile methodologies, I excel in bridging the gap between business and technology. I am passionate about leveraging data-driven insights to drive decision-making and optimizing workflows to improve system performance.
          <br></br>I am eager to take on new challenges and contribute to impactful projects that align business goals with innovative solutions. Let’s connect and discuss how my skills can add value to your organization!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
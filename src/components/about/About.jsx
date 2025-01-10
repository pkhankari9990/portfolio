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
              <small>5 Years Working</small>
            </article>

         

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          As a Full Stack Developer with 3 years of experience, I have contributed to projects across diverse domains such as fleet management, healthcare, and enterprise solutions. My work on the Avis Fleet Management platform involved designing and implementing scalable web applications using Java, Spring Boot, JSP, React.js, and SQL, delivering robust backend systems and responsive user interfaces to enhance operational efficiency and user experience.
          <br></br> At Zensar Technologies, I played a key role in developing API-driven solutions and optimizing database operations for various enterprise applications, leveraging ASP.NET, VB.NET, PL/SQL, and Oracle. I collaborated closely with cross-functional teams to ensure seamless integration and alignment with business objectives.
          <br></br> Proficient in Java, Spring Boot, Angular, React.js, and Node.js, I enjoy crafting intuitive interfaces and robust backend systems while collaborating with cross-functional teams to deliver impactful solutions. I am always eager to take on new challenges and contribute to transformative projects.
<br></br> Let's connect and discuss how my skills can contribute to your organization's success.
</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
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
              <small>2 Years Working</small>
            </article>

         

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          As a passionate software engineer with a recent MS in Information Systems from Northeastern University, I am dedicated to leveraging cutting-edge technology to improve lives. My journey at Zensar Technologies as a Sr. Full Stack Developer honed my skills in HTML5, CSS3, JavaScript (ES6+), ReactJS, Node.js, and MongoDB.I have directed complex platform developments, enhanced user satisfaction, and optimized CI/CD pipelines, demonstrating my ability to deliver robust and scalable applications. My commitment to continuous learning and adaptability ensures my solutions remain at the industry's forefront.
I am now seeking full-time opportunities where I can apply my skills and passion for innovation to make a positive impact.
<br></br> Let's connect and discuss how my skills can contribute to your organization's success
</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
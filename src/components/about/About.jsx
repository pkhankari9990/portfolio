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
          I'm a dynamic software engineer with a passion for innovation and collaboration. My journey began at Zensar Technologies, where I excelled in front-end development, specializing in JavaScript, React, and Node.js. During my tenure, I played a pivotal role in the development of a next-gen e-commerce platform, resulting in a remarkable 32% increase in user engagement and heightened customer satisfaction.
I thrive on challenges and have a proven track record of leading cross-functional teams, fostering a collaborative environment, and adapting swiftly to emerging technologies. My dedication to excellence and my deep expertise in JavaScript, React, and Node.js make me a valuable asset to any team.
Currently pursuing my MS in Information Systems at Northeastern University, I bring a wealth of experience and a commitment to continuous growth. 
<br></br> Let's connect and discuss how my skills can contribute to your organization's success
</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
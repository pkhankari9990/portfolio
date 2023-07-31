import React from 'react'
import './about.css'
import ME from '../../assets/myimage.jpg'
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
          I am a highly driven and dedicated individual pursuing Master of Science in Information Systems at Northeastern University. With over a year and a half of experience as a software developer and business analyst, I have honed my skills in .NET technology, SQL, Web API, PowerBI, and Remedy. I am also passionate about JavaScript and continuously seeking to expand my knowledge in this area. My strong communication skills and diligent approach to work have allowed me to effectively collaborate with cross-functional teams and deliver meaningful solutions. Through my work experience, I have learned the ins and outs of how organizations operate and am confident in my ability to drive innovation and contribute to their success.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
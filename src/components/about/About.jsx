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
              <small>4 Years Working</small>
            </article>

         

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
  Hey! I’m a data-driven problem solver with 4+ years of experience as a Data Analyst and Business Data Analyst, turning complex datasets into clear, actionable insights across the healthcare and financial services industries.<br />
  I’ve always been fascinated by how data can drive smarter decisions and I genuinely enjoy collaborating with stakeholders to understand what they need and turn that into scalable, data-driven solutions.<br />
  At <strong>EY</strong>, I worked on financial analytics building fraud detection models, ensuring data privacy with GDPR and PCI-DSS, and creating dashboards for real time insights.<br />
  At <strong>Cardinal Health</strong>, I lead healthcare analytics automating ETL pipelines, building predictive models, and developing interactive dashboards in Power BI and Tableau.<br />
  I work with tools like <strong>SQL</strong> (PostgreSQL, BigQuery), <strong>Python</strong> (Pandas, Airflow), <strong>Power BI</strong>, <strong>Tableau</strong>, <strong>Spark</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and more always aiming to deliver clean, scalable solutions.<br />
  I love collaborating with multiple stakeholders, asking the right questions, and staying curious about what matters most to them because that’s where real impact begins.<br />
  If you're building something exciting and want someone who bridges data and business effortlessly—I’d love to connect!
</p>

     
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
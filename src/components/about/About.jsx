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
  Hey! I’m <strong>Parag Khankari</strong> a data-driven problem solver with 4+ years of experience blending <strong>data analytics</strong> and <strong>cybersecurity</strong> to turn complex information into clear, actionable insights.<br /><br />

  I’ve always been fascinated by how data can tell a story — one that drives smarter decisions, improves security, and helps organizations stay one step ahead. I love working with teams, asking the right questions, and building solutions that make an impact.<br /><br />

  At <strong>Com-Sec LLC</strong>, I work as a <strong>Security & Data Analyst</strong> leading compliance projects for <strong>SOC 2, HIPAA, PCI-DSS, and ISO 27001</strong>. I build <strong>Power BI</strong> and <strong>Tableau</strong> dashboards to track KPIs, remediation progress, and audit readiness. Using <strong>SQL</strong> and <strong>Python</strong>, I automate evidence collection in <strong>Drata</strong> and <strong>Vanta</strong>, perform vulnerability scans with <strong>Qualys</strong>, and monitor cloud activity using <strong>AWS GuardDuty, CloudTrail, and Config</strong>.<br /><br />

  I also work hands-on with <strong>SIEM tools</strong> like <strong>Splunk</strong>, <strong>QRadar</strong>, and <strong>Microsoft Defender</strong> to detect anomalies and improve incident response. What I enjoy most is combining data analytics with security—making every improvement measurable, visual, and tied to business outcomes.<br /><br />

  Earlier, at <strong>Zensar Technologies</strong>, I focused on building dashboards in <strong>Power BI</strong> and <strong>Tableau</strong>, automating reports with <strong>Python</strong>, and optimizing <strong>SQL Server</strong> and <strong>Oracle</strong> databases. That experience gave me a strong foundation in using data to drive strategic decisions.<br /><br />

  My toolkit includes <strong>SQL</strong> (PostgreSQL, SQL Server, BigQuery), <strong>Python</strong> (Pandas, Airflow), <strong>Power BI</strong>, <strong>Tableau</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and security platforms like <strong>Drata</strong>, <strong>Vanta</strong>, and <strong>Splunk</strong>.<br /><br />

  I’m always curious, creative, and driven by impact — whether it’s turning raw data into strategy or securing systems behind the scenes.  
  If you’re building something exciting and need someone who bridges <strong>data analytics</strong> and <strong>security</strong> effortlessly — let’s talk!
</p>



     
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
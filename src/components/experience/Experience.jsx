import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Data Analysis & Technical Skills 📊</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL (PostgreSQL, MySQL, BigQuery)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python (Pandas, NumPy, Scikit-learn)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Data Visualization – Power BI, Tableau, Google Data Studio </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>ETL & Data Pipelines – Airflow, Apache Spark </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Cloud & Big Data Tools – BigQuery, AWS API Gateway</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>APIs & Automation – RESTful APIs (Node.js, Express.js), GitHub Actions</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Data Governance – OAuth 2.0, JWT, RBAC – Experienced
</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

          


          
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3> Business Analyst & Collaboration Skills 🤝</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Requirement Gathering – Discovery Sessions, Stakeholder Interviews</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Agile Project Management – Sprint Planning, Backlog Grooming, Jira, Confluence</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Business Process Modeling – Flowcharts, BPMN, Process Documentation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>User Story Writing – Epics, User Stories, Acceptance Criteria</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Data Compliance Knowledge – HIPAA, GDPR, PCI-DSS, RBI Regulations</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Problem-Solving & Critical Thinking – Root Cause Analysis, Impact Assessment</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
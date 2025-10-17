// import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Bring to the Table</h5>
      <h2>My Core Skills</h2>
      
      <div className="container experience__container">

        {/* Data Analytics & Automation */}
        <div className="experience__column">
          <h3>Data Analytics & Automation 📊</h3>
          <div className="experience__content">
            <SkillItem skill="SQL (PostgreSQL, MySQL, SQL Server, BigQuery)" level="Experienced" />
            <SkillItem skill="Python (Pandas, NumPy, Scikit-learn, Airflow)" level="Experienced" />
            <SkillItem skill="Data Visualization – Power BI, Tableau, Google Data Studio" level="Experienced" />
            <SkillItem skill="ETL & Data Pipelines – Airflow, Apache Spark, Azure Data Factory" level="Experienced" />
            <SkillItem skill="Automation – Drata, Vanta, Python Scripting, REST APIs" level="Experienced" />
            <SkillItem skill="Cloud & Big Data – AWS (S3, EC2, IAM, CloudTrail, Config), BigQuery" level="Experienced" />
            <SkillItem skill="Data Governance – Access Controls, OAuth 2.0, JWT, RBAC" level="Experienced" />
          </div>
        </div>

        {/* Cybersecurity & GRC Expertise */}
        <div className="experience__column">
          <h3>Cybersecurity & GRC Expertise 🔐</h3>
          <div className="experience__content">
            <SkillItem skill="Compliance Frameworks – SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR" level="Experienced" />
            <SkillItem skill="GRC Platforms – Drata, Vanta, ServiceNow GRC" level="Experienced" />
            <SkillItem skill="SIEM Tools – Splunk, QRadar, Microsoft Defender" level="Experienced" />
            <SkillItem skill="Vulnerability Management – Qualys, Nessus, AWS Inspector" level="Experienced" />
            <SkillItem skill="Cloud Security – AWS GuardDuty, CloudTrail, Config Rules, IAM Policies" level="Experienced" />
            <SkillItem skill="Incident Response – Log Analysis, Anomaly Detection, Alert Tuning" level="Experienced" />
            <SkillItem skill="Risk & Audit – Vendor Risk, Control Testing, Evidence Automation" level="Experienced" />
          </div>
        </div>

        {/* Collaboration & Analytical Mindset */}
        <div className="experience__column">
          <h3>Collaboration & Analytical Mindset 🤝</h3>
          <div className="experience__content">
            <SkillItem skill="Stakeholder Communication – Cross-Functional Collaboration, Client Reporting" level="Experienced" />
            <SkillItem skill="Agile Project Management – Jira, Confluence, Sprint Planning" level="Experienced" />
            <SkillItem skill="Business Process Analysis – Workflow Optimization, BPMN, Flowcharts" level="Experienced" />
            <SkillItem skill="Security Awareness – Phishing Simulations, ROI Measurement, Training Metrics" level="Experienced" />
            <SkillItem skill="Dashboard & KPI Tracking – Compliance Health Scorecards" level="Experienced" />
            <SkillItem skill="Documentation & Audit Readiness – Policies, Playbooks, Gap Reports" level="Experienced" />
            <SkillItem skill="Problem-Solving & Critical Thinking – Root Cause Analysis, Impact Assessment" level="Experienced" />
          </div>
        </div>

      </div>
    </section>
  )
}

// Reusable Skill Item component
const SkillItem = ({ skill, level }) => (
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div>
      <h4>{skill}</h4>
      <small className='text-light'>{level}</small>
    </div>
  </article>
)

export default Experience

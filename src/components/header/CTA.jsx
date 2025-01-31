import React from 'react'
import CV from '/Users/paragkhankari/Desktop/react-portfolio-tutorial-1-main/portfolio/src/assets/PARAG_BA_RESUME_2025.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
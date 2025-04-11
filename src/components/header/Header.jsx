import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Parag Khankari</h1>
        <h5 className="text-light">Data Analyst & Business Analyst | Passionate about turning data into insights and insights into impact. </h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

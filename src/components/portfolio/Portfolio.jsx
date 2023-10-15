import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/old.jpg'
import IMG2 from '../../assets/Boston.jpg'
import IMG3 from '../../assets/download.jpeg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ray of Hope',
    github: 'https://github.com/pkhankari9990/RAY-OF-HOPE',
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'Boston-Odyssey',
    github: 'https://github.com/pkhankari9990/Boston-Odyssey',
    
  },
  {
    id: 3,
    image: IMG3,
    title: 'Securing Data in Distributed System using BlockChain',
    github: 'https://www.ijsrd.com/Article.php?manuscript=IJSRDV7I100354',
    
  }  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
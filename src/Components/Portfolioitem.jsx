import React from 'react'


function Portfolioitem({ img, title, links }) {
    return (
      <a href={links} className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />
        <div className="portfolio__hover">
          <h3 className="portfolio__title">{title}</h3>
        </div>
      </a>
    );
  }
  

export default Portfolioitem
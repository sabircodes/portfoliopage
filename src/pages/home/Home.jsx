import React from 'react'
import Profile from '../../assets/me2.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css"

function home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt='' className="home__img"/>
      <div className="home__content">
        <div className="home__data">
          <h1 className='home__title'>
            <span>I'm Sabir Akhtar.</span>
          </h1>
          <p className="home__description">I am a web developer and have complete nowledege and decent experience in MERN Stack</p>
          <Link to="/about" className="button">
          More About Me
          <span className='button__icon'><FaArrowRight/></span>
          
           </Link>

        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default home
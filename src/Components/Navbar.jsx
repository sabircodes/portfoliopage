import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'
import "./Navbar.css"
import { FaSleigh } from 'react-icons/fa'


function Navbar() {
  const [ShowMenu , setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${ShowMenu ? 'nav__menu show__menu' : 'nav__menu'}`}>
        <ul className="nav__list">
          {links.map(({name,icon,path},index)=>{
            return(
              <li className="nav__item" key={index}>
                <NavLink to={path} className={({isActive})=>isActive?'nav__link active__nav':'nav__link'}
                onClick={()=>setShowMenu(!ShowMenu)}
                >
                {icon}
                <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>

      </div>
      <div className={`${ShowMenu ? 'nav__toggle animate__toggle': 'nav__toggle'}`} onClick={()=>{
        setShowMenu(!ShowMenu)      }}>
          <span></span>
          <span></span>
          <span></span>

      </div>

    </nav>
  )
}

export default Navbar
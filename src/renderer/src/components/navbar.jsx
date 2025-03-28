import React from 'react'
import './../styles/navbar.css'
import cocoLogo from './../assets/Logo.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <a href="https://github.com/cocolizo945" className="logo" target="_blank">
            <img src={cocoLogo} alt="logo" className="logo" />
          </a>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/">Open Boosters</a>
          </li>
          <li>
            <a href="/decks">Decks</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

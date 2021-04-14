import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

import ef_logo_crop from '../assets/images/ef_logo_crop.png'

 const Navigation = () => (

  <div className="container  ">
  <nav className="navbar " role="navigation" aria-label="main navigation">
  <div className="navbar-brand">

    <a role="button" className="navbar-burger" href="#/" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

    <Link className="navbar-item is-primary " to="/"> ErrandFolks
    <img alt="logo" height="30px;" id="ef-logo" src={ef_logo_crop} width="50px;" />
    </Link>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        <Link className="button is-primary" to="/about">About</Link>
        <Link className="button is-light"  to="/services">Services</Link>
        <Link className="button is-light" to="/support">Support | Volunteer</Link>
        <Link className="button is-light"  to="/contact">Contact</Link>
        <Link className="button is-light"  to="/FAQ">FAQ</Link>

        </div>

      </div>
    </div>
  </div>
</nav>

  </div>

)

export default Navigation

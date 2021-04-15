import React from "react";
import {Route, Link,Switch, NavLink,HashRouter} from "react-router-dom";

import ef_logo_crop from '../assets/images/ef_logo_crop.png'

import Home from '../components/Home'

import About from '../components/About'

import Support from '../components/Support'

import Services from '../components/Services'


import Contact from '../components/Contact'

import FAQ from '../components/FAQ'

import '../index.css';


function Navigation () {
  const [isActive, setisActive] = React.useState(false)

return (
  <HashRouter basename={process.env.PUBLIC_URL}>

<header>
<nav className="navbar is-fixed-top  " role="navigation" aria-label="main navigation">
  <div className="container">


<div className="navbar-brand ">
<NavLink className="navbar-item"  to="/">
<img alt="logo" height="30px;"  src={ef_logo_crop} width="50px;" />

</NavLink>
<div
     onClick={() => {
        setisActive(!isActive)
      }}
      role='button'
      className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
      aria-label='menu'
      aria-expanded='false'
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </div>
</div>

<div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
<div className='navbar-end '>

  <div className='navbar-item '>
  <NavLink className="navbar-item"
to="/"> Home </NavLink>

<NavLink className="navbar-item"
to="/About"> About </NavLink>

<NavLink className="navbar-item"
to="/contact"> Contact </NavLink>

<NavLink className="navbar-item"
to="/support"> Support </NavLink>


<NavLink className="navbar-item"
to="/FAQ"> FAQ </NavLink>


      </div>
    </div>
  </div>
  </div>
</nav>

</header>


<div >
<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />

        <Route path="/support" component={Support} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </div>

</HashRouter>

  );

}

export default Navigation;
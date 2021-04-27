import React, { Component } from 'react'

import Video from './Video'
//import Footer from './Footer'

import ef_shopping from '../assets/images/ef_shopping.PNG'

import ef_map2 from '../assets/images/ef_map2.PNG'

import '../App.scss';






export default class Home extends Component {




  render() {


    return (
      <div className="container  " >


<div className="columns-reverse mt-6">

<section className="hero is-small ">
  <div className="hero-body " style={{backgroundColor:"#E65100"}}>
    <p className="title has-text-white ">

   ErrandFolks

    </p>
    <p className="subtitle has-text-white">
    ErrandFolks provides volunteers to support deaf elders and deaf people who are immunocompromised with grocery shopping and errands during COVID-19 2020 pandemic.
    </p>
  </div>
</section>


<div className="columns">
  <div className="column ">
<Video />
    </div>
</div>
</div>



<div className="columns">

  <div className="column ">

<article className="message is-large pb-2"   >

  <div className="message-header "  style={{backgroundColor:"#E65100"}}>
    <p> Grocery Shopping</p>
  </div>
  <div className="message-body">

  <figure className="image ">
  <img src={ef_shopping} alt="lady pushing cart in food aisle"/>
</figure>

  </div>
  <center>
<a className="button mt-2 is-pill is-primary " href="mailto:info@errandfolks.com">E-mail us!</a>
</center>
</article>

  </div>



  <div className="column">

  <article className="message is-large pb-2" >
  <div className="message-header" style={{backgroundColor:"#E65100"}}>
    <p> Volunteer and Support</p>
  </div>
  <div className="message-body">

  <figure className="image ">
  <img src={ef_map2} alt="us map of errandfolks locations" />
</figure>

  </div>
  <center>
<a className="button mt-2 is-pill is-primary " href="mailto:info@errandfolks.com">Request Support</a>
</center>
</article>



  </div>
</div>


      </div>
    )
  }



}

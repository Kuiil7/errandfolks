import React, { Component } from 'react'

import Video from './Video'
import Footer from './Footer'
import '../Footer.css';

import ef_shopping from '../assets/images/ef_shopping.PNG'

import ef_map2 from '../assets/images/ef_map2.PNG'

export default class Home extends Component {




  render() {


    return (
      <div className="container  " >


<div className="columns-reverse mt-6">
  <div className="column is-12 has-background-danger-light">
    <section className="hero is-small ">
  <div className="hero-body ">
    <p className="title ">

   ErrandFolks

    </p>
    <p className="subtitle">
    ErrandFolks provides volunteers to support deaf elders and deaf people who are immunocompromised with grocery shopping and errands during COVID-19 2020 pandemic.
    </p>
  </div>
</section>
</div>





<div class="columns">
  <div class="column ">



<Video />
    </div>


</div>






</div>


<div class="columns">
  <div class="column is-primary">



  <p class="title has-text-centered message-header ">
    Grocery Shopping
    </p>
  <figure class="image ">
  <img src={ef_shopping} alt="lady pushing cart in food aisle"/>
</figure>

<center>
<a className="button mt-2 is-pill is-primary " href="mailto:info@errandfolks.com">E-mail us!</a>
</center>

  </div>
  <div class="column">
  <p class="title has-text-centered message-header">
   Volunteer and Support
    </p>
  <figure class="image ">
  <img src={ef_map2} alt="us map of errandfolks locations" />
</figure>

<center>
<a className="button mt-2 is-pill is-primary " href="mailto:info@errandfolks.com">Request Support</a>
</center>

  </div>
</div>

<Footer />
      </div>
    )
  }



}

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
  <div className="column is-12 has-background-primary-light">
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
<div class="columns">
  <div class="column is-two-fifths">

<article class="message is-primary">
  <div class="message-header">
    <p>About</p>

  </div>
  <div class="message-body">
  Volunteers can safely help their communities by following this guide developed in accordance with your home state's Department of Public Health's safety guidelines while volunteering.
  </div>
</article>




</div>
  <div class="column">

<article class="message is-primary">
  <div class="message-header">
    <p>    Errand Folks, how?</p>

  </div>
  <div class="message-body">
  Our ultimate goal is to keep this simple and sweet for all of you! First, you will need to send an email to <strong><a href="info@ErrandFolks.com">info@ErrandFolks.com</a></strong> that you need support.
       We will respond with a few questions (your location/what you need/where we find them/when need it) Then we will send out confidential information to our folks in your location to see who is available to help you. When we have an ErrandFolk ready to support you, they will be connected with you to work together to get your errands done.
  </div>
</article>
  </div>

</div>






</div>


<div class="columns">
  <div class="column ">
  <p class="title has-text-centered">
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
  <p class="title has-text-centered">
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

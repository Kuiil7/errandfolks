import React, { Component } from "react";
import { Link } from 'react-router-dom'


export default class Support extends Component {





  render()  {



    return (

     <div className="container">

<section className="hero is-small ">
  <div className="hero-body">
    <p className="title">
Support and Volunteer
    </p>
  </div>
</section>

<div class="columns">
  <div class="column ">
  <h4>	Grocery Shopping </h4>
						<img alt="cart in aisle and lady in front" class="card-img-top" src="assets/img/cart_lady_in_front.jpg" />
						<a class="btn bottom btn-block  btn-primary mt-auto" href="mailto:info@errandfolks.com" role="button"> REQUEST SUPPORT</a>

  </div>
  <div class="column">
  <h4>	Service and Volunteer</h4>
  <div class="card-body d-flex flex-column">
						<img alt="map" class="card-img-top" src="assets/img/ef_map2.PNG" />
						<a class=" btn btn-block btn-primary mt-auto" href="mailto:info@errandfolks.com" role="button">EMAIL US</a>
					</div>
  </div>
  <div class="column">

    <h4>	Frequent Asked Questions</h4>

  <p>Many of us are afraid and cannot go out to shop for food. Don't worry because you can contact Errand Folks with 65+ volunteers all over the United States and they're happy to help!
						</p>


							<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fseektheworld2015%2Fvideos%2F1106083129773207%2F&show_text=0&" width="100%" height="500"  scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true" title="erranfolks">

              </iframe>


					<a class="btn btn-block  btn-primary" href="#faq" role="button">FAQs</a>


			<img src="assets/img/ef_locations.jpg" alt="us map locations " />

  </div>
</div>
<div >
        <Link className="button is-primary is-active" to="/about">About</Link>
        <Link className="button is-light"  to="/services">Services</Link>
        <Link className="button is-light" to="/support">Support | Volunteer</Link>
        <Link className="button is-light"  to="/contact">Contact</Link>
        <Link className="button is-light"  to="/FAQ">FAQ</Link>

        </div>


     </div>
    );
  }
}



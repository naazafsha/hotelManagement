import React from 'react'
import "./service.css";
import '../../App.css';
import borderImage from '../../images/border1.png';
// import heroR from './images/heroR.png';
// import heroL from './images/heroL.png';
import dinein from './images/dinein.jpg';
import homeDelivery from './images/takeaway.jpg';
import cetering from './images/caterin.jpg';
import Dessert from './images/desserts.jpg';


function Service() {
  return (
    <div className='header'>
      <div className='container mycontainer'>
        <div className='row align-items-center text-center'>
          <div className='col-md-12 col-12'>
            <h2 className='w600 md52 sm35 xs28 white heading-upside'>Our Services</h2>
            <img src={borderImage} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
            <p className='mt3 gray2 w300 md26 sm20 xs19'>At Desi Dlight, we bring the rich and diverse flavors of India to your plate with services designed to provide an exceptional culinary experience. Here’s what we offer:</p>
          </div>
        </div>
        <div className='row align-items-center text-center'>
          <div className='col-md-6 col-12 order-sm-2 mt5'>
            <div className="service-box">
              <img className="img-fluid mx-auto d-block" src={dinein} alt="Dine In" />
              <div className="service-inbox">
                <div className="service-text w500 md22 sm19 xs17 lh200 white">
                  Step into a warm and welcoming ambiance inspired by India’s vibrant culture.
                  Our spacious seating, traditional décor, and attentive staff ensure you enjoy
                  your meal with comfort and style.
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 mt5'>
            {/* <img src={heroR} className='img-fluid mx-auto d-block'></img> */}
            <h1 className='bad-script-regular s-heading md40 sm30 xs24'>Dine-In Experience</h1>
          </div>
        </div>
        <div className='row align-items-center text-center'>
          <div className='col-md-6 col-12 mt5'>
            <div className="service-box">
              <img className="img-fluid mx-auto d-block" src={homeDelivery} alt="Dine In" />
              <div className="service-inbox">
                <div className="service-text w500 md22 sm19 xs17 lh200 white">
                  Craving your favorite Indian dishes but short on time? Enjoy the flavors of Desi Dlight in the comfort of your home. Place an order online or by phone, and we’ll have it prepared fresh and delivered right to your doorstep.
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 mt5'>
            <h1 className='bad-script-regular s-heading2 md40 sm30 xs24'>Takeaway and  Home <br />Delivery</h1>
          </div>
        </div>
        <div className='row align-items-center text-center'>
          <div className='col-md-6 col-12 order-sm-2 mt5'>
            <div className="service-box">
              <img className="img-fluid mx-auto d-block" src={cetering} alt="Dine In" />
              <div className="service-inbox">
                <div className="service-text w500 md22 sm19 xs17 lh200 white">
                  Make your celebrations unforgettable with Desi Dlight’s catering services. Whether it’s a wedding, birthday, or corporate event, we curate customized menus featuring India’s finest dishes to suit your needs.
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 mt5'>
            <h1 className='bad-script-regular s-heading md40 sm30 xs24'>Catering for Special <br /> Events</h1>
          </div>
        </div>
        <div className='row align-items-center text-center'>
          <div className='col-md-6 col-12 mt5'>
            <div className="service-box">
              <img className="img-fluid mx-auto d-block" src={Dessert} alt="Dine In" />
              <div className="service-inbox">
                <div className="service-text w500 md22 sm19 xs17 lh200 white">
                  Indulge your sweet tooth with our handcrafted desserts, from creamy kulfis to warm gulab jamuns, made fresh to complete your dining experience.                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 mt5'>
            <h1 className='bad-script-regular s-heading2 md40 sm30 xs24'>Authentic <br /> Indian Desserts</h1>
          </div>
        </div>
        <div className='row mt8'>
          <div className='col-md-12 col-12 text-center'>
            <div className='orange2 md52 sm40 xs28 w300'>Why Choose Desi Dlight?</div>
          </div>
          <div className='col-md-4 col-12 text-center mt3'>
            <div className='skills-box'>
              <div className='icon'>
                <i class="fa-solid fa-seedling"></i>
              </div>
              <h3 className='w800 pink mt4'>Authenticity</h3>
              <p className='lh180 white'>More than just food, every meal at Desi Dlight is a cultural experience, designed to transport you to the heart of India with every bite.</p>
            </div>
          </div>
          <div className='col-md-4 col-12 text-center mt3'>
            <div className='skills-box'>
              <div className='icon'>
                <i class="fa-solid fa-utensils"></i>
              </div>
              <h3 className='w800 pink mt4'>Variety</h3>
              <p className='lh180 white'>Our menu includes vegetarian, vegan, and non-vegetarian options, ensuring there’s something for everyone.</p>
            </div>

          </div>
          <div className='col-md-4 col-12 text-center mt3'>
            <div className='skills-box'>
              <div className='icon'>
                <i class="fa-solid fa-award"></i>
              </div>
              <h3 className='w800 pink mt4'>Quality</h3>
              <p className='lh180 white'>We maintain the highest standards in hygiene and service to provide a memorable dining experience.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;
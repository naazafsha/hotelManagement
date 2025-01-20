import React, { useState } from 'react'
import './about.css';
import '../../App.css';
import { Link, LINK } from 'react-router-dom';
import borderImage from '../../images/border1.png';
import Mock1 from './images/mock1.jpg';
import Mock2 from './images/mock2.jpg';
import Mock3 from './images/mock3.jpg';

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data (e.g., send to backend or show confirmation)
    alert('Booking Confirmed! We will get back to you shortly.');
    console.log(formData); // Log form data for now
    setFormData({
      name: '',
      email: '',
      contact: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });
  };

  return (
    <>
      <div className='header'>
        <div className='container mycontainer'>
          <div className='row align-items-center'>
            <div className='col-md-12 col-12 text-center mt0'>
              <h2 className='w600 md52 sm35 xs28 white heading-upside'>About Us</h2>
              <img src={borderImage} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
              <p className='mt3 gray2 w300 md26 sm20 xs19'>
                Welcome to <span className='w700'>Desi Dlight</span>, where every dish tells a story of India’s rich culinary heritage! We pride ourselves on serving authentic flavors, blending traditional recipes with a modern twist to create a delightful dining experience.
              </p>
              <p className='stalinist-one-regular white md26 sm20 xs19 heading mt1'>Committed to delivering exceptional service and memorable experiences.
              </p>
              <div className='btn-book mt2'>
                <a className='' href='#booking-table'>Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-sec1'>
        <div className='container mycontainer'>
          <div className='row'>
            <div className='col-md-6 col-6 text-center'></div>
            <div className='col-md-6 col-12 text-center p-0'>
              <div className='content mt-md-0 mt-4'>
                <h3 className='w700 md47 sm31 xs24'>Why Choose Us</h3>
                <ul className='check-list'>
                  <li>Reliable and Professional Team.</li>
                  <li>Affordable Pricing with No Hidden Costs.</li>
                  <li>Round-the-Clock Availability (24/7).</li>
                  <li>Customer-Centric Approach.</li>
                  <li>Customizable Solutions to Meet Your Needs.</li>
                  {/* <li>Hundreds of satisfied customers and glowing testimonials</li> */}
                  <li>Easy and hassle-free reservation system</li>
                  <li>Prioritizing your safety and well-being at every step.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='who-we-are'>
        <div className='container mycontainer'>
          <div className='row'>
            <div className='col-md-12 col-12 text-center'>
              <h3 className='w700 md47 sm31 xs24'>Who We Are</h3>
              <p className='md26 sm20 xs17 lh140 mt2'>
                We are a dedicated team of professionals with years of experience in providing top-notch services. Our mission is to exceed customer expectations by offering personalized experiences tailored to individual needs.
              </p>
            </div>
            <div className='col-md-4 col-12 mt5'>
              <img className='img-fluid mx-auto d-block' alt='' src={Mock1}></img>
              <p className='md18 sm16 xs16 text-center mt7 lh200 w500'>
                Our team works like a well-oiled machine, combining individual strengths to deliver seamless and exceptional service.
              </p>
            </div>
            <div className='col-md-4 col-12 mt5'>
              <img className='img-fluid mx-auto d-block' alt='' src={Mock2}></img>
              <p className='md18 sm16 xs16 text-center mt7 lh200 w500'>
                We believe in lifting each other up, ensuring every member of our team feels valued, empowered, and motivated to serve you better.
              </p>
            </div>
            <div className='col-md-4 col-12 mt5'>
              <img className='img-fluid mx-auto d-block' alt='' src={Mock3}></img>
              <p className='md18 sm16 xs16 text-center mt7 lh200 w500'>
                Together, we create a supportive environment where collaboration and dedication turn challenges into opportunities for excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='special-services'>
        <div className='container mycontainer'>
          <div className='row'>
            <div className='col-md-12 col-12 text-center'>
              <h3 className='w700 md47 sm31 xs24'>Our Special Services</h3>
            </div>
            <div className='col-md-4 col-12 text-center mt3'>
              <div className='skills-box'>
                <div className='icon2'>
                  <i class="fa-solid fa-bowl-food"></i>
                </div>
                <h3 className='w800 pink mt4'>Dine-In</h3>
                <p className='lh180'>Experience a warm and inviting ambiance while enjoying freshly prepared meals served at your table.</p>
              </div>
            </div>
            <div className='col-md-4 col-12 text-center mt3'>
              <div className='skills-box'>
                <div className='icon2'>
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <h3 className='w800 pink mt4'> Home Delivery</h3>
                <p className='lh180'>Enjoy your favorite dishes delivered right to your doorstep, hot and fresh, with quick and reliable service.</p>
              </div>
            </div>
            <div className='col-md-4 col-12 text-center mt3'>
              <div className='skills-box'>
                <div className='icon2'>
                  <i class="fas fa-plate-wheat"></i>
                </div>
                <h3 className='w800 pink mt4'>Catering</h3>
                <p className='lh180'>Customized catering solutions for any event, offering delicious and fresh meals that suit your needs and preferences.</p>
              </div>
            </div>
            <div className='col-md-12 col-12 text-center mt3'>
              <div className='btn-learnmore mt2'>
                <Link className='' to='/services'>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='table-booking' id='booking-table'>
        <div className='container mycntainer'>
          <div className='row'>
            <div className='col-md-12 col-12 text-center'>
              <h3 className='w700 md47 sm31 xs24'>Book Your Table Online</h3>
              <p className='md24 sm20 xs17 w500'>Reserve your spot with ease – it only takes a few clicks!</p>
              <div className='booking-form'>
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="name">Full Name:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={FormData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="email">Email Address:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={FormData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="contact">Contact Number:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <input
                          id="contact"
                          type="tel"
                          name="contact"
                          value={FormData.contact}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="date">Date:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <input
                          id="date"
                          type="date"
                          name="date"
                          value={FormData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="time">Time:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={FormData.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="guests">Number of Guests:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <select
                          id="guests"
                          name="guests"
                          value={FormData.guests}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-md-3 col-8">
                        <label htmlFor="specialRequests">Special Requests:</label>
                      </div>
                      <div className="col-md-9 col-12">
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={FormData.specialRequests}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="btn-book">
                    <button type="submit" className="btn-book">Book Now</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';
import "./home.css";
import { Link, NavLink } from 'react-router-dom';
import borderImage from './images/border.png';
import borderImage2 from './images/border2.png';
import borderImage3 from '../../images/border1.png';
import star from './images/star2.png';
import userProfile from './images/user.jpg';
import Team from './images/team.jpg';
import h1Img from './images/h1.png';

function Home() {
  let currentSlide = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');  // Remove 'active' class from all
      if (i === index) {
        testimonial.classList.add('active');   // Add 'active' class to the current slide
      }
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    showSlide(currentSlide);
  }
  
  // Auto-slide every 3 seconds
  setInterval(() => {
    nextSlide();
  }, 3000);
  
  // Initialize the first slide
  showSlide(currentSlide);
  

  return (
    <>
      <div className='sec1'>
        <div className='container mycontainer'>
          <div className='row'>
            <div className='col-md-12 col-12 text-center'>
              <h2 className='w600 md52 sm35 xs28 white heading-upside'>Welcome to
                <span className='orange2 md60 sm40 xs30'> Desi Delight</span> Here We Are</h2>
              <img src={borderImage} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
              <p className='white md24 sm18 xs17 mt2'>Your one-stop destination for unparalleled service and unforgettable experiences.</p>
              <div className='affiliate-btn mt3'>
                <Link to='/about' className='md31 sm25 xs20'>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec2'>
        <div className='container mycontainer'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12 text-center'>
              <h3 className='w700 md47 sm31 xs24'>Our Services</h3>
              <img src={borderImage2} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
              <div className='row mt5'>
                <div className='col-md-4 col-12 text-center mt3'>
                  <Link to='/services'>
                    <div className='skills-box'>
                      <div className='icon'>
                        <i class="fa-solid fa-bowl-food"></i>
                      </div>
                      <h4 className='w800 pink mt4'>Dine-In</h4>
                    </div>
                  </Link>
                </div>
                <div className='col-md-4 col-12 text-center mt3'>
                  <Link to='/services'>
                    <div className='skills-box'>
                      <div className='icon'>
                        <i class="fas fa-shipping-fast"></i>
                      </div>
                      <h4 className='w800 pink mt4'> Home Delivery</h4>
                    </div></Link>
                </div>
                <div className='col-md-4 col-12 text-center mt3'>
                  <Link to='/services'>
                    <div className='skills-box'>
                      <div className='icon'>
                        <i class="fas fa-plate-wheat"></i>
                      </div>
                      <h4 className='w800 pink mt4'>Catering</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-12 white text-center lmt0 xsmt35'>
              <h3 className='w700 md47 sm31 xs24'>Who We Are</h3>
              <img src={borderImage3} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
              <div className='skills-box mt10'>
                <p className='md24 sm20 xs17 lh140 mt5'>
                  We are a dedicated team of professionals with years of experience in providing top-notch services. Our mission is to exceed customer expectations by offering personalized experiences tailored to individual needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='customer-review'>
        <div className='container mycontainer'>
          <div className='row'>
            <div className='col-md-12 col-12 text-center'>
              <div className='testimonial-slider'>
                <h3 className='w700 md47 d-blue sm31 xs24'>Happy & Satisfied Faces</h3>
                <img src={borderImage2} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
                <div className='slider-container'>
                  <div className='testimonial active'>
                    <img src={userProfile} className='user img-fluid mx-auto'></img>
                    <p class="testimonial-review">
                      "The best dining experience I've ever had! The food was absolutely delicious, and the service was top-notch."
                    </p>
                    <img src={star} className='img-fluid mx-auto' alt=''></img>
                    <h3 class="testimonial-name">- John Doe</h3>
                    <p class="testimonial-designation">Food Enthusiast</p>
                  </div>
                  <div className='testimonial'>
                    <p class="testimonial-review">"Amazing experience! The staff was friendly and professional."</p>
                    <h3 class="testimonial-name">Jane Smith</h3>
                    <p class="testimonial-designation">Freelance Designer</p>
                  </div>
                  <div className='testimonial'>
                    <p class="testimonial-review">"Great support and reliable service. Will come back for sure."</p>
                    <h3 class="testimonial-name">Samuel Lee</h3>
                    <p class="testimonial-designation">Entrepreneur</p>
                  </div>
                </div>
                <div className='slider-controls'>
                  <button className='prev' onClick={prevSlide()}><i class="fa-solid fa-angle-left"></i></button>
                  <button className='next' onClick={nextSlide()}><i class="fa-solid fa-angle-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="script.js"></script>
      </div>
      <div className='contact-div'>
        <div className='container mycontainer'>
          <div className='row'>
            <div className='col-md-12 col-12 text-center'>
              <img src={Team} className='img-fluid mx-auto d-block' />
              <div className='bad-script-regular md31 sm24 xs18 mt3'>"Ready to experience the best? Contact us today or visit our services page to explore more."
              </div>
              <div className='affiliate-btn mt3'>
                <Link to='/contact' className='md31 sm25 xs20'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
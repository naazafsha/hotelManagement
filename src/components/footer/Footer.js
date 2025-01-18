import React from 'react'
import '../../App.css';
import '../navbar/navbar.css';
// import './footer.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo2.png';
import { RiAlignItemBottomFill } from 'react-icons/ri';

function Footer() {
  return (
    <div className='footer'>
      <div className='container mycontainer'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <img src={logo} width={180} />
            <p style={taglineStyle}>“Savor the authentic 
              flavors of India, served
              with love at Desi Delight
              Restro.”</p>
          </div>
          <div className='col-md-3 offset-md-1 col-12'>
            <h3 className='white'>UseFull Links</h3>
            <div className='navbar'>
              <ul style={footerNav}>
                <li className='nav-item'>
                  <Link className='nav-link underline-anim' to='/'><i class="fa-solid fa-house"></i>Home</Link>
                </li><br />
                <li className='nav-item'>
                  <Link className='nav-link underline-anim' to='/about'><i class="fa-solid fa-info-circle"></i>
                    About</Link>
                </li><br />
                <li className='nav-item'>
                  <Link className='nav-link underline-anim' to='/services'><i class="fa-solid fa-cogs"></i>
                    Services</Link>
                </li><br />
                <li className='nav-item'>
                  <Link className='nav-link underline-anim' to='/contact'><i class="fa-solid fa-phone-alt"></i>
                    Contact</Link>
                </li><br />
                <li className='nav-item'>
                  <Link className='nav-link underline-anim' to='/login'><i class="fa-solid fa-sign-in-alt"></i>
                    Log In</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4 col-12'>
             <h3 className='white'>Contact</h3>
             <ul style={footerContact}>
              <li style={footerItem}><i style={footerIcons} class="fa-solid fa-phone"></i>
              +91-8739852021 </li>
              <li style={footerItem}><i style={footerIcons} class="fa-solid fa-location-dot"></i>
              2-KHA-10, Kohli Complex, Vigyan Nagar, Kota (INDIA) - 324005</li>
              <li style={footerItem}><i style={footerIcons} class="fa-solid fa-envelope"></i>
              info@logicbeam.com </li>
             </ul>
          </div>
          <div className='col-md-12 col-12'>
            <div style={footerEnd}>
              <div className='row'>
                <div className='col-md-9 col-12'>
                  <p className='white'>© 2024 Desi Delight Restro. All rights reserved.</p>
                </div>
                <div className='col-md-1 offset-md-2 col-12'>
                <a href='#'><i style={footerIconss} class="fa-brands fa-facebook"></i></a>
                <a href='#'><i style={footerIconss} class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const taglineStyle = {
  fontSize: '16px',
  fontStyle: 'italic',
  margin: '10% 0',
  color: '#fff',
};


const footerNav = {
  listStyle: 'none',
  padding:'0',
};

const footerContact = {
  listStyle: 'none',
  padding:'0',
};

const footerItem = {
  marginTop: '10%',
  color:'#fff',
  marginBottom:'5%',
};

const footerEnd = {
  borderTop: '1px solid #4a5368',
  padding:'20px 0',
  AlignItems:'center',
};

const footerIcons = {
  marginRight: '0.5rem',
  color: '#fff',
};

const footerIconss = {
  marginRight: '0.5rem',
  color: '#fff',
  fontSize:'22px',
}




export default Footer;
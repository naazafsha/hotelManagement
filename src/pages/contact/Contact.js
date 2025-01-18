import React from 'react'
import '../../App.css';
import './contact.css';
import borderImage from '../../images/border1.png';

function Contact() {
  return (
    <div className='header'>
      <div className='container mycontainer'>
        <div className='row align-items-center'>
          <div className='col-md-12 col-12 mt0'>
            <h2 className='w600 text-center md52 sm35 xs28 white heading-upside'>Contact Us</h2>
            <img src={borderImage} className='img-fluid mx-auto d-md-block d-none' alt=''></img>
            <p className='mt3 gray2 w300 text-center md26 sm20 xs19'>
              Contact us and feel free to get to know any details related to our services.
              <br /><span className='w600 orange2'>We provide 24x7 services to give you assure about Desi Delight.</span>
            </p>
            <div className='contact-container mt5'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <div className='contact-info'>
                    <ul className='p-0 m-0 info-li'>
                      <li><span>📍</span> Address: 4671 Sugar Camp Road, Owatonna, Minnesota, 55060</li>
                      <li><span>📞</span> Phone: 507-475-60945-6094</li>
                      <li><span>📧</span> Email: wrub7d7810@temporary-mail.net</li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6 col-12 texxt-center'>
                  <div className='contact-form'>
                    <h3>Send Message</h3>
                    <form>
                      <input type='text' placeholder='Full Name' required></input>
                      <input type='email' placeholder='Email' required></input>
                      <textarea placeholder='Type your message...' required></textarea>
                      <button type='submit'>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
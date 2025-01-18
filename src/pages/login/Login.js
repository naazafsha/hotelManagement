import React from 'react'
import '../../App.css';
import './login.css';
import cover from './images/mock.jpg';

function Login() {
  return (
    <div className='login-section'>
      <div className='container mycontainer'>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div className='stalinist-one-regular d-none d-md-block mock'>
              <img className='' alt='mock' src={cover}></img>
              <h3>Need Your <br /> Taste,yo?</h3>
              <p>Sign Up Fast!!  To Become Our top customer <br />
              Have Our Latest Discount</p>
            </div>
            <div className='login-form'>
            <form>
              <input type='text' placeholder='Username'></input>
              <input type='email' placeholder='Email'></input>
              <input type='password' placeholder='Pssword'></input>
              <button type='submit'>Sign Up</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
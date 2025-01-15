import React from 'react'
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
// import logo from './images/logo.png';
import logo2 from './images/logo2.png';

function Navbar() {
  // const NavbarItems = [
  //   {name: 'Home', Link: '/'},
  //   {name: 'About', Link: '/about'},
  //   {name: 'Services', Link: '/services'},
  //   {name: 'Contact', Link: '/contact'},
  //   {name: 'Log In', Link: '/login', additionalClass: 'last'},
  // ]; 
  //this means array function here holds the data for each nav fields

  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <a className='navbar-brand d-block' href='/'>
        <img className='img-fluid mx-auto d-block' src={logo2} alt='logo-img' width={220}></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto d-flex align-items-center'>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? 'nav-link underline-anim active' : 'nav-link underline-anim'} to='/' END><i class="fa-solid fa-house"></i>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? 'nav-link underline-anim active' : 'nav-link underline-anim'} to='/about'><i class="fa-solid fa-info-circle"></i>
              About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? 'nav-link underline-anim active' : 'nav-link underline-anim'} to='/services'><i class="fa-solid fa-cogs"></i>
              Services</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? 'nav-link underline-anim active' : 'nav-link underline-anim'} to='/contact'><i class="fa-solid fa-phone-alt"></i>
              Contact</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) =>
              isActive ? 'nav-link underline-anim active last' : 'nav-link underline-anim last'} to='/login'><i class="fa-solid fa-sign-in-alt"></i>
              Log In</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

//Ensure You Are Using Link from react-router-dom: Replace the <a> tags with <NavNavLink> from react-router-dom
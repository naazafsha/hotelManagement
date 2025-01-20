import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For JavaScript components
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Service from './pages/services/Service';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  const location = useLocation(); // Get the current route location
  const hideNavbarFooter = location.pathname === '/login';

  return (
    <div className='home'>
      {/* Render Navbar if it's not the login page */}
      {!hideNavbarFooter && <Navbar />}

      <div className='content'>
        <div className='homeContainer'>
          <Routes>
            {/* Only show Home page if the path is '/' */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>

      {/* Render Footer if it's not the login page */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;

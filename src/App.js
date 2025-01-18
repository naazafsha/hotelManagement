import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For JavaScript components
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Service from './pages/services/Service';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// import Sidebar from './components/sidebar/Sidebar';
const App = () => {
   const location = useLocation(); //// Get the current route location
   const hideNavbarFooter = location.pathname === '/login';
  return (
    <div className='home'>
    {/* Only render Navbar if it's not the login page */}
    {!hideNavbarFooter && <Navbar />}
    
    <div className='content'>
      <div className='homeContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>

    {/* Only render Footer if it's not the login page */}
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

// replaces writing path="/" for the default route in the context of nested routing.







































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

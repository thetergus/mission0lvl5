import './NavBar.css';
import simplelogo from './media/indie_simple_logo_small.png'

function NavBar() {
  return (    <>   {/* <!-- Header/Navigation Bar --> */}
      <header className="navbar">
          <a href="/" className="navbar__logo"> 
          <img src={simplelogo} alt="Indie World Logo Simple"  />
          </a>
          <div className="navbar__bars"><i className="fas fa-bars"></i></div>
          <div className="navbar__menu">
              <a href="/" className="navbar__menu--link">Music</a>
              <a href="/" className="navbar__menu--link">Games </a>
              <a href="/" className="navbar__menu--link">Literature</a>
              <a href="/" className="navbar__menu--link navbar__menu--button">Login </a>

        </div>
      </header>
  </> );}

export default NavBar;

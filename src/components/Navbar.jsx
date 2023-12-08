import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/styles/navbar.css'
import navLogo from '../images/isaac-logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg css-navbar navigationBar">
        <div className='container'>
          <img src={navLogo} alt="logo-01" className='logo-01' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarSupportedContent " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#home" data-bs-toggle="dropdown" title='Home'>
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#home" title='Home'>Home</a></li>
                  <li><a className="dropdown-item" href="#home" title='Home RTL'>Home RTL</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" title='Services'>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" title='About'>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" title='Skills'>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" title='Portfolio'>Portfolio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#blog" role="button" data-bs-toggle="dropdown" aria-expanded="false" title='Blog'>
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#blog">Blog Details</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" title='Contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar
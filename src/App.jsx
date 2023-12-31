import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Apyc from './components/Apyc'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import { FaRocket } from 'react-icons/fa'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Skill />
      <Portfolio />
      <Pricing />
      <Apyc />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
      <FaRocket style={rocketLauncher} />
    </>
  )
}

const rocketLauncher = {
  fontWeight: 'bold',
  fontSize: '34px',
  color: '#ff4a57',
  position: 'fixed',
  right: '50px',
  top: '550px',
  bottom: '0px',
  cursor: 'pointer',
  transform: 'rotate(-45deg)'
}

export default App

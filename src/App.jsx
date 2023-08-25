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
import { FaRocket } from 'react-icons/fa'

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

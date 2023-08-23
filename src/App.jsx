import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import { FaRocket } from 'react-icons/fa'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
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

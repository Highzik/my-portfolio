import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import { FaRocket } from 'react-icons/fa'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
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
}

export default App

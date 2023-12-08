import '/src/styles/skill.css'
import { FaArrowCircleRight } from 'react-icons/fa';

const Skill = () => {
  return (
    <section id='skills' className='container-fluid skillSection'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='expertise'>I'M EXPERT ON</h3>
            <h3 className='expertiseTitle'>Let's Work Together</h3>
            <p className='expertiseNote'>Consider collaborating with me as a web developer, where you'll benefit from my extensive technical proficiency, innovative problem-solving skills, adaptability to industry trends, clear client communication, meticulous attention to detail, creative design sensibilities, commitment to security, and a passion for continuous learning—all aimed at delivering outstanding websites tailored to your needs.</p>
            <button className='hireBtn'><a href='#contact'>Hire Me Now</a></button>
          </div>
          <div className='col-md-6'>
            <p>Node JS <FaArrowCircleRight style={iconDesign} /> 75%</p>
            <p>React JS <FaArrowCircleRight style={iconDesign} /> 80%</p>
            <p>Angular <FaArrowCircleRight style={iconDesign} /> 77%</p>
            <p>SEO <FaArrowCircleRight style={iconDesign} /> 85%</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const iconDesign = {
  color: '#ff4a57',
  fontWeight: 'bold',
  fontSize: '24px',
  marginLeft: '30px',
  marginRight: '30px'
}

export default Skill
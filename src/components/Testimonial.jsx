import '/src/styles/testimonial.css'
import { FaStar } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import img1 from '../images/Isaac-1.png'
import img2 from '../images/Isaac-2.png'


const Testimonial = ({ title }) => {
  const [author, setAuthor] = useState('Isaac Olayinka');
  const [bio, setBio] = useState('Owner of this Portfolio Page');
  const [image, setImage] = useState({ img1 })

  const handleLeftClick = () => {
    setAuthor('Adam Kehinde')
    setBio('A prolific IOS Developer')
    setImage({ img2 })
  }
  const handleRightClick = () => {
    setAuthor('Isaac Olayinka');
    setBio('Owner of this Portfolio Page');
    setImage({ img1 })

  }
  return (
    <div className='container-fluid testimonial'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 testCont'>
            <h3>OUR TESTIMONIALS</h3>
            <h2>Happy Client Says</h2>
            <p>"Working with {title} has been an absolute pleasure! His creativity, technical expertise, and attention to detail transformed our vision into a stunning website. Not only did they deliver a visually appealing and user-friendly site, but they also made the entire process smooth and stress-free.</p>
            <p>{title} is a true professional who goes above and beyond to exceed expectations. We couldn't be happier with the results!"</p>
            <button>Learn More</button>
          </div>
          <div className='col-md-6'>
            <div className='secondTestCont'>
              <p><i>"In promotion and of advertising, testimonial show consists of a person's written or a spoken statement extolling the virtue"</i></p>
              <FaStar style={iconColor} />
              <FaStar style={iconColor} />
              <FaStar style={iconColor} />
              <FaStar style={iconColor} />
              <FaStar style={iconColor} />
              <FaQuoteRight style={quoteRight} />
            </div>
            <div className='row align-items-center'>
              <div className='col-md-3 col-lg-3 isaacImgCont'>
                <img src={img1} alt="" className='isaac-img' />
              </div>
              <div className='col-md-4 col-lg-5 subIsaacCont'>
                <h4>{author}</h4>
                <p>{bio}</p>
              </div>
              <div className='col-md-4 col-lg-4'>
                <button onClick={handleLeftClick} className='btnChevLeft'><FaChevronLeft /> </button>
                <button onClick={handleRightClick} className='btnChevRight'><FaChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Testimonial.defaultProps = {
  title: 'Isaac Olayinka'
}
const iconColor = {
  color: '#ff4a57',
}
const quoteRight = {
  fontWeight: 'bold',
  fontSize: '30px',
  position: 'relative',
  top: '-110px',
  left: '-120px'
}


export default Testimonial
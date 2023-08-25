import '/src/styles/testimonial.css'
import { FaStar } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'


const Testimonial = ({ title }) => {
  return (
    <div className='container-fluid testimonial'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>OUR TESTIMONIALS</h3>
            <h2>Happy Client Says</h2>
            <p>"Working with {title} has been an absolute pleasure! His creativity, technical expertise, and attention to detail transformed our vision into a stunning website. Not only did they deliver a visually appealing and user-friendly site, but they also made the entire process smooth and stress-free.</p>
            <p>{title} is a true professional who goes above and beyond to exceed expectations. We couldn't be happier with the results!"</p>
            <button>Learn More</button>
          </div>
          <div className='col-md-6'>
            <div>
              <p><i>"In promotion and of advertising, testimonial show consists <br />of a person's written or a spoken statement extolling <br /> the virtue"</i></p>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <img src="" alt="" />
              </div>
              <div className='col-md-4'>
                <h4>Adam Kehinde</h4>
                <h4>Founder of Microsoft</h4>
              </div>
              <div className='col-md-4'>
                <button><FaChevronLeft /></button>
                <button><FaChevronRight /></button>
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

export default Testimonial
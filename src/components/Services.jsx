import '/src/styles/services.css'
import { FaGithub } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaYoast } from 'react-icons/fa'
const Services = ({ title, title1 }) => {
  return (
    <section id='services' className="container-fluid service-cont">
      <div className="row text-center sub-container">
        <h3 style={serviceDesign}>{title}</h3>
        <h2 className='my-service'>{title1}</h2>
        <p className='about-service'>I'm a Web Developer, a little into Photography, <br />a Web Designer, Application Developer, Video Editor, SEO <br />Expert and many more.</p>
        <hr className='horizontal-rule' />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 column-1">
            <FaGithub className='fa-icon' />
            <h3>Web Development</h3>
            <p>A certified web developer with vast experience</p>
          </div>
          <div class="col-sm-4 column-1">
            <FaCodepen className='fa-icon' />
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti fugit eum alias quo harum expedita error cum! Dolorum voluptate in consequatur tempore omnis officia nobis possimus debitis animr.</p>
          </div>
          <div class="col-sm-4 column-1">
            <FaVideo className='fa-icon' />
            <h3>Video Editing</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum in, impedit alias harum neque, doloremque voluptas, distinctio porro repellat tempora ullam culpa? Fugit, dolorum</p>
          </div>
        </div>
        <div class="row sub-cont">
          <div class="col-sm-4 column-1">
            <FaCamera className='fa-icon' />
            <h3>Photography</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati eligendi quos minus fuga consequuntur vero, voluptatibus est magnam itaque earum iste dolore autem</p>
          </div>
          <div class="col-sm-4 column-1">
            <FaApple className='fa-icon' />
            <h3>App Developing</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid inventore nostrum harum at unde, molestias dicta, et soluta delectus laudantium adipisci! Id vel sed dolorem</p>
          </div>
          <div class="col-sm-4 column-1">
            <FaYoast className='fa-icon' />
            <h3>SEO Expart</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi doloremque a voluptatum quia repudiandae, voluptas rerum fuga eum autem omnis facere, quibusdam</p>
          </div>
        </div>
      </div>
    </section>
  )
}

Services.defaultProps = {
  title: 'services'.toUpperCase(),
  title1: 'My Services',
}

const serviceDesign = {
  color: '#ff4a57',
  fontSize: '20px',
  marginBottom: '25px',
  fontWeight: 'bold',
}

export default Services
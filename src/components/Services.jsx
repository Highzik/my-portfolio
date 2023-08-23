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
        <p className='about-service'>I'm a Web Developer, a little knowledge into <br /> Photography, a Web Designer, <br />Application Developer, Video Editor, SEO <br />Expert and many more.</p>
        <hr className='horizontal-rule' />
      </div>
      <div className="container">
        <div className="row sub-cont">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ml-4 mr-4 column-1">
            <FaGithub className='fa-icon' />
            <h3 className='title'>Web Development</h3>
            <p className='title-note'>A passionate web developer who finds immense happiness in crafting digital experiences. Every line of code written feels like paint className='title-note'ing strokes on a canvas, each one contributing to the masterpiece envisioned.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ml-4 mr-4 column-1">
            <FaCodepen className='fa-icon' />
            <h3 className='title'>Web Design</h3>
            <p className='title-note'>Ability to enhance user experiences. Understand that designs aren't just pretty pictures, they'are the bridges that connect users to content seamslessly. Sees beauty in every color palette, font choice, and layour arrangement.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ml-4 mr-4 column-1">
            <FaVideo className='fa-icon' />
            <h3 className='title'>Video Editing</h3>
            <p className='title-note'>Every frame is a canvas, and each clip tells a unique story waiting to be unveiled. In a rapid evolving digital landscape, I'm always at the forefront, exploring new software, techniques, and trends.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mr-4 column-1">
            <FaCamera className='fa-icon' />
            <h3 className='title'>Photography</h3>
            <p className='title-note'>Photography is not just a hobby or profession; it's a lifelong passion and a means to see te world with fresh eyes, finding beatuty in the mundane and capturing the extraordinary in the ordinary.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ml-4 mr-4 column-1">
            <FaApple className='fa-icon' />
            <h3 className='title'>App Developing</h3>
            <p className='title-note'>This isn't just about writing code; it's about conceptualing, designing, testing, and deploying solutions that meet user needs and solve real-world problems.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ml-4 mr-4 column-1">
            <FaYoast className='fa-icon' />
            <h3 className='title'>SEO Expert</h3>
            <p className='title-note'>Delight in helping websites and businesses increase their only visibility, drive organic traffic, and ultimately achieve their digital marketing goals.</p>
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
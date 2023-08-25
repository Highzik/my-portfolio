import '/src/styles/home.css'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.image-container', {
      origin: 'right',
      duration: 2000,
      delay: 350,
      distance: '60px',
      reset: true,
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('.article-container', {
      origin: 'left',
      duration: 2000,
      delay: 350,
      distance: '60px',
      reset: true,
      easing: 'ease-in-out'
    })
  }, []);
  return (
    <>
      <section id='home' className='about-section container-fluid'>
        <div className='row text-center'>
          <div className="col-md-6 article-container"><br /><br /><br /><br /><br /><br />
            <button className='fa-icon-btn'><FaFacebook className='fa-icons' /></button>
            <button className='fa-icon-btn'><FaTwitter className='fa-icons' /></button>
            <button className='fa-icon-btn'><FaInstagram className='fa-icons' /></button>
            <button className='fa-icon-btn'><FaLinkedin className='fa-icons' /></button>
            <button className='fa-icon-btn'><FaGithub className='fa-icons' /></button>
            <h2 className='author'>I am Isaac Olayinka</h2>
            <h3 className='about-author'>I'm Isaac, a Junior Software <br />Developer with 6 months <br />experience in this field</h3>
            <button className='portfolio-btn'><a href='#portfolio'>My Portfolio</a></button>
            <button className='play-icon-btn'><FaPlay className='play-icon' /></button>
          </div>
          <div className='image-container col-md-6'>
            <img src="/src/isaac-1.png" alt="an image of the author" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
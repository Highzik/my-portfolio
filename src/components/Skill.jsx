import '/src/styles/skill.css'
import scrollreveal from 'scrollreveal'
import { useEffect, useRef } from 'react'

const Skill = () => {
  const articleContainerRef = useRef(null);
  const skillContainerRef = useRef(null);
  useEffect(() => {
    const sr = scrollreveal({
      easing: 'ease',
      distance: '60px',
      duration: 2500,
      reset: true,
    })
    sr.reveal(articleContainerRef.current, { delay: 300, origin: 'left' })
    sr.reveal(skillContainerRef.current, { delay: 300, origin: 'bottom' })
  })
  return (
    <section id='skills' className='container-fluid skillSection'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' ref={articleContainerRef}>
            <h3 className='expertise'>I'M EXPERT ON</h3>
            <h3 className='expertiseTitle'>Let's Work Together</h3>
            <p className='expertiseNote'>Consider collaborating with me as a web developer, where you'll benefit from my extensive technical proficiency, innovative problem-solving skills, adaptability to industry trends, clear client communication, meticulous attention to detail, creative design sensibilities, commitment to security, and a passion for continuous learning—all aimed at delivering outstanding websites tailored to your needs.</p>
            <button className='hireBtn'><a href='#contact'>Hire Me Now</a></button>
          </div>
          <div className='col-md-6' ref={skillContainerRef}>
            <p>Node JS</p>
            <span>70%</span>
            <hr />
            <p>React JS</p>
            <span>80%</span>
            <hr />
            <p>Angular</p>
            <span>77%</span>
            <hr />
            <p>SEO</p>
            <span>89%</span>
            <hr />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
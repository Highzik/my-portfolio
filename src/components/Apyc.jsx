import { FaUsers } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"
import { FaGem } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import '/src/styles/apyc.css'
import scrollreveal from "scrollreveal"
import { useEffect, useRef } from "react"

const Apyc = () => {
  const gitHubRef = useRef(null);
  const gemRef = useRef(null);
  const diamondRef = useRef(null);
  const gem2Ref = useRef(null);
  useEffect(() => {
    const sr = scrollreveal({
      distance: '60px',
      easing: 'ease',
      duration: 2500,
      reset: true
    })
    sr.reveal(gitHubRef.current, { delay: 300, origin: 'left' })
    sr.reveal(gemRef.current, { delay: 300, origin: 'bottom' })
    sr.reveal(gem2Ref.current, { delay: 300, origin: 'top' })
    sr.reveal(diamondRef.current, { delay: 300, origin: 'right' })
  })
  return (
    <div className='container-fluid awardsSection'>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 elementor" ref={gitHubRef}>
            <FaUsers className="elementor-icon" />
            <h3>47</h3>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 elementor" ref={gem2Ref}>
            <FaCodepen className="elementor-icon" />
            <h3>28</h3>
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 elementor" ref={gemRef}>
            <FaGem className="elementor-icon" />
            <h3>16</h3>
            <p>Awards</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 elementor" ref={diamondRef}>
            <FaGithub className="elementor-icon" />
            <h3>10</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apyc
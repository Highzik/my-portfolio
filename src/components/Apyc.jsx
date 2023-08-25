import { FaUsers } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"
import { FaGem } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import '/src/styles/apyc.css'
const Apyc = () => {
  return (
    <div className='container-fluid awardsSection'>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 elementor" >
            <FaUsers className="elementor-icon" />
            <h3>47</h3>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 elementor">
            <FaCodepen className="elementor-icon" />
            <h3>28</h3>
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 elementor">
            <FaGem className="elementor-icon" />
            <h3>16</h3>
            <p>Awards</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 elementor">
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
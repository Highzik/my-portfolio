import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"
import '/src/styles/footer.css'
import navLogo from '../images/isaac-logo.png'

const Footer = ({ title1, title2, title3, title4 }) => {
  const url = 'isaac'.toUpperCase()
  return (
    <footer className='container-fluid footerID'>
      <div className='container text-center footerCont'>
        <img src={navLogo} alt="" className="logo-01 my-3" />
        <p>Now you've scrolled this far. I believe you find this page <br />appealing and ready to give me a trial. A trial with me <br />will convince you. Looking forward to working with you soon!!!</p>
        <FaFacebook className="footerIcons" title={title1} />
        <FaTwitter className="footerIcons" title={title2} />
        <FaInstagram className="footerIcons" title={title3} />
        <FaPinterest className="footerIcons" title={title4} />
        <p>Copyright &copy; 2023 <span><a href=''>{url}</a></span> All Rights Reserved by IsaacOlayinka</p>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  title1: 'Facebook',
  title2: 'Twitter',
  title3: 'Instagram',
  title4: 'Pinterest'
}
export default Footer
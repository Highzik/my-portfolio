import '/src/styles/contact.css'
import { FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa'
import ScrollReveal from 'scrollreveal'
import { useEffect, useRef } from 'react'

const Contact = () => {
  const leftRevealRef = useRef(null);
  const bottomRevealRef = useRef(null);
  const rightRevealRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2500,
      distance: '60px',
      reset: true,
      easing: 'ease'
    })
    sr.reveal(leftRevealRef.current, { delay: 300, origin: 'left' })
    sr.reveal(bottomRevealRef.current, { delay: 300, origin: 'bottom' })
    sr.reveal(rightRevealRef.current, { delay: 300, origin: 'right' })
  })
  return (
    <section id='contact' className='contactID container-fluid'>
      <div className="container text-center contactCont">
        <h3>HAVE ANY QUERY?</h3>
        <h1>Contact Me</h1>
        <p>You can reach out to me via my phone number, email, and <br />can also leave a message for me right in the message box</p>
        <hr className='horizontal-rule' />
      </div>
      <div className='container subContactCont'>
        <div className='row text-center'>
          <div className='col-md-4 col-lg-4 bgCont' ref={leftRevealRef}>
            <h4><FaMapMarker style={iconColors} /> Locate Us</h4>
            <p>Gbagada, Lagos, Nigeria</p>
          </div>
          <div className='col-md-4 col-lg-4 bgCont' ref={bottomRevealRef}>
            <h4><FaPhone style={iconColors} /> Give us a call</h4>
            <p>Office: (+234)81-294-7633</p>
          </div>
          <div className='col-md-4 col-lg-4 bgCont' ref={rightRevealRef}>
            <h4><FaEnvelope style={iconColors} /> Get it online</h4>
            <p>ajadiisaac99@gmail.com</p>
          </div>
        </div>
      </div>
      <form>
        <div className="container">
          <div className="row">
            <div className='col-md-6'>
              <input type="text" placeholder='Your Name' required className='col-12 my-2' />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder='Your Email' required className='col-12 my-2' />
            </div>
          </div>
          <input type="text" placeholder='Your Subject' required className='col-12 my-2' />
          <textarea cols="" rows="5" className='col-12 my-2' placeholder='Your Message'></textarea>
          <input type="submit" value="Send Message" className='submitBtn' onClick={() => setChangeText()} />
        </div>
      </form>
    </section>
  )
}

const iconColors = {
  color: '#ff4a57',
  fontWeight: '700',
  fontSize: '25px',
  marginLeft: '20px',
  marginRight: '20px'

}

export default Contact
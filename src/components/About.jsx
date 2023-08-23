import '/src/styles/about.css'
const About = () => {
  return (
    <section id='about' className="container-fluid aboutSection">
      <div className='container'>
        <div className='row text-center'>
          <h3 className="aboutMe">About Me</h3>
          <p className="noteAboutMe">I'm Isaac Ajadi, a Junior Software <br />Developer with vast experience in the field</p>
          <hr className='horizontal-rule' />
        </div>
        <div className='row rowGap'>
          <div className='col-md-12 col-lg-6 text-center'>
            <img src="/src/isaac-2.png" alt="image of the author" className='img-01' />
          </div>
          <div className='col-md-12 col-lg-6'><br /><br /><br /><br />
            <h3 className='greetings'>Hi, There</h3>
            <p className='shortNote'>I'm a dedicated web developer passionate about crafting digital experiences. With expertise in front-end and back-end technologies, I transform ideas into functional and visually appealing websites. Constantly learning and staying updated, I thrive in the ever-evolving world of web development, driven by a desire to create innovative and user-friendly solutions that make a difference.</p>
            <div className='row'>
              <div className='col-md-6'>
                <p className='sameClassName'>Name:</p>
                <p className='sameThing'>Isaac Olayinka</p>
              </div>
              <div className='col-md-6'>
                <p className='sameClassName'>Phone:</p>
                <p className='sameThing'>(+234) 812-944-7633</p>
              </div>
              <div className='col-md-6'>
                <p className='sameClassName'>Email:</p>
                <p className='sameThing'>ajadiisaac99@gmail.com</p>
              </div>
              <div className='col-md-6'>
                <p className='sameClassName'>GitHub:</p>
                <p className='sameThing'>Highzik</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
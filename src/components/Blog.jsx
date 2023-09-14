import '/src/styles/blog.css'
import { FaArrowCircleRight, FaUser } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'

const Blog = () => {
  return (
    <section id='blog' className='blogCont container-fluid'>
      <div className="container text-center centerText">
        <h3>LATEST POST</h3>
        <h1>Latest Blog</h1>
        <p>Here, you'll find everything that you need to <br />know about our blogging escapades</p>
        <hr className="horizontal-rule" />
      </div>
      <div className='container row'>
        <div className='col-md-6 col-lg-4 firstRowCont my-2'>
          <div className='imgCont'>
            <img src="/src/blog.jpg" className='blogImg col-12' alt="" />
          </div>
          <div className="row">
            <div className='col d-flex my-3'>
              <p><FaUser /> By <span>Admin</span></p>
              <p><FaCalendar /> Tuesday</p>
              <p><FaComments /> 3</p>
            </div>
          </div>
          <p>You Are Gonna Dance Like There's Nobody Watching</p>
          <p>Read more <FaArrowCircleRight /></p>
        </div>
        <div className='col-md-6 col-lg-4 firstRowCont my-2'>
          <div className='imgCont'>
            <img src="/src/blog-1.jpg" className='blogImg col-12' alt="" />
          </div>
          <div className="row">
            <div className='col d-flex my-3'>
              <p><FaUser /> By <span>Admin</span></p>
              <p><FaCalendar /> Wednesday</p>
              <p><FaComments /> 6</p>
            </div>
          </div>
          <p>I Must Explain To You How All This Are Mistaken Ideas</p>
          <p>See More <FaArrowCircleRight /></p>
        </div>
        <div className='col-md-6 col-lg-4 firstRowCont my-2'>
          <div className='imgCont'>
            <img src="/src/blog-2.jpg" className='blogImg col-12' alt="" />
          </div>
          <div className="row">
            <div className='col d-flex my-3'>
              <p><FaUser /> By <span>Admin</span></p>
              <p><FaCalendar /> Friday</p>
              <p><FaComments /> 9</p>
            </div>
          </div>
          <p>Ten Secret You Will Not Want To Know</p>
          <p>See More <FaArrowCircleRight /></p>
        </div>
      </div>
    </section >
  )
}

export default Blog

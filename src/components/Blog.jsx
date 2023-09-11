import '/src/styles/blog.css'

const Blog = () => {
  return (
    <section id='blog' className='blogCont'>
      <div className="container-fluid">
        <div className="container text-center">
          <h3>LATEST POST</h3>
          <h1>Latest Blog</h1>
          <p>Here, you'll find everything that you need to know about our blogging escapades</p>
          <hr className="horizontal-rule" />
        </div>
      </div>
    </section>
  )
}

export default Blog

import '/src/styles/portfolio.css'
import { useState } from 'react'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const images = []
  return (
    <section id='portfolio' className='container-fluid sectionID'>
      <div className='container text-center'>
        <h3 className='portfolioShow'>Portfolio <br />Showcase</h3>
        <p className='portfolioNote'>I'm thrilled to invite you to explore my portfolio <br />showcasing some of my recent web design work. <br />It's been an exciting journey, and I'd <br />love to share my projects with you</p>
        <hr className='horizontal-rule' />
      </div>
      <div className='container-fluid'>
        <div className='container text-center btnSection'>
          <button className='sameBtn' onClick={() => handleCategoryClick('all')}>All Works</button>
          <button className='sameBtn' onClick={() => handleCategoryClick('art direction')}>Art Direction</button>
          <button className='sameBtn' onClick={() => handleCategoryClick('branding')}>Branding</button>
          <button className='sameBtn' onClick={() => handleCategoryClick('design')}>Design</button>
          <button className='sameBtn' onClick={() => handleCategoryClick('web')}>Web</button>
        </div>
      </div>
      <div>
        {images.map((image) => (
          selectedCategory === 'all' || selectedCategory === image.category ? (<img key={image.id} src={image.url} alt={`Image ${image.id}`} />)
            : null))}
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row row-cols-sm-3 row-cols-md-3 text-center'>
            <div className='col-md-4'>
              <div className='d-flex flex-column'>
                <div className='col'>
                  <img src="/src/jeremy-perkins-UgNjyPkphtU-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
                <div className='col'>
                  <img src="/src/colin-carter-w1g2o4J_4Dg-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
                <div className='col'>
                  <img src="/src/kui-ye-chen-NuOGFo4PudE-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex flex-column'>
                <div className='col'>
                  <img src="/src/florian-klauer-mk7D-4UCfmg-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
                <div className='col'>
                  <img src="/src/nagy-arnold-X_IvVDuHvDQ-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex flex-column'>
                <div className='col'>
                  <img src="/src/oliver-pecker-HONJP8DyiSM-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
                <div className='col'>
                  <img src="/src/mukul-wadhwa-xpo5BggQo3E-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
                <div className='col'>
                  <img src="/src/julian-o-hayon-HY3l4IeOc3E-unsplash.jpg" alt="" className='imgPT01 img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const borderBtns = {
  border: '2px solid #ff4a56',
}

export default Portfolio
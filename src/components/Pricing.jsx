import '/src/styles/pricing.css'
import { FaDollarSign } from 'react-icons/fa'
const Pricing = () => {
  return (
    <section className='pricing container-fluid'>
      <div className='container pricingCont'>
        <div className='justify-content-center text-center'>
          <h3 className='choosePlan'>CHOOSE A PLAN</h3>
          <h3 className='planPrice'>Pricing Plan</h3>
          <p className='noteForPrice'>Consider factors like the number of users, features <br />required, and the scale of your project. Knowing <br />your needs is the first step in finding the most suitable plan.</p>
          <hr className='horizontal-rule' />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='text-center col-md-6 col-lg-4 flexCont'>
            <h2>Basic</h2>
            <h3><FaDollarSign />80</h3>
            <p>5GB Storage Space</p>
            <hr />
            <p>20GB Monthly Bandwidth</p>
            <hr />
            <p>My SQL Databases</p>
            <hr />
            <p>100 Email Account</p>
            <hr />
            <p>10 Free Domain Names</p>
            <hr />
            <button>Purchase</button>
          </div>
          <div className='text-center col-md-6 col-lg-4 flexCont recommended'>
            <span>Recommended</span>
            <h2>Standard</h2>
            <h3><FaDollarSign />160</h3>
            <p>10GB Storage Space</p>
            <hr />
            <p>25GB Monthly Bandwidth</p>
            <hr />
            <p>My SQL Databases</p>
            <hr />
            <p>150 Email Account</p>
            <hr />
            <p>15 Free Domain Names</p>
            <hr />
            <button>Purchase</button>
          </div>
          <div className='text-center col-md-6 col-lg-4 flexCont'>
            <h2>Premium</h2>
            <h3><FaDollarSign />240</h3>
            <p>15GB Storage Space</p>
            <hr />
            <p>30GB Monthly Bandwidth</p>
            <hr />
            <p>My SQL Databases</p>
            <hr />
            <p>200 Email Account</p>
            <hr />
            <p>20 Free Domain Names</p>
            <hr />
            <button>Purchase</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing
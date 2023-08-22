const Services = ({ title, title1 }) => {
  return (
    <section id='services' className="container">
      <div className="row">
        <h3>{title}</h3>
        <h2>{title1}</h2>
      </div>
    </section>
  )
}

Services.defaultProps = {
  title: 'services'.toUpperCase(),
  title1: 'My Services',
}

export default Services
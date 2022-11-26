import IMG1 from '../images/herotree.png'

const HomePage = () => {
  return (
	  <div className="container col-xxl-8 px-4 py-5">
      <div className='hero-container row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={IMG1} className="hero-img d-block mx-lg-auto img-fluid" alt="" />
        </div>
        <div className='hero col-lg-6'>
          <h1 className='hero-h1'>Out of <br/>Time</h1>
          <h4 className='hero-sub'>Doorstep Delivery<br/>Christmas Trees</h4>
          <button className='hero-btn'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
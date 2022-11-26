import IMG1 from '../images/herotree.png'

const HomePage = () => {
  return (
      <div className='hero-container'>
        <div className='hero-img'>
          <img src={IMG1} alt="" width="100%"/>
        </div>
        <div className='hero'>
          <h1 className='hero-h1'>Out of Time</h1>
          <h4 className='hero-sub'>Doorstep Delivery Christmas Trees</h4>
          <button className='hero-btn'>Order Now</button>
        </div>
      </div>
  )
}

export default HomePage
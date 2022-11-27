import IMG1 from '../images/herotree.png'

const HomePage = () => {
  return (
      <div className='hero-container'>
        <div class="py-5 mt-4">
		      <h1 className='hero-h1'>Artisan Glass Beads & Jewelry</h1>
	        <h6 className="hero-sub">Exquisite unique pieces handmade from Italian Murano glass.</h6>
	      </div>
        <div className="hero-btns">
          <button className='hero-btn'>Shop Beads</button>
          <button className='hero-btn'>Shop Jewelry</button>
        </div>
      </div>
  )
}

export default HomePage
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  return (
      <div>
        <div class="pb-5">
		      <h1 className='hero-h1'>Artisan Glass Beads & Jewelry</h1>
	        <h6 className="hero-sub">Exquisite unique pieces handmade from Italian Murano glass.</h6>
          <div className="hero-btns">
            <Button href="/beads" className='hero-btn' variant="secondary">Shop Beads</Button>
            <Button href="/jewelry" className='hero-btn' variant="dark" style={{backgroundColor:"black", paddingTop: "12px"}}>Shop Jewelry</Button>
          </div>
	      </div>
      </div>
  )
}

export default HomePage
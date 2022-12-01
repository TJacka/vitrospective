import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
      <div>
        <div className="pb-5">
		      <h1 className='hero-h1'>Artisan Glass Beads & Jewelry</h1>
	        <h6 className="hero-sub">Exquisite unique pieces handmade from Italian Murano glass.</h6>
          <div className="hero-btns">
            <Link className="hero-btn" variant="secondary" to='/vitrospective/beads/'>Shop Beads</Link>
			      <Link className="hero-btn" to='/vitrospective/jewelry/' variant="dark">Shop Jewelry</Link>
          </div>
	      </div>
      </div>
  )
}

export default HomePage
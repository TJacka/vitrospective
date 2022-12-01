import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const NavbarMobile = () => {

return (
	<nav className="nav-mobile navbar" style={{ boxShadow: "0 0 30px silver" }} aria-label="Vitrospective navbar">
		<div className="container-fluid mx-5-lg smallreverse">
			<Link to='/vitrospective/' className="nav-logo">Vitrospective</Link>
		  	<AiOutlineMenu className='nav-burger' />
		  	<div className="collapse nav-mobile-dropdown justify-content-md-center" id="navbarsExample10">
				<ul className="navbar-nav">
			  		<li><Link to='/vitrospective/about'>About</Link></li>
			  		<li><Link to='/vitrospective/beads'>Beads</Link></li>
			  		<li><Link to='/vitrospective/jewelry'>Jewelry</Link></li>
			  		<li><Link to='/vitrospective/contact'>Contact</Link></li>
			  		<li><Link to='/vitrospective/cart'>Cart</Link></li>
			  		<li><Link to='/vitrospective/signup'>Signup</Link></li>
				</ul>
		  	</div>
		</div>
	</nav>
  )
}

export default NavbarMobile
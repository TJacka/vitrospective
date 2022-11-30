import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
	<nav class="navbar navbar-expand-lg" style={{ boxShadow: "0 0 30px silver" }} aria-label="Vitrospective navbar">
		<div class="container-fluid mx-5-lg smallreverse">
		  <div>
		  	<Link to='/' className="nav-logo">Vitrospective</Link>
		  </div>
		  <div class="">
			<ul class="navbar-nav">
			  <li><Link class="navbar-li" to='/about'>About</Link></li>
			  <li><Link class="navbar-li" to='/beads'>Beads</Link></li>
			  <li><Link class="navbar-li" to='/jewelry'>Jewelry</Link></li>
			  <li><Link class="navbar-li" to='/contact'>Contact</Link></li>
			</ul>
		  </div>
		  <div class="navbar-nav mx-3">
			<Link class="navbar-li" to='/cart'>Cart<AiOutlineShoppingCart style={{fontSize:"2rem", paddingBottom:"8px"}}/><sup className='cart-number'>7 </sup></Link>
			<Link class="navbar-li" to='/signup'>Signup</Link>
		  </div>
		</div>
	  </nav>
  )
}

export default Navbar
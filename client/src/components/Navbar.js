import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {

	const { cartProductIds } = useSelector((state) => state.cart)

  return (
	<nav className="navbar navbar-expand-lg" style={{ boxShadow: "0 0 30px silver" }} aria-label="Vitrospective navbar">
		<div className="container-fluid mx-5-lg smallreverse">
		  <div>
		  	<Link to='/vitrospective/' className="nav-logo">Vitrospective</Link>
		  </div>
		  <div className="">
			<ul className="navbar-nav" style={{marginLeft:"70px"}}>
			  <li><Link className="navbar-li" to='/vitrospective/about/' onClick={() => {window.location.href="/vitrospective/about/"}}>About</Link></li>
			  <li><Link className="navbar-li" to='/vitrospective/beads/' onClick={() => {window.location.href="/vitrospective/beads/"}}>Beads</Link></li>
			  <li><Link className="navbar-li" to='/vitrospective/jewelry/' onClick={() => {window.location.href="/vitrospective/jewelry/"}}>Jewelry</Link></li>
			  <li><Link className="navbar-li" to='/vitrospective/contact/' onClick={() => {window.location.href="/vitrospective/contact/"}}>Contact</Link></li>
			</ul>
		  </div>
		  <div className="navbar-nav mx-3">
			<Link className="navbar-li" to='/vitrospective/cart/' onClick={() => {window.location.href="/vitrospective/cart/"}}>Cart<AiOutlineShoppingCart style={{fontSize:"2rem", paddingBottom:"8px"}}/><sup className='cart-number' style={{fontWeight:"bold"}}>{cartProductIds.length} </sup></Link>
			<Link className="navbar-li" to='/vitrospective/signup/' onClick={() => {window.location.href="/vitrospective/signup/"}}>Signup</Link>
		  </div>
		</div>
	  </nav>
  )
}

export default Navbar
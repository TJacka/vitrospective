import {useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import IMG1 from "../images/burgermenuwhite.png"
import IMG2 from "../images/burgerclosewhite.png"

const NavbarMobile = () => {
	const [activeNav, setActiveNav] = useState('/')
  	const [navbarOpen, setNavbarOpen] = useState(false)

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	}

return (
	<nav className={navbarOpen ? 'btn--close mobile-nav-open' : 'btn--burger mobile--nav--close nav-mobile navbar' }style={{ boxShadow: "0 0 30px silver" }} aria-label="Vitrospective navbar">
	<div className="container-fluid d-flex justify-content-between smallreverse">
			<Link to='/vitrospective/' className="nav-logo">Vitrospective</Link>
			<button alt="" style={{backgroundColor:"transparent", border:"none", marginRight:"16px"}} onClick={handleToggle}><img src={!navbarOpen ? IMG1 : IMG2} width="25px"></img></button>
	</div>
      	<div className={navbarOpen ? "showmenu" : "hidemenu"}>
        	<a href="#home" title="Home" onClick={() => {handleToggle();setActiveNav('#home')}} className={activeNav === '#home' ? 'active' : ''}><Link to='/vitrospective/'>Home</Link></a>
        	<a href="/vitrospective/about/" title="About" onClick={() => {handleToggle();setActiveNav('#about')}} className={activeNav === '/vitrospective/about/' ? 'active' : ''}><Link to='/vitrospective/about/'>About</Link></a>
        	<a href="#portfolio" title="Beads" onClick={() => {handleToggle();setActiveNav('#beads')}} className={activeNav === '#beads' ? 'active' : ''}><Link to='/vitrospective/beads'>Beads</Link></a>
			<a href="#portfolio" title="Jewelry" onClick={() => {handleToggle();setActiveNav('#jewelry')}} className={activeNav === '#jewelry' ? 'active' : ''}><Link to='/vitrospective/jewelry'>Jewelry</Link></a>
        	<a href="#contact" title="Contact" onClick={() => {handleToggle();setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><Link to='/vitrospective/contact'>Contact</Link></a>
			<a href="#contact" title="Cart" onClick={() => {handleToggle();setActiveNav('#cart')}} className={activeNav === '#cart' ? 'active' : ''}><Link to='/vitrospective/cart'>Cart</Link></a>
			<a href="#contact" title="Signup" onClick={() => {handleToggle();setActiveNav('#signup')}} className={activeNav === '#signup' ? 'active' : ''}><Link to='/vitrospective/signup'>Signup</Link></a>
      	</div>
    </nav>
  )
}

export default NavbarMobile
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTree, FaHome } from 'react-icons/fa';

const NavbarMobile = () => {
  return (
	<nav className='nav-mobile'>
		<ul className='nav-mobile-ul'>
			<li className='logo'>
				<Link to='/'><FaHome /></Link>
			</li>
			<li>
				<Link to='/store'><FaTree /></Link>
			</li>
			<li>
				<Link to='/cart'><AiOutlineShoppingCart /></Link>
			</li>
		</ul>
	</nav>
  )
}

export default NavbarMobile
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	<nav>
		<ul>
			<li >
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
		</ul>
		<ul>
			<li>
				<Link to='/trees'>Trees</Link>
			</li>
			<li>
				<Link to='/accessories'>Accessories</Link>
			</li>
		</ul>
		<ul>
			<li>
				<Link to='/cart'>Cart</Link>
			</li>
			<li>
				<Link to='/cart'>SignUp</Link>
			</li>
		</ul>
	</nav>
  )
}

export default Navbar
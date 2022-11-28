import { Link } from 'react-router-dom'

const JewelryList = ({ pieces }) => {
  return (
    <div className="jewelry-container">
      <h1>Jewelry</h1>
      <div className="container px-4 mt-5" id="featured-3">
        <h3>Swirls</h3>
        <hr/>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="product-category">
          {pieces.map(piece => (
              <Link key={piece.name} to={`/jewelry/${piece.name}`} >
                <h3>{piece.title}</h3>
                <p>${piece.price}</p>
              </Link>
              ))}
          </div>
        </div>
      </div>
			<div class="container px-4" id="featured-3">
				<h3>Florals</h3>
				<hr/>
				<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="product-category">
          {pieces.map(piece => (
              <Link key={piece.name} to={`/jewelry/${piece.name}`} >
                <h3>{piece.title}</h3>
                <p>${piece.price}</p>
              </Link>
              ))}
            </div>
          </div>
			</div>
    </div>
  )
}

export default JewelryList
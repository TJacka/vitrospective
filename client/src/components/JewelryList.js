import ProductCardJewelry from '../components/ProductCardJewelry'

const JewelryList = ({ piecesbracelets, piecesnecklaces }) => {
  return (
    <div className="beads-container">
      <h1>Jewelry</h1>
      <div className="category-container" id="featured-3">
        <h3>Bracelets</h3>
        <hr/>
        <div className="product-category">
          {piecesbracelets.map(piece => (
              <ProductCardJewelry className="product" key={piece.name} piece={piece} />
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Necklaces</h3>
        <hr/>
        <div className="product-category">
          {piecesnecklaces.map(piece => (
              <ProductCardJewelry key={piece.name} piece={piece} />            
          ))}
        </div>
      </div>
    </div>
  )
}

export default JewelryList
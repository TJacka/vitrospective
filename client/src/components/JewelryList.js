import ProductCard from './ProductCard'

const JewelryList = ({ productList }) => {
  return (
    <div className="beads-container">
      <h1>Jewelry</h1>
      <div className="category-container" id="featured-3">
        <h3>Bracelets</h3>
        <hr/>
        <div className="product-category">
        {productList.map(product => ( product.type === "bracelet" ? 
              <ProductCard className="product" key={product.id} product={product} /> : []
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Necklaces</h3>
        <hr/>
        <div className="product-category">
        {productList.map(product => ( product.type === "necklace" ? 
              <ProductCard className="product" key={product.id} product={product} /> : []
          ))}
        </div>
      </div>
    </div>
  )
}

export default JewelryList
import ProductCard from './ProductCard'

const BeadsList = ({ productList }) => {
  return (
    <div className="beads-container">
      <h1>Beads</h1>
      <div className="category-container" id="featured-3">
        <h3>Swirls</h3>
        <hr/>
        <div className="product-category">
          {productList.map(product => ( product.type === "swirl" ? 
              <ProductCard className="product" key={product.id} product={product} /> : []
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Florals</h3>
        <hr/>
        <div className="product-category">
        {productList.map(product => ( product.type === "floral" ? 
              <ProductCard className="product" key={product.id} product={product} /> : []
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Pendants</h3>
        <hr/>
        <div className="product-category">
        {productList.map(product => ( product.type === "pendant" ? 
              <ProductCard className="product" key={product.id} product={product} /> : []
          ))}
        </div>
			</div>
    </div>
  )
}

export default BeadsList
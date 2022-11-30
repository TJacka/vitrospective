import ProductCardBeads from './ProductCardBeads'

const BeadsList = ({ beadsswirl, beadsfloral, beadspendant }) => {
  return (
    <div className="beads-container">
      <h1>Beads</h1>
      <div className="category-container" id="featured-3">
        <h3>Swirls</h3>
        <hr/>
        <div className="product-category">
          {beadsswirl.map(bead => (
              <ProductCardBeads className="product" key={bead.name} bead={bead} beads={beadsswirl} />
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Florals</h3>
        <hr/>
        <div className="product-category">
          {beadsfloral.map(bead => (
              <ProductCardBeads bead={bead} />            
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Pendants</h3>
        <hr/>
        <div className="product-category">
          {beadspendant.map(bead => (
              <ProductCardBeads bead={bead} />
          ))}
        </div>
			</div>
    </div>
  )
}

export default BeadsList
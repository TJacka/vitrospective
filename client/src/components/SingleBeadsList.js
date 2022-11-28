import ProductCard from '../components/ProductCard'

const SingleBeadsList = ({ singlebeadswirl, singlebeadfloral, singlebeadpendant }) => {
  return (
    <div className="beads-container">
      <h1>Single Beads</h1>
      <div className="category-container" id="featured-3">
        <h3>Swirls</h3>
        <hr/>
        <div className="product-category">
          {singlebeadswirl.map(bead => (
              <ProductCard className="product" key={bead.name} bead={bead} />
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Florals</h3>
        <hr/>
        <div className="product-category">
          {singlebeadfloral.map(bead => (
              <ProductCard bead={bead} />            
          ))}
        </div>
      </div>
			<div className="category-container" id="featured-3">
        <h3>Pendants</h3>
        <hr/>
        <div className="product-category">
          {singlebeadpendant.map(bead => (
              <ProductCard bead={bead} />
          ))}
        </div>
			</div>
    </div>
  )
}

export default SingleBeadsList
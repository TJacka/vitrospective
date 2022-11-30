import React from 'react';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ piece }) => {
  
  return (
	<div className="product-card">
    <h4 style={{textAlign:"center", fontSize:"1.1rem"}}>{piece.title}</h4>
    <img src={piece.image} alt="bead sample" width="160px" />
    <span>{piece.color}</span>
    <span class="card-description">{piece.description}</span>
    <div className="card-price">
    <Button className="cartadd" variant="secondary" style={{fontSize:"0.9rem", padding: "9px 6px 9px", color: "white", textShadow:"0 0 20px dark"}} >Add to cart</Button>
      <Button className="price" variant="dark" style={{fontSize:"0.99rem", paddingBottom:"8px", paddingTop:"8px"}}>${piece.price}.00</Button>{' '}
    </div>
  </div>
  )
}

export default ProductCard
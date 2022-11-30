import React from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ bead }) => {
 
  return (
	<div className="product-card">
    <h4 style={{textAlign:"center", fontSize:"1.1rem"}}>{bead.title}</h4>
    <img src={bead.image} alt="bead sample" width="160px" />
    <span>{bead.color}</span>
    <span class="card-description">{bead.description}</span>
    <div className="card-price">
      <Button className="cartadd" variant="secondary" style={{fontSize:"0.9rem", padding: "9px 6px 9px", color: "white", textShadow:"0 0 20px dark"}} >Add to cart</Button>
      <Button className="price" variant="dark" style={{fontSize:"0.99rem", paddingBottom:"8px", paddingTop:"8px"}}>${bead.price}.00</Button>{' '}
    </div>
  </div>
  )
}

export default ProductCard
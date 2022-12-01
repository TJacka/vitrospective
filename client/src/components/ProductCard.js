import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import Button from 'react-bootstrap/Button';
import cartSlice from '../data/cartSlice'

const ProductCard = ({ product }) => {
 
  const { cartProductIds} = useSelector((state) => state.cart)
  const { addToCart } = cartSlice.actions
  const dispatch = useDispatch()

  return (
	<div className="product-card">
    <h4 style={{textAlign:"center", fontSize:"1.1rem"}}>{product.title}</h4>
    <img src={product.image} alt="bead sample" width="160px" />
    <span>{product.color}</span>
    <span className="card-description">{product.description}</span>
    <div className="card-price">
      <Button className="cartadd" variant="secondary" style={{fontSize:"0.9rem", padding: "9px 6px 9px", color: "white", textShadow:"0 0 20px dark"}} onClick={() => dispatch(addToCart(product.id))} >Add to cart</Button>
      <div className='price' style={{textAlign:"left"}}>
        <p style={{color: "darkred", marginTop:"4px", fontWeight:"bold"}}>Price:</p>
        <p style={{fontWeight:"bold"}}>${product.price}.00</p>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
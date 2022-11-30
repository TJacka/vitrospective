import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import Button from 'react-bootstrap/Button';
import cartSlice from '../data/cartslice'

const ProductCard = ({ product }) => {
 
  const { cartProductIds} = useSelector((state) => state.cart)
  const { addToCart } = cartSlice.actions
  const dispatch = useDispatch()

  console.log(cartProductIds)

  return (
	<div className="product-card">
    <h4 style={{textAlign:"center", fontSize:"1.1rem"}}>{product.title}</h4>
    <img src={product.image} alt="bead sample" width="160px" />
    <span>{product.color}</span>
    <span class="card-description">{product.description}</span>
    <div className="card-price">
      <Button className="cartadd" variant="secondary" style={{fontSize:"0.9rem", padding: "9px 6px 9px", color: "white", textShadow:"0 0 20px dark"}} onClick={() => dispatch(addToCart(product.id))} >Add to cart</Button>
      <Button className="price" variant="dark" style={{fontSize:"0.99rem", paddingBottom:"8px", paddingTop:"8px"}}>${product.price}.00</Button>{' '}
    </div>
  </div>
  )
}

export default ProductCard
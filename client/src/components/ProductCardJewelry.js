import React from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './ProductModal';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ piece }) => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
	<div className="product-card">
    <h4>{piece.name}</h4>
    <img src={piece.image} alt="bead sample" width="160px" />
    <span>{piece.color}</span>
    <span class="card-description">{piece.description}</span>
    <div className="card-price">
      <Button variant="dark">${piece.price}.00 <AiOutlineShoppingCart style={{ fontSize:"1.5rem", paddingBottom: "1px" }} /></Button>{' '}
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        More
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        piece={piece}
      />
    </div>
  </div>
  )
}

export default ProductCard
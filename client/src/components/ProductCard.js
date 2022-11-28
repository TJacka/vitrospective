import React from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './ProductModal';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const ProductCard = ({ bead }) => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
	<div className="product-card">
    <h4>{bead.name}</h4>
    <img src={bead.image} alt="bead image" width="160px" />
    <span>{bead.color}</span>
    <span class="card-description">{bead.description}</span>
    <div className="card-price">
      <Button variant="success">${bead.price}.00 <AiOutlineShoppingCart style={{ fontSize:"1.5rem", paddingBottom: "1px" }} /></Button>{' '}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        More
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  </div>
  )
}

export default ProductCard
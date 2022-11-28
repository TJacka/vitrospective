import React from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './ProductModal';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ bead }) => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
	<div className="product-card">
    <h4 style={{textAlign:"center", fontSize:"1.1rem"}}>{bead.name}</h4>
    <img src={bead.image} alt="bead sample" width="160px" />
    <span>{bead.color}</span>
    <span class="card-description">{bead.description}</span>
    <div className="card-price">
      <Button variant="dark" style={{fontSize:"0.9rem", paddingTop:"7px"}}>${bead.price}.00 <AiOutlineShoppingCart style={{ fontSize:"1.5rem", paddingBottom: "2px" }} /></Button>{' '}
      <Button variant="secondary" style={{fontSize:"0.8rem", padding: "9px 0"}} onClick={() => setModalShow(true)}>
        Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bead={bead}
      />
    </div>
  </div>
  )
}

export default ProductCard
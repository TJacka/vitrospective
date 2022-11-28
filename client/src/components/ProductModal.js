import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function MyVerticallyCenteredModal(props, bead) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 style={{fontWeight:"700", marginBottom: "-5px"}}>Bead Title</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex'>
          <img src="https://i.ibb.co/ggTHy8D/24.png" width="300px" />
          <div className='d-flex flex-column align-items-start justify-content-center pb-4'>
            <div className='d-flex' style={{ width: "400px", justifyContent:"space-between", marginBottom:"10px"}}>
              <span><b>Shape:</b> Lentil</span>
              <span><b>Color:</b> Earth</span>
              <span><b>Size:</b> medium</span>
            </div>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <Button onClick={props.onHide} variant="success">Add to cart + Price</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
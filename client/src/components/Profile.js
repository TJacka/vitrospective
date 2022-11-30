import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <div className='signup-container'>
      <div className='signup-header'>
        <h1>Signup</h1>
        <hr/>
      </div>
        <Form className="signupform">
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label style={{fontWeight:"600"}}>Email address</Form.Label>
            <Form.Control style={{fontSize:"0.9rem"}} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label style={{fontWeight:"600"}}>Password</Form.Label>
            <Form.Control style={{fontSize:"0.9rem"}} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{fontWeight:"600"}}>Retype Password</Form.Label>
            <Form.Control style={{fontSize:"0.9rem"}} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" style={{marginTop:"20px", width:"150px", fontWeight: "600"}}>
            Submit
          </Button>
        </Form>
    </div>
  );
}

export default BasicExample;
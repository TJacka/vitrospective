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
          <Form.Group className="mb-3" controlId="formBasicPasswordcheck">
            <Form.Label style={{fontWeight:"600"}}>Retype Password</Form.Label>
            <Form.Control style={{fontSize:"0.9rem"}} type="retypepassword" placeholder="Retype Password" />
          </Form.Group>
          <button class="signin-btn" type="submit">Submit</button>
        </Form>
    </div>
  );
}

export default BasicExample;
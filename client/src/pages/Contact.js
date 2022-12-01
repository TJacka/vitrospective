import Button from 'react-bootstrap/Button';
import CLOSEDBRACELET from '../images/5.png'

const Contact = () => {
  return (
	<div className="contact-container">
		<div className="d-flex flex-column align-items-center mx-5 contact-description">
			<h1 style={{ fontSize:"3rem", marginBottom: "30px", marginTop:"-60px", borderBottom:"1px solid lightgrey", paddingBottom:"25px" }}>Contact Vitrospective Glass Beads & Jewelry</h1>
			<img src={CLOSEDBRACELET} width="400px" style={{marginBottom:"30px"}} alt="" />
			<p className="contact-details">Jewelry & beads available online or via email or phone. <br /><br /> Emerald, 3783 VIC.</p>
			<img src="" alt="" />
			<div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
				<Button className='hero-btn' variant="secondary">Email</Button>
            	<Button className='hero-btn' variant="dark" style={{backgroundColor:"black"}}>Phone</Button>
			</div>
		</div>
	</div>
  )
}

export default Contact
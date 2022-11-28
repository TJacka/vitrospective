import React from 'react'

const Contact = () => {
  return (
	<div class="contact-container">
		<div class="d-flex flex-column align-items-center mx-5 contact-description">
			<h1 style={{ display:"none"}}>Vitrospective Glass Beads & Jewelry Contact Details</h1>
			<p class="contact-details">Jewelry, beads & sets available online or via email or phone. Custom designs and sets available. Emerald, 3783 VIC.</p>
			<div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
				<button type="email" class="hero-btn">Email</button>
				<button type="phone" class="hero-btn">Phone: 0461949923</button>
			</div>
		</div>
	</div>
  )
}

export default Contact
import IMG1 from '../images/lampworking.png'
import IMG2 from '../images/about.png'
import SPECIALS from '../images/4.png'

const About = () => {
  return (
	<div className="about-container row flex-lg-row align-items-center g-5" style={{marginTop:"-90px", maxWidth:"1400px"}}>
		<div className="col-lg-6 d-flex flex-column justify-center align-items-center">
			<img src={IMG1} width="600px" alt="" />
		</div>
		<div class="about-details col-lg-6 d-flex flex-column justify-center align-items-center">
			<p>Found at Dandenong Ranges markets most weekends.</p>
			<img src={IMG2} alt="" width={"500px"} style={{marginRight:"20px"}} />
			<br/>
			<p class="about-details " style={{marginBottom: "50px", marginRight: "0px"}}>All beads are kiln fired for lifetime durability. Jewelry made with longterm use sterling silver & bronze metalware. <br/>Custom designs and sets available.</p>		
			<img src={SPECIALS} alt="" width={"300px"} />		
		</div>
	</div>
  )
}

export default About
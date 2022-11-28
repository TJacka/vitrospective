import IMG1 from '../images/lampworking.png'
import IMG2 from '../images/about.png'

const About = () => {
  return (
	<div className="about-container row flex-lg-row align-items-center g-5">
		<div className="col-lg-6 d-flex flex-column justify-center align-items-center">
			<img src={IMG1} alt="" />
		</div>
		<div class="about-details col-lg-6 d-flex flex-column justify-center align-items-center">
			<p>Found at local Dandenong Ranges markets most weekends.</p>
			<br/>
			<p class="about-details " style={{marginBottom: "50px"}}>All beads are kiln fired for lifetime durability. Jewelry made with longterm use sterling silver & bronze metalware.</p>		
			<img src={IMG2} alt="" width={"400px"} />		
		</div>
	</div>
  )
}

export default About
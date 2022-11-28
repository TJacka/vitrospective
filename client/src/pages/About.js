import IMG1 from '../images/lampworking.png'
import IMG2 from '../images/about.png'
import Footer from '../components/Footer'

const About = () => {
  return (
	<div className="about-container row flex-lg-row align-items-center g-5">
		<div className="col-lg-6 d-flex flex-column justify-center align-items-center">
			<img src={IMG1} alt="" />
		</div>
		<div class="about-details col-lg-6 d-flex flex-column justify-center align-items-center">
			<br/>
			<p>Found at local Dandenong Ranges markets most weekends.</p>
			<img src={IMG2} alt="" />
			<br/>
			<p class="about-details " style={{marginBottom: "50px"}}>All beads are kiln fired for lifetime durability. Jewelry made using longterm use sterling silver & bronze metalware.</p>				
		</div>
	</div>
  )
}

export default About
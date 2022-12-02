import IMG1 from '../images/lampworking.png'
import IMG2 from '../images/about.png'
import SPECIALS from '../images/4.png'

const About = () => {
  return (
	<div className="about-container row flex-lg-row align-items-center g-5" style={{marginTop:"-90px", maxWidth:"1400px"}}>
		<div className="col-lg-6 d-flex flex-column justify-center align-items-center">
			<img src={IMG1} className="about-img" alt="" />
		</div>
		<div className="about-details col-lg-6 d-flex flex-column justify-center align-items-center">
			<p style={{fontFamily:"Niconne", fontSize:"2.5rem", lineHeight:"2.5rem", marginBottom:"30px"}}>Found at Dandenong Ranges markets</p>
			<img src={IMG2} alt="" style={{marginRight:"20px", minWidth:"250px", width: "90vw", maxWidth:"500px"}} />
			<br/>
			<p className="" style={{marginBottom: "50px", marginRight: "0px"}}>All beads are kiln fired for lifetime durability. Jewelry made with longterm use sterling silver & bronze metalware. <br/>Custom designs and sets available.</p>		
			<img src={SPECIALS} alt="" width={"300px"} />		
		</div>
	</div>
  )
}

export default About
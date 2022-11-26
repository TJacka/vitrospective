import IMG2 from '../images/2.png'

const About = () => {
  return (
    <div class='container'>
      <div class='hero-container row flex-lg-row-reverse align-items-center'>
        <div className='about-hero'>
          <img src={IMG2} alt="" className="about-img d-block mx-lg-auto img-fluid" />
          <h4 className='about-sub'>Enjoy the look & smell of a real tree this year.</h4>
          <p class="about-paragraph">Grown locally to Seattle for the past 55 years, we pick, shape and deliver only the best quality Christmas trees.</p>
        </div>
      </div>
    </div>

   
  )
}

export default About
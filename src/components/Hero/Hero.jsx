import Hero_img from './../../assets/image/footer.svg'
import pattren_img from './../../assets/image/pattren.png'
import Game_img from './../../assets/image/gameBoy-min.png'
import press_start_img from './../../assets/image/pressStart.svg'
import linkedin_img from './../../assets/image/linkedin.png'
import instgram_img from './../../assets/image/instgram.png'
import facebook_img from './../../assets/image/facebook.png'
import behance_img from './../../assets/image/behance.png'
import twitter_img from './../../assets/image/twitter.png'
import './Hero.css'

const Hero = () => {
  return (
    <>

    <section className='SK-Home'>
    <div className='SK-Hero'>
        <div className="SK-content">
            <p className='SK-Title'>Hey !! Mario still here, But don’t forget that</p>
            <p>At focal X agency, we are working to build somthing different. 
              Here you’ll have a group of creative people who specialize in:
              Branding, Digital Marketing, Web/App Development, Ui/Ux
              Content creation, Graphic design, Social media and More.......
              So you can take a tour in our website, OR just <b>Press Start  :)</b></p>
        </div>

        <div className='SK-Hero-Footer'>
            <img className='SK-Footer-img' src={Hero_img} alt="Hero_img" />
            <img className='SK-pattren-img' src={pattren_img} alt="pattren_img" />
            <img className='SK-Game-img' src={Game_img} alt="Game_img" />
            <img className='SK-Press-img' src={press_start_img} alt="press_start_img" />
            <a className='SK-Start-img' href="http://focal-x.com/mario">START</a>
            
                <div className='Hero-contact'>
                    <div>
                            <ul className='Contact-logos'>
                                <li className='Contact-logo'><a href="https://www.facebook.com/focal.x.agency/"><img src={facebook_img} alt="facebook_img" /></a></li>
                                <li className='Contact-logo'><a href="https://www.behance.net/focal-x-agency"><img src={behance_img} alt="ehance_img" /></a></li>
                                <li className='Contact-logo'><a href="https://www.linkedin.com/company/focal-x-agency"><img src={linkedin_img} alt="linkedin_img" /></a></li>
                                <li className='Contact-logo'><a href="https://www.instagram.com/focal.x.agency"><img src={instgram_img} alt="instgram_img" /></a></li>
                                <li className='Contact-logo'><a href="https://x.com/focal_x_agency?mx=2"><img src={twitter_img} alt="twitter_img" /></a></li> 
                            </ul>
                    </div>

                    <div>
                        <p className='copy-right'>© 2021 - 2022 focal X agency All Right Reserved</p>
                    </div>
                </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Hero

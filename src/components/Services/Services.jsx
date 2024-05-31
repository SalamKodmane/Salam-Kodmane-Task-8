import SK_img1 from '..//..//assets/image/brandingOrange.png'
import SK_img2 from '..//..//assets/image/markiting.png'
import './Services.css'


const Services = () => {
    return (
      <>
      <section className='SK-Services'>
          <div className='SK-Services-title'>
          <h1 className='Services-title'>Our Services</h1>
          </div>

          <div className='Sk-Cards'>
              <div className='SK-Card'>
                  <h2 className='Branding-title'>Branding</h2>
                      <p className='Paragraph'>
                      The brand is hope,It is also the source of inspiration for everything you do when you
                      deal with your customers and that is the important and emotional
                      thing. Your Brand and Visual identity represents an intrinsic Value
                      to your company.</p>
                      <p><b>In focal X agency, we provide:</b></p>
                      <div className='Sk-Items'>
                          <div className='SK-text'>
                              <p className='SK-Item'>Visual identity design.</p>
                              <p className='SK-Item'>Define Brand Identity.</p>
                              <p className='SK-Item'>Define Brand personality.</p>
                              <p className='SK-Item'>Building Your brand strategy.</p>
                              <p className='SK-Item'>Market research and competitors study</p>
                          </div>
                          <div><img className='FocalImg' src={SK_img1} alt="Focal X Img" /></div>
                      </div>
                      <p><b>We walk with you from A to Z.</b></p>
              </div>
              <div className='SK-Card'>
                  <h2 className='Marketing-title'>Marketing</h2>
                      <p className='Paragraph'>
                        Talk to your customers and tell them you and your company's
                        story through us the way you want.
                        Let us plan the content that will bring your audience closer to you</p>
                      <p><b>In our marketing agency, we provide:</b></p>
                      <div className='Sk-Items-2'>
                          <div className='SK-text'>
                              <p className='SK-Item'>E-mail marketing.</p>
                              <p className='SK-Item'>Affiliate marketing.</p>
                              <p className='SK-Item'>Influencer marketing.</p>
                              <p className='SK-Item'>Copy & content writing.</p>
                              <p className='SK-Item'>Market research and Analysis.</p>
                              <p className='SK-Item'>App store optimization ( ASO ).</p>
                              <p className='SK-Item'>Search engine Marketing ( SEM ).</p>
                              <p className='SK-Item'>Search engine optimization ( SEO ).</p>
                              <p className='SK-Item'>Social media marketing & campaigns.</p>
                          </div>
                          <div><img className='FocalImg' src={SK_img2} alt="Focal X Img" /></div>
                      </div>      
              </div>
          </div>
      </section>
      </>
    )
  }
  export default Services
import './Footer.css'
import footerimg from './../../assets/image/logo-footer.png'
export default function Footer() {
  return (
    <section className='SK-Footer'>
      
    <div className="SK-Footer-1">

        <div className="SK-div" id="address">
            <img src={footerimg} alt="Footer-logo" />
            <span>.agency</span>
            <h3>Head Office</h3>
            <p>Syria - Latakia - GRH2+HJX35.5199518</p>
        </div>  

        <div className="SK-div">
             <h3>Sales</h3>  
             <p>contact@focal-x.com +963 953 666 056</p>  
             <h3>Public Relations</h3>
             <p>pr@focal-x.com +963 953 666 052</p>
        </div>

        <div className="SK-div">
             <h3>Customer Support</h3>  
             <p>info@focal-x.com +963 953 666 054</p>
             <h3>Human Resources</h3> 
             <p>hr@focal-x.com</p>
        </div> 

        <div className="SK-div">
            <h3>Useful Links</h3>
            <p>Clients & Partner</p>
            <p>Check Certificat ID</p>
            <p>Check for employee</p>
            <p>Our Brand ID guidlines</p>
        </div> 

        <div className="SK-icons">
            <h3>Keep In Touch</h3>
            <div className="icons">
                <a href="https://www.facebook.com/focal.x.agency/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.behance.net/focal-x-agency">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="https://www.linkedin.com/company/focal-x-agency">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/focal_x_agency">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>

        </div>        
    </div> 
    
    <div className=" SK-footer-2">
        <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
        <div className="line">

        </div>
    </div> 
   </section>
  )
}

import { FaceBookIcon, Instagram, SpoonSvg, Twittericon } from "./Svgs";
let year = new Date().getFullYear();

const Footer = () => {
return <section id="Footer">
          <div className="footer-container">
            <div className="footer-contacts-container">
              <h2>Contact Us</h2>
              <p>9 W 53rd St, New York, NY 10019, USA</p>
              <p>+1 212-344-1230</p>
              <p>+1 212-555-1230 </p>
            </div>

            <div className="footer-working-hours-container">
              <h2>Working Hours</h2>
              <p>Monday-Friday:</p>
              <p>08:00 am -12:00 am</p>
              <p>Saturday-Sunday:</p>
              <p>07:00am -11:00 pm</p>
            </div>

            <div className="footer-logo-container">
              <h1>GERICHT</h1>
              <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
              <div> <SpoonSvg/> </div>
              <div className="footer-social-icons">
                <FaceBookIcon/>
                <Twittericon/>
                <Instagram/>
              </div>
            </div>
          </div>
          <p>{year} Gerícht. All Rights reserved.</p>
          <p className="creator">Created by Emmanuel Kalu</p>
      </section>
}

export default Footer;
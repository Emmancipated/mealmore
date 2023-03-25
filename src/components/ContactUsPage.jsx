import React from "react";
import { useInView } from "react-intersection-observer";
import heroImageTwo from "../assets/image/vitor-pinto-bYSpfD0Wn04-unsplash 1.png";
import { SpoonSvg } from "./Svgs";

// The style for this page is from ChefProfile Component
const ContactUsPage = () => {
  const [ref, inView] = useInView();

return <section id="ContactUsPage">
          <div className="chefprofile-container">
            <div className="chefprofile-content">
              <h3>Contact</h3>
              <div> <SpoonSvg/></div>
              <h1>Find Us</h1>
              <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
              </p>
              <h2>Opening Hours</h2>
              <p>Mon - Fri: 10:00 am - 02:00 am</p>
              <p>Sat - Sun: 10:00 am - 03:00 am</p>
              <button>Visit Us</button>
            </div>

            <div className="chefprofile-image-container">
              <div className={`chefprofile-image-wrapper ${inView ? "inview": ""}`}  ref={ref}>
                <img src={heroImageTwo} alt="Chef" />
              </div>
            </div>
          </div>
        </section>
}

export default ContactUsPage;
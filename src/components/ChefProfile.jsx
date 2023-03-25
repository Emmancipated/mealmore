import React from "react";
import { useInView } from "react-intersection-observer";
// import image from "../assets/image/Mask Group.png";
import heroImageTwo from "../assets/image/chef.png";
import { SpoonSvg } from "./Svgs";

const ChefProfile = () => {
  const [ref, inView] = useInView();

return <section id="ChefProfile">
          <div className="chefprofile-container">
            <div className="chefprofile-image-container">
              <div className={`chefprofile-image-wrapper ${inView ? "inview": ""}`}  ref={ref}>
                <img src={heroImageTwo} alt="Chef" />
              </div>
            </div>

            <div className="chefprofile-content">
              <h3>Chef's Word</h3>
              <div> <SpoonSvg/></div>
              <h1>What we believe in</h1>
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                 Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. 
                 Congue iaculis integer curabitur semper sit nunc.
              </blockquote>
              <h2>Kevin Luo</h2>
              <p>Chef & Founder</p>
              <div className="signature">Kevin Luo</div>
            </div>
          </div>
        </section>
}

export default ChefProfile;
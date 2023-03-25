import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import heroImageOne from "../assets/image/khloe-arledge-ND3edEmzcdQ-unsplash.png";
import { SpoonSvg } from "./Svgs";


const HeroSection = () => {
  const [ref, inView] = useInView();

  // useEffect(() => {
  //   control.start("visible");
  // }, [control]);



// return <motion.div drag="x" style={{ x, opacity }} />

  return <section id="Herosection">
            <div className="herosection-container">
              <div className="herosection-content">
                <h3>Chase the new Flavour</h3>
                <div> <SpoonSvg/></div>
                <h1>The Key To Fine Dining</h1>
                <p>Sit tellus lobortis sed senectus vivamus molestie. 
                  Condimentum volutpat morbi facilisis quam scelerisque 
                  sapien. Et, penatibus aliquam amet tellus 
                </p>
                 <Link to={"categories"}><button>Explore Menu</button></Link>
              </div>

              <div className="herosection-image-container">
                <div className={`herosection-image-wrapper ${inView ? "inview": ""}`}  ref={ref}>
                  <img src={heroImageOne} alt="heroOne" />
                </div>
              </div>
            </div>


            {/* <motion.ul animate="hidden" variants={list} 
              style={ { width: 200, height: 200, backgroundColor: "#e327a3" } }
              whileInView={{ opacity: 1 }}
            >
              <motion.li variants={item} />
              <motion.li variants={item} />
              <motion.li variants={item} />
            </motion.ul> */}
          </section>
}

export default HeroSection;
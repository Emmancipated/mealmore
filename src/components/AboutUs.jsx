import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import image from "../assets/image/Mask Group.png";
import knife from "../assets/image/savernake-knives-f4jl2ezowuM-unsplash 2.png";
import { SpoonSvg } from "./Svgs";

const boxVariant = {
  visible: { opacity: [1, 1, 1, 1, 1], 
    rotate: [0, 1440, 1440, 1440, 1440],
    scale: [1, 1, 1.5, .2, 1], 
    transition: { duration: 4, delay: .5, mass: 0.5, stiffness: 10, velocity: 2} },
  hidden: { opacity: 0, scale: 0 }
};

const AboutUs = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return  <section 
            id="AboutUs" 
            // style={ { backgroundImage: `url("${image}")`} }
          >
            <div className="about-us-container">
              <div className="about-us-wrapper">
                <h1>About Us</h1>
                <div><SpoonSvg/> </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quis pharetra adipiscing ultrices vulputate posuere tristique.
                   In sed odio nec aliquet eu proin mauris et.
                </p>
                <button>Know More</button>
              </div>
              <div className="about-us-wrapper">
                <span>G</span>
                {/* <motion.img src={knife} alt="knife" initial={{rotate: [0, 0, 0], opacity: 0, scale: [0, 0, 0] }} whileInView={ { rotate: [0, 1080, 0], opacity: 1, scale: [1, 1.2, 1] } } transition={{ type: "spring", duration: 4 }} /> */}
                {/* <motion.img src={knife} alt="knife" whileInView={ } transition={{ type: "spring", duration: 4 }} /> */}
                <motion.img 
                  src={knife} 
                  alt="knife" 
                  ref={ref} 
                  initial='hidden' 
                  variants={boxVariant} 
                  animate={control} 
                />
              </div>
              <div className="about-us-wrapper">
                <h1>Our History</h1>
                <div><SpoonSvg/> </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quis pharetra adipiscing ultrices vulputate posuere tristique.
                   In sed odio nec aliquet eu proin mauris et.
                </p>
                <button>Know More</button>
              </div>
            </div>
          </section>
}

export default AboutUs;
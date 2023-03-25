import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

  const pagesLinks = [
    {name: "Home", link: "/"},
    {name: "Pages", link: "categories"},
    {name: "Contact Us", link: "/"},
    {name: "Blog", link: "/"},
    {name: "Saved", link: "savedmeals"},
    {name: "Login/Register", link: "/"},
    {name: "Book Table", link: "/"},
  ];

  const mainVariant = {
    hidden: { 
      // top: "-90vh",
      height: "0",
      overflow: "hidden",
    },
    visible: {
      // top: 0,
      height: "100%",
      overflow: "visible",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
  }

  const subVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 30,
    }
  };

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return <nav id="Header">
          <div className="Header-mobile-container">
            <h1 className="mobile-logo">Gerícht</h1>
            
            <motion.div className="mobile-navlink-container"
              initial={false}
              variants={mainVariant}
              animate={isVisible ? "visible" : "hidden"}
            >
              {pagesLinks.map(page => 
                <motion.div 
                  key={page.name} 
                  variants={subVariants}
                >
                  <Link to={page.link} > {page.name} </Link>
                  {/* <a href={page.link}>{page.name}</a> */}
                </motion.div>
              )}
            </motion.div>

            <div className="hamburger-container" onClick={() => setIsVisible(!isVisible)}>
              <div className={`hamburger-wrapper ${isVisible ? "active-hamburger" : ""}`}>
                <span></span>
              </div>
            </div>
          </div>

          <div className="Header-container">

            <h1 className="large-screen-logo">Gerícht</h1>

            <div className="large-screen-navlink-container">
                {pagesLinks.map((page, i) => 
                  <div 
                    key={i}
                  >
                    <Link to={page.link} > {page.name} </Link>
                  </div>
                )}
              </div>

            <div className="login-reg-container">
              <div> <a href="/">Login/Register</a></div>
              <div><a href="/">Book Table</a></div>
            </div>
          </div>
        </nav>
}

export default Header;

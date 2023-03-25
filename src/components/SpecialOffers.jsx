import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import image from "../assets/image/jug.png";
import { SpoonSvg } from "./Svgs";
// import knife from "../image/savernake-knives-f4jl2ezowuM-unsplash 2.png";

  const boxVariant = {
    visible: { opacity: [1, 1, 1, 1], 
      scale: [0.9, 0.9, 0.9, 0.9],
      y: ["0px","-20px", "20px", "0px"],
      transition: { duration: 4, delay: .5,} 
    },
    hidden: {  scale: [0.9, 0.9, 0.9, 0.9], y: [0, 0, 0, 0] }
  };

  const wineAndBeer = [
    {name: "Chapel Hill Shiraz", price: "56", size: "AU | Bottle"},
    {name: "Catena Malbec", price: "59", size: "AU | Bottle"},
    {name: "La Vieille Rosé", price: "44", size: "FR | 750 ml"},
    {name: "Rhino Pale Ale", price: "34", size: "CA | 750 ml"},
    {name: "Irish Guinness", price: "26", size: "IE | 750 ml"},
  ];

  const cockTails = [
    {name: "Aperol Spritz", price: "20", size: "Aperol | Villa Marchesi prosecco | soda | 30ml"},
    {name: "Dark 'N' Stormy", price: "16", size: "Dark rum | Ginger beer | Slice of lime."},
    {name: "Daiquiri", price: "10", size: "Rum | Citrus juice | Sugar"},
    {name: "Old Fashioned", price: "31", size: "Bourbon | Brown sugar | Angostura Bitters"},
    {name: "Negroni", price: "26", size: "Gin | Sweet Vermouth | Campari | Orange garnish"},
  ];

const SpecialOffers = () => {
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
            id="SpecialOffers"
          >
            <div className="SpecialOffers-container">
              <div className="SpecialOffers-top">
                <h3>Menu that fits you palatte</h3>
                <div><SpoonSvg/> </div>
                <h1>Today's Special</h1>
              </div>

              <div className="SpecialOffers-middle">
                <div className="SpecialOffers-middle-item">
                  <h2>Wine & Beer</h2>
                  {wineAndBeer.map(wine => 
                    <div className="SpecialOffers-middle-item-wrapper" key={wine.name}>
                      <div className="SpecialOffers-middle-item-list">
                        <h3 className="name">{wine.name}</h3>
                        <div className="dash-line"></div>
                        <div className="price">${wine.price}</div>
                      </div>
                      <p>{wine.size}</p>
                    </div>
                  )}
                </div>

                <div className="SpecialOffers-middle-item">
                  <motion.img 
                    src={image} 
                    alt="knife" 
                    ref={ref} 
                    initial='hidden' 
                    variants={boxVariant} 
                    animate={control} 
                  />
                </div>

                <div className="SpecialOffers-middle-item">
                  <h2>Cocktails</h2>
                  {cockTails.map(wine => 
                    <div className="SpecialOffers-middle-item-wrapper" key={wine.name}>
                      <div className="SpecialOffers-middle-item-list">
                        <h3 className="name">{wine.name}</h3>
                        <div className="dash-line"></div>
                        <div className="price">${wine.price}</div>
                      </div>
                      <p>{wine.size}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="SpecialOffers-bottom">
                <button>View More</button>
              </div>

            </div>
          </section>
}

export default SpecialOffers;
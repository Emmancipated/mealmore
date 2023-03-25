import { SpoonSvg } from "./Svgs";

const NewsLetter = () => {
return   <section id="NewsLetter">
            <div className="newsletter-container">
              <div className="newsletter-wrapper">
                <h3>Newsletter</h3>
                <div> <SpoonSvg/> </div>
                <h1>Subscribe to Our Newsletter</h1>
                <p>And never miss latest Updates!</p>
                <div className="newsletter-input-container">
                    <input type="text" placeholder="Email Address"/>
                    <button>Subscribe</button>
                </div>
              </div>
            </div>
          </section>

}

export default NewsLetter;
import steak from "../assets/image/steak.jpg";
import { GoldenWreathFour, GoldenWreathOne, GoldenWreathThree, GoldenWreathTwo, RoundLogo, SpoonSvg } from "./Svgs";

// const roundLetters = [
//   { id: 1, className: "char1", text: "D" },
//   { id: 2, className: "char2", text: "E" },
//   { id: 3, className: "char3", text: "L" },
//   { id: 4, className: "char4", text: "I" },
//   { id: 5, className: "char5", text: "G" },
//   { id: 6, className: "char6", text: "H" },
//   { id: 7, className: "char7", text: "T" },
//   { id: 8, className: "char8", text: " " },
//   { id: 9, className: "char9", text: "I" },
//   { id: 10, className: "char10", text: "N" },
//   { id: 11, className: "char11", text: " " },
//   { id: 12, className: "char12", text: "E" },
//   { id: 13, className: "char13", text: "V" },
//   { id: 14, className: "char14", text: "E" },
//   { id: 15, className: "char15", text: "R" },
//   { id: 16, className: "char16", text: "Y" },
//   { id: 17, className: "char17", text: " " },
//   { id: 18, className: "char18", text: "B" },
//   { id: 19, className: "char19", text: "I" },
//   { id: 20, className: "char20", text: "T" },
//   // { id: 21, className: "char21", text: "E" },
// ]

const awardItems = [
  { id: 1, awardLogo: <GoldenWreathOne/>, awardName: "Bib Gourmond", text: "Lorem ipsum dolor sit amet, consectetur." },
  { id: 2, awardLogo: <GoldenWreathTwo/>, awardName: "Rising Star", text: "Lorem ipsum dolor sit amet, consectetur." },
  { id: 3, awardLogo: <GoldenWreathThree/>, awardName: "AA Hospitality", text: "Lorem ipsum dolor sit amet, consectetur." },
  { id: 4, awardLogo: <GoldenWreathFour/>, awardName: "Outstanding Chef", text: "Lorem ipsum dolor sit amet, consectetur." },
]

const AwardsPage = () => {
return  <section id="AwardsPage">
          <div className="awards-page-container">
            <div className="round-logo">
              <RoundLogo/>
            </div>

            <div className="awards-page-content">
            <div className="laurel-container">
              <div className="laurel-header">
                <h3>Awards & recognition</h3>
                <div><SpoonSvg/> </div>
                <h1>Our Laurels</h1>
              </div>
              <div className="laurel-wrapper">
                {awardItems.map(award => (
                  <div className="award-item" key={award.id}>
                    <div>{award.awardLogo}</div>
                    <div className="award-details">
                      <h3 className="name">{award.awardName}</h3>
                      <p>{award.text}</p>
                    </div>
                  </div>
                ))}
              </div>              
            </div>

            <div className="awards-page-image-container">
              <img src={steak} alt="steak" />
              <span>G</span>
            </div>
          </div>
          </div>

        </section>
}

export default AwardsPage;
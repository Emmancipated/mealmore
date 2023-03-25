import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import SpecialOffers from "../components/SpecialOffers";
import ChefProfile from "../components/ChefProfile";
import VideoPage from "../components/VideoPage";
import AwardsPage from "../components/AwardsPage";
import PhotoGallery from "../components/PhotoGallery";
import ContactUsPage from "../components/ContactUsPage";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";


const HomePage = () => {
return <>
        <HeroSection/>
        <AboutUs/>
        <SpecialOffers/>
        <ChefProfile/>
        <VideoPage/>
        <AwardsPage/>
        <PhotoGallery/>
        <ContactUsPage/>
        <NewsLetter/>
        <Footer/>
      </>
}

export default HomePage;
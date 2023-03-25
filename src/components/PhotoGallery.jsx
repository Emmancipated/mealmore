import { SpoonSvg } from "./Svgs";
import { imageGallery } from "./GalleryImages";

const PhotoGallery = () => {
return <section id="PhotoGallery">
        <div className="photogallery-container">
          <div className="photogallery-content">
            <h3>Instagram</h3>
            <div> <SpoonSvg/> </div>
            <h1>Photo Gallery</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <button>View More</button>
          </div>

          <div className="photogallery-image-container">
            <div className="photogallery-image-wrapper">
              {imageGallery.map(image => (
                <div key={image.name}> <img src={image.image} alt="gallery" /> </div>
              ))}
            </div>
          </div>
        </div>
      </section>
}

export default PhotoGallery;
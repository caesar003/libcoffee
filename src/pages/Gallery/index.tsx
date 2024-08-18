import { images } from "@assets/images";
import SectionWrapper from "@components/SectionWrapper";
import "./style.css";

export default function Gallery() {
  return (
    <main>
      <SectionWrapper id="gallery">
        <div className="grid-container">
          {images.map((image, index) => {
            return (
              <div key={index} className="grid-item relative">
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </main>
  );
}

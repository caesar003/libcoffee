import SectionWrapper from "@components/SectionWrapper";
import images from "@constants/galleryImages";

export default function Gallery() {
  return (
    <main>
      <SectionWrapper id="gallery">
        <div className="grid-container">
          {images.map((image, index) => {
            return (
              <div key={index} className="grid-item relative">
                <img
                  src={`/images/${image}`}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </main>
  );
}

import SectionWrapper from "@components/SectionWrapper";
import "./style.css";

const images = [
  "img_0007e904.jpg",
  "img_2c5479e7.jpg",
  "img_575f9fca.jpg",
  "img_729c00c7.jpg",
  "img_a778383c.png",
  "img_b7269809.jpg",
  "img_e5d98a5d.png",
  "img_02835b73.jpg",
  "img_2cfae766.jpg",
  "img_5802f7ca.png",
  "img_7a503d72.png",
  "img_a82e9d9d.png",
  "img_bc051933.jpg",
  "img_07dacdb1.png",
  "img_58d16682.jpg",
  "img_7cb77e48.png",
  "img_a9561234.png",
  "img_bfa5543c.jpg",
  "img_f35bbcd7.png",
  "img_0a87abf0.png",
  "img_344ddb15.jpg",
  "img_59a7bb0d.jpg",
  "img_836c8315.png",
  "img_ab4d7cd4.jpg",
  "img_c826b6dd.jpg",
  "img_f914f1cd.jpg",
  "img_0f55dcad.jpg",
  "img_3bdbaa59.png",
  "img_63880f7b.png",
  "img_837eb47d.jpg",
  "img_ab821657.jpg",
  "img_d07aaf8a.jpg",
  "img_1af09c2f.jpg",
  "img_46f13d1d.png",
  "img_686f30cd.jpg",
  "img_8ed5223a.png",
  "img_ad756242.jpg",
  "img_d0aa4498.jpg",
  "img_2590b538.jpg",
  "img_49733633.jpg",
  "img_6a936bf1.png",
  "img_9336a867.jpg",
  "img_ae3add93.jpg",
  "img_d3d2fc46.jpg",
  "img_2be5b044.jpg",
  "img_55a0611d.jpg",
  "img_6ea0ffcf.png",
  "img_9dbf29e1.png",
  "img_b2b09794.jpg",
  "img_e30987ab.png",
];

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

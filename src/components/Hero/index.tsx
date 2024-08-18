import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { products } from "@services/mock";
import "./style.css";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section style={{ padding: "1em" }}>
      <div className="flex relative m-auto hero-image-wrapper">
        <img
          className="h-full"
          src={`/images/${products[currentIndex].imgUrl}`}
          alt={products[currentIndex].product}
        />
        <div className="absolute w-full p-6 caption-wrapper">
          <p className="text-center">
            {products[currentIndex].product_description}
          </p>
        </div>
        <button
          onClick={handlePrev}
          className="absolute p-2 carousel-button prev"
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute p-2 carousel-button next"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

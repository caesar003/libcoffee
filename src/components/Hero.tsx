import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Product as ProductInterface } from "@utils/types";

export default function Hero({
  products,
  isLoading,
}: {
  products: ProductInterface[];
  isLoading: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <section className="p-4">
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

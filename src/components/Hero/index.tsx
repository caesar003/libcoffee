import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import instance from "@services/instance";
import { Product as ProductInterface } from "@utils/types"; // Assuming you have a type definition

import "./style.css";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  const getProducts = async () => {
    try {
      const { data } = await instance.get("/api/products");
      setProducts(data);
      setIsLoading(false); // Mark as loaded
    } catch (err) {
      console.error(err);
      setIsLoading(false); // Mark as loaded even on error to avoid infinite loading state
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // You can add a more elaborate loader here
  }

  if (products.length === 0) {
    return <p>No products available.</p>; // Handle the case where no products are returned
  }

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

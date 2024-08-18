import { useState, useEffect } from "react";
import Hero from "@components/Hero";
import ProductList from "@components/ProductList";
import Testimony from "@components/Testimony";
import instance from "@services/instance";
import { Product } from "@utils/types";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = async () => {
    
    try {
      const { data } = await instance.get("/api/products?is_featured=true");
      setFeaturedProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <Hero products={featuredProducts} isLoading={isLoading} />
      <ProductList title="Featured Products" products={featuredProducts} />
      <Testimony />
    </main>
  );
}

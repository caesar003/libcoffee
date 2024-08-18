import { useState, useEffect } from "react";
import instance from "@services/instance";
import { Product } from "@utils/types";
import ProductList from "@components/ProductList";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const { data } = await instance.get("/api/products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <ProductList title="Our Products" products={products} />
    </main>
  );
}

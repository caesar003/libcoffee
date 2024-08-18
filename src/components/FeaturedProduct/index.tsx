import { useEffect, useState } from "react";
import instance from "@services/instance";
import { Product } from "@utils/types";
import SectionWrapper from "@components/SectionWrapper";
import ListWrapper from "@components/ListWrapper";
import Card from "@components/Card";

export default function FeaturedProduct() {
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
    <SectionWrapper id="featured-products">
      <h3>Featured Products</h3>

      <ListWrapper>
        {products.map(
          (
            { product, current_retail_price, product_description, imgUrl },
            idx,
          ) => (
            <Card key={idx}>
              <img
                src={`/images/products/${imgUrl}`}
                style={{
                  maxWidth: "200px",
                  marginBottom: "16px",
                }}
              />
              <h4>{product}</h4>
              <p style={{ textAlign: "center" }}>{product_description}</p>

              <div className="flex gap-1 items-center bg-gray-100 p-2">
                <p>{current_retail_price}</p>
              </div>
              <div className="flex gap-2">
                <button>View more</button>
                <button>Add to chart</button>
              </div>
            </Card>
          ),
        )}
      </ListWrapper>
    </SectionWrapper>
  );
}

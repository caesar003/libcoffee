import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionWrapper from "@components/SectionWrapper";
import { Product as ProductInterface } from "@utils/types";
import serviceIntance from "@services/instance";

import { products } from "@services/mock";

export default function Product() {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const { productId } = useParams();

  useEffect(() => {
    if (!productId) return;
    const _product = products.find((item) => item.product_id === +productId);

    if (_product) setProduct(_product);
  }, [productId]);

  const getProducts = async () => {
    try {
      const res = await serviceIntance.get("/api/products");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <SectionWrapper id="product">
        <img
          src={`/images/products/${product?.imgUrl}`}
          style={{
            maxWidth: "200px",
            marginBottom: "16px",
          }}
        />
        <h4>{product?.product}</h4>
        <p style={{ textAlign: "center" }}>{product?.product_description}</p>

        <div className="flex gap-1 items-center bg-gray-100 p-2">
          <p>{product?.current_retail_price}</p>
        </div>
      </SectionWrapper>
    </main>
  );
}

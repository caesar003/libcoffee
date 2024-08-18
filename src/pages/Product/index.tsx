import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionWrapper from "@components/SectionWrapper";
import { Product as ProductInterface } from "@utils/types";
import serviceInstance from "@services/instance";

export default function Product() {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [error, setError] = useState<string | null>(null); // State to manage error messages
  const { productId } = useParams();

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const response = await serviceInstance.get(`/api/product/${productId}`);
        
        if (response.status === 404) { // Handle 404 error
          setError(`Product with ID ${productId} not found.`);
          setProduct(null);
        } else {
          setProduct(response.data); // Set product data
          setError(null); // Clear error if product is found
        }
      } catch (err) {
        setError('An error occurred while fetching the product.'); // Handle other errors
        console.error(err); // Better error handling
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <main>
      <SectionWrapper id="product">
        {error ? (
          <p>{error}</p> // Display error message
        ) : (
          <>
            <img
              src={`/images/products/${product?.imgUrl}`} // Ensure the URL path is correct
              alt={product?.product || "Product Image"} // Added alt attribute for accessibility
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
          </>
        )}
      </SectionWrapper>
    </main>
  );
}

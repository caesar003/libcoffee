import { useContext } from "react";
import { Link } from "react-router-dom";
import { Product } from "@utils/types";
import SectionWrapper from "@components/SectionWrapper";
import ListWrapper from "@components/ListWrapper";
import Card, { CardThumbnail, CardContent, CardFooter } from "@components/Card";
import { AppContext } from "@context/AppContext";

export default function ProductList({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("ProductList must be used within an AppProvider");
  }

  const { setState } = context;

  const addToCart = (product: Product) => {
    setState((prevState) => ({
      ...prevState,
      cartContent: [...prevState.cartContent, product],
    }));
  };

  return (
    <SectionWrapper id="featured-products">
      <h3>{title}</h3>

      <ListWrapper>
        {products.map((item) => {
          const {
            product_id,
            product,
            current_retail_price,
            product_description,
            imgUrl,
          } = item;

          return (
            <Card key={product_id}>
              <CardThumbnail src={`/images/products/${imgUrl}`} alt={product} />

              <CardContent>
                <h4 className="product-name">{product}</h4>
                <p className="product-description">{product_description}</p>

                <div className="price-container">
                  <p className="product-price">{current_retail_price}</p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full gap-2">
                  <button
                    className="flex-1 view-more-button"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                  <Link
                    to={`/product/${product_id}`}
                    className="flex-1 view-more-button"
                  >
                    View more
                  </Link>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </ListWrapper>
    </SectionWrapper>
  );
}

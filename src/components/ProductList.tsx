import { Link } from "react-router-dom";
import { Product } from "@utils/types";
import SectionWrapper from "@components/SectionWrapper";
import ListWrapper from "@components/ListWrapper";
import Card from "@components/Card";

export default function ProductList({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  return (
    <SectionWrapper id="featured-products">
      <h3>{title}</h3>

      <ListWrapper>
        {products.map(
          ({
            product_id,
            product,
            current_retail_price,
            product_description,
            imgUrl,
          }) => (
            <Card key={product_id}>
              <img
                src={`/images/products/${imgUrl}`}
                alt={product}
                className="product-image"
              />
              <h4 className="product-name">{product}</h4>
              <p className="product-description">{product_description}</p>

              <div className="price-container">
                <p className="product-price">{current_retail_price}</p>
              </div>
              <div className="button-group">
                <Link
                  to={`/product/${product_id}`}
                  className="view-more-button"
                >
                  View more
                </Link>
              </div>
            </Card>
          ),
        )}
      </ListWrapper>
    </SectionWrapper>
  );
}

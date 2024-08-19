import { useState } from "react";
import { ShoppingCart, Asterisk, Trash } from "lucide-react";
import { Product as ProductInterface } from "@utils/types";
import "./style.css";

export default function CartButton({
  products,
  deleteProduct,
}: {
  products: ProductInterface[];
  deleteProduct: (productId: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-button-container">
      <button className="cart-button" onClick={toggleMenu}>
        <div className="icon-container">
          <ShoppingCart />
          {products.length ? (
            <div className="badge">
              <Asterisk />
            </div>
          ) : null}
        </div>
      </button>
      {isOpen && (
        <ul className="menu-list">
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.product_id} className="menu-item">
                {product.product}
                <button
                  className="delete-button"
                  onClick={() => deleteProduct(product.product_id)}
                >
                  <Trash />
                </button>
              </li>
            ))
          ) : (
            <li className="empty-cart-message">
              There are no items in your cart, add some now.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

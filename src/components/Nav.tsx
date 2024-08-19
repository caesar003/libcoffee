import { useState, useEffect, useContext } from "react";
import { AppContext } from "@context/AppContext";
import { useLocation, Link } from "react-router-dom";
import logo from "@assets/logo-transparent.png";
import {
  X,
  Menu,
  House,
  Coffee,
  Images,
  ContactRound,
  Info,
} from "lucide-react";

import CartButton from "@components/CartButton";

import { LinkInterface } from "@utils/types";

const defaultLinks: LinkInterface[] = [
  { path: "/", label: "Home", Icon: House, isActive: false },
  { path: "/product", label: "Our Products", Icon: Coffee, isActive: false },
  { path: "/about", label: "About", Icon: Info, isActive: false },
  { path: "/gallery", label: "Gallery", Icon: Images, isActive: false },
  { path: "/contact", label: "Contact", Icon: ContactRound, isActive: false },
];

export default function Nav() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Nav must be used within an AppProvider");
  }

  const { state, setState } = context;
  const [links, setLinks] = useState<LinkInterface[]>(defaultLinks);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLinks((prevLinks) =>
      prevLinks.map((link) => ({
        ...link,
        isActive: link.path === location.pathname,
      })),
    );
  }, [location]);

  const deleteProduct = (productId: number) => {
    setState((prevState) => ({
      ...prevState,
      cartContent: prevState.cartContent.filter(
        (product) => product.product_id !== productId,
      ),
    }));
  };

  return (
    <nav className="nav w-screen bg-gray-100">
      <div className="flex justify-between items-center w-full p-4 relative m-auto m-w-1200">
        <div className="flex gap-2 items-center">
          <img className="brand-logo" src={logo} alt="logo" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-primary font-bold brand-title">Libcoffee</p>
            <p className="text-secondary">
              Caffeine for the mind, books for the soul
            </p>
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {links.map(({ path, label, isActive }, idx) => (
            <li
              key={idx}
              className={`nav-link-item ${isActive ? "active" : ""}`}
            >
              <Link to={path} className={isActive ? "active" : ""}>
                <span> {label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <CartButton
          deleteProduct={deleteProduct}
          products={state.cartContent}
        />

        <button className="nav-button" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

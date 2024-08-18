import { useState } from "react";
import { Link } from "react-router-dom";
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

import "./style.css";

const links = [
  { path: "/", label: "Home", Icon: House },
  { path: "/product", label: "Our Products", Icon: Coffee },
  { path: "/about", label: "About", Icon: Info },
  { path: "/gallery", label: "Gallery", Icon: Images },
  { path: "/contact", label: "Contact", Icon: ContactRound },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav w-screen bg-gray-100">
      <div className="flex justify-between items-center w-full p-4 relative m-auto m-w-1200">
        <div className="flex gap-2 items-center">
          <img style={{ width: "54px" }} src={logo} alt="logo" />
          <div className="flex flex-col items-start justify-center">
            <p
              className="text-primary"
              style={{ fontSize: "1.2em", fontWeight: "bold" }}
            >
              Libcofee
            </p>
            <p className="text-secondary">
              Caffeine for the mind, books for the soul
            </p>
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {links.map(({ path, label }, idx) => (
            <li key={idx} className="flex items-center gap-1">
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <button className="nav-button" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

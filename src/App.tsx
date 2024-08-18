import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import About from "@pages/About";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Gallery from "@pages/Gallery";
import Products from "@pages/Products";
import Product from "@pages/Product";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

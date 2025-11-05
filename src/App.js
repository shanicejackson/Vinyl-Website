import React from "react";
import "./styling/app.css";
import "./styling/nav.css";
import "./styling/footer.css";
import "./styling/home.css";
import "./styling/about.css";
import "./styling/library.css";
import "./styling/contact.css";
import "./styling/hero.css";
import "./styling/featured.css";
import "./styling/cart.css";

import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Library from "./pages/library";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/nav";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="main">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/library" element={<Library />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from "react";
import NavBar from "../components/nav"; 

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Booking = () => {
  const [cartList, setCartList] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png",
      name: "SOS by SZA",
      description: "Blend of R&B, Hip-hop, and Alternative.",
      price: "$29.00",
    },
    {
      id: 2,
      image: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",
      name: "Take Care by Drake",
      description: "Hip-hop and R&B.",
      price: "$59.99 / day",
    },
    {
      id: 3,
      image: "https://i.scdn.co/image/ab67616d0000b273733e6d7818eef87d20df86b5",
      name: "Pony by Rex Orange County",
      description: "Alternative",
      price: "$30.00/ day",
    },
  ]);

  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <header id="booking-head">
        <button onClick={() => navigateTo(PAGE_CART)} id="goToCart">
          Go to Cart ({cartList.length})
        </button>
      </header>
      <div id="booking">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div id="product">
              <img src={product.image} alt={product.name} />
              <h2> {product.name} </h2>
              <h3> {product.description} </h3>
              <h3> {product.price} </h3>
              <button onClick={() => addToCart(product)}> Add to Cart </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <div id="cart-container">
        <button onClick={() => navigateTo(PAGE_PRODUCTS)} id="products-btn">
          Back to Products
        </button>

        <h1 id="cart-title">Cart</h1>

        {cartList.map((product) => (
          <div className="card" key={product.id}>
            <div id="product">
              <img src={product.image} alt={product.name} />
              <h2> {product.name} </h2>
              <h3> {product.description} </h3>
              <h3> {product.price} </h3>
            </div>
          </div>
        ))}
        <button id="checkout-btn">Checkout</button>
      </div>
    </>
  );

  return (
    <div className="main">
      {renderProducts()}
      {page === PAGE_CART && renderCart()}
      <NavBar length={cartList.length} />
    </div>
  );
};

export default Booking;
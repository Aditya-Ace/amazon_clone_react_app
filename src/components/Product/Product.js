import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>₹</small>
          <small>1200</small>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        alt="The Lean Startup"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

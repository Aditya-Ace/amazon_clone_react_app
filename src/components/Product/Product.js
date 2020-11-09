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
      </div>
    </div>
  );
}

export default Product;

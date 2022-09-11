import React from "react";
import "./Product.css";


function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>title</p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating">⭐⭐⭐⭐</div>
      </div>

      <img src="https://img.freepik.com/free-vector/healthcare-medications-composition-with-images-pills-blisters-capsules-jars-drops-syrups-vector-illustration_1284-71689.jpg?w=996&t=st=1662844089~exp=1662844689~hmac=d09951c68df867dc57dd991e17c97d94dfbcdd71ad51b42231610fe843a6fee2" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

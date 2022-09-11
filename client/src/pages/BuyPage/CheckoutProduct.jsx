import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src="https://img.freepik.com/free-vector/healthcare-medications-composition-with-images-pills-blisters-capsules-jars-drops-syrups-vector-illustration_1284-71689.jpg?w=996&t=st=1662844089~exp=1662844689~hmac=d09951c68df867dc57dd991e17c97d94dfbcdd71ad51b42231610fe843a6fee2" />

      <div className="product__info">
        <p className=".checkoutProduct__title">TitleTitleTitle</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐⭐⭐</div>
      <button>Remove from Basket</button>

      </div>

    </div>
  );
}

export default CheckoutProduct;

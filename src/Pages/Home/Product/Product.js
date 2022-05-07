import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { _id, name, img, description, price, supplier, quantity } =
    props.product;

  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="product">
      <img className="w-100" src={img} alt="" />
      <h4>{name}</h4>

      <p>
        <small>{description}</small>
      </p>
      <p>Price: {price}</p>
      <p>Supplier:{supplier} </p>
      <p>Quantity: {quantity}</p>

      <button
        onClick={() => navigateToProductDetail(_id)}
        className="btn btn-dark  bold mx-2"
      >
        Update
      </button>
      {props.children}
    </div>
  );
};

export default Product;

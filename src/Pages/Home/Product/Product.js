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
        <span className="text-danger fs-6">Description</span> : <small>{description}</small>
      </p>
      <p><span className="text-danger fs-6">Price </span> : {price}</p>
      <p><span className="text-danger fs-6">Supplier </span>:  {supplier} </p>
      <p><span className="text-danger fs-6">Quantity </span>: {quantity}</p>

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

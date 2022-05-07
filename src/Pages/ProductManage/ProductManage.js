import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetails";

const ProductManage = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  console.log(product);
  const { name, img, quantity } = product;
  console.log(name);
  const [count, setCount] = useState(-1);
  const quantityUpdateHandler = (event) => {
    event.preventDefault();
    // const oldStock = (product.stock);
    // console.log(oldStock)
    const newstock = parseInt(event.target.stock.value);
    console.log(quantity);
    let newQuantity;
    count < 0
      ? (newQuantity = newstock + parseInt(quantity))
      : (newQuantity = newstock + count);
    setCount(newQuantity);
    console.log(newQuantity);

    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);

    axios
      .put(url, { quantity: newQuantity })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    event.target.reset();
  };

  const deliverHandle = () => {
    let newQuantity;

    if (count < 0) {
      newQuantity = quantity - 1;
      setCount(newQuantity);
    } else {
      newQuantity = count - 1;
      setCount(newQuantity);
    }
    setCount(newQuantity);
    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);

    axios
      .put(url, { quantity: newQuantity })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="product">
        <img className="w-100" src={img} alt="" />
        <h2>{name}</h2>

        <p>Quantity: {count < 0 ? quantity : count}</p>
        {count === 0 ? (
          <p className="btn btn-danger">SoldOut</p>
        ) : (
          <button onClick={deliverHandle} className="btn btn-secondary">
            Delivered
          </button>
        )}
      </div>
      <form onSubmit={quantityUpdateHandler} className="w-50 mx-auto ">
        <input
          className="w-100 m-2"
          type="number"
          name="stock"
          placeholder="stock"
          required
        />
        <input
          className="btn btn-darktext-dangerw-100 m-2"
          type="submit"
          value="update Quantity"
        />
      </form>
      <div className="w-50 mx-auto">
        <Link
          to="/manageInventory"
          className="btn btn-dark w-100 mx-2 my-2"
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default ProductManage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="text-dark  text-center mt-5 mb-5"> Our product</h1>
        <div className="products-container">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <Link
          to="/manageInventory"
          className="btn btn-dark mx-auto w-25 mt-3"
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Product from "../Home/Product/Product";

const MyItems = () => {
    const [user] =useAuthState(auth);
    
  const [products, setProducts] = useState([]);
  
 
  useEffect(() => {
      
    const getMyItems = async()=>{
        const email = user?.email;
        console.log(email)
        const url = `http://localhost:5000/myItems?email=${email}`
        const {data}= await axios.get(url);
        
        setProducts(data)
    }
    getMyItems()
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
      const url2 = `http://localhost:5000/myItems/${id}`;
      fetch(url2, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="text-dark  text-center mt-5 mb-5"> My add product</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}>
                 <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-danger "
              >
                Delete
              </button>
            </Product>
          ))}
        </div>
        <Link to="/manageInventory" className="btn btn-dark mx-auto w-25 mt-3">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default MyItems;

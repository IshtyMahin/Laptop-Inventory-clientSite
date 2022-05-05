import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetails";

const ProductManage = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  
  const { _id, name, img, description, price, stock } = product;

  const [quantity,setQuantity] = useState([]);
  
 

  const deliveredUpdate = (event) => {
    event.preventDefault();
    
    const newAdd = event.target.stock.value;
    console.log(newAdd);
    const newQuantity = parseInt(stock + newAdd);
    stock = newQuantity;

  };

  const deleteOne = ()=>{
      const olderQuantity = stock 
      console.log(quantity);
  }
  return (
    <div>
      <div className="product">
        <img className="w-100" src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <p>quantity: {stock}</p>
        <button onClick={deleteOne} className="btn btn-primary">Delivered</button>
      </div>
      <form className="w-50 mx-auto "  onSubmit={deliveredUpdate}>
        <input  className="w-100 m-2" type="number" name="stock" placeholder="stock" />
        <input className='btn btn-primary w-100 m-2' type="submit" value="update Quantity" />
      </form>
    </div>
  );
};

export default ProductManage;

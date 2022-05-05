import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    
    const {_id,name,img,description,price}= props.product;
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Update</button>
            {props.children}
        </div>
    );
};

export default Product;
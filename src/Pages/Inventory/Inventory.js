import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Home/Product/Product';

const Inventory = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    console.log(products)

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
             const url = `http://localhost:5000/product/${id}`
             fetch(url,{
                 method: 'DELETE'

             })
             .then(res => res.json())
             .then(data => {
                 console.log(data);
                 const remaining = products.filter(product => product._id !== id)
                 setProducts(remaining)
             })
        }
    }

    return (
        <div id="products" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our product</h1>
            <Link className='btn btn-primary text-center my-5' to='/addproduct'>Add new items</Link>
            <div className="products-container">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                > 
                <button onClick={()=> handleDelete(product._id)}  className='btn btn-danger '>Delete</button>
                </Product>)
                
            }
            </div>
            </div>
        </div>
    );
};

export default Inventory;
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/product`
        axios.post(url,data)
        .then(res =>{
            console.log(res)
            
        })
        
        
        
      };
    return (
        <div className="w-50 mx-auto">
      <h2 className='text-center'> Add a product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" value={user?.email} type="email" {...register("email")} />
      <input className="mb-2" placeholder="Name" {...register("name")} />
      <textarea className="mb-2" placeholder="Description" {...register("description")} />
      <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
      
      <input className="mb-2" placeholder="Supplier" {...register("supplier", { required: true})} />
      <input className="mb-2" placeholder="quantity" type="number" {...register("quantity",{ required: true})} />
      <input className="mb-2" placeholder="Photo URL" type="text" {...register("img")} />
      <input className='my-3 btn btn-dark' type="submit"value="Add Service" />
    </form>
    </div>
    );
};

export default AddProduct;

// img
// :
// "https://i.ibb.co/BPbGCDZ/laptop4.jpg"
// name
// :
// "Lenovo IdeaPad Slim 3i Celeron N4020 256GB SSD 15.6inch HD Laptop with..."
// price
// :
// "35,800৳"
// supplier
// :
// "brother's group"
// quantity
// :
// 6

// img
// :
// https://i.ibb.co/H4YWj4S/laptop1.jpg
// String
// name
// :
//  Lenovo IdeaPad Slim 3i 15IGL Intel Celeron N4020 15.6inch HD Laptop
// String
// price
// :
// 34,800৳
// String
// supplier
// :
// Md Shihab
// String
// quantity
// :
// 17

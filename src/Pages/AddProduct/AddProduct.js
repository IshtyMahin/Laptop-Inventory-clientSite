import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://fierce-badlands-00292.herokuapp.com/product`;
    axios.post(url, data).then((res) => {
      toast("Data add in database");
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center"> Add a product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          value={user?.email}
          type="email"
          {...register("email")}
        />
        <input className="mb-2" placeholder="Name" {...register("name")} />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />

        <input
          className="mb-2"
          placeholder="Supplier"
          {...register("supplier", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="my-3 btn btn-dark"
          type="submit"
          value="Add Service"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;

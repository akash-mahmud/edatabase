// import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRegister } from "../api/register.api";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


function Register(props) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (values)=>{
    console.log('Values',values)
    getRegister('/users/register',values)
    .then((data)=>{
      console.log('Success',data)
      localStorage.setItem('phoneNumber',data.data.user.phone)
      toast.success("successfully sent otp")
      navigate("/verify");
    }).catch(err=>{
      console.log(err)
      toast.error("Phone number already registered")
      // setMessage("Phone number already registered")
    })
  }
  return (
    <div class="otp-container" style={{ display: "grid" }}>
      <h2>Create your free account now</h2>
    <form class="otp-form" onSubmit={handleSubmit(onSubmit)}>
        <label for="phone"></label>
        <input
          type="text"
          id="phone"
         {...register('phone',{required:true,maxLength:10,minLength:10})}
          placeholder="Phone number"
        />
        {/* <Link to="/verify"> */}
        <input
          type="submit"
          class="send-otp"
          value="SEND OTP"
        />
        {/* </Link> */}
      </form>
      <h3>
        Already User? <a href="/">SignIn Now</a>
      </h3>
      <ToastContainer/>
    </div>
  );
}

export default Register;

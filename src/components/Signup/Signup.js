import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

import { validation } from "../../validations/validation";
import AuthApi from "../../Api/AuthApi";

const Signup = () => {
  const [inputField, setInputField] = useState({
    name: "",
    useremail: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(inputField));
    // const res = await AuthApi.post(`/register`, inputField);
    const res = await AuthApi.post("/register", inputField);
    const data = await res.data;
    if(data.success) {
      setTimeout(()=>{
        navigate("/login")
      },1500)
      

    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder="Name"
            onChange={handleOnChange}
          />
          {errors.name && <p className="bg-red-100">{errors.name}</p>}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="useremail"
            placeholder="Email"
            onChange={handleOnChange}
          />
          {errors.email && <p className="bg-red-100">{errors.email}</p>}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
          {errors.password && <p className="bg-red-100">{errors.password}</p>}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleOnChange}
          />
          {errors.confirmPassword && (
            <p className="bg-red-100">{errors.confirmPassword}</p>
          )}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleOnSubmit}
          >
            Create Account
          </button>
        </div>

        <div className="text-blue mt-6">
          Already have an account?
          <Link to="/login"> Log in</Link>.
        </div>
      </div>
    </div>
  );
};

export default Signup;

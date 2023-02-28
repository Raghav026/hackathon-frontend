
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { validation } from "../../validations/validation";

import { useNavigate } from "react-router-dom";
import API from '../../Api/AuthApi'

const Login = () => {
  const [inputField, setInputField] = useState({
    useremail: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(inputField));
    const res = await API.post("/login", inputField);
    const data = await res.data;
    const token = data.data
    console.log(token+" token")
    if(token) {
      localStorage.setItem("token",token)
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };
  return (
    <div className="bg-crick bg-contain">
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-fever bg-no-repeat bg-contain ">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Log In</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="useremail"
            placeholder="Email"
            onChange={handleOnChange}
          />
          {errors.useremail && <p className="bg-red-100">{errors.useremail}</p>}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
          {errors.password && <p className="bg-red-100">{errors.password}</p>}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            // style={{ backgroundColor: "green" }}
            onClick={handleOnSubmit}
          >
            Login
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the Terms of Service and Privacy Policy
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Don't have an account?
          <Link
            to="/register"
            className="no-underline border-b border-blue text-blue"
          >
            Register
          </Link>
          .
        </div>
      </div>
      </div>
      </div>
  );
};

export default Login;

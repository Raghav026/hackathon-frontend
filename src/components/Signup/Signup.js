import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import ParticlesBg from "particles-bg";
import AuthApi from "../../Api/AuthApi";
import { useContext } from "react";
import { LoadingContext, ErrorContext } from "../../context/AppState";
const Signup = () => {
  const [inputField, setInputField] = useState({
    name: "",
    useremail: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const { setIsLoading } = useContext(LoadingContext);

  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    AuthApi.post("/register", inputField)
      .then((res) => {
        const data = res.data;
        setIsLoading(false);
        toast.success("Account created")
        if (data.success) {
          setTimeout(() => {
            setIsLoading(false);
            navigate("/login");
          }, 1500);
        }
      })
      .catch((err) => {
        setIsLoading(false);

        toast.error(err.response.data.error);
      });
  };
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full" style={{backgroundColor:'#20242f' ,color: '#dedede'}}>
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Name"
              onChange={handleOnChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="useremail"
              placeholder="Email"
              onChange={handleOnChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleOnChange}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleOnSubmit}
              style={{ backgroundColor: "rgb(101, 94, 138)" }}
            >
              Create Account
            </button>
            <div className="text-blue text-center mt-6">
              Already have an account?
              <Link
                to="/login"
                className="no-underline border-b border-blue text-blue-700"
                style={{color:'rgb(155, 143, 213)'}}
              >
                {" "}
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ParticlesBg from "particles-bg";

import API from "../../Api/AuthApi";
import { ErrorContext, LoadingContext } from "../../context/AppState";
const Login = () => {
  const [inputField, setInputField] = useState({
    useremail: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);
  const { error, setError } = useContext(ErrorContext);

  const handleOnChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    API.post("/login", inputField)
      .then((res) => {
        const data = res.data;
        const token = data.data;
        
        toast.success("Login Successful")
        if (token) {
          localStorage.setItem("token", token);
          setTimeout(() => {
            setIsLoading(false);
            navigate("/bpl");
          }, 2000);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <ParticlesBg type="lines" color={"white"} bg={true} />
      <div className="min-h-screen flex flex-col" >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-6 py-8 rounded shadow-md text-black w-full" style={{backgroundColor:'#20242f' ,color: '#dedede'}}>
            <h1 className="mb-8 text-3xl text-center">Log In</h1>
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
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
               style={{ backgroundColor: "rgb(101, 94, 138)" }}
              onClick={handleOnSubmit}
            >
              Login
            </button>

            <div className="text-grey-dark mt-6 text-center " style={{fontSize:'2vmin'}}>
              Don't have an account?
              <Link
                to="/register"
                className="no-underline border-b border-blue"
                style={{color:'rgb(155, 143, 213)'}}
              >
                {" "}
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

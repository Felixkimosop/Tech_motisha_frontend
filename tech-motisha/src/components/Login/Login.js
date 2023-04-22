import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";
import logo from '../Login/logo.png'
import Swal from "sweetalert2";
import '../Login/Login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
  
    password: "",
  });
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data.error) {

          setError("Wrong names or password");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong names or password!",
          });
         
        } else {

          localStorage.setItem("jwt", data.jwt);
          if (data.user.role === "admin") {
            navigate("/admin");
          } else if (data.user.role === "user"){
            navigate("/user");
          }
          else if(data.user.role === "staff"){
            navigate("/staff")
          }
          else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Wrong names or password!",
            });
          }
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Welcome Tech Motisha!",
            showConfirmButton: false,
            timer: 1500,           

          });
          
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Server error occurred. Please try again later.");
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div className="flex justify-center">
                    <img 
                        alt=""
                        className="h-20 w-15"
                        src={logo}/>
                </div>
                <div>
                    <a href="/">
                        <h3 className="mt-6 text-center text-3xl font-extrabold text-bunting">
                            Login to your account
                        </h3>
                    </a>
                </div>
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                        <form className="content-center" onSubmit={handleSubmit}>
                            <div className="mt-6">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-gray-700 undefined"
                                >
                                    Email
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        placeholder="Type here"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="block text-lg font-medium text-gray-700 undefined"
                                >
                                    Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                        placeholder="Type Here"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <button type="submit" className="text-lg w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 text-center text-grey-700">
                            Don't have an account?  {""} 
                            <span>
                                <NavLink className="text-purple-600 hover:underline m-0" to="/signUp">
                                    Sign Up
                                </NavLink>
                            </span>
                        </div>                    
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1576859958081-27de5c70262a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9yYW5nZSUyMGFuZCUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="img"
                            className="w-[500px] h-full hidden rounded-r-2xl md:block object-cover"
                        />
                    
                        <div
                            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                        >
                            <span class="text-alto text-x"
                            >"Welcome to Tech <span className="text-orange">Motisha</span> "<br /> Get inspired by 
                            leading experts in tech  <br />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login
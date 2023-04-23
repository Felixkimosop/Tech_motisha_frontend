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
        <div className="bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1521459467264-802e2ef3141f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]">
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg bg-contain bg-[url('https://images.unsplash.com/photo-1679465771243-0793d5231c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')]">
                        <form className="content-center" onSubmit={handleSubmit}>
                            <div>
                            <div className="flex justify-center">
                                <img 
                                    alt=""
                                    className="h-20 w-15"
                                    src={logo}/>
                            </div>
                                <a href="/">
                                    <h3 className="text-center text-5xl font-extrabold text-orange">
                                        Welcome!
                                    </h3>
                                </a>
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-alto undefined"
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
                                    className="block text-lg font-medium text-alto undefined"
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
                                <button type="submit" className="text-lg w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-br from-yellow-500 to-orange-500 rounded-md hover:from-yellow-400 hover:to-orange-400 focus:outline-none focus:from-yellow-400 focus:to-orange-400">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="m-14 text-center text-alto">
                            Don't have an account?  {""} 
                            <span>
                                <NavLink className="text-purple-600 hover:underline" to="/signUp">
                                    Sign Up
                                </NavLink>
                            </span>
                        </div>                    
                    </div>
                    {/* <div className="relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="img"
                            className="w-[500px] h-full hidden rounded-r-2xl md:block object-cover"
                        />
                    
                        <div
                            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                        >
                            <span class="text-bunting text-x"
                            >"Welcome to Tech <span className="text-orange">Motisha</span> "<br /> Get inspired by 
                            leading experts in tech  <br />
                            </span>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default Login
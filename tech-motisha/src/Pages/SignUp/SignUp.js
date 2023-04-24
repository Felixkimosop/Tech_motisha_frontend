import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../Login/logo.png'


function SignUp() {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("The User already exist");
        }
      })
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account been setup!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The User already exist!",
        });
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  const isFormValid = formData.role && formData.name && formData.email && formData.password && formData.password_confirmation;
  return (
    <div  class="bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1521459467264-802e2ef3141f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]">
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="w-full  px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg bg-[url('https://images.unsplash.com/photo-1679465771243-0793d5231c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')]">
                        <form onSubmit={handleSubmit}>
                <div>
                    <a href="/">
                        <h3 className="mt-6 text-center text-4xl font-extrabold text-orange">
                            Create your account
                        </h3>
                    </a>
                </div>
                            <div className="mb-10">
                                <label className="block text-lg font-bold text-alto undefined">Role</label>
                                <select onChange={handleChange} className="text-base" name="role">
                                <option value="">Select Role</option>
                                    <option value="user">User</option>
                                    <option value="staff">Staff</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-bold text-alto undefined"
                                >
                                    Name
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-extrabold text-alto undefined"
                                >
                                    Email
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="block text-lg font-bold text-alto undefined"
                                >
                                    Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-lg font-bold text-alto undefined"
                                >
                                    Confirm Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        onChange={handleChange}
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <button  type="submit"  disabled={!isFormValid} className="text-orange flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 mr-14 ml-14 text-alto">
                            Already have an account?{" "}
                            <span>
                                <NavLink to="/login" className="text-alto hover:underline" >
                                    Log in
                                </NavLink>
                            </span>
                        </div>
                        <div className="flex items-center w-full my-4 text-alto">
                            <hr className="w-full" />
                            <p className="px-3 ">OR</p>
                            <hr className="w-full" />
                        </div>
                        <div className="my-6 space-y-2">
                            <button
                                aria-label="Login with Google"
                                type="button"
                                className="text-alto font-bold bg-bunting-2 flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>
                            <button
                                aria-label="Login with GitHub"
                                role="button"
                                className="text-alto font-bold bg-bunting-2 flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                                <p>Login with GitHub</p>
                            </button>
                        </div>
                    </div>
                    {/* <div className="relative">
                            <img
                                src="http://images.unsplash.com/photo-1610192627200-a31ddef73277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwb3JhbmdlJTIwYW5kJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                                alt="img"
                                className="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"
                            />
                        
                            <div
                                className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                            >
                                <span class="text-alto text-xl"
                                >"Welcome to Tech <span className="text-orange font-semibold">Motisha</span> "<br /> Get inspired by 
                                leading experts in tech  <br />
                                </span>
                            </div>
                        </div> */}

                </div>
            </div>
    </div>
  )
}

export default SignUp
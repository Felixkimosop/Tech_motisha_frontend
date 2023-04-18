import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import SignUp from "../SignUp/SignUp";
import "./Login.css";
import Swal from "sweetalert2";

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

  // const isFormValid = formData.adminname && formData.password;

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <img
          id="icon"
          src="https://media.istockphoto.com/id/1181069641/vector/initial-letter-tm-logo-line-unique-modern-initial-letter-logo-line-unique-modern.jpg?s=612x612&w=0&k=20&c=fVc1hBctifoXPZwJr-E-8IIZU-pVsL29S5YB2jW956g="
          alt="gym icon"
        />
        <br></br>
        <h4>Login To Tech Motisha</h4>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="email"
            placeholder="Type here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="password"
            type="password"
            placeholder="Type Here"
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-outline-dark btn-sm m-4"
          // disabled={!isFormValid}
        >
          Log In
        </button>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <p>
          Don't have an acount? <Link to="/signUp">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

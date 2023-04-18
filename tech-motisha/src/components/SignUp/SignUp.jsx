import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Swal from "sweetalert2";

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
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <img
          id="icon"
          src="https://media.istockphoto.com/id/1181069641/vector/initial-letter-tm-logo-line-unique-modern-initial-letter-logo-line-unique-modern.jpg?s=612x612&w=0&k=20&c=fVc1hBctifoXPZwJr-E-8IIZU-pVsL29S5YB2jW956g="
          alt="gym icon"
        />
        <br></br>
        <h5>SignUp To Tech Motisha</h5>
         <div className="mb-3">
  <label className="form-label">Role</label>
  <select onChange={handleChange} className="form-select" name="role">
  <option value="">Select Role</option>
    <option value="user">User</option>
    <option value="staff">Staff</option>
  </select>
</div>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="name"
            placeholder="Type here"
          />
        </div>
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
        <div className="mb-3">
          <label className="form-label">Password Confirmation</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="password_confirmation"
            type="password"
            placeholder="Type Here"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark btn-sm m-4"
          disabled={!isFormValid}
        >
          Sign Up
        </button>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <p>
          Already have an acount? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

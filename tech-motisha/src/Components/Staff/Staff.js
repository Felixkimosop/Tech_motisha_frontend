import React, { useState, useEffect } from "react";
import "./Staff.css";
import StaffBar from "./StaffBar";
import { useNavigate } from "react-router-dom";

function Staff() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [picture, setPicture] = useState("");
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const names = localStorage.getItem("name");
  const token = localStorage.getItem("jwt");
  const phone_number = phoneNo;
  const [data, setData] = useState("");
  const [categories, setCategories] = useState();
  const [post, setPost] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch user details from backend
    fetch("/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setAge(data.age);
        setEmail(data.email);
        setPhoneNo(data.phone_number);
        setPicture(data.profile_picture);
        
      });
  }, [token]);

  useEffect (()=>{
    fetch('/categories',{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        AUTHORIZATION: `bearer ${token}`
      }
      
    })
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])

  const totalCategories = Array.isArray(categories) ? categories.length : null;
  const totalPosts = Array.isArray(data) ? data.length : null;

  useEffect(() => {
    fetch("/contents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    // Save the changes to the staff profile
    // You can use an API call here to send the data to the server
    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email, phone_number, picture, role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setAge(data.age);
        setPhoneNo(data.phone_number);
        setEmail(data.email);
        setPicture(data.picture);

        setIsEditing(false); // Hide the form
      })
      .catch((err) => {
        console.error("Failed to update user details:", err);
      });
  };

  return (
    <div
      className=""
      style={{ marginLeft: "350px" }}
      
    >
      <div>
      <img
            src="https://bit.ly/3UDx6Xq"
            alt=""
            className="w-20 mt-4"
            style={{ marginLeft: "1400px" }}
          />
      <div className="flex gap-9 " style={{ marginLeft: "500px" }}>
      <div class="px-4 py-4 bg-blue-950 mt-10 rounded-lg cursor-pointer w-19 " onClick={()=>{navigate("/category")}}>
            <div class="font-bold text-xl mb-2 text-center text-orange-700">{totalCategories}</div>
            <p class="text-orange-700 text-base">Total Categories</p>
          </div>
          <div class="px-4 py-4 bg-blue-950 mt-10 rounded-lg cursor-pointer " onClick={()=>{navigate("/category")}}>
            <div class="font-bold text-xl mb-2 text-center text-orange-700">{totalPosts}</div>
            <p class="text-orange-700 text-base">Total Posts</p>
          </div>
         
          
          </div>
          <div>  <hr className="mt-4 border-3 border-black"></hr></div>
         
        <div className="mt-4">
          {/* <img
            src="https://bit.ly/3UDx6Xq"
            alt=""
            className="w-20 mt-4"
            style={{ marginLeft: "1400px" }}
          /> */}

          {isEditing ? (
            <div>
              <form onSubmit={handleSaveClick}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phoneNo">Phone No:</label>
                <input
                  type="text"
                  id="phoneNo"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
                <label htmlFor="picture">Profile Picture:</label>
                <input
                  type="file"
                  id="picture"
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.files[0])}
                />
                <button>Save</button>
              </form>
            </div>
          ) : (
            <div>
              <div  style={{ marginLeft: "500px" }}>
                <h2 className="mb-3 text-lg">Hi {names}</h2>
                <h1 className="text-3xl font-bold mb-4">My profile</h1>
                <h4 className="mb-3">Name:  </h4>
                <h4><span className="text-base">{name}</span></h4>
                <h4 className="mb-3">Age: {age}</h4>
                <h4 className="mb-3">Email: {email}</h4>
                <h4 className="mb-3">Phone No: {phoneNo}</h4>
                <button className="rbg-transparent hover:bg-blue-950 text-blue-950 font-semibold hover:text-orange-700 py-2 px-4 border border-orange-700 hover:border-transparent rounded " onClick={handleUpdateClick}>Update your Profile</button>
              </div>
              
            </div>
          )}
        </div>
      </div>
      <StaffBar />
    </div>
  );
}

export default Staff;

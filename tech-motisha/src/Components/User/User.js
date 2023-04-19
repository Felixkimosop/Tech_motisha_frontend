import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./User.css";

function User() {
  
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [picture, setPicture] = useState();

  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem("jwt");
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
      
        setName(data.name);
        setAge(data.age);
        setEmail(data.email);
        setPhoneNo(data.phone_number);
        setPicture(data.profile_picture);
      });
  }, [token]);
  

  const handleUpdate = (id,e) => {
    e.preventDefault();

    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,age,email,phoneNo,picture})
    })
      .then((res) => res.json())
      .then((data) => {
      
       setAge(age);
       setPhoneNo(phoneNo);
       setEmail(email);
       setPicture(picture);
       setName(name);

        setIsEditing(false); // Hide the form
      })
      .catch((err) => {
        console.error("Failed to update user details:", err);
      });
  };


 

  return (
    <div>
      <div className="admin">
        <div className="admin_profile">
          <img src={picture} alt="" />
          <h2>Hi Ken</h2>
          <h1>My profile</h1>
          <div>
            <h4>Name:</h4>
            <p>{name}</p>
            <h4>Age:</h4>
            <p>{age}</p>
            <h4>Email:</h4>
            <p>{email}</p>
            <h4>Phone No:</h4>
            <p>{phoneNo}</p>
          </div>
          {!isEditing && (
            <button onClick={() => setIsEditing(true)}>
              Update your Profile
            </button>
          )}
          {isEditing && (
            <div className="form-card">
              <form onSubmit={handleUpdate}>
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
                <button >Save Changes</button>
              </form>
              
            </div>
          )}
        </div>
        <div className="admin_activity">
          <h1>Activity</h1>
          <button onClick={(e)=>navigate("/myposts")} >My posts</button>
          <br></br>
          <button onClick={(e)=>navigate("/mysubscriptions")} >My subscriptions</button>
          <br></br>
          <button>My WishList</button>
        </div>
      </div>
    </div>
  );
}

export default User;

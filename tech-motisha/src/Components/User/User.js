import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "./UserBar";

import "./User.css";

function User() {
  const roles = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const names = localStorage.getItem("name");
  const [content, setContent] = useState();
  const [sub, setSub] = useState();
  const [wish, setWish] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [picture, setPicture] = useState();
  const [role, setRole] = useState(roles);
  const phone_number = phoneNo;

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
        console.log(data);
        setName(data.name);
        setAge(data.age);
        setEmail(data.email);
        setPhoneNo(data.phone_number);
        setPicture(data.profile_picture);
        setContent(data.contents);
        setSub(data.subscriptions);
        setWish(data.wishlists);
      });
  }, [token]);
  console.log(names);

  console.log(content);
  const counter = Array.isArray(content) ? content.length : null;
  const subscriptions = Array.isArray(sub) ? content.length : null;
  const wishes = Array.isArray(wish) ? content.length : null;
  console.log(counter);
  console.log(wishes);
  console.log(subscriptions);

  const handleUpdate = (e) => {
    e.preventDefault();

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
        setAge();
        setPhoneNo();
        setEmail();
        setPicture();
        setName();

        setIsEditing(false); // Hide the form
      })
      .catch((err) => {
        console.error("Failed to update user details:", err);
      });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-5 ">
        <div
          class="m-4 max-w-xs rounded overflow-hidden shadow-lg"
          style={{ color: "#fa510f", backgroundColor: "#101f3c" }}
        >
          <div class="px-6 py-4 bg-blue-800">
            <div class="font-bold text-xl mb-2">{counter}</div>
            <p class="text-gray-700 text-base">My posts</p>
          </div>
        </div>
        <div
          class="m-4 max-w-xs rounded overflow-hidden shadow-lg"
          style={{ color: "#fa510f", backgroundColor: "#101f3c" }}
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{wishes}</div>
            <p class="text-gray-700 text-base">My wishlist</p>
          </div>
        </div>
        <div
          class="m-4 max-w-xs rounded overflow-hidden shadow-lg"
          style={{ color: "#fa510f", backgroundColor: "#101f3c" }}
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{subscriptions}</div>
            <p class="text-gray-700 text-base">My subscriptions</p>
          </div>
        </div>
      </div>

      <div className="user_div">
        <div className="admin">
          <div className=" bg-white rounded-md shadow-lg p-6 mt-2" style={{width:"500px", height:"80vh", boxShadow:"-moz-initial"}}>
            <div className="flex justify-center  mb-6 mt-10">
              <img
                src={picture}
                alt=""
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold text-orange-700">Hi {names}</h2>
                <h1 className="text-3xl font-bold text-orange-700">My profile</h1>
              </div>
            </div>
            {!isEditing && (
              <div className="mb-6">
                <h4 className="font-bold mt-2 text-xl">Name:</h4>
                <p>{name}</p>
                <h4 className="font-bold mt-2 text-xl">Age:</h4>
                <p>{age}</p>
                <h4 className="font-bold mt-2 text-xl">Email:</h4>
                <p>{email}</p>
                <h4 className="font-bold mt-2 text-xl" >Phone No:</h4>
                <p>{phoneNo}</p>
              </div>
            )}
            {isEditing && (
              <div className="form-card mb-6">
                <form onSubmit={handleUpdate}>
                  <label htmlFor="name" className="font-bold">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm mt-2 mb-4"
                  />
                  <label htmlFor="age" className="font-bold">
                    Age:
                  </label>
                  <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm mt-2 mb-4"
                  />
                  <label htmlFor="email" className="font-bold">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm mt-2 mb-4"
                  />
                  <label htmlFor="phoneNo" className="font-bold">
                    Phone No:
                  </label>
                  <input
                    type="text"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm mt-2 mb-4"
                  />
                  <label htmlFor="picture" className="font-bold">
                    Profile Picture:
                  </label>
                  <input
                    type="file"
                    id="picture"
                    accept="image/*"
                    onChange={(e) => setPicture(e.target.files[0])}
                    className="block w-full mt-2 mb-4"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                  </button>
                </form>
              </div>
            )}
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update your Profile
              </button>
            )}
          </div>

          {/* <div className="admin_activity">
          <h1>Activity</h1>
          <button onClick={(e)=>navigate("/myposts")} >My posts</button>
          <br></br>
          <button onClick={(e)=>navigate("/mysubscriptions")} >My subscriptions</button>
          <br></br>
          <button>My WishList</button>
        </div> */}
        </div>
      </div>
      <UserBar
        editing={isEditing}
        update={handleUpdate}
        setIsEditing={setIsEditing}
      />
    </>
  );
}

export default User;

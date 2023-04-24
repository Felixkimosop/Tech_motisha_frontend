import React, { useState, useEffect } from 'react';
import "./Staff.css"
import StaffBar from './StaffBar';

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
  const [data, setData] = useState("")


  useEffect(() => {
    fetch ("/contents",{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }

    })
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  const handleUpdateClick = () => {
    setIsEditing(true);
  }

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
      body: JSON.stringify({name, age, email, phone_number, picture, role})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className='admin'>
        <div className='admin_profile'>
          <img src='https://bit.ly/3UDx6Xq' alt=''/>
          <h2>Hi {names}</h2>
          <h1 className="text-3xl font-bold mb-4">My profile</h1>
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
               <button >Save</button>
              </form>
              
            </div>
          ) : (
            <div>
              <div>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone No: {phoneNo}</h4>
              </div>
              <button onClick={handleUpdateClick}>Update your Profile</button>
            </div>
          )}
        </div>
      
      </div>
      < StaffBar />
    </div>
  );
}

export default Staff;

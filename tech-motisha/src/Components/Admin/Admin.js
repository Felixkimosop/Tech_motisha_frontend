import React, { useEffect, useState } from "react";
import './Admin.css'
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function Admin() {
  const navigate = useNavigate();
  const names = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState();
  const [categories, setCategories] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch("/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("/contents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);


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

  const totalUsers = Array.isArray(users) ? users.length : null;
  const totalPosts = Array.isArray(post) ? post.length : null;
  const totalCategories = Array.isArray(categories) ? categories.length : null;

  const styles = {
    backgroundImage: `url(https://bit.ly/43Xt3te)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "30px",
  };

  return (
    < div>
      <div className="items-center justify-center">
        <div className="flex px-10 items-center justify-center mt-15 gap-20" style={{ marginLeft: "350px" }} >
        <div class="px-4 py-4 bg-blue-950 mt-10 rounded-lg cursor-pointer" onClick={()=>{navigate("/allusers")}}>
            <div class="font-bold text-xl mb-2 text-center text-orange-700">{totalUsers}</div>
            <p class="text-orange-700 text-base">Total Users</p>
          </div>
          <div class="px-4 py-4 bg-blue-950 mt-10 rounded-lg cursor-pointer "onClick={()=>{navigate("/posts")}}>
            <div class="font-bold text-xl mb-2 text-center text-orange-700">{totalPosts}</div>
            <p class="text-orange-700 text-base">Total Posts</p>
          </div>
          <div class="px-4 py-4 bg-blue-950 mt-10 rounded-lg cursor-pointer " onClick={()=>{navigate("/category")}}>
            <div class="font-bold text-xl mb-2 text-center text-orange-700">{totalCategories}</div>
            <p class="text-orange-700 text-base">Total Categories</p>
          </div>
        </div>
        <hr className="mt-14 border-2 border-black"></hr>
      </div>

      <div style={styles} className="h-screen"></div>
      <Sidebar />
    </div>
  );
}

export default Admin;

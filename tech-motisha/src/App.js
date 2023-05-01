import React, { useEffect, useState } from "react";
import AudioPlayer from "./Components/Audio/AudioPlayer";
import "./Components/Audio/AudioPlayer.css";
import { Routes, Route } from "react-router";
import Login from "./Pages/Login/Login.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import Contactme from "./Pages/ContactMe";
import User from "./Components/User/User";
import Staff from "./Components/Staff/Staff";
import Posts from "./Components/Admin/Posts";
import Blogpage from "./Components/Blogpage/Blogpage";
import About from "./Pages/About/About";
import Admin from "./Components/Admin/Admin";
import ViewUsers from "./Components/Admin/ViewUsers";
import Catergory from "./Components/Admin/Catergory";
import UserPosts from "./Components/User/UserPosts";
import Subscriptions from "./Components/User/Subscriptions";
import Home from "./Pages/Home";
import AllVideosCard from "./Components/Video/AllVideosCard";
import NewVideo from "./Components/Video/NewVideo";
import VideoDescriptionCard from "./Components/Video/VideoDescriptionCard";
// import StaffPost from './Components/Staff/StaffPost';

import Wishlist from "./Components/User/Wishlist";
import StaffPost from "./Components/Staff/StaffPost";
import StaffBar from "./Components/Staff/StaffBar";

import styles from "./Components/commons/style";
import Navbar from "./Components/commons/Navbar";
import StaffCategory from "./Components/Staff/StaffCategory";
import BlogDescription from "./Components/Blogpage/BlogDescription";
import Videos from "./Pages/Videos";
import Audios from "./Pages/Audios";

function App() {
  const token = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };

  const [comment, setComment] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comments", token)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/users", token)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  console.log(users);

  return (
    <div className={` w-full overflow-hidden`}>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/audios" element={<Audios/>} />
        <Route path="/bar" element={<StaffBar />} />
        <Route path="/staffcategory" element={<StaffCategory />} />

        <Route path="/allusers" element={<ViewUsers />} />
        <Route path="/category" element={<Catergory />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/allposts" element={<StaffPost />} />

        <Route
          path="/blogs"
          element={<Blogpage token={token} comment={comment} user={users} />}
        />
        <Route
          path="/blogs/:id"
          element={
            <BlogDescription token={token} setComment={setComment} comment={comment} users={users} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/myposts" element={<UserPosts />} />
        <Route path="/mysubscriptions" element={<Subscriptions />} />
        <Route exact path="/" element={<Home />} />

        <Route
          path="/new-video"
          element={<NewVideo token={token} comment={comment} user={users} />}
        ></Route>
        <Route
          path="/videos"
          element={
            <Videos/>
          }
        ></Route>
        <Route
          path="/videos/:id"
          element={
            <VideoDescriptionCard
              token={token}
              comment={comment}
              users={users}
              setComment={setComment}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

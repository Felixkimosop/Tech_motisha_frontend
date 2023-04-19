import React from 'react';
import AudioPlayer from './Components/Audio/AudioPlayer';
import './Components/Audio/AudioPlayer.css'
import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import ContactMe from "./Pages/ContactMe/ContactMe.jsx";
import User from "./Components/User/User";
import Staff from "./Components/Staff/Staff";
import Posts from "./Components/Admin/Posts";
import Blogpage from "./Components/Blogpage";
import About from "./Pages/About/About";
import Admin from "./Components/Admin/Admin";
import ViewUsers from "./Components/Admin/ViewUsers";
import Catergory from "./Components/Admin/Catergory";
import UserPosts from "./Components/User/UserPosts";
import Subscriptions from "./Components/User/Subscriptions";
import Home from './Pages/Home/Home';
import musicData from './Components/assets/music';

const App = () => {
  return (   
    <div>      
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/audios" element={<AudioPlayer  song={musicData}/>} />

        <Route path="/allusers" element={<ViewUsers />} />
        <Route path="/category" element={<Catergory />} />
        <Route path="/posts" element={<Posts />} />

        <Route path="/blog" element={<Blogpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/myposts" element={<UserPosts />} />
        <Route path="/mysubscriptions" element={<Subscriptions />} />
        <Route exact path='/' element= {<Home/>} />
      </Routes>
      
    </div>
  
  );
}

export default App;

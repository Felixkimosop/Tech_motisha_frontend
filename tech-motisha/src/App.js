import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ContactMe from "./components/ContactMe/ContactMe";
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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/staff" element={<Staff />} />

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
      </Routes>
    </div>
  );
}

export default App;

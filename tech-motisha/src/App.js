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
import Home from './Pages/Home';
import AllVideosCard from "./Components/Video/AllVideosCard";
import NewVideo from "./Components/Video/NewVideo";
import VideoDescriptionCard from "./Components/Video/VideoDescriptionCard";
import styles from './Components/commons/style'
import Navbar from './Components/commons/Navbar'



function App() {
  return (
    <div className={`bg-bunting w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} m-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-bunting ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
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
        <Route exact path='/' element= {<Home/>} />



        <Route path="/new-video" element={<NewVideo/>}></Route>
        <Route path="/videos" element={<AllVideosCard/>}></Route>
        <Route path="/videos/:id" element={<VideoDescriptionCard/>}></Route>
      </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

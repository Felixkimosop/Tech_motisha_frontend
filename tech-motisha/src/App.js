import {Routes, Route} from 'react-router';
import './App.css';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ContactMe from "./components/ContactMe/ContactMe";
import User from './Components/User/User';
import Staff from './Components/Staff/Staff';
import Blogpage from './Components/Blogpage';
import About from './Pages/About/About';
import Admin from './Components/Admin/Admin';


function App() {
  return (
    <div>
      <Routes>
        <Route path = "/user" element = {<User />} />
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "/staff" element = {<Staff />} />
        <Route path = "/blog" element = {<Blogpage />} />
        <Route path = "/about" element = {<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
     
    </div>
  );
}

export default App;

import {Routes, Route} from 'react-router';
import './App.css';
import User from './Components/User/User';
import Staff from './Components/Staff/Staff';
import Posts from './Components/Admin/Posts';
import Blogpage from './Components/Blogpage';
import About from './Pages/About/About';
import Admin from './Components/Admin/Admin';
import ViewUsers from './Components/Admin/ViewUsers';
import Catergory from './Components/Admin/Catergory';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/user" element = {<User />} />
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "/staff" element = {<Staff />} />
        <Route path = "/allusers" element = {<ViewUsers />} />
        <Route path = "/category" element = {<Catergory />} />
        <Route path = "/posts" element = {<Posts />} />
      </Routes>
     
    </div>
  );
}

export default App;

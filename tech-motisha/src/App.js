import {Routes, Route} from 'react-router';
import './App.css';
import User from './Components/User/User';
import Staff from './Components/Staff/Staff';
import Blogpage from './Components/Blogpage';
import About from './Pages/About/About';
import Admin from './Components/Admin/Admin';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/user" element = {<User />} />
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "/staff" element = {<Staff />} />
        <Route path = "/blog" element = {<Blogpage />} />
        <Route path = "/about" element = {<About />} />
        <Route exact path='/' element= {<Home/>} />
      </Routes>
     
    </div>
  );
}

export default App;

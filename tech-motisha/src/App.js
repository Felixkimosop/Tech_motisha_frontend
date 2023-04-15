import {Routes, Route} from 'react-router';
import './App.css';
import User from './Components/User';
import Admin from './Components/Admin';
import Staff from './Components/Staff';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/user" element = {<User />} />
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "/staff" element = {<Staff />} />
      </Routes>
     
    </div>
  );
}

export default App;

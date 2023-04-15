import {Routes, Route} from 'react-router';
import './App.css';
import User from './Components/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/user" element = {<User />} />
      </Routes>
     
    </div>
  );
}

export default App;

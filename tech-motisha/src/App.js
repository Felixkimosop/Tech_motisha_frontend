import {Routes, Route} from 'react-router';
import './App.css';
import Admin from './Components/Admin';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/admin" element = {<Admin />} />
      </Routes>
     
    </div>
  );
}

export default App;

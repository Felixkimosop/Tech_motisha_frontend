import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ContactMe from "./components/ContactMe/ContactMe";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactme" element={<ContactMe />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

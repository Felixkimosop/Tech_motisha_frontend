import React from 'react'
import logo from '../NavBar/logo.png'
import { NavLink } from "react-router-dom";
import '../NavBar/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <NavLink 
            className="navlink "
            to="/" exact
           >
                 <img src={logo} alt="Logo" width="70" className="d-inline-block align-text-top"/>
                 <div className='logoName'>
                    <span id='tech'>Tech </span>
                    <span id='motisha' >Motisha</span>
                 </div>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link active" aria-current="page" to="/blog">Blogs</NavLink>
                    <NavLink className="nav-link" to="/audios">Audios</NavLink>
                    <NavLink className="nav-link" to="/videos">Videos</NavLink>
                    <button  type="button" className='btn login'> <NavLink className="nav-link" to="/login">Login</NavLink></button>
                   
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
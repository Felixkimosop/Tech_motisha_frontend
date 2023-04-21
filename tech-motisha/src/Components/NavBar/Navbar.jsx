import React from 'react'
import logo from '../NavBar/logo.png'
import { NavLink } from "react-router-dom";
import '../NavBar/Navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const name = localStorage.getItem("name");
    const navigate = useNavigate();
   
    const role = localStorage.getItem("role");

    const logout = () =>{
        
        localStorage.clear();
              navigate("/login")}

              function toNavigate(e){
                if (role === "admin") {
                    navigate("/admin");
                  } else if (role === "user"){
                    navigate("/user");
                  }
                  else{
                    navigate("/staff")
                  }
              }
 
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <NavLink 
            className="navlink "
            to="/" exact
           >
                 <img src={logo} alt="Logo" className="logo"/>
                 <div className='logoName '>
                    <span className=' tech'>
                        Tech 
                        <br />
                    </span>
                    <span id='motisha' >Motisha</span>
                 </div>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link active inter-normal-white-30px" aria-current="page" to="/blog">Blogs</NavLink>
                    <NavLink className="nav-link inter-normal-white-30px" to="/audios">Audios</NavLink>
                    <NavLink className="nav-link inter-normal-white-30px" to="/videos">Videos</NavLink>
                    {/* <button  type="button" className='btn login inter-normal-white-30px'> <NavLink className="nav-link" to="/login">Login</NavLink></button> */}
                    {/* {name? (<> <NavLink className="nav-link inter-normal-white-30px" to="/audios">Welcome {name}</NavLink></>) : (<><NavLink className="nav-link inter-normal-white-30px" to="">Hello</NavLink></>) } */}

                   

            {name? (<> 
              <button  type="button" className='btn login inter-normal-white-30px'>
              <NavLink  to='/login'onClick ={logout} className="nav-link" aria-expanded="false">
               Logout
              </NavLink >
            </button></>) : (<><button  type="button" className='btn login inter-normal-white-30px'>
            <NavLink className="nav-link" to="/login">
               Login
              </NavLink >
            </button><button  type="button" className='btn login inter-normal-white-30px'>
              <NavLink  to="/signup" className="nav-link" aria-expanded="false">
                Register
              </NavLink >
            </button></>) }
            {name? (<>  <button  type="button" onClick={toNavigate} className='nav-link inter-normal-white-30px '>Welcome {name}</button></>) : (<> </>) }



                   
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
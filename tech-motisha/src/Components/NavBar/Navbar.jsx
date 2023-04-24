import React, {useState} from 'react'
import logo from '../NavBar/logo.png'
import { NavLink } from "react-router-dom";
import '../NavBar/Navbar.css'
import { useNavigate } from "react-router-dom";
import MenuItems from './MenuItems';


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
     }else{
       navigate("/staff")
     }
   }


   const links =[
     {name: "Home", link:"/"},
     {name: "Blogs", link:"/blog"},
     {name: "Videos", link:"/videos"},
     {name: "Audios", link:"/audios"}
   ]


   const [active, setActive] = useState(false)
   const showMenu =()=>{
     setActive(!active)
   }
 return (
   <div className="nav fixed w-full text-white p-4 items-center">
     <NavLink
       className="flex items-center"
       to="/" exact
     >
       <img src={logo} alt="Logo" className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"/>
       <h1 className='font-bold text-center text-alto text-3xl'>                  
         Tech <span className='block text-orange text-3xl'>Motisha</span>
       </h1>
     </NavLink>
     <nav className='flex md:flex-row text-alto'>   
       <MenuItems links={links}/>  
       {name? (<>
             <button  type="button" className='btn text-alto text-3xl'>
             <NavLink  to='/login'onClick ={logout} className="nav-link p-6" aria-expanded="false">
              Logout
             </NavLink >
           </button></>) : (<><button  type="button" className='btn text-alto text-3xl'>
           <NavLink className="nav-link" to="/login">
              Login
             </NavLink >
           </button><button  type="button" className='btn text-alto text-3xl'>
             <NavLink  to="/signup" className="nav-link" aria-expanded="false">
               Register
             </NavLink >
           </button></>) }
           {name? (<>  <button  type="button" onClick={toNavigate} className='text-alto text-3xl'>Welcome {name}</button></>) : (<> </>) }
     
     </nav>
   </div>
                 
/*{
           

}*/


                 
             
 
 )
}


export default Navbar


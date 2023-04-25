import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from "react-router-dom";
import close from '../assets/211651_close_round_icon.svg';
import menu from '../assets/7124209_menu_icon.svg';
import styles from './style';


const Navbar = () => {

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

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    const links =[
        {name: "Home", link:"/"},
        {name: "About", link:"/about"},
        {name: "Blogs", link:"/blogs"},
        {name: "Videos", link:"/videos"},
        {name: "Audios", link:"/audios"}
      ]


      console.log(name);
      console.log(role);


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      {/* DESKTOP NAVBAR */}
      <div className='flex'>
        <img src={logo} alt="Tech Motisha Logo" className="w-[54px] h-[54px]" />
        <h1 className='font-bold text-center text-white text-xl'>
          Tech <span className={`block text-orange-600 text-xl`}>Motisha</span>
        </h1>

      </div>

    <div className="sm:flex hidden justify-end items-center flex-1">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((nav, index) => (
          <li
            key={nav.name}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.name ? "text-white" : "text-dimWhite"
            } ${index === links.length - 1 ? "mr-5" : "mr-10"}`}
            onClick={() => setActive(nav.name)}
          >
             <NavLink to={nav.link}>{nav.name}</NavLink>
          </li>
        ))}
      </ul>
      {name? (<>
             <button  type="button" className='btn text-white text-3xl'>
             <NavLink  to='/login'onClick ={logout} className="font-poppins font-normal cursor-pointer text-[16px]" aria-expanded="false">
              Logout
             </NavLink >
           </button></>) : (<><button  type="button" className={`py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
           <NavLink className="font-poppins font-normal cursor-pointer text-[16px]" to="/login">
              Login
             </NavLink >
           </button><button  type="button" className={` ml-3 mr-0 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
             <NavLink  to="/signup" className="font-poppins font-normal cursor-pointer text-[16px]" aria-expanded="false">
               Register
             </NavLink >
           </button></>) }
           {name? (<>  <button  type="button" onClick={toNavigate} className='text-alto text-3xl'>Welcome {name}</button></>) : (<> </>) }

    </div>

      {/* MOBILE NAVBAR - on small devices it's hidden*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* hamburger */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {links.map((nav, index) => (
              <li
                key={nav.name}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.name ? "text-white" : "text-dimWhite"
                } ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <NavLink to={nav.link}>{nav.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

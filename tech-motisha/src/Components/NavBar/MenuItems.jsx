import React from 'react'
import { NavLink } from "react-router-dom";

const MenuItems = ({links}) => {
  return (
    <ul className="flex md:flex-row">
        {
          links.map((link)=>{
            return(
              <li key={link.name}>
                <NavLink className= "p-6" aria-current="page" to={link.link}> {link.name} </NavLink>
              </li>)
            })
        }
      </ul> 
  )
}

export default MenuItems
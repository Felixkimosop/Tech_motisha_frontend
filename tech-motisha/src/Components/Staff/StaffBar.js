import React from 'react'
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaBookOpen, FaUsersCog } from "react-icons/fa";

import { BsFillFileEarmarkPostFill} from "react-icons/bs"
import { BiCategoryAlt} from "react-icons/bi"
const image = localStorage.getItem("image")


function StaffBar() {
  
    return (
      
        <div
      
        >
       
          <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div
              className="h-full px-3 py-2 overflow-y-auto sidebar"
              style={{
                // backgroundColor: "blue",
                paddingTop: "30px",
                paddingLeft: "10px",
                paddingRight: "-40px",
                left: 200,
                 backgroundColor: "#101f3c" ,
                 
              }}
            >
                <img src ={image} />

              <NavLink to="">
                <h1
                  className="text-5xl font-bold pb-5 pl-0"
                  style={{ paddingLeft: "0px",color: "#fa510f" }}
                >
                  Staff Dashboard<span className="text-5xl text-orange-500 "> </span>
                </h1>
                <h3   style={{color: "#fa510f" }}>Activity</h3>
              </NavLink>
              <ul className="space-y-2 font-medium" >
                <li>
                  <NavLink
                    to="/allposts"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ color: "#fa510f" }}
                  >
                    <div className="text-xl">
                      <BsFillFileEarmarkPostFill />
                    </div>
                    <span className="ml-3 text-2xl text-start"  >All Posts</span>
                  </NavLink>
                </li>
    
                <li>
                  <NavLink
                    to="/category"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ color: "#fa510f" }}
                  >
                    <div className="text-xl">
                      <BiCategoryAlt />
                    </div>
                    <span className="flex-1 ml-3 text-2xl text-start">Categories</span>
                  </NavLink>
                </li>
    
    
                <li>
                  <NavLink
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ marginTop: "500px",color: "#fa510f"  }}
                    to="/"
                  >
                    <div className="text-xl" >
                      <FaSignOutAlt />
                    </div>
                    <span className="flex-1 ml-3 text-2xl text-start">
                      <button
                       
                      >
                       Back to Home
                      </button>
                    </span>
                  </NavLink>
                </li>
               
              </ul>
            </div>
          </aside>
        </div>

      )
  
}

export default StaffBar
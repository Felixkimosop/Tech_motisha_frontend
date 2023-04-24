import React,{useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaBookOpen, FaUsersCog } from "react-icons/fa";

import { BsFillFileEarmarkPostFill} from "react-icons/bs"
import { BiCategoryAlt} from "react-icons/bi"
function UserBar({editing, update, setIsEditing}) {
    const image = localStorage.getItem("image")
    console.log(image)
    
    const token = localStorage.getItem("jwt")

    // useEffect(() =>{
    //     fetch("/profile",{
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}`,
    //           },
    //     })
    //     .then(res => res.json())
    //     .then(data => {setContent(data.contents)
    //         setSub(data.subscriptions)
    //         setWish(data.wishlists)
    //     })
    // },[])

    // console.log(content)
    // const counter = Array.isArray(content) ? content.length :null;
    // const subscriptions = Array.isArray(sub) ? content.length :null;
    // const wishes = Array.isArray(wish) ? content.length :null;
    // console.log(counter)
    // console.log(wish)
    // console.log(sub)
    
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
                <img className="px-20 rounded" src ={image} />

              <NavLink to="">
                <h1
                  className="text-5xl font-bold pb-5 pl-0"
                  style={{ paddingLeft: "0px",color: "#fa510f" }}
                >
                  User Dashboard<span className="text-5xl text-orange-500 "> </span>
                </h1>
                <h3   style={{color: "#fa510f" }}>Activity</h3>
              </NavLink>
              <ul className="space-y-2 font-medium" >
                <li>
                  <NavLink
                    to="/myposts"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ color: "#fa510f" }}
                  >
                    <div className="text-xl">
                      <BsFillFileEarmarkPostFill />
                    </div>
                    <span className="ml-3 text-2xl text-start"  >My posts</span>
                  </NavLink>
                </li>
    
                <li>
                  <NavLink
                    to="/wishlist"
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ color: "#fa510f" }}
                  >
                    <div className="text-xl">
                      <BiCategoryAlt />
                    </div>
                    <span className="flex-1 ml-3 text-2xl text-start">My WishList</span>
                  </NavLink>
                </li>
    
                <li>
                  <NavLink
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ color: "#fa510f" }}
                    to="/mysubscriptions"
                  >
                    <div className="text-xl">
                      <FaUsersCog/>
                    </div>
                    <span className="flex-1 ml-3 text-2xl text-start">
                    My subscriptions
                    </span>
                  </NavLink>
                </li>
                {!editing ?(
            <button style={{ marginTop: "500px",color: "#fa510f"  }} onClick={() => setIsEditing(true)}>
              Update your Profile
            </button>):null}
    
                <li>
                  <NavLink
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                    style={{ color: "#fa510f"  }}
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

export default UserBar
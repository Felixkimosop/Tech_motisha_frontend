import React from 'react'
import "./Admin.css"
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='admin container'>
            <div className='profile row'>
                <div >
                    <img src='https://bit.ly/3UDx6Xq' alt='' className='img-fluid'/>
                    <div >
                    <h2>Hi Ken</h2>
                </div>
                </div>
               
            </div>
            <div className='admin_activity row'>
                <div className='col-md-12'>
                    <h1>Activity</h1>
                    <button  onClick={(e)=>navigate("/posts")} value = "posts">All posts</button>
                    <br></br>
                    <button onClick={(e)=>navigate("/category")} >All categories</button>
                    <br></br>

                    <button  onClick={(e)=>navigate("/allusers")}>All users</button>
                </div>
            </div>
        </div>
        <a href='/home'>Back Home</a>
    </div>
  )
}

export default Admin

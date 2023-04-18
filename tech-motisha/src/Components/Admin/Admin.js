import React from 'react'
import "./Admin.css"

function Admin() {
  return (
    <div>
        <div className='admin'>
            <div className='profile'>
            <img src='https://bit.ly/3UDx6Xq' alt=''/>
            <h2>Hi Ken</h2>
            
            </div>
            <div className='admin_activity'>
            <h1>Activity</h1>
            <button>All posts</button>
            <br></br>
            <button>All categories</button>
            <br></br>

            <button>All users</button>
            </div>
        </div>
        <a href='/home'>Back Home</a>
    </div>
  )
}

export default Admin
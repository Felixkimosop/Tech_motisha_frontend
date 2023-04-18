import React from 'react'
import "./Staff.css"

function Staff() {
  return (
    <div>
          <div className='admin'>
        <div className='admin_profile'>
            <img src='https://bit.ly/3UDx6Xq' alt=''/>
            <h2>Hi Ken</h2>
            <h1>My profile</h1>
            <div>
                <h4>Name:</h4>
                <h4>Age:</h4>
                <h4>Email:</h4>
                <h4>Phone No:</h4>
            </div>

            <button>Update your Profile</button>

        </div>
        <div className='admin_activity'>
            <h1>Activity</h1>
            <button>My posts</button>
            <br></br>
            

            <button>My categories</button>
        </div>
        
    </div>
    <a href='/home'>Back Home</a>
    </div>
  )
}

export default Staff
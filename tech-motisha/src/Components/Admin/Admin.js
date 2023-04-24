import React from 'react'
import "./Admin.css"
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar';

function Admin() {
    const navigate = useNavigate();
    const names = localStorage.getItem("name");

    const styles = {
        backgroundImage: `url(https://bit.ly/43Xt3te)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '30px'
      }
  
    return (

        <>
      <div style={styles}>
          <div className='admin ' style={{ marginLeft: "350px" }}>
              
             
          </div>
          <a href='/'>Back Home</a>
      </div>
      < Sidebar />
      </>
    )
}

export default Admin

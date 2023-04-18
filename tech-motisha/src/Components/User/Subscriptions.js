import React, {useState, useEffect} from 'react'
import "./Subscriptions.css"

function Subscriptions() {
    const [subs, setSubs] = useState()
    const token = localStorage.getItem("jwt");

    useEffect(()=>{
        fetch('/profile',{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(response =>{setSubs(response)})

    },[token])
    console.log(subs)

  return (
    <div>Subscriptions</div>
  )
}

export default Subscriptions
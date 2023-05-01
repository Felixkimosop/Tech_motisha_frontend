import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


import styles from '../commons/style'
import UserBar from './UserBar';

function Subscriptions() {
  const [wishlists, setWishlists] = useState([]);
  const token = localStorage.getItem("jwt");
  const [myWish, setMyWish] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('/subs', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.json())
    .then(data => {
     setMyWish(data.subscriptions)
    });
  }, [token]);

  console.log(myWish)

  return (
    <>
      <div style={{marginLeft:"350px"}}>
        <h1>My Subscriptions</h1>
       
          {Array.isArray(myWish)?myWish.map((content, index) => (
            <div key={index}>
              <h3 onClick={(e)=>{navigate(`/mysubscriptions/${content.id}`)}} className='text-orange-700 font-semibold cursor-pointer px-4 mb-4 mt-4 ss:text-[22px] text-[12px] font-poppins'>{content.category_name}</h3>    
            </div>
          )):null}

      </div>
      <UserBar />
    </>
  );
}

export default Subscriptions;

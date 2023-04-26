import React, { useState, useEffect } from 'react';
import styles from '../commons/style'
import UserBar from './UserBar';

function Wishlist() {
  const [wishlists, setWishlists] = useState([]);
  const token = localStorage.getItem("jwt");
  const [myWish, setMyWish] = useState([]);

  useEffect(() => {
    fetch('/wishes', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setWishlists(data.wishlists);
    });
  }, [token]);

  console.log(wishlists);
  
  useEffect(() => {
    const contentPromises = [];
    
    wishlists.forEach(wishlist => {
      contentPromises.push(
        fetch(`/contents/${wishlist.content_id}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log("my data", data);
          return data;
        })
      );
    });

    Promise.all(contentPromises)
    .then(contents => {
      console.log(contents);
      setMyWish(contents);
    });
  }, [wishlists, token]);

  return (
    <>
      <div style={{marginLeft:"350px"}}>
        <h1>Wishlist</h1>
       
          {myWish.map((content, index) => (
            <div key={index}>
              <h3 className='text-orange-700 font-semibold px-4 mb-4 mt-4 ss:text-[22px] text-[12px] font-poppins'>{content.title}</h3>
              <p className={`${styles.paragraph} px-4 mb-2 text-primary`}>{content.description}</p>
            </div>
          ))}

      </div>
      <UserBar />
    </>
  );
}

export default Wishlist;

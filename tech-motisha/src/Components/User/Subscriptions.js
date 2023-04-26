import React, { useState, useEffect } from 'react';
import styles from '../commons/style'
import UserBar from './UserBar';

function Subscriptions() {
  const [wishlists, setWishlists] = useState([]);
  const token = localStorage.getItem("jwt");
  const [myWish, setMyWish] = useState([]);

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
      const categoryPromises = [];
      data.subscriptions.forEach((sub) => {
        categoryPromises.push(fetch(`/categories/${sub.category_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.json())
          .then((category) => console.log(category.name))
        );
      });
      Promise.all(categoryPromises).then((categories) => {
        const subs = data.subscriptions.map((sub, i) => {
          return { category_id: sub.category_id, name: categories[i] };
        });
        console.log(subs.category_id
          );
        setWishlists(subs);
      });
    });
  }, [token]);

  return (
    <>
      <div style={{marginLeft:"350px"}}>
        <h1>Wishlist</h1>
       
          {myWish.map((content, index) => (
            <div key={index}>
              <h3 className='text-orange-700 font-semibold px-4 mb-4 mt-4 ss:text-[22px] text-[12px] font-poppins'>{content.name}</h3>
              <p className={`${styles.paragraph} px-4 mb-2 text-primary`}>{content.description}</p>
            </div>
          ))}

      </div>
      <UserBar />
    </>
  );
}

export default Subscriptions;

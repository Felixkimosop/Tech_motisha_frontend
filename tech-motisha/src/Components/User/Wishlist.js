import React, { useState, useEffect } from 'react';

import UserBar from './UserBar';

function Wishlist() {
  const [wishlists, setWishlists] = useState([]);
  const token = localStorage.getItem("jwt");


  useEffect(() => {
    fetch('/wishes',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => setWishlists(data.wishlists));
  }, [token]);

  return (
    <>
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlists.map(wishlist => (
          <li key={wishlist.id}>{wishlist.content ? wishlist.content.name : "Content not loaded"}</li>
        ))}
      </ul>
    </div>
    <UserBar />
    </>
  );
}

export default Wishlist;

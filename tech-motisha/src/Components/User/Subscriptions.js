import React, { useState, useEffect } from "react";
import "./Subscriptions.css";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("/subscriptions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        const subscriptions = Array.isArray(response.subscriptions)
          ? response.subscriptions.map((sub) => ({
              id: sub.id,
              name: sub.category ? sub.category.name : "Content not loaded",
            }))
          : [];
        setSubscriptions(subscriptions);
      });
  }, [token]);

  return (
    <div>
      <h2>My Subscriptions</h2>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>{sub.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Subscriptions;

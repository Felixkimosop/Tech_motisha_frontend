import React, { useEffect, useState } from "react";
import "./ViewUsers.css";

function ViewUsers() {
  const [users, setUsers] = useState();
  const [isactive, setActive] = useState(true);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
 

  const handleDeactivate = (id, isActive) => {
    // Only allow deactivation if user is not an admin
    const user = users.find((user) => user.id === id);
    console.log(user)
    if (user.role !== "admin") {
      // Update user's status in the database
      const newStatus = isActive === undefined ? false : !isActive;
      fetch(`/deactivate/${id}?isactive=${newStatus}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...user, isactive: newStatus }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Update state to reflect updated user
          setUsers((prevUsers) =>
            prevUsers.map((u) => (u.id === id ? { ...u, isactive: newStatus } : u))
          );
        })
        .catch((error) => console.log(error));
    }
  };
  
  const allUsers = users?.map((user, index) => {
    return (
      <tbody key={index}>
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            {user.role !== "admin" && (
              <button
                className={`btn btn-${
                  user.isactive ? "primary" : "warning"
                } text-black`}
                onClick={() => handleDeactivate(user.id, user.isactive)}
              >
                {user.isactive ? "Deactivate" : "Activate"}
              </button>
            )}
          </td>
        </tr>
      </tbody>
    );
  });
  
  return (
    <div className="users">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">User type</th>
            <th scope="col">Deactivate/Activate user</th>
          </tr>
        </thead>
        {allUsers}
      </table>
    </div>
  );
}

export default ViewUsers;

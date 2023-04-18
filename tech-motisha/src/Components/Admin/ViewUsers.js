import React, { useEffect, useState } from "react";
import "./ViewUsers.css";

function ViewUsers() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDeactivate = (user) => {
    // Only allow deactivation if user is not an admin
    if (user.role !== "admin") {
      // Update user's status in the database
      fetch(`/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, isActive: false }),
      })
        .then((res) => res.json())
        .then((updatedUser) => {
          // Update state to reflect updated user
          setUsers((prevUsers) =>
            prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
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
                className="btn btn-primary text-black"
                onClick={() => handleDeactivate(user)}
              >
                Deactivate
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
            <th scope="col">Deactivate user</th>
          </tr>
        </thead>
        {allUsers}
      </table>
    </div>
  );
}

export default ViewUsers;

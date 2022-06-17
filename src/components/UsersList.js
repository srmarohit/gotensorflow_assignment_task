import React, { useEffect, useState } from "react";
import deleteUser from "../services/deleteUser";
import getUsers from "../services/getUsers";
import EditUser from "./EditUser";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [user, setUser] = useState({});

  const loadUsers = () => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <h2>Users List</h2>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {users.map((user) => (
          <div
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
            key={user._id}
          >
            <h4>Name : {user.name}</h4>
            <p>Email : {user.email}</p>
            <p>gender : {user.gender}</p>
            <p>Status : {user.status}</p>
            <div>
              <button onClick={() => (setShowEditModal(true), setUser(user))}>
                Edit
              </button>
              <button
                onClick={() => deleteUser(user._id).then((res) => loadUsers())}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showEditModal && (
        <EditUser
          setShowEditModal={() => setShowEditModal(false)}
          user={user}
          loadUsers={loadUsers}
        />
      )}
    </div>
  );
}

export default UsersList;

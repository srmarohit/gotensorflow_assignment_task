import React, { useState } from "react";
import updateUser from "../services/updateUser";

function EditUser({ user, setShowEditModal, loadUsers }) {
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    gender: user.gender,
    status: user.status,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user._id, data).then((res) => setShowEditModal(false));
    loadUsers();
  };

  return (
    <div
      style={{
        zIndex: "77",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <form style={{ width: "20rem" }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="Enter the Name"
        />
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="Enter the Email"
        />
        <input
          type="text"
          value={data.gender}
          onChange={(e) => setData({ ...data, gender: e.target.value })}
          placeholder="Enter the Gender"
        />
        <input
          type="text"
          value={data.status}
          onChange={(e) => setData({ ...data, status: e.target.value })}
          placeholder="Enter the Status"
        />
        <div>
          <button type="submit">Update</button>
          <button onClick={setShowEditModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(EditUser);

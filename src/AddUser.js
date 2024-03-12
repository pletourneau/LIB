import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users/add", { name })
      .then((response) => {
        console.log(response.data);
        // Optionally, add code to update UI
      })
      .catch((error) =>
        console.error("There was an error adding the user:", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;

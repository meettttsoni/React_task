import React, { useState } from "react";
import "./components/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, age } = formData;
    if (!name || !email || !age) return alert("Please fill all fields");

    if (editIndex === null) {
      setUsers([...users, formData]);
    } else {
      const updated = [...users];
      updated[editIndex] = formData;
      setUsers(updated);
    }

    setFormData({ name: "", email: "", age: "" });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
    if (editIndex === index) {
      setFormData({ name: "", email: "", age: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="app-container">
      <div className="form-box">
        <h2>User Management</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            {editIndex === null ? "Add" : "Update"}
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5">No users added</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button className="edit" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="background-animated"></div>
    </div>
  );
};

export default UserManagement;

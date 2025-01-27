import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [isFlex, setIsFlex] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.age === "" || formData.email === "") {
      alert("All fields are required");
      return;
    }

    const updatedUsers = [...users, formData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFormData({ name: "", age: "", email: "" });
    setIsFlex(false);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="container">
      <h1>User Mangement System</h1>

      <button onClick={() => setIsFlex(!isFlex)}>Add user</button>
      <div
        className="form-container"
        style={{ display: isFlex ? "flex" : "none" }}
      >
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={inputHandler}
          />
          <label htmlFor="age">age:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={inputHandler}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={inputHandler}
          />
          <button type="submit" onClick={() => setIsFlex(false)}>
            Submit
          </button>
        </form>
      </div>

      {/* Read User */}
      <div className="users-list">
        <h2>Saved Users:</h2>
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => deleteUser(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import axios from "axios";

const App = () => {
  const [isFlex, setIsFlex] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("");
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
          <input type="text" id="name" placeholder="Enter your name" />
          <label htmlFor="age">age:</label>
          <input type="number" id="age" placeholder="Enter your age" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit" onClick={() => setIsFlex(false)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

import fs from "fs/promises";

const path = "../data/userData.json";


export const getUser = async (req, res) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    const users = JSON.parse(data);
    return res.status(200).json({ users });
  } catch (err) {
    console.error("Error in fetching users", err);
    res.status(500).json({ message: "Server error, failed to fetch users" });
  }
}

export const addUser = async (req, res) => {

  if (req.body.name === "" || req.body.age === "" || req.body.email === "") {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  }

  try {
    let existingUsers = [];

    try {
      const savedUsers = await fs.readFile(path, "utf-8");
      existingUsers = savedUsers ? JSON.parse(savedUsers) : [];
    } catch (err) {
      if (err.code === "ENOENT") {
        existingUsers = [];
      } else {
        console.error("Error in fetching existing users", err);
        return res.status(500).json({ message: "Server error, failed to get existing users" });
      }
    }

    // Append new user
    existingUsers.push(newUser);

    // Write the updated notes array back to the file
    await fs.writeFile(path, JSON.stringify(existingUsers, null, 2), "utf-8");
    return res.status(200).json({ message: "Note saved successfully!", users: existingUsers });
  } catch (err) {
    console.error("Error in saving uers", err);
    return res.status(500).json({ message: "Server error, failed to save note" });
  }
}

export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const existingUsers = await fs.readFile(path, "utf-8");
    const users = JSON.parse(existingUsers);

    // Check if the ID is within a valid range
    if (id < 0 || id >= users.length) {
      return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(id, 1);


    await fs.writeFile(path, JSON.stringify(users, null, 2));
    res.status(200).json({ message: "User deleted successfully", deletedUser });

  } catch (error) {
    console.error("Error in deleting user:", error);
    res.status(500).json({ message: "Server error, failed to delete user" });
  }
}
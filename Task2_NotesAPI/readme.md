# Notes Management API

## Overview

This is a **RESTful API** built using **Node.js** and **Express.js** to manage notes. The API provides the following functionality:

- Retrieve all notes.
- Add a new note with a title and content.
- Update an existing note by ID.
- Delete a note by ID.

The API ensures basic validation such as non-empty titles and a minimum of 10 characters for content. It also handles errors gracefully to improve the user experience.

## Installation

1. Install all dependencies.
   ```
   npm install
   ```

2. Run the program.
   ```
   npm start
   ```

## Endpoints

### 1. GET (To get  notes).

  ```
  http://localhost:5000/api/notes
  ```

### 2. POST (To save notes).

  ```
  http://localhost:5000/api/save-note
  ```


### 3. PUT (To update a note).

  ```
  http://localhost:5000/api/update-note/:id
  ```

### 4. DELETE (To delete a note).

  ```
  http://localhost:5000/api/delete-note/:id
  ```
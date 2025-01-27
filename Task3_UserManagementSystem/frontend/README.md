# User Management System

## Overview

The **User Management System** is a simple web application that allows users to add, view, and delete users. The application consists of a **front-end** form to add users with fields for **name**, **email**, and **age**. The data is stored persistently using **LocalStorage**.

## Features

The system allows the following features:
- **Add a new user** with a name, email, and age.
- **Display a list of users** in a table format.
- **Delete users** from the list.
- The user data is persisted across page reloads by using **LocalStorage**.



### Front-end:
- A **form** to input **name**, **email**, and **age** of a user.
- A **list of users** displayed in a **table** format with options to delete a user.
- **Form validation** for non-empty fields and valid email format.

### Data Persistence:
- The user data is stored in **LocalStorage** or a **JSON file** to ensure that it persists across page reloads.

## Installation

### Prerequisites
Ensure you have **Node.js** and **npm** installed.

1. Navigate to frontend folder:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Run the code:
   ```bash
   npm run dev
   ```

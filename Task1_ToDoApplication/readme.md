# Todo App

## Overview

This is a simple **Todo App** created using **HTML**, **CSS**, and **JavaScript**. It allows users to:

- Add new tasks.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks by "All," "Completed," or "Pending."
- The data of users is persist across page reloads using LocalStorage.

The goal of this project is to demonstrate the basic functionality of a dynamic to-do list with persistence and interactivity.

## Features

- **Add New Tasks**: Users can add tasks to the list through an input field.
- **Mark as Completed**: Users can mark tasks as completed, which visually distinguishes them from pending tasks.
- **Delete Tasks**: Users can delete any task from the list.
- **Filter Tasks**: The app provides three filters for task display:
  - **All**: Shows all tasks.
  - **Completed**: Displays only the completed tasks.
  - **Pending**: Displays only the tasks that are not marked as completed.
- **Persistence**: Tasks are saved in **LocalStorage** so that the tasks persist across page reloads.

## Installation

1. Open `index.html` in your browser to run the ToDo App.

## Usage

### Adding a Task
- Enter the task name in the input field and click the "Add Task" button.
  
### Marking a Task as Completed
- Click the checkbox next to a task to mark it as completed.
  
### Deleting a Task
- Click the "Delete" button next to any task to remove it from the list.

### Filtering Tasks
- Use the filter buttons at the top to view tasks based on their status:
  - **All**: View all tasks.
  - **Completed**: View only the tasks marked as completed.
  - **Pending**: View only the tasks that are yet to be completed.

### Task Persistence
- Tasks will be saved in **LocalStorage** and will persist across page reloads.

## Technology Stack

- **HTML**: For the basic structure and layout.
- **CSS**: For styling the app and making it responsive.
- **JavaScript**: For the dynamic behavior (adding tasks, marking completed, deleting tasks, filtering tasks).

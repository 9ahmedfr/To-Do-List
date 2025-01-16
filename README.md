# To-Do List Application

This is a simple To-Do List application built using React. The application allows users to add, edit, and delete tasks. It also persists the tasks in localStorage so they are available even after refreshing the page.

## How to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/9ahmedfr/To-Do-List
   ```

2. **Navigate into the Repository Folder**:

   ```bash
   cd To-Do-List
   ```

3. **Install React and Project Dependencies**:
   Ensure you have Node.js and npm installed on your system. Then, run:

   ```bash
   npm install
   ```

   This will install React and other required dependencies.

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   This will start the application, and it will be accessible in your browser at `http://localhost:5173/`.

---

## File Descriptions

### `App.jsx`

This is the main file that integrates the `TodoInput` and `TodoList` components. It manages the state of the application and handles core functionality such as adding, editing, and deleting tasks. It also manages data persistence using `localStorage`.

### `TodoInput.jsx`

This component provides the input field and button for adding new tasks. Key features include:

- Handling input changes.
- Adding a task on pressing the Enter key or clicking the "Add" button.

### `TodoList.jsx`

This component renders the list of tasks. It maps over the `todos` array and renders each task using the `TodoCard` component.

### `TodoCard.jsx`

This component represents a single task in the list. It displays the task and provides buttons for editing and deleting the task.

---

## Features

- Add tasks to the list.
- Edit tasks by clicking the edit button.
- Delete tasks from the list.
- Tasks are saved to `localStorage` to ensure they persist across page reloads.

---

## Prerequisites

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/) or through the terminal.
- **npm**: Comes with Node.js. Verify installation by running:
  ```bash
  node -v
  npm -v
  ```

---

## Notes

- Ensure you have a stable internet connection to install dependencies.
- If you encounter any issues, try deleting the `node_modules` folder and running `npm install` again.



# Todo List App

This is a simple todo list application built with React and Redux. It allows users to add, toggle completion status, and delete tasks.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/todo-list-app.git
```

2. Navigate to the project directory:

```bash
cd todo-list-app
```

3. Install dependencies using npm:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- To add a new task, enter the task in the input field and click the "Add" button.
- To mark a task as completed, click the checkbox next to the task.
- To delete a task, click the trash icon next to the task.

## Redux Setup

- The Redux store is initialized with the todoReducer, which manages the state of todos.
- State persistence is implemented using local storage. The state is loaded from and saved to local storage on every state change.

## Folder Structure

```
todo-list-app/
  README.md
  package.json
  public/
    index.html
  src/
    actions.js
    index.js
    reducers.js
    store.js
    TodoForm.js
    TodoItem.js
    TodoList.js
```

- `actions.js`: Contains action creators for adding, toggling, and deleting todos.
- `index.js`: Entry point of the application.
- `reducers.js`: Reducer function for managing todos.
- `store.js`: Creates the Redux store and handles state persistence.
- `TodoForm.js`: Component for adding new todos.
- `TodoItem.js`: Component for rendering individual todo items.
- `TodoList.js`: Component that renders the list of todos and handles todo actions.


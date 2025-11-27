import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [task, setTask] = useState([
    { id: uuid(), text: "Get up", isDone: false }
  ]);

  const [newTask, setNewTask] = useState("");

  function update(event) {
    setNewTask(event.target.value);
  }

  // add task
  function addNewTask() {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: uuid(),
      text: newTask,
      isDone: false
    };

    setTask((prev) => [...prev, newTodo]);
    setNewTask("");
  }

  // delete task
  function deleteTask(id) {
    setTask((prev) => prev.filter((t) => t.id !== id));
  }

  // uppercase all
  function upperCaseAll() {
    setTask((prev) =>
      prev.map((todo) => ({ ...todo, text: todo.text.toUpperCase() }))
    );
  }

  // lowercase all
  function lowerCaseAll() {
    setTask((prev) =>
      prev.map((todo) => ({ ...todo, text: todo.text.toLowerCase() }))
    );
  }

  // uppercase one
  function upperCaseOne(id) {
    setTask((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: todo.text.toUpperCase() } : todo
      )
    );
  }

  // mark as done
  function markDone(id) {
    setTask((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  }

  const styles = { height: 30, width: 170, borderRadius: 20 };

  return (
    <div>
      <input
        type="text"
        placeholder="add task"
        value={newTask}
        onChange={update}
        style={styles}
      />
      <br />

      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h3>Task:</h3>

      <ol>
        {task.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>

            &nbsp;&nbsp;
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
            &nbsp;&nbsp;
            <button onClick={() => markDone(todo.id)}>Done</button>
          </li>
        ))}
      </ol>

      <br />
      <button onClick={upperCaseAll}>UpperCase</button>
      &nbsp;&nbsp;
      <button onClick={lowerCaseAll}>LowerCase</button>
    </div>
  );
}

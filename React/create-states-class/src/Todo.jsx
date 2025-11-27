import { useState } from "react";
import {v4 as uuid} from 'uuid';

export default function Todo() {
  const [task, setTask] = useState(["Get up"]);   // list of tasks
  const [newTask, setNewTask] = useState("");     // current input text

  // update input box
  function update(event) {
    setNewTask(event.target.value);
  }

  // add new task
  function addNewTask() {
    if (newTask.trim() === "") return;            // ignore empty input

    setTask(prev => [...prev, newTask]);          // add to array
    setNewTask("");                               // clear input
  }

  return (
    <div>
      <input
        type="text"
        placeholder="add task"
        value={newTask}
        onChange={update}
      />
      <br />

      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h3>Task:</h3>

      <ul>
        {task.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

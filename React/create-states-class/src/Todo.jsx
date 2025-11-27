import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function Todo() {
  const [task, setTask] = useState([
    { id: uuid(), text: "Get up" }
  ]);

  const [newTask, setNewTask] = useState("");

  function update(event) {
    setNewTask(event.target.value);
  }


  //add task into todo list 
  function addNewTask() {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: uuid(),
      text: newTask
    };

    setTask(prev => [...prev, newTodo]);
    setNewTask("");
  }

  //delete task 
  function deleteTask(id) {
    setTask((prev) => prev.filter((t) => t.id !== id));

  }
 
  //update all array 
  let upperCaseAll = (id) => {
    setTask((preVal) => (preVal.map((todo) => {
      return {
        ...todo,
        text: todo.text.toUpperCase()
      };
    })))
  };
  //convert all into lowercase 
  let lowerCaseAll = (id) => {
    setTask((preVal) => (preVal.map((todo) => {
      return {
        ...todo,
        text: todo.text.toLowerCase()
      };
    })))
  };

  //upperCase one element into array
  let upperCaseOne = (id) => {
    setTask((prev) =>
      prev.map((todo) => {  
        if (todo.id == id) {
          return { ...todo, text: todo.text.toUpperCase() };
        }
        return todo; // return unchanged todo
      })
    );
  };


  let styles = { height: 30, width: 170, borderRadius: 20 };

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
            <span>{todo.text} </span>  &nbsp; &nbsp;
            <button onClick={() => deleteTask(todo.id)}>Delete</button> &nbsp; &nbsp; &nbsp;
            <button onClick={()=>upperCaseOne(todo.id)}>UpperCase</button>
          </li>
        ))}
      </ol>
      <br /> <br />
      <button onClick={upperCaseAll}>UpperCase</button> &nbsp; &nbsp;&nbsp;
      <button onClick={lowerCaseAll}>LowerCase</button>
    </div>
  );
}

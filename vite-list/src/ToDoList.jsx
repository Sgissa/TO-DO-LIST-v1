import { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState(["eat food", "shower", "walk"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task.."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              {/* <button className="move-btn" onClick={() => moveTaskUp(index)}>
                ⬆
              </button>
              <button className="move-btn" onClick={() => moveTaskDown(index)}>
                ⬇
              </button> */}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

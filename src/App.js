import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Function for add the task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Réinitialise le champ de saisie
    }
  };

  // Function for delete the task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>My tasks</h1>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task"
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((t, index) => (
              <li key={index}>
                {t} <button onClick={() => removeTask(index)}>Delete</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
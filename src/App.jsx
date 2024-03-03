import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/DirectHit.png";
import doingIcon from "./assets/glowing star.png";
import doneIcon from "./assets/Check Mark.jpg";
const App = () => {
  return (
    <div className="app">
      <TaskForm></TaskForm>
      <main className="app_main">
        <TaskColumn column_name="ToDo" icon={todoIcon} />
        <TaskColumn column_name="Doing" icon={doingIcon} />
        <TaskColumn column_name="Done" icon={doneIcon} />
      </main>
    </div>
  );
};

export default App;

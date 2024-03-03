import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";
function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_Input"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag name="HTML" />
            <Tag name="CSS" />
            <Tag name="JS" />
            <Tag name="React" />
          </div>
          <div>
            <select className="task_status">
              <option value="todo">TO DO</option>
              <option value="doing">DOING</option>
              <option value="done">DONE</option>
            </select>
            <button type="submit" className="task_submit">
              +Add task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;

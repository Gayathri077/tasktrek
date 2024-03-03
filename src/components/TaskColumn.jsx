import React from "react";
import "./TaskColumn.css";
import Todo from "../assets/DirectHit.png";
import TaskCard from "./TaskCard";
const TaskColumn = ({ column_name, icon }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {column_name}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;

import React from "react";
import "./TaskCard.css";
import Tag from "./Tag.jsx";
import deleteIcon from "../assets/delete.jpg";
const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is Simple Text.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag name="HTML" />
          <Tag name="CSS" />
        </div>
        <div className="task_card_delete">
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

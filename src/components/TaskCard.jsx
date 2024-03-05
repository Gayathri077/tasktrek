import React from "react";
import "./TaskCard.css";
import Tag from "./Tag.jsx";
import deleteIcon from "../assets/delete.jpg";
const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected />
          ))}
        </div>
        <div className="task_card_delete" onClick={() => handleDelete(index)}>
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

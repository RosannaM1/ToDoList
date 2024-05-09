import React from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
//Elemento individual de la lista, posteriormente se mapea en ListItem
const TaskItem = ({ task, handleToggleTask, handleEdit, handleDelete }) => {
  const completedStyle = task.estado ? "line-through" : "none"; 

  return (
    <div className="bg-white shadow p-4 rounded-lg mb-4 w-80">
      <li className="flex items-center" key={task.id}>
        <input className="mr-4"
          type="checkbox"
          checked={task.estado}
          onChange={() => handleToggleTask(task)}
        />
        <span className="mr-8" style={{ textDecoration: completedStyle }}>{task.descripcion}</span>
        <div className="flex-grow"></div>
        <div className="flex items-end">
          <button className="text-red-500 hover:text-red-700 mr-5 delete-btn" onClick={() => handleEdit(task)}>
            <CiEdit />
          </button>
          <button className="text-blue-500 hover:text-blue-700 edit-btn" onClick={() => handleDelete(task)}>
            <MdDelete className="inline-block h-4 w-4" /> 
          </button>
        </div>
      </li>
    </div>
  );
}

export default TaskItem;

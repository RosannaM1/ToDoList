import React from 'react';
import TaskItem from './TaskItem';
//Lista de tareas, se renderiza el componente TaskItem
const TaskList = ({ tasks, handleToggleTask, handleEdit, handleDelete, showCompleted }) => {
  const filteredTasks = showCompleted ? tasks.filter(task => task.estado) : tasks.filter(task => !task.estado);
  return (
    <div>
      <ul>
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

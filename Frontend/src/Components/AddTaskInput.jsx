import React from 'react';

const AddTaskInput = ({ handleAddTask, setNewTaskDescription, newTaskDescription }) => {
  return (
    <div className="flex mt-20 mb-10">
      <input 
        className="text-xl text-blue-800 placeholder-black-400 py-2 px-4 bg-blue-100 rounded-l outline-blue-300" 
        type="text"
        placeholder="Enter new task"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button 
        className="text-xl text-blue-100 placeholder-blue-400 py-2 px-4 bg-blue-500 rounded-r outline-blue-300" 
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  )
}

export default AddTaskInput;

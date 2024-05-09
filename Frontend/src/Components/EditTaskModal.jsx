import React, { useState } from 'react';

const EditTaskModal = ({ task, onEdit, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(editedTask);
  };

  return (
    <div id="edit-task-modal" tabIndex="-1" className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button type="button" className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" data-modal-hide="edit-task-modal" onClick={onClose}>
            <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <h2 className="mb-5 text-lg font-normal text-gray-500">Edit Task</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                Description:
                <input
                  type="text"
                  name="descripcion"
                  value={editedTask.descripcion}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </label>
              <label className="block mb-4">
                Completed:
                <input
                  type="checkbox"
                  name="estado"
                  checked={editedTask.estado}
                  onChange={() => setEditedTask({ ...editedTask, estado: !editedTask.estado })}
                  className="ml-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
              <div className="flex justify-center">
                <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2">Save</button>
                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;

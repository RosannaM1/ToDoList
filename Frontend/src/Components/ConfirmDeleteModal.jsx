import React from 'react';
//ventana Modal que confirma la eliminación de una tarea
function ConfirmDeleteModal({ task, onConfirm, onClose }) {
  return (
    <div id="popup-modal" tabIndex="-1" className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button type="button" className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" data-modal-hide="popup-modal" onClick={onClose}>
            <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <h2 className="mb-5 text-lg font-normal text-gray-500">Confirm Delete</h2>
            <p className="mb-5">Are you sure you want to delete task {task.descripcion}?</p>
            <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-3" onClick={onConfirm}>
              Yes
            </button>
            <button type="button" className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;

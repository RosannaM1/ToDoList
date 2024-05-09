import React from 'react';
import AddTaskInput from './Components/AddTaskInput';
import ConfirmDeleteModal from './Components/ConfirmDeleteModal';
import EditTaskModal from './Components/EditTaskModal';
import TaskList from './Components/TaskList';
import useTaskManagement from './Hooks/UseTaskManagement';
import Title from './Components/Title';
import SubTitle from './Components/SubTitle';
import Footer from './Components/Footer';
const ToDoList = () => {
  const { tasks, addTask, toggleTask, editTask, deleteTask } = useTaskManagement();
  const [editedTask, setEditedTask] = useState(null);
  const [deletedTask, setDeletedTask] = useState(null);
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleEdit = (task) => {
    setEditedTask(task);
  };

  const handleDelete = (task) => {
    setDeletedTask(task);
  };

  const handleConfirmDelete = async () => {
    await deleteTask(deletedTask.id);
    setDeletedTask(null);
  };

  const handleToggleTask = async (task) => {
    await toggleTask(task);
  };

  const handleEditTask = async (editedTask) => {
    await editTask(editedTask);
    setEditedTask(null);
  };

  const handleAddTask = async () => {
    await addTask(newTaskDescription);
    setNewTaskDescription('');
  };

  return (
<div className="flex flex-col items-center min-h-screen bg-gray-100">
      <Title text={"To Do List"} />
      <AddTaskInput
        newTaskDescription={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
        handleAddTask={handleAddTask}
      />
      <SubTitle text={"completed Task"} />

      <TaskList
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        showCompleted={true}
      />
      <SubTitle text={"Incomplete Task"} />

      <TaskList
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        showCompleted={false}
      />

      {editedTask && (
        <EditTaskModal
          task={editedTask}
          onEdit={handleEditTask}
          onClose={() => setEditedTask(null)}
        />
      )}

      {deletedTask && (
        <ConfirmDeleteModal
          task={deletedTask}
          onConfirm={handleConfirmDelete}
          onClose={() => setDeletedTask(null)}
        />
      )}

      <Footer/>
    </div>
  );
}

export default ToDoList;

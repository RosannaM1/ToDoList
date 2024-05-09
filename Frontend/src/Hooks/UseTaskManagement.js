import { useState, useEffect } from 'react';
import axios from 'axios';

const useTaskManagement = () => {
  const port = 7097;
  const apiUrl = `https://localhost:${port}/api/tareas`;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (newTaskDescription) => {
    try {
      if (newTaskDescription.trim() !== '') {
        await axios.post(apiUrl, {
          descripcion: newTaskDescription,
          estado: false
        });
        fetchTasks();
      } else {
        console.error('Error: La descripción de la tarea está vacía.');
      }
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };
  

  const toggleTask = async (task) => {
    try {
      const updatedTask = { ...task, estado: !task.estado };
      await axios.put(`${apiUrl}/${task.id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const editTask = async (editedTask) => {
    try {
      await axios.put(`${apiUrl}/${editedTask.id}`, editedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${apiUrl}/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return { tasks, addTask, toggleTask, editTask, deleteTask };
};

export default useTaskManagement;

import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Hook personalizado para la gestión de tareas.
 * Proporciona funcionalidades para agregar, editar, eliminar y cambiar el estado de las tareas.
 * Utiliza una API RESTful para interactuar con el servidor.
 */
const useTaskManagement = () => {
  //Puerto donde se encuentra la Api
  const port = 7097;
  //Url para acceder a las tareas
  const apiUrl = `https://localhost:${port}/api/tareas`;
  
  //Estado para almacernar las tareas
  const [tasks, setTasks] = useState([]);

  //Hook para renderizar las tareas al inicio
  useEffect(() => {
    fetchTasks();
  }, []);

  //Fetch para obtener los datos de la api y actualizar el estado
  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
//Función para agregar una nueva tarea
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
  
//Función para cambiar el estado de una tarea

  const toggleTask = async (task) => {
    try {
      const updatedTask = { ...task, estado: !task.estado };
      await axios.put(`${apiUrl}/${task.id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
//Función para editar una tarea

  const editTask = async (editedTask) => {
    try {
      await axios.put(`${apiUrl}/${editedTask.id}`, editedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
//Función para eliminar una tarea

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${apiUrl}/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
//objeto con todas las funciones para poder usarlas
  return { tasks, addTask, toggleTask, editTask, deleteTask };
};

export default useTaskManagement;

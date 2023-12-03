import './App.css'
import Header from './Components/Header/Header'
import Main from './components/Main/Main'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const originalTasks = JSON.parse(localStorage.getItem('tasks'));

  const onDelete = (id) => {
    const updatedTasks = originalTasks.filter((task) => task.id !== id);
    const render = tasks.filter((task) => task.id !== id);
    setTasks(render);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const editComplete = (id, newTask, tasks) => {
    return tasks.map((task) => task.id === id ? { ...newTask } : task)
  }

  const setCompleted = (tarea, key, completo) => {
    const updateTask = editComplete(
      key,
      {
      id: key,
      task: tarea,
      complete: !completo
      },
      originalTasks
    ) 
    setTasks(updateTask);
    localStorage.setItem('tasks', JSON.stringify(updateTask));
    setSelectedFilter('todos');
  }

  const filterTasks = (filterOption) => {
    setSelectedFilter(filterOption);
    if (filterOption === 'todos') {
      setTasks(originalTasks);
    } else if (filterOption === 'completas') {
      const complete = originalTasks.filter(task => task.complete === true);
      setTasks(complete);
    } else if (filterOption === 'incompletas') {
      const incomplete = originalTasks.filter(task => task.complete === false);
      setTasks(incomplete);
    }
  };

  return (
    <>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} onDelete={onDelete} setCompleted={setCompleted} filterTasks={filterTasks} selectedFilter={selectedFilter} />
    </>
  )
}

export default App

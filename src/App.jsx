import './App.css'
import Header from './Components/Header/Header'
import Main from './components/Main/Main'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [selectedFilter, setSelectedFilter] = useState('all');

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

  const setCompleted = (homework, key, completed) => {
    const updateTask = editComplete(
      key,
      {
      id: key,
      task: homework,
      complete: !completed
      },
      originalTasks
    ) 
    setTasks(updateTask);
    localStorage.setItem('tasks', JSON.stringify(updateTask));
    setSelectedFilter('all');
  }

  const filterTasks = (filterOption) => {
    setSelectedFilter(filterOption);
    if (filterOption === 'all') {
      setTasks(originalTasks);
    } else if (filterOption === 'complete') {
      const complete = originalTasks.filter(task => task.complete === true);
      setTasks(complete);
    } else if (filterOption === 'incomplete') {
      const incomplete = originalTasks.filter(task => task.complete === false);
      setTasks(incomplete);
    }
  };

  return (
    <>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} onDelete={onDelete} setCompleted={setCompleted} filterTasks={filterTasks} selectedFilter={selectedFilter} originalTasks={originalTasks} setSelectedFilter={setSelectedFilter} />
    </>
  )
}

export default App

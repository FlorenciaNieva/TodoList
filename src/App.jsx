import './App.css'
import Header from './Components/Header/Header'
import Main from './components/Main/Main'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const onDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} onDelete={onDelete}/>
    </>
  )
}

export default App

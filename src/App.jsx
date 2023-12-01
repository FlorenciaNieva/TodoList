import './App.css'
import Header from './Components/Header/Header'
import Main from './components/Main/Main'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') || [])
  
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App

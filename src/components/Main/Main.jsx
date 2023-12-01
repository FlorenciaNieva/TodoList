import React from 'react'
import ContainerForm from './ContainerForm'

export default function Main({ tasks, setTasks }) {
  return (
    <main>
      <ContainerForm tasks={tasks} setTasks={setTasks}/>
    </main>
  )
}

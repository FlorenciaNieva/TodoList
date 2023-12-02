import React from 'react'
import ContainerForm from './ContainerForm'
import ContainerLists from './ContainerLists'

export default function Main({ tasks, setTasks }) {
  return (
    <main>
      <ContainerForm tasks={tasks} setTasks={setTasks}/>
      <ContainerLists />
    </main>
  )
}

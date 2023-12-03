import React from 'react'
import ContainerForm from './ContainerForm'
import ContainerLists from './ContainerLists'

export default function Main({ tasks, setTasks, onDelete, setCompleted }) {
  return (
    <main>
      <ContainerForm tasks={tasks} setTasks={setTasks}/>
      <ContainerLists tasks={tasks} onDelete={onDelete} setCompleted={setCompleted} />
    </main>
  )
}

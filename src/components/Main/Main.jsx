import React from 'react'
import ContainerForm from './ContainerForm'
import ContainerLists from './ContainerLists'

export default function Main({ tasks, setTasks, onDelete, setCompleted, filterTasks }) {
  return (
    <main>
      <ContainerForm tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} />
      <ContainerLists tasks={tasks} onDelete={onDelete} setCompleted={setCompleted} />
    </main>
  )
}

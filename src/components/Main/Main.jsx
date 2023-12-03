import React from 'react'
import ContainerForm from './ContainerForm'
import ContainerLists from './ContainerLists'

export default function Main({ tasks, setTasks, onDelete, setCompleted, filterTasks, selectedFilter }) {
  return (
    <main>
      <ContainerForm tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} selectedFilter={selectedFilter} />
      <ContainerLists tasks={tasks} onDelete={onDelete} setCompleted={setCompleted} />
    </main>
  )
}

import React from 'react'
import ContainerForm from './ContainerForm'
import ContainerLists from './ContainerLists'

export default function Main({ tasks, setTasks, onDelete, setCompleted, filterTasks, selectedFilter,originalTasks, setSelectedFilter }) {
  return (
    <main>
      <ContainerForm tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} selectedFilter={selectedFilter} originalTasks={originalTasks} setSelectedFilter={setSelectedFilter} />
      <ContainerLists tasks={tasks} onDelete={onDelete} setCompleted={setCompleted} />
    </main>
  )
}

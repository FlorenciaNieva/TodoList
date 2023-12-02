import React from 'react'
import Task from './Task'

export default function ContainerLists({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task.task} id={task.id} onDelete={onDelete} />
      ))}
    </>
  );
}

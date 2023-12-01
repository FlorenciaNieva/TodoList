import React from 'react'

export default function Task() {
  function validateTask(value) {
    let error
    if (!value) {
      error = 'Escribe una tarea'
    } else if (/\d/.test(value)) {
      error  = "El campo no permite números"
    } else if (value.length < 4) {
      error  = "El campo debe contener al menos 4 caracteres"
    } else if (value.length > 100) {
      error = "El campo no puede exceder los 100 caracteres"
    } 
    return error
    }

  return (
    <div>Task</div>
  )
}

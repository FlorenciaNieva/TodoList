import React from 'react'
import { useState } from 'react'
import { FormControl, FormLabel, Select as SelectChakra } from '@chakra-ui/react'

export default function SelectForm({ filterTasks }) {
  return (
    <div>
      <FormControl>
        <FormLabel>Mostrar ...</FormLabel>
        <SelectChakra onChange={(e) => filterTasks(e.target.value)}>
          <option value='todos'>Todos</option>
          <option value='completas'>Completas</option>
          <option value='incompletas'>Incompletas</option>
        </SelectChakra>
      </FormControl>
    </div>
  )
}

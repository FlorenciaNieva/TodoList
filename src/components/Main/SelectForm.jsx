import React from 'react'
import { useState } from 'react'
import { FormControl, FormLabel, Select as SelectChakra } from '@chakra-ui/react'

export default function SelectForm({ filterTasks, selectedFilter }) {
  return (
    <div>
      <FormControl>
        <FormLabel color='#f6f1ff'>Mostrar ...</FormLabel>
        <SelectChakra value={selectedFilter} focusBorderColor='#6e0acd' _hover={{background: "#8e0acd"}} color='#f6f1ff' onChange={(e) => filterTasks(e.target.value)}>
          <option style={{ backgroundColor: '#6e0acd'}} value='todos'>Todos</option>
          <option style={{ backgroundColor: '#6e0acd' }} value='completas'>Completas</option>
          <option style={{ backgroundColor: '#6e0acd' }}value='incompletas'>Incompletas</option>
        </SelectChakra>
      </FormControl>
    </div>
  )
}

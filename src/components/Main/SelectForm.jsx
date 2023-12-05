import React from 'react'
import { useState } from 'react'
import { FormControl, FormLabel, Select as SelectChakra } from '@chakra-ui/react'

export default function SelectForm({ filterTasks, selectedFilter }) {
  return (
    <div>
      <FormControl>
        <FormLabel color='#f6f1ff'>Show ...</FormLabel>
        <SelectChakra value={selectedFilter} focusBorderColor='#6e0acd' _hover={{background: "#8e0acd"}} color='#f6f1ff' onChange={(e) => filterTasks(e.target.value)}>
          <option style={{ backgroundColor: '#6e0acd'}} value='all'>All</option>
          <option style={{ backgroundColor: '#6e0acd' }} value='complete'>Complete</option>
          <option style={{ backgroundColor: '#6e0acd' }}value='incomplete'>Incomplete</option>
        </SelectChakra>
      </FormControl>
    </div>
  )
}

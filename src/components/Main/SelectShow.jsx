import React from 'react'
import { FormControl, FormLabel, Select } from '@chakra-ui/react'

export default function SelectShow() {
  return (
    <>
      <FormControl>
        <FormLabel>Mostar ...</FormLabel>
        <Select placeholder='Select a option'>
          <option value='todos'>Todos</option>
          <option value='completas'>Completas</option>
          <option value='incompletas'>Incompletas</option>
        </Select>
      </FormControl>
    </>
  )
}

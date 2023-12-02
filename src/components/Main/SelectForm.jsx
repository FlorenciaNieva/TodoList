import React from 'react'
import { FormControl, FormLabel, Select as SelectChakra } from '@chakra-ui/react'

export default function SelectForm() {
  return (
    <div>
      <FormControl>
        <FormLabel>Mostrar ...</FormLabel>
        <SelectChakra>
          <option value='todos'>Todos</option>
          <option value='completas'>Completas</option>
          <option value='incompletas'>Incompletas</option>
        </SelectChakra>
      </FormControl>
    </div>
  )
}

import React from 'react'
import Task from './Task'
import Select from './Select'

import { Flex, Spacer, Box} from '@chakra-ui/react'

export default function ContainerForm() {
  return (
    <>
      <Flex>
        <Box m='4' p='10' w='50%'>
          <Task />
        </Box>
        <Spacer />
        <Box m='4' p='10' w='50%'>
          <Select />
        </Box>
      </Flex>
    </>
  )
}

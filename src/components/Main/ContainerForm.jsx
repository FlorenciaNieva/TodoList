import React from 'react'
import Task from './TaskForm'
import Select from './Select'
import { Flex, Spacer, Box} from '@chakra-ui/react'

export default function ContainerForm({ tasks, setTasks }) {
  return (
    <>
      <Flex>
        <Box m='4' p='10' w='50%'>
          <Task tasks={tasks} setTasks={setTasks}/>
        </Box>
        <Spacer />
        <Box m='4' p='10' w='50%'>
          <Select />
        </Box>
      </Flex>
    </>
  )
}

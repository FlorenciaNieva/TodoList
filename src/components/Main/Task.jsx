import { Flex, Box, Button, Text } from '@chakra-ui/react'
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import styles from "./Task.module.css"

export default function Task({ task, id, complete, onDelete, setCompleted }) {

  const handleComplete = (task, id, complete) => {
    setCompleted(task, id, complete);
  }

  return (
    <Box borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      mb="4"
      className={complete ? styles.complete : ''}
      >
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{task}</Text>
        <Flex>
          <Button mr={2} colorScheme='whatsapp' variant='solid' aria-label="Completado" onClick={() => handleComplete(task, id, complete)}><TiTickOutline /></Button>
          <Button colorScheme='red' variant='outline' aria-label="Eliminar" onClick={() => onDelete(id)}><TiTimesOutline /></Button>
        </Flex>
      </Flex>
    </Box>
  )
}

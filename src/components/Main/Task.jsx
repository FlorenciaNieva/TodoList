import { useState } from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import styles from "./Task.module.css"

export default function Task({ task, id, onDelete }) {
  const [complete, setComplete] = useState(false);

  return (
    <Box borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      mb="4">
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{task}</Text>
        <Flex>
          <Button mr={2} colorScheme='whatsapp' variant='solid' aria-label="Completado"><TiTickOutline /></Button>
          <Button colorScheme='red' variant='outline' aria-label="Eliminar" onClick={() => onDelete(id)}><TiTimesOutline /></Button>
        </Flex>
      </Flex>
    </Box>
  )
}

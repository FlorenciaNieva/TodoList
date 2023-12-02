import { Flex, Box, Button, Text, Center } from '@chakra-ui/react'
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";

export default function Task({ task, id }) {
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
          <Button mr={2} colorScheme='whatsapp' variant='solid' aria-label="Tachar"><TiTickOutline /></Button>
          <Button colorScheme='red' variant='outline' aria-label="Eliminar"><TiTimesOutline /></Button>
        </Flex>
      </Flex>
    </Box>
  )
}

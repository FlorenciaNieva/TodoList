import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";

export default function Task({ task, id, complete, onDelete, setCompleted }) {
  return (
    <Box
      borderWidth="1px"
      bg="#f6f1ff"
      borderRadius="lg"
      color={complete ? "gray" : "black"}
      textDecoration={complete ? "line-through" : "none"}
      overflow="hidden"
      p="3"
      boxShadow="md"
      mb="4"
      maxW="85%"
      mx="auto"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">{task}</Text>
        <Flex>
          <Button
            mr={2}
            bg="#9944ff"
            color="#f6f1ff"
            variant="outline"
            _hover={{ background: "#8e0acd" }}
            aria-label="Completado"
            onClick={() => setCompleted(task, id, complete)}
          >
            <TiTickOutline />
          </Button>
          <Button
            bg="#6e0acd"
            color="#f6f1ff"
            variant="outline"
            _hover={{ background: "#8e0acd" }}
            aria-label="Eliminar"
            onClick={() => onDelete(id)}
          >
            <TiTimesOutline />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

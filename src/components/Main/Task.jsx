import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Task({ task, id, complete, onDelete, setCompleted }) {
  return (
    <Box
      borderWidth="1px"
      bg="rgba(207, 207, 229, 0.1)"
      borderRadius="35px"
      color={complete ? "gray" : "white"}
      textDecoration={complete ? "line-through" : "none"}
      overflow="hidden"
      px="4"
      py="2"
      boxShadow="md"
      mb="4"
      maxW="85%"
      mx="auto"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" wordBreak="break-word">{task}</Text>
        <Flex>
          <Button
            mr={2}
            variant="outline"
            border="none"
            color="white"
            borderRadius="20px"
            _hover={{ backgroundColor: "#80808062", borderRadius: "20px", }}
            _active={{ backgroundColor: "#80808086" }}
            aria-label="Completado"
            onClick={() => setCompleted(task, id, complete)}
          >
            <FaCheck size={20} />
          </Button>
          <Button
            variant="outline"
            border="none"
            color="white"
            borderRadius="20px"
            _hover={{ backgroundColor: "#80808062", borderRadius: "20px", }}
            _active={{ backgroundColor: "#80808086" }}
            aria-label="Eliminar"
            onClick={() => onDelete(id)}
          >
            <MdDelete size={20} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

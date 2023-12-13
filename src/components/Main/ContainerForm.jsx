import React from "react";
import Task from "./TaskForm";
import Select from "./SelectForm";
import { Flex, Spacer, Box } from "@chakra-ui/react";

export default function ContainerForm({
  tasks,
  setTasks,
  filterTasks,
  selectedFilter,
  originalTasks,
  setSelectedFilter,
}) {
  return (
    <>
      <Flex>
        <Box
          m="4"
          p="10"
          w="50%"
          border="1px"
          borderColor="#f6f1ff"
          borderRadius="15px"
          backdropFilter="auto"
          backdropBlur="8px"
        >
          <Task
            tasks={tasks}
            setTasks={setTasks}
            originalTasks={originalTasks}
            setSelectedFilter={setSelectedFilter}
          />
        </Box>
        <Spacer />
        <Box
          m="4"
          p="10"
          w="50%"
          border="1px"
          borderColor="#f6f1ff"
          borderRadius="15px"
          backdropFilter="auto"
          backdropBlur="8px"
        >
          <Select filterTasks={filterTasks} selectedFilter={selectedFilter} />
        </Box>
      </Flex>
    </>
  );
}

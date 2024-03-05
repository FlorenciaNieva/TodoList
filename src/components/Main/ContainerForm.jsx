import React from "react";
import TaskForm from "./TaskForm";
import Select from "./SelectForm";
import { Flex, Spacer, Box } from "@chakra-ui/react";

export default function ContainerForm({
  tasks,
  setTasks,
  filterTasks,
  selectedFilter,
  setSelectedFilter,
}) {
  return (
    <>
      <Flex mb="5">
        <Box
          m="10"
          p="5"
          w="50%"
          border="1px"
          borderColor="#f6f1ff"
          borderRadius="15px"
          backdropFilter="auto"
          backdropBlur="8px"
        >
          <TaskForm
            tasks={tasks}
            setTasks={setTasks}
            setSelectedFilter={setSelectedFilter}
          />
        </Box>
        <Spacer />
        <Box
          m="10"
          p="5"
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

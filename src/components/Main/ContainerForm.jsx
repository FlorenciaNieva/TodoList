import React from "react";
import TaskForm from "./TaskForm";
import Select from "./SelectForm";
import { Grid, GridItem } from "@chakra-ui/react";

export default function ContainerForm({
  tasks,
  setTasks,
  filterTasks,
  selectedFilter,
  setSelectedFilter,
}) {
  return (
    <Grid 
      mt="10"
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={2}
      flexDirection={{ base: "column", md: "row" }}
    >
      <GridItem
        mx="10"
        mb="10"
        p="5"
        border="1px"
        borderColor="#f6f1ff"
        borderRadius="15px"
      >
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          setSelectedFilter={setSelectedFilter}
        />
      </GridItem>
      <GridItem
        mx="10"
        mb="10"
        p="5"
        border="1px"
        borderColor="#f6f1ff"
        borderRadius="15px"
      >
        <Select filterTasks={filterTasks} selectedFilter={selectedFilter} />
      </GridItem>
    </Grid>
  );
}

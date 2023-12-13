import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, Text, Input, Button } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

export default function TaskForm({ setTasks, setSelectedFilter }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function validateTask(value) {
    if (!value) {
      setError("Write a task");
    } else if (/\d/.test(value)) {
      setError("The field does not allow numbers");
    } else if (value.length < 4) {
      setError("The field must contain at least 4 characters");
    } else if (value.length > 100) {
      setError("The field cannot exceed 100 characters");
    } else {
      setError("");
    }
    return error;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: self.crypto.randomUUID(),
      task: inputValue,
      complete: false,
    };
    const originalTasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = [...originalTasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setSelectedFilter("all");
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel color="#f6f1ff">Task</FormLabel>
        <Input
          name="task"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            validateTask(e.target.value);
          }}
          placeholder="Escribe una tarea ..."
          color="#f6f1ff"
          borderColor="gray.200"
          sx={{ "::placeholder": { color: "#f6f1ff" } }}
          focusBorderColor="#6e0acd"
        />
        {!error ? null : <Text color="#f6f1ff">{error}</Text>}
      </FormControl>
      <Button
        mt={4}
        rightIcon={<FaAngleRight />}
        variant="outline"
        type="submit"
        color="#f6f1ff"
        _hover={{
          background: "#8e0acd",
        }}
      >
        Add task
      </Button>
    </form>
  );
}

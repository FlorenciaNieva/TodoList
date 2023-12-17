import React from "react";
import {
  FormControl,
  FormLabel,
  Select as SelectChakra,
} from "@chakra-ui/react";

const options = ["All", "Complete", "Incomplete"]

export default function SelectForm({ filterTasks, selectedFilter }) {
  return (
    <div>
      <FormControl>
        <FormLabel color="#f6f1ff">Show ...</FormLabel>
        <SelectChakra
          value={selectedFilter}
          focusBorderColor="#6e0acd"
          _hover={{ background: "#8e0acd" }}
          color="#f6f1ff"
          onChange={(e) => filterTasks(e.target.value)}
        >
          {options.map((value) => <option style={{ backgroundColor: "#6e0acd" }} value={value} >{value}</option>)}
        </SelectChakra>
      </FormControl>
    </div>
  );
}

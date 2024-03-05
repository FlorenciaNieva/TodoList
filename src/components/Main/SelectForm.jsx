import React from "react";
import {
  FormControl,
  FormLabel,
  Select as SelectChakra,
} from "@chakra-ui/react";

const options = ["All", "Complete", "Incomplete"];

export default function SelectForm({ filterTasks, selectedFilter }) {
  return (
    <div>
      <FormControl>
        <FormLabel color="#f6f1ff">Show ...</FormLabel>
        <SelectChakra
          value={selectedFilter}
          focusBorderColor="#2d29fe"
          color="#f6f1ff"
          onChange={(e) => filterTasks(e.target.value)}
        >
          {options.map((value, index) => (
            <option
              style={{ color:"black" }}
              value={value}
              key={index}
            >
              {value}
            </option>
          ))}
        </SelectChakra>
      </FormControl>
    </div>
  );
}

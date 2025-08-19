import * as React from "react";

import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  SelectButton,
  SelectFieldText,
  SelectMainContainer,
} from "../user-list/UsersStyles";
export default function BasicSelect() {
  const [option, setOption] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setOption(event.target.value as string); // cast `unknown` to `string`
  };

  return (
    <SelectMainContainer>
      <FormControl fullWidth>
        <SelectButton
          value={option}
          onChange={handleChange}
          displayEmpty
          border
        >
          <SelectFieldText value="">All Status</SelectFieldText>
          <SelectFieldText value="active">Active</SelectFieldText>
          <SelectFieldText value="pending">Pending</SelectFieldText>
          <SelectFieldText value="live">Live</SelectFieldText>
          <SelectFieldText value="error" color="red">
            Error
          </SelectFieldText>
        </SelectButton>
      </FormControl>
    </SelectMainContainer>
  );
}

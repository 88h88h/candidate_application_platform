import React from "react";
import { useDispatch } from "react-redux";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Filter(props) {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const optionsArr = props.optionsArray;

  const handleFilterChange = (event, value) => {
    dispatch(props.updateFilter(value)); // Dispatch action to update Redux store
  };

  // Render Autocomplete only when optionsArr is not empty
  return optionsArr && optionsArr.length > 0 ? (
    <Autocomplete
      sx={{
        marginRight: "8px",
        marginTop: "8px",
        width: props.size,
        fontWeight: 500,
        fontSize: "0.8125rem",
      }}
      multiple={props.multiple}
      options={optionsArr}
      getOptionLabel={(option) => String(option)}
      disableCloseOnSelect
      onChange={handleFilterChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={props.type}
          placeholder={props.type}
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem
          key={option}
          value={option}
          sx={{ justifyContent: "space-between" }}
          {...props}
        >
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
    />
  ) : null; // Return null if optionsArr is empty
}

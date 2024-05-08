import React from "react";
import { useDispatch } from "react-redux";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn",
];

export default function Filter(props) {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleFilterChange = (event, value) => {
    dispatch(props.updateFilter(value)); // Dispatch action to update Redux store
  };

  return (
    <>
      <Autocomplete
        sx={{
          marginRight: "8px",
          marginTop: "8px",
          width: props.size,
          fontWeight: 500,
          fontSize: "0.8125rem",
        }}
        multiple={props.multiple}
        options={names}
        getOptionLabel={(option) => option}
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
    </>
  );
}

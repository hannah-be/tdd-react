import React from "react";
import { clone, isEmpty } from "lodash";
import TextField from "@material-ui/core/TextField/TextField";

const SearchBox = ({ term, onSearch }) => {
  const protect = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      return onSearch(event);
    }
  };
  
  return (
    <TextField
      label="Search"
      value={term}
      data-test="search"
      onChange={protect}
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBox;

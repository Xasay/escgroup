import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import classes from "./style.module.scss";

interface ISelect {
  value: number | string;
  defaultValue?: number | string;
  items: Array<{ inner: React.ReactNode; value: number | string }>;
  handleChange: (e: any) => void;
}

const DropDown = ({ value, defaultValue, handleChange, items }: ISelect) => {
  const menuProps: any = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl className={classes.root}>
      <Select
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={classes.select}
        MenuProps={menuProps}
        IconComponent={() => null}
        classes={{
          root: classes.root, // Apply the root style
          select: classes.select, // Apply the select style
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Completely removes the border
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none", // Ensures no border appears on focus
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none", // Removes the border on hover
          },
        }}
      >
        {items.map((item, index: any) => (
          <MenuItem key={index} value={item.value} className={classes.menuItem}>
            {item.inner}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;

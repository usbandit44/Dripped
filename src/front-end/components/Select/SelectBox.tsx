import React, { useState } from "react";
import "./selectbox.css";
import * as Select from "@radix-ui/react-select";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const SelectBox = () => {
  return (
    <Select.Root>
      <Select.Trigger className="select-box">
        <Select.Value placeholder="Category" />
        <Select.Icon className="select-icon">
          <KeyboardArrowDownSharpIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select-content">
          <Select.Viewport className="select-viewport">
            {SelectItem("test1")}
            {SelectItem("test2")}
            {SelectItem("test3")}
            {SelectItem("test4")}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = (value: string) => {
  return (
    <Select.Item className="select-item" value={value}>
      <Select.ItemText>{value}</Select.ItemText>
    </Select.Item>
  );
};

export default SelectBox;

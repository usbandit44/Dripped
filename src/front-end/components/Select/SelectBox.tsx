import React, { FormEventHandler, useState } from "react";
import "./selectbox.css";
import * as Select from "@radix-ui/react-select";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Listbox } from "@headlessui/react";

interface Props {
  options: string[];
  placeholder: string;
  onChange?: ((value: string) => void) | undefined;
  id: string;
}
const SelectBox = (props: Props) => {
  const SelectItem = (value: string, index: number) => {
    return (
      <Select.Item
        className="select-item"
        value={value}
        key={`${props.id}-${index}`}
      >
        <Select.ItemText>{value}</Select.ItemText>
      </Select.Item>
    );
  };

  return (
    <Select.Root onValueChange={props.onChange}>
      <Select.Trigger className="select-box">
        <Select.Value placeholder={props.placeholder} />
        <Select.Icon className="select-icon">
          <KeyboardArrowDownSharpIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select-content">
          <Select.Viewport className="select-viewport">
            {props.options.map((value, index) => SelectItem(value, index))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
  //   return (
  //     <Listbox value={props.selected} onChange={props.onChange}>
  //       <Listbox.Button className="select-box">{props.selected}</Listbox.Button>
  //       <Listbox.Options className="select-viewport">
  //         {props.options.map((value) => (
  //           <Listbox.Option value={value}>{value}</Listbox.Option>
  //         ))}
  //       </Listbox.Options>
  //     </Listbox>
  //   );
};

export default SelectBox;

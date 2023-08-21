import React from "react";
import "./screenheader.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import SelectBox from "../Select/SelectBox";

const ScreenHeader = () => {
  return (
    <div className="screen-header">
      <div className="header-title">Closet</div>
      <div className="header-options">
        <button className="main-button">
          <AddSharpIcon></AddSharpIcon>
          Add Item
        </button>
        <SelectBox></SelectBox>
      </div>
    </div>
  );
};

export default ScreenHeader;

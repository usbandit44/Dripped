import React, { FormEventHandler, useState } from "react";
import "./screenheader.css";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import SelectBox from "../Select/SelectBox";
import { SelectChangeEvent } from "@mui/material";

const ScreenHeader = () => {
  const category = ["Tops", "Bottoms", "Shoes", "Outerwear"];
  const topSubcategory = [
    "T-Shirts",
    "Sweatshirts",
    "Button-Ups",
    "Dress Shirts",
    "Polos",
    "Tank Tops",
    "Sweaters",
  ];
  const bottomSubcategory = [
    "Jeans",
    "Cargos",
    "Shorts",
    "Sweatpants",
    "Skirts",
    "Dress Pants",
  ];
  const shoeSubcategory = [
    "Sneakers",
    "Boots",
    "Sandals",
    "Dress Shoes",
    "Heels",
  ];
  const outerwearSubcategory = ["Jackets", "Coats", "Hoodies", "Vests"];
  const subcategoryOptions = (category: string) => {
    switch (category) {
      case "Tops":
        return topSubcategory;
      case "Bottoms":
        return bottomSubcategory;
      case "Shoes":
        return shoeSubcategory;
      case "Outerwear":
        return outerwearSubcategory;
      default:
        return [""];
    }
  };

  const [selectedSubcategory, setSelectedSubcategory] = useState<string[]>([
    "",
  ]);

  const handleChange = (value: string) => {
    setSelectedSubcategory(subcategoryOptions(value));
  };

  return (
    <div className="screen-header">
      <div className="header-title">Closet</div>
      <div className="header-options">
        <button
          className="main-button"
          onClick={() => {
            var modal = document.getElementById("addItemModal");
            if (modal != null) {
              modal.style.display = "flex";
            }
          }}
        >
          <AddSharpIcon></AddSharpIcon>
          Add Item
        </button>
        <SelectBox
          placeholder="Category"
          options={category}
          onChange={handleChange}
          id="header-category"
        ></SelectBox>
        <SelectBox
          placeholder="Subcategory"
          options={selectedSubcategory}
          id="header-subcategory"
        ></SelectBox>
      </div>
    </div>
  );
};

export default ScreenHeader;

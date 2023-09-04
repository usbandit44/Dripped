import React from "react";
import ScreenHeader from "../components/Screen Header/ScreenHeader";
import AddItemModal from "../components/Add Item Modal/AddItemModal";

const Closet = () => {
  return (
    <div className="screen">
      <ScreenHeader />
      <div className="screen-content">Closet</div>
      <AddItemModal />
    </div>
  );
};

export default Closet;

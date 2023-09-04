import React from "react";
import "./additemmodal.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const AddItemModal = () => {
  return (
    <div className="modal" id="addItemModal">
      <div className="modal-content">
        <CloseSharpIcon
          className="modal-close"
          onClick={() => {
            var modal = document.getElementById("addItemModal");
            if (modal != null) {
              modal.style.display = "none";
            }
          }}
        ></CloseSharpIcon>
      </div>
    </div>
  );
};

export default AddItemModal;

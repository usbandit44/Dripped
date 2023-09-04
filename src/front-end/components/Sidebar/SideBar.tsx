import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  const [opened, setOpened] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState("closet");
  const navigate = useNavigate();
  return (
    <div className={opened ? "navbar-active" : "navbar-unactive"}>
      <button
        className="navbar-header"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        Dripped
      </button>

      <button
        className={
          selectedRoute == "closet" ? "navbar-items-selected" : "navbar-items"
        }
        onClick={() => {
          navigate("/");
          if (selectedRoute != "closet") {
            setSelectedRoute("closet");
          }
        }}
      >
        Closet
      </button>

      <button
        className={
          selectedRoute == "create" ? "navbar-items-selected" : "navbar-items"
        }
        onClick={() => {
          navigate("/create");
          if (selectedRoute != "create") {
            setSelectedRoute("create");
          }
        }}
      >
        Outfits
      </button>
    </div>
  );
};

export default SideBar;

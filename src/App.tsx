import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddItem from "./front-end/pages/AddItem";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./front-end/Root";
import Closet from "./front-end/pages/Closet";
import CreateOutfit from "./front-end/pages/CreateOutfit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Closet />} />
          <Route path="create" element={<CreateOutfit />} />
          <Route path="add" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

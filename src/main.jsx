import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import ShopBasket from "./pages/ShopBasket.jsx";
import Selected from "./pages/Selected.jsx";
import Catalog from "./pages/Catalog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop-basket" element={<ShopBasket />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

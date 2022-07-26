import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default MainRoutes;

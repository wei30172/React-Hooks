import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, UseRef, UseMemo, Memo, UseCallback } from "./pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default MainRoutes;

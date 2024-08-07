import React from "react";
import HomeAdaptive from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundAdaptive from "./pages/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAdaptive />} />
        <Route path="*" element={<NotFoundAdaptive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

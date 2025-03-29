import React, { useState } from "react";

import HomePage from "./components/Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailAnime from "./components/Fragments/DetailAnime";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<DetailAnime />} />
    </Routes>
  );
};

export default App;

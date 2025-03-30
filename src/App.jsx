import React, { useState } from "react";

import HomePage from "./components/Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailAnime from "./components/Fragments/DetailAnime";
import BacaAnime from "./components/Fragments/BacaAnime";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailAnime />} />
      <Route path="/baca/:url" element={<BacaAnime />} />
    </Routes>
  );
};

export default App;

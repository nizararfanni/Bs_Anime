import React, { useState } from "react";

import HomePage from "./components/Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailAnime from "./components/Fragments/DetailAnime";
import BacaAnime from "./components/Fragments/BacaAnime";
import SearchAnimeList from "./components/Fragments/SearchAnimeList";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailAnime />} />
      <Route path="/baca/:url" element={<BacaAnime />} />
      <Route path="/search/:title" element={<SearchAnimeList />} />
    </Routes>
  );
};

export default App;

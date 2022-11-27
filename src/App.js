import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./Main/Main";
import Book from "./Detail/Book";
import Movie from "./Detail/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Main />} />
        {/* Book */}
        <Route path="/book" element={<Book />} />
        {/* Movie */}
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

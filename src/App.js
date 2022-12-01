import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./Main/Main";
import Book from "./Detail/Book";
import Movie from "./Detail/Movie";
import Error from "./Error/Error";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <SkeletonTheme>
      <BrowserRouter baseColor="#313131" highlightColor="#525252">
        <Routes>
          {/* 메인 */}
          <Route path="/" exact={true} element={<Main />} />
          {/* Book */}
          <Route path="/book" element={<Book />} />
          {/* Movie */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;

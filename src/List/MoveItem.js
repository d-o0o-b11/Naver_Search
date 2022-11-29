import React from "react";
import MovieList from "./MovieList";
import "./MovieList.css";

const MoveItem = ({ data, total, offset, limit }) => {
  return (
    <>
      <h3>검색 결과 총 {total}개 </h3>
      <div className="movies">
        {/* {data.map((movie) => (
          <MovieList
            id={movie.link}
            title={movie.title}
            poster={movie.image}
            year={movie.pubDate}
          />
        ))} */}
        {data.slice(offset, offset + limit).map((movie) => (
          <MovieList
            id={movie.link}
            title={movie.title}
            poster={movie.image}
            year={movie.pubDate}
          />
        ))}
      </div>
    </>
  );
};

export default MoveItem;

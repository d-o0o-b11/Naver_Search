import React from "react";
import CardSkeleton from "../Style-Component/CardSkeleton";
import MovieList from "./MovieList";
import "./MovieList.css";

const MoveItem = ({ data, total, offset, limit, isLoading }) => {
  return (
    <>
      <h3>검색 결과 총 {total}개 </h3>
      <div className="movies">
        {isLoading && <CardSkeleton cards={9} />}
        {data.slice(offset, offset + limit).map((movie, i) => (
          <MovieList
            key={i}
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

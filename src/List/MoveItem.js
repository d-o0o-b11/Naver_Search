import React from "react";
import MovieList from "./MovieList";

const Home = ({ data }) => {
  return (
    <>
      <div className="movies">
        {data.map((movie) => (
          <MovieList
            id={movie.link}
            title={movie.title}
            poster={movie.image}
            actors={movie.actor}
            year={movie.pubDate}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

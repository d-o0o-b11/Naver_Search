import React from "react";
import PropTypes from "prop-types";

function Movie({ idx, id, title, poster, actors, year }) {
  const title_rep = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  const actors_list = actors.substring(0, actors.length - 1).split("|");
  return (
    <div className="movie">
      <a href={id} target="_blank">
        <img src={poster} alt={title_rep} title={title_rep} />
      </a>
      <div className="movie_data">
        <h3 className="movie_title">{title_rep}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_actors">
          {actors_list.map((actor, index) => {
            var actor_link =
              "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" +
              actor;
            if (actors_list.length - 1 > index) {
              return (
                <a href={actor_link} target="_blank">
                  {actor},&nbsp;
                </a>
              );
            } else {
              return (
                <a href={actor_link} target="_blank">
                  {actor}
                </a>
              );
            }
          })}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Movie;

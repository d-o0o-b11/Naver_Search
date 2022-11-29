import React from "react";
import "./MovieList.css";
import PropTypes from "prop-types";
import ListItem from "../Style-Component/ListItem";

const MovieList = ({ id, title, poster, year }) => {
  const title_rep = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");

  return (
    <ListItem>
      <div className="movie">
        <a href={id} target="_blank">
          <img src={poster} alt={title_rep} title={title_rep} />
        </a>
        <div className="movie_data">
          <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
          <h5 className="movie_year">{year}</h5>
        </div>
      </div>
    </ListItem>
  );
};

MovieList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MovieList;

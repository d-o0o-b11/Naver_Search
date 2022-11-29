import React from "react";
import "./MovieList.css";
import PropTypes from "prop-types";
import ListItem from "../Style-Component/ListItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookList = ({ id, title, poster, author, year }) => {
  const title_rep = title
    .replace(/&amp;/g, "&")
    .replace("<b>", "")
    .replace("</b>", "");
  const author_list = author.substring(0, author.length - 1).split("|");
  return (
    <ListItem>
      <div className="movie">
        <a href={id} target="_blank">
          <img src={poster} alt={title_rep} title={title_rep} />
        </a>
        <div className="movie_data">
          {/* <h3 className="movie_title">{title_rep}</h3> */}
          <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
          {/* <h5 className="movie_year">{year.substring(0, 4)}</h5> */}
          <p className="movie_author">
            {author_list.map((actor, index) => {
              var actor_link =
                "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" +
                actor;
              if (author_list.length - 1 > index) {
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
          <h5 className="movie_year">{year.substring(0, 4)}</h5>
        </div>
      </div>
    </ListItem>
  );
};

BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default BookList;

import React, { useState, useEffect } from "react";
import "./Header.css";
import Link from "../Style-Component/Link";

const Header = ({ check }) => {
  const [BookStyle, SetBookStyle] = useState({});
  const [MovieStyle, SetMovieStyle] = useState({});

  useEffect(() => {
    if (check === "book") {
      SetBookStyle({ textDecoration: "underline" });
    } else if (check === "movie") {
      SetMovieStyle({ textDecoration: "underline" });
    }
  }, []);

  return (
    <div className="header_grid">
      <Link to="/" className="item">
        <h1>S e a r c h</h1>
      </Link>

      <Link to="/book">
        <h2 style={BookStyle}>Book</h2>
      </Link>

      <Link to="/movie">
        <h2 style={MovieStyle}>Movie</h2>
      </Link>
    </div>
  );
};

export default Header;

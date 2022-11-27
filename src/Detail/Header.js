import React from "react";
import "./Header.css";
import Link from "../Style-Component/Link";

const Header = () => {
  return (
    <div className="header_grid">
      <Link to="/" className="item">
        <h1>S e a r c h</h1>
      </Link>
      <h2>Book</h2>
      <Link to="/movie">
        <h2>Movie</h2>
      </Link>
    </div>
  );
};

export default Header;

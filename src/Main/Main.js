import React from "react";
import "./Main.css";
import MainImg from "../img/main.png";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";
import Link from "../Style-Component/Link";

const Main = () => {
  return (
    <Container>
      <div className="Main_frame">
        <img src={MainImg} width="310px" height="310px" />
        <h1>S e a r c h</h1>

        <Link to="/book">
          <Button check="true">
            <h5>Book</h5>
          </Button>
        </Link>

        <Link to="/movie">
          <Button check="false">
            <h5>Movie</h5>
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Main;

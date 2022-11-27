import React from "react";
import "./Main.css";
import MainImg from "../img/main.png";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";

const Main = () => {
  return (
    <Container>
      <div className="Main_frame">
        <img src={MainImg} width="310px" height="310px" />
        <h1>S e a r c h</h1>

        <Button>Book</Button>
        <Button>Movie</Button>
      </div>
    </Container>
  );
};

export default Main;

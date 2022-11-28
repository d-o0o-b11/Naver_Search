import React, { useState } from "react";
import Header from "./Header";
import "./Detail.css";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";
import Radio from "../Style-Component/Radio/Radio";
import RadioGroup from "../Style-Component/Radio/RadioGroup";
import Home from "../test/Home";

const Movie = () => {
  const [value, setValue] = useState("제목");

  return (
    <>
      <Header check="movie" />
      <Container>
        <Button width="90%" height="180px">
          <h6 className="stitle">영화 {value}을 입력해주세요!</h6>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <button>🔎</button>
          </div>

          <RadioGroup value={value} onChange={setValue}>
            <Radio name="contact" value="제목" defaultChecked>
              Title
            </Radio>
            <Radio name="contact" value="저자">
              Author
            </Radio>
            <Radio name="contact" value="출판사">
              Publisher
            </Radio>
          </RadioGroup>
        </Button>

        <Home />
      </Container>
    </>
  );
};

export default Movie;

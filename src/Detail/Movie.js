import React, { useState } from "react";
import Header from "./Header";
import "./Detail.css";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";
import Radio from "../Style-Component/Radio/Radio";
import RadioGroup from "../Style-Component/Radio/RadioGroup";
import MoveItem from "../List/MoveItem";
import axios from "axios";

const Movie = () => {
  const [value, setValue] = useState("제목");
  const [data, Setdata] = useState([]);
  const [title, SetTitle] = useState("");

  const onInsertList = () => {
    if (title === "") {
      console.log("값을 입력해주세요");
    } else {
      const ID_KEY = "WsGKyLCy_ji5cwnsgvoZ";
      const SECRET_KEY = "9OQFQICZ8p";
      axios
        .get("/api/v1/search/movie.json", {
          params: {
            query: title,
            display: 10,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => Setdata(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    SetTitle(e.target.value);
  };

  return (
    <>
      <Header check="movie" />
      <Container>
        <Button width="90%" height="180px">
          <div>
            <h6 className="stitle">영화 {value}을 입력해주세요!</h6>
            <ul className="search">
              <input
                type="text"
                placeholder="Search..."
                id="title"
                onChange={handleChange}
              />

              <button onClick={onInsertList}>🔎</button>
            </ul>

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
          </div>
        </Button>

        <MoveItem data={data} />
      </Container>
    </>
  );
};

export default Movie;

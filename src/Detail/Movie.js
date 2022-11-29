import React, { useState } from "react";
import Header from "./Header";
import "./Detail.css";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";
import Radio from "../Style-Component/Radio/Radio";
import RadioGroup from "../Style-Component/Radio/RadioGroup";
import MoveItem from "../List/MoveItem";
import axios from "axios";
import Pagination from "../Pagenation/Pagenation";

const Movie = () => {
  const [value, setValue] = useState("제목");
  const [data, Setdata] = useState([]);
  const [total, SetTotal] = useState(0);
  const [title, SetTitle] = useState("");

  const onInsertList = () => {
    if (title !== "") {
      const ID_KEY = "WsGKyLCy_ji5cwnsgvoZ";
      const SECRET_KEY = "9OQFQICZ8p";
      axios
        .get("/api/v1/search/movie.json", {
          params: {
            query: title,
            display: 100,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          Setdata(res.data.items);
          SetTotal(res.data.total);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    SetTitle(e.target.value);
  };

  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const enterinput = (e) => {
    if (e.key === "Enter") {
      onInsertList();
    }
  };

  return (
    <>
      <Header check="movie" />
      <Container>
        <Button width="90%" height="180px">
          <div>
            <h6 className="stitle">영화 제목을 입력해주세요!</h6>
            <ul className="search">
              <input
                type="text"
                placeholder="Search..."
                id="title"
                onChange={handleChange}
                onKeyPress={enterinput}
              />

              <button onClick={onInsertList}>🔎</button>
            </ul>

            {/* <RadioGroup value={value} onChange={setValue}>
              <Radio name="contact" value="제목" defaultChecked>
                Title
              </Radio>
              <Radio name="contact" value="저자">
                Author
              </Radio>
              <Radio name="contact" value="출판사">
                Publisher
              </Radio>
            </RadioGroup> */}
          </div>
        </Button>

        <MoveItem data={data} total={total} offset={offset} limit={limit} />

        <Pagination total={total} limit={limit} page={page} setPage={setPage} />
      </Container>
    </>
  );
};

export default Movie;

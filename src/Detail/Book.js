import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Detail.css";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";
import Radio from "../Style-Component/Radio/Radio";
import RadioGroup from "../Style-Component/Radio/RadioGroup";
import BookItem from "../List/BookItem";
import axios from "axios";
import Pagination from "react-js-pagination";
import "./Pagination.css";

const Book = () => {
  const [data, Setdata] = useState([]);
  const [total, SetTotal] = useState(0);
  const [title, SetTitle] = useState("");
  const [isLoading, SetIsLoading] = useState(true);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [count, SetCount] = useState(0);

  useEffect(() => {
    SetIsLoading(false);
  }, []);

  const onInsertList = () => {
    if (title !== "") {
      SetIsLoading(true);
      const ID_KEY = "WsGKyLCy_ji5cwnsgvoZ";
      const SECRET_KEY = "9OQFQICZ8p";
      axios
        .get("/api/v1/search/book.json", {
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
          SetIsLoading(false);
          setPage(1);
          SetCount(0);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("제목을 입력해주세요");
    }
  };

  const handleChange = (e) => {
    SetTitle(e.target.value);
  };

  const enterinput = (e) => {
    if (e.key === "Enter") {
      onInsertList();
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <Header check="book" />
      <Container>
        <Button width="90%" height="180px">
          <div>
            <h6 className="stitle">책 제목을 입력해주세요!</h6>
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
          </div>
        </Button>
        <BookItem
          data={data}
          total={total}
          offset={offset}
          limit={limit}
          isLoading={isLoading}
        />
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </Container>
    </>
  );
};

export default Book;

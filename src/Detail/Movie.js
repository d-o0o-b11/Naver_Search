import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Detail.css";
import Container from "../Style-Component/Container";
import Button from "../Style-Component/Button";
import MoveItem from "../List/MoveItem";
import axios from "axios";
// import Pagination from "../Pagenation/Pagenation";
import Pagination from "react-js-pagination";
import "./Pagination.css";

const Movie = () => {
  const [value, setValue] = useState("제목");
  const [data, Setdata] = useState([]);
  const [total, SetTotal] = useState(0);
  const [title, SetTitle] = useState("");
  const [isLoading, SetIsLoading] = useState(true);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [count, SetCount] = useState(0);
  const [numPages, SetNumPages] = useState(0);
  const [Test, SetTest] = useState(0);

  useEffect(() => {
    SetIsLoading(false);
  }, []);

  // useEffect(() => {
  //   SetNumPages(0);
  //   if (total > 100) SetTotal(100);
  //   let store = Math.ceil(total / limit);
  //   SetNumPages(store);
  //   console.log("sroe: " + store);
  // }, [data]);

  const onInsertList = () => {
    if (title !== "") {
      SetIsLoading(true);
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
          SetIsLoading(false);
          setPage(1);
          SetCount(0);
          SetTest(Test);
        })
        .catch((err) => console.log(err));
    } else {
      alert("제목을 입력해주세요");
    }
  };

  // const Totallimit = () => {
  //   if (total > 100) SetTotal(100);
  //   let store = Math.ceil(total / limit);
  //   SetNumPages(store);
  //   console.log(store);
  // };

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
          </div>
        </Button>
        <MoveItem
          data={data}
          total={total}
          offset={offset}
          limit={limit}
          isLoading={isLoading}
        />

        {/* <Pagination
          total={total}
          limit={limit}
          page={page}
          setPage={setPage}
          count={count}
          setCount={SetCount}
          numPages={numPages}
          SetNumPages={SetNumPages}
          Test={Test}
          SetTest={SetTest}
        /> */}
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

export default Movie;

import React from "react";
import BookList from "./BookList";
import "./MovieList.css";

const BookItem = ({ data, total, offset, limit }) => {
  return (
    <>
      <h3>검색 결과 총 {total}개 </h3>
      <div className="movies">
        {data.slice(offset, offset + limit).map((book) => (
          <BookList
            id={book.link}
            title={book.title}
            poster={book.image}
            author={book.author}
            year={book.pubdate}
          />
        ))}
      </div>
    </>
  );
};

export default BookItem;

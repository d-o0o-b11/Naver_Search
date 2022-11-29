import React from "react";
import CardSkeleton from "../Style-Component/CardSkeleton";
import BookList from "./BookList";
import "./MovieList.css";

const BookItem = ({ data, total, offset, limit, isLoading }) => {
  return (
    <>
      <h3>검색 결과 총 {total}개 </h3>
      <div className="movies">
        {isLoading && <CardSkeleton cards={9} />}
        {data.slice(offset, offset + limit).map((book, i) => (
          <BookList
            key={i}
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

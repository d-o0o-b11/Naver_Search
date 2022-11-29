import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Pagination = ({ total, limit, page, setPage }) => {
  if (total > 100) total = 100;

  const numPages = Math.ceil(total / limit);
  const [count, SetCount] = useState(0);

  useEffect(() => {
    SetCount(0);
  }, []);

  const handleChange = (page) => {
    if (page % 5 === 0) {
      SetCount((preNum) => preNum + 1);
      console.log(page);
    }
  };
  console.log(page);
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(5)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1 + 5 * count}
              onClick={() => setPage(i + 1 + 5 * count)}
              aria-current={page === i + 1 ? "page" : null}>
              {i + 1 + 5 * count}
            </Button>
          ))}
        <Button
          onClick={() => {
            setPage(page + 1);
            handleChange(page);
          }}
          disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  left: 50%
  position: absolute;  
  bottom: 10 !important; 
  margin-top:100px;
  margin-bottom:100px
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: rgb(226, 160, 110);
  color: white;
  font-size: 1rem;
  &:hover {
    background: rgb(252, 221, 167);
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: rgb(226, 160, 110);
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: rgb(252, 221, 167);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;

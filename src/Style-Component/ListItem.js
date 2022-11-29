import React from "react";
import styled from "styled-components";

const ListItem = ({ width, height, children }) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  width: ${(props) => props.width || "300px"};
  heigth: ${(props) => props.height || "460px"};
  min-height: ${(props) => props.height || "400px"};
  margin: 0 auto;
  background: #f8f1f1;
  border-radius: 20px;
  border: none;
  display: block;
  margin-top: 30px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(248, 241, 241, 0.6);
  // font-size: 2em;
  position: relative;
  //font값도 props로 받아오기

  &:hover {
    background-color: #e3c39e;
    cursor: pointer;
  }

  @media screen and (max-width: 840px) {
    width: ${(props) => props.width || "320px"};
    heigth: ${(props) => props.height || "160px"};
    min-height: ${(props) => props.height || "160px"};
  }
`;

export default ListItem;

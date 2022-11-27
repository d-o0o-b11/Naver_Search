import React from "react";
import styled from "styled-components";

const Button = ({ width, height, children }) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.width || "430px"};
  heigth: ${(props) => props.height || "100px"};
  min-height: ${(props) => props.height || "100px"};
  margin: 0 auto;
  background: rgba(248, 241, 241, 0.6);
  border-radius: 20px;
  border: none;
  display: block;
  margin-top: 30px;
  font-size: 2em;
  //font값도 props로 받아오기

  &:hover {
    border: 3px solid #0d99ff;
    cursor: pointer;
  }

  @media screen and (max-width: 840px) {
    width: ${(props) => props.width || "330px"};
    min-height: ${(props) => props.height || "80px"};
  }
`;

export default Button;

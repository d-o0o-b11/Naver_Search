import React from "react";
import styled from "styled-components";

const Button = ({ width, height, check, children }) => {
  return (
    <StyledButton width={width} height={height} check={check}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div`
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
  position: relative;
  //font값도 props로 받아오기

  h5 {
    position: absolute;
    height: 40px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    width: 200px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    padding-top: 20px;
  }

  ${(props) =>
    props.check
      ? `&:hover {
    background-color: #E3C39E;
    cursor: pointer;
  }`
      : ""}

  @media screen and (max-width: 840px) {
    width: ${(props) => props.width || "330px"};
    min-height: ${(props) => props.height || "80px"};
  }
`;

export default Button;

import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
`;

export default Container;

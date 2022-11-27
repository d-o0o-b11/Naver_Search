import styled from "styled-components";
import RadioContext from "./RadioContext";

const RadioGroup = ({ label, children, ...rest }) => {
  return (
    <StyledFieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </StyledFieldset>
  );
};

const StyledFieldset = styled.fieldset`
  border: none;
  text-align: left;
  padding: 0 0 0 3%;
`;

export default RadioGroup;

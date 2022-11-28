import styled from "styled-components";
import { useContext } from "react";
import RadioContext from "./RadioContext";

const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  const group = useContext(RadioContext);

  return (
    <StyledLabel>
      <StyledGroup
        type="radio"
        value={value}
        name={name}
        // defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {children}
    </StyledLabel>
  );
};

const StyledGroup = styled.input``;

const StyledLabel = styled.label`
  font-size: 18px;
  margin: 0 10px;
`;

export default Radio;

import styled from "@emotion/styled";

const Button = styled.button`
  background: none;
  padding: 10px;
  border: 1px solid transparent;

  ${props => (props.circular ? "border-radius: 250px;" : "")}

  transition: 250ms;

  &:hover {
    border: 1px solid
      ${props => (props.border ? props.theme.colors.primary : "transparent")};
  }
`;

export default Button;

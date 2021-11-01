import styled from "@emotion/styled";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { Container } from "react-bootstrap";
import Button from "../common/button";

const iconStyle = { width: "2rem", height: "2rem" };

const Bar = styled.div`
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.primary};
  padding: 1vh 0;
`;

const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = ({ currentTheme, changeThemeFn }) => {
  return (
    <Bar>
      <Container>
        <Sub>
          <h1>Giacomo Pasin</h1>
          <Button circular border onClick={() => changeThemeFn(!currentTheme)}>
            {currentTheme ? (
              <SunIcon style={iconStyle} />
            ) : (
              <MoonIcon style={{ ...iconStyle, color: "white" }} />
            )}
          </Button>
        </Sub>
      </Container>
    </Bar>
  );
};

export default Navbar;

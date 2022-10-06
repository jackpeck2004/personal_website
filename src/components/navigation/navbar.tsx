import Button from "@/components/common/button";
import { animateScroll as scroll, Link } from "react-scroll";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Anchor } from "./hamburger";

const iconStyle = { width: "2rem", height: "2rem" };

/*
const Bar = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBackground};
  color: ${(props) => props.theme.colors.primary};
  padding: 1vh 0;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled.a`
  margin: 0 15px;
  cursor: ${(props) => props.theme.colors.primary};
  color: black;
  text-decoration: none;
`;
*/

const Navbar = ({ currentTheme, changeThemeFn }) => {
  return (
    <div className="bg-white text-black py-[1vh] w-full sticky top-0 z-10">
      <div className="px-52">
        <div className="flex justify-between items-center">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => scroll.scrollToTop()}
          >
            Giacomo Pasin
          </h1>
          <div className="flex items-center justify-between">
            <Link to="home" smooth spy>
              <Anchor>Home</Anchor>
            </Link>
            <Link to="projects" smooth spy>
              <Anchor>Projects</Anchor>
            </Link>
            <Button
              circular
              border
              onClick={() => changeThemeFn(!currentTheme)}
            >
              {currentTheme ? (
                <SunIcon style={iconStyle} />
              ) : (
                <MoonIcon style={{ ...iconStyle, color: "white" }} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

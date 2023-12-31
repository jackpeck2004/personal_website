// import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { DownloadCVButton, NavAnchor as Anchor } from "@/components/common";
import constants from "@/lib/constants";
import { useMediaQuery } from "@/lib/hooks";
import { NavItem } from "@/lib/types";
// import Button from "@/components/common/button";
import { Link, animateScroll as scroll } from "react-scroll";

// const iconStyle = { width: "2rem", height: "2rem" };

export const NAV_ITEMS: Array<NavItem> = [
	{
		label: "Home",
		anchorId: "home",
	},
	{
		label: "Projects",
		anchorId: "projects",
	},
	{ label: "Research and Papers", anchorId: "research" },
	{
		label: "Work Experience",
		anchorId: "experience",
	},
	{
		label: "Education",
		anchorId: "education",
	},
	{
		label: "Skills",
		anchorId: "skills",
	},
	{
		label: "Conferences",
		anchorId: "conferences",
	},
];

const Navbar = ({
	currentTheme: _currentTheme,
	changeThemeFn: _changeThemeFn,
}) => {
	const isXlDisplay = useMediaQuery(constants.mediaQueries.IS_XLARGE);

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
						{NAV_ITEMS.map(({ label, anchorId }) => (
							<Link to={anchorId} smooth spy key={anchorId} offset={-70}>
								<Anchor>{label}</Anchor>
							</Link>
						))}
						{isXlDisplay ? <DownloadCVButton /> : null}
						{/*<Button
              circular
              border
              onClick={() => changeThemeFn(!currentTheme)}
            >
              {currentTheme ? (
                <SunIcon style={iconStyle} />
              ) : (
                <MoonIcon style={{ ...iconStyle, color: "white" }} />
              )}
            </Button>*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

import { Button } from "antd";
// import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";

const Home = () => {
  const title = "an IB Student";
  return (
    <div className="Home">
      {/* <section className="section home"> */}
      <div className="section home">
        <div className="Home margin">
          {/* <Link to="/covid19">
            <Button>Covid Updates</Button>
          </Link> */}
          <h1>
            Hello, I'm <span className="name">Giacomo Pasin</span>. <br />
            {/*I'm a full-stack developer.*/}
            I'm {title}.
          </h1>
          <Button
            onClick={() => scrollTo("#projects")}
            // onClick={() => alert()}
            className="primary"
          >
            Discover my projects
          </Button>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};

export default Home;

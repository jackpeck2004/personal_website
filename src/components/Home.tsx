import { Button } from 'antd';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
// import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';

interface BackgroundImageProps {
  class: any;
}

const BackgroundSection: React.FC<BackgroundImageProps> = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage className={props.class} fluid={imageData}>
          {props.children}
        </BackgroundImage>
      );
    }}
  />
);

const Home = () => {
  return (
    <div className="Home">
      {/* <section className="section home"> */}
      <BackgroundSection class="section home">
        <div className="Home margin">
          {/* <Link to="/covid19">
            <Button>Covid Updates</Button>
          </Link> */}
          <h1>
            Hello, I'm <span className="name">Giacomo Pasin</span>. <br />
            I'm a full-stack developer.
          </h1>
          <Button
            onClick={() => scrollTo('#projects')}
            // onClick={() => alert()}
            className="primary"
          >
            Discover my projects
          </Button>
        </div>
      </BackgroundSection>
      {/* </section> */}
    </div>
  );
};

export default Home;

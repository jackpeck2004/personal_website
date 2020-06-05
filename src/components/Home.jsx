import React from 'react'
import { Button } from "antd"
import { Link } from "gatsby"

const Home = () => {
    return (
      <div className="Home">
        <section>
          <div className="Home">
            <Link to="/covid19">
              <Button>Covid Updates</Button>
            </Link>
            <h1>
              Hello, I'm <span className="name">Giacomo Pasin</span>. <br />
              I'm a full-stack developer.
            </h1>
          </div>
        </section>
      </div>
    )
}

export default Home;
import React from "react"

import { Layout } from "antd"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout className="Layout">
    <SEO title="404: Not found" />
    <div className="Main">
      <section>
        <div>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link to="/">Go to Home</Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
import React from 'react'
import SEO from '../components/seo'
import { Layout as ALayout } from 'antd'

const { Footer, Content } = ALayout;

const Layout = ({ children, title }) => {
  return (
    <div>
      <SEO title={title} />
      <ALayout className="Layout">
        <Content className="Main">
          {children}
        </Content>
        <Footer>© {new Date().getFullYear()} - Giacomo Pasin</Footer>
      </ALayout>
    </div>
  )
}

export default Layout

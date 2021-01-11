import React from 'react';
import { Layout } from 'antd';
//@ts-ignore
import ErrorIcon from '../assets/Error404Icon.svg';
//@ts-ignore
import SEO from '../components/seo';
import '../styles/Error.scss';
import Link from 'gatsby-link';

const NotFoundPage: React.FC = () => (
  <Layout className="Layout">
    <SEO title="404: Not found" />
    <div className="errorMain">
      <h2>
        Error <b>404</b>:
      </h2>
      <h1>Page Not Found</h1>
      <p>
        Go to{' '}
        <Link to="/">
          <b>Home</b>
        </Link>
      </p>
      <ErrorIcon className="icon" />
    </div>
  </Layout>
);

export default NotFoundPage;

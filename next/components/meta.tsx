import React from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../lib/constants';

interface MetaProps {
  pageTitle?: string;
}

const Meta: React.FC<MetaProps> = ({ pageTitle }) => {
  let siteTitle: string;

  if (pageTitle) {
    siteTitle = `${pageTitle} - ${SITE_NAME}`;
  } else {
    siteTitle = SITE_NAME;
  }
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={'Giacomo Pasin developer portfolio and personal website'}
      />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
      <title>{siteTitle}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;

module.exports = {
  siteMetadata: {
    title: `Giacomo Pasin`,
    description: `Giacomo Pasin personal portfolio website. Discover all the projects made by Giacomo Pasin and interact with them. You can get in conntact with Giacomo Pasin as well thanks to this website.`,
    author: `Giacomo Pasin`,
    keywords: `Giacomo Pasin, Giacomo, giacomo, Pasin, pasin, gatsby, developer, react, software, website, full-stack, full stack, html, css, javascript, js, typescript, ts`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

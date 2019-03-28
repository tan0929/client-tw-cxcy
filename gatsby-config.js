module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `jt-starter`,
    author: `James Tan <contact@jamestan.me>`,
    url: '',
    defaultImage: '',
    facebook: 'https://www.facebook.com/%E5%AE%B8%E5%BF%83%E5%AE%B8%E8%97%9D%E5%B7%A5%E7%A8%8B-%E5%B0%88%E6%A5%AD%E5%BE%8C%E8%A3%BD%E6%B8%85%E6%B0%B4%E6%A8%A1%E5%AE%A4%E5%85%A7%E5%A4%96%E5%A1%97%E8%A3%9D%E5%99%B4%E5%A1%97-330625807545253/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#3a4860`,
        theme_color: `#3a4860`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

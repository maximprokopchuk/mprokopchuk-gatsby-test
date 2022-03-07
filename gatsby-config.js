/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `My First Gatsby Site`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
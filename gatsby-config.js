/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `new`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
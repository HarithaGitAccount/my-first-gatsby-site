/**
 * @type {import('gatsby').GatsbyConfig}
 */
const adapter = require("gatsby-adapter-netlify").default

 module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),

  siteMetadata: {
    title: "My First Gatsby Site",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};

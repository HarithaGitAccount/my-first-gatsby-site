/**
 * @type {import('gatsby').GatsbyConfig}
 */
const adapter = require("gatsby-adapter-netlify").default

 module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),

  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://czodiac.com",
    title: "CZodiac - Defi NFT Games on BSC",
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-ipfs',    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};

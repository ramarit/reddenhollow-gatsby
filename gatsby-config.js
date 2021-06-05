module.exports = {
  siteMetadata: {
    title: "reddenhollow",
  },
  plugins: [
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-modal-routing",
  {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.ihs3ich,
        },
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: "Gatsbyjs i18n",
    titleTemplate: "%s",
    description:
      "A multilingual Gatsbyjs project example with language switcher",
    url: "https://gatsby-theme-i18n.netlify.app",
    image: "",
    twitterUsername: "@coscakir",
    siteUrl: `https://gatsby-theme-i18n.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`${__dirname}/static/i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./static/i18n/en.json`,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: "Gatsbyjs i18n",
    titleTemplate: "%s",
    description:
      "A multilingual Gatsbyjs project example with language switcher",
    url: "https://gatsby-theme-i18n.netlify.app",
    image: "",
    twitterUsername: "@coskuncakir",
    siteUrl: `https://gatsby-theme-i18n.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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

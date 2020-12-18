module.exports = {
  siteMetadata: {
    title: "Boat Trip Turkey",
    titleTemplate: "%s",
    description:
      "Gulet charter boat holidays. Day trips or longer. We focus exclusively on Gulet cruises that are tailored to our guests requirements. Kas, Kalkan and Kekova’s premier gulet cruise and blue cruise operator in the area.",
    url: "https://boattripturkey.com",
    image: "",
    twitterUsername: "@captainergun",
    siteUrl: `https://boattripturkey.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BoatTripTurkey`,
        short_name: `BoatTripTurkey`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1F6BB6`,
        display: `standalone`,
        icon: `${__dirname}/static/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`${__dirname}/static/i18n/config.json`),
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Fizjoterapia - Katarzyna Krej`,
    description: `Szeroki zakres usług fizjoterapii Katarzyny Krej w Studzionce.`,
    author: `Mateusz Stalmach`,
    siteUrl: `https://fizjokrej.pl/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `fizjoterapia-katarzyna-krej`,
        short_name: `fizjokrej`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_male.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}

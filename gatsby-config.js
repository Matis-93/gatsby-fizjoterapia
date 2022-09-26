module.exports = {
  siteMetadata: {
    title: `Fizjoterapia - Katarzyna Krej`,
    description: `Fizjoterapia Katarzyny Krej w Studzionce | fizjoterapia ortopedyczna • fizjoterapia pooperacyjna • fizjoterapia neurologiczna • korekcja wad postawy`,
    author: `Mateusz Stalmach`,
    siteUrl: `https://fizjokrej.pl/`,
    keywords: `fizjoterapia ortopedyczna, fizjoterapia pooperacyjna, fizjoterapia neurologiczna, korekcja wad postawy, fizjoterapia pszczyna, fizjoterapia pawłowice, fizjoterapia studzionka`,
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

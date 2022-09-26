/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaKeywords = site.siteMetadata.keywords
  const metaAuhtor = site.siteMetadata.author

  return (
    <>
      <title>{defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={metaAuhtor} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="canonical" href=" https://www.fizjokrej.pl" />
    </>
  )
}

export default Seo

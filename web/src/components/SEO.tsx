/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query {
    sanitySiteSettings {
      title
      description
      author {
        name
      }
    }
  }
`

function SEO({ description, lang, meta, title }) {
  const { sanitySiteSettings: site } = useStaticQuery(QUERY)
  const metaDescription = description || site.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image`},
        { name: `twitter:site`, content: `@avalonstar`},
        { name: `twitter:creator`, content: site.author.name },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

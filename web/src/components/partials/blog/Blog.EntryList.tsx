import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityEntry {
        edges {
          node {
            id
            isFeatured
            publishedAt
            title
            _rawBody(resolveReferences: { maxDepth: 10 })
            coverImage {
              _key
              _type
              caption
              alt
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName

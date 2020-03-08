import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPosition(sort: { order: DESC, fields: date }) {
        edges {
          node {
            company
            date
            projects {
              announcementUrl
              date
              isActive
              isFeatured
              name
              projectUrl
            }
            title
            slug {
              current
            }
            _rawBody(resolveReferences: { maxDepth: 10 })
            _rawSummary(resolveReferences: { maxDepth: 10 })
            id
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName

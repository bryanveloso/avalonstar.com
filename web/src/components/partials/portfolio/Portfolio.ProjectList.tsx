import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject(filter: { isFeatured: { eq: true } }) {
        edges {
          node {
            id
            projectUrl
            announcementUrl
            _rawSummary(resolveReferences: { maxDepth: 10 })
            _rawBody(resolveReferences: { maxDepth: 10 })
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName

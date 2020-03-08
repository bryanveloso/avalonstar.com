import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityEvent(sort: { fields: date, order: ASC }) {
        edges {
          node {
            id
            _rawBody(resolveReferences: { maxDepth: 5 })
            name
            date
            subject
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default ComponentName

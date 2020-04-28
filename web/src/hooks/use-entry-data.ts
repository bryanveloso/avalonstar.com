import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  {
    allSanityEntry(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          isFeatured
          publishedAt
          title
          number
          _rawBody(resolveReferences: { maxDepth: 10 })
          readingTimeInMinutes
          excerpt
          slug {
            current
          }
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
`

export const useEntryData = () => {
  const { allSanityEntry } = useStaticQuery(QUERY)
  return allSanityEntry.edges
}

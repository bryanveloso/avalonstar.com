import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  {
    allSanityEntry(
      sort: { fields: publishedAt, order: DESC }
      filter: {
        publishedAt: { gt: "2020-01-01T00:00:00.000Z", ne: "null" }
        slug: { current: { ne: "null" } }
      }
    ) {
      edges {
        node {
          id
          isFeatured
          publishedAt
          title
          number
          _rawBody(resolveReferences: { maxDepth: 10 })
          readingTimeInMinutes
          slug {
            current
          }
          coverImage {
            asset {
              fluid(maxWidth: 1080) {
                ...GatsbySanityImageFluid
              }
            }
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

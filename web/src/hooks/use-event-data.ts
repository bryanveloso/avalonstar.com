import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query EventData {
    allSanityEvent(sort: { fields: date, order: ASC }) {
      edges {
        node {
          id
          _rawBody(resolveReferences: { maxDepth: 5 })
          name
          date(formatString: "MMMM DD, YYYY")
          subject
          coverImage {
            asset {
              fluid(maxWidth: 1024) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export const useEventData = () => {
  const { allSanityEvent } = useStaticQuery(QUERY)

  const edges = []
  allSanityEvent.edges.forEach(edge => {
    const o = Object.values(edge)
    edges.push(o)
  })
  return [].concat(...edges)
}

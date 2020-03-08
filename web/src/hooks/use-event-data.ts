import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query HistoryData {
    allSanityEvent(sort: { fields: date, order: DESC }) {
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
`

export const useEventData = () => {
  const { allSanityEvent } = useStaticQuery(QUERY)
  return allSanityEvent.edges
}

import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query PositionData {
    allSanityPosition(sort: { order: DESC, fields: date }) {
      edges {
        node {
          company
          date(formatString: "MMMM YYYY")
          projects {
            announcementUrl
            date(formatString: "MMMM YYYY")
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
`

export const usePositionData = () => {
  const { allSanityPosition } = useStaticQuery(QUERY)
  return allSanityPosition.edges
}

import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query {
    allSanityRoute(sort: { fields: order, order: ASC }, filter: { order: { ne: null } }) {
      edges {
        node {
          id
          isVisible
          title
          order
          slug {
            current
          }
        }
      }
    }
  }
`

export const useNavigationData = () => {
  const { allSanityRoute } = useStaticQuery(QUERY)
  return allSanityRoute.edges
}
